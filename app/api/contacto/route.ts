import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { nombre, email, telefono, asunto, mensaje } = await req.json();

    if (!nombre || !email || !asunto || !mensaje) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios." },
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

    const { error } = await resend.emails.send({
      from: "Formulario Web <onboarding@resend.dev>",
      to,
      subject: `Nueva consulta: ${asunto}`,
      replyTo: email,
      html: `
        <h2>Nueva consulta desde el formulario</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono || "No informado"}</p>
        <p><strong>Asunto:</strong> ${asunto}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje.replace(/\n/g, "<br/>")}</p>
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