import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Rate limit en memoria
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutos
const RATE_LIMIT_MAX_REQUESTS = 3;

const requestLog = new Map<string, number[]>();

const resend = new Resend(process.env.RESEND_API_KEY);

function isRateLimited(ip: string) {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;

  const requests = requestLog.get(ip) || [];

  // dejar solo las requests dentro de la ventana
  const recentRequests = requests.filter((timestamp) => timestamp > windowStart);

  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestLog.set(ip, recentRequests);
    return true;
  }

  recentRequests.push(now);
  requestLog.set(ip, recentRequests);
  return false;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function looksSpammy(text: string) {
  const lower = text.toLowerCase();

  const spamWords = [
    "viagra",
    "casino",
    "crypto",
    "loan",
    "forex",
    "bet",
    "seo",
    "backlinks",
  ];

  const links = (text.match(/https?:\/\//gi) || []).length;
  if (links > 2) return true;

  if (spamWords.some((word) => lower.includes(word))) return true;

  if (/(.)\1{8,}/.test(text)) return true;

  return false;
}

export async function POST(req: NextRequest) {
  try {
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor?.split(",")[0]?.trim() || "unknown";

    // local test var
    // const ip =
    //   forwardedFor?.split(",")[0]?.trim() ||
    //   req.headers.get("x-real-ip") ||
    //   "local";

    console.log("IP:", ip);


    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Demasiadas solicitudes. Intenta nuevamente en unos minutos." },
        { status: 429 }
      );
    }

    const body = await req.json();

    const nombre = String(body.nombre || "").trim();
    const email = String(body.email || "").trim();
    const telefono = String(body.telefono || "").trim();
    const asunto = String(body.asunto || "").trim();
    const mensaje = String(body.mensaje || "").trim();
    const website = String(body.website || "").trim(); // honeypot
    const formStartedAt = Number(body.formStartedAt || 0);

    if (!nombre || !email || !asunto || !mensaje) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Correo electrónico inválido." },
        { status: 400 }
      );
    }

    if (nombre.length < 2 || nombre.length > 120) {
      return NextResponse.json(
        { error: "Nombre inválido." },
        { status: 400 }
      );
    }

    if (asunto.length < 3 || asunto.length > 150) {
      return NextResponse.json(
        { error: "Asunto inválido." },
        { status: 400 }
      );
    }

    if (mensaje.length < 10 || mensaje.length > 3000) {
      return NextResponse.json(
        { error: "Mensaje inválido." },
        { status: 400 }
      );
    }

    // Honeypot: si viene lleno, probablemente es bot
    if (website !== "") {
      return NextResponse.json(
        { error: "No se pudo procesar la solicitud." },
        { status: 400 }
      );
    }

    // Tiempo mínimo: si lo envían demasiado rápido, probablemente es bot
    if (!formStartedAt || Date.now() - formStartedAt < 3000) {
      return NextResponse.json(
        { error: "No se pudo procesar la solicitud." },
        { status: 400 }
      );
    }

    // Filtro simple anti-spam
    if (
      looksSpammy(nombre) ||
      looksSpammy(asunto) ||
      looksSpammy(mensaje)
    ) {
      return NextResponse.json(
        { error: "No se pudo procesar la solicitud." },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_EMAIL;

    if (!to) {
      return NextResponse.json(
        { error: "No está configurado el correo de destino." },
        { status: 500 }
      );
    }

    const safeNombre = escapeHtml(nombre);
    const safeEmail = escapeHtml(email);
    const safeTelefono = escapeHtml(telefono || "No informado");
    const safeAsunto = escapeHtml(asunto);
    const safeMensaje = escapeHtml(mensaje).replace(/\n/g, "<br/>");

    const { error } = await resend.emails.send({
      from: "Formulario Web <onboarding@resend.dev>",
      to,
      subject: `Nueva consulta: ${asunto}`,
      replyTo: email,
      html: `
        <h2>Nueva consulta desde el formulario</h2>
        <p><strong>Nombre:</strong> ${safeNombre}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Teléfono:</strong> ${safeTelefono}</p>
        <p><strong>Asunto:</strong> ${safeAsunto}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${safeMensaje}</p>
      `,
    });

    if (error) {
      console.error(error);
      return NextResponse.json(
        { error: "No se pudo enviar el correo." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}