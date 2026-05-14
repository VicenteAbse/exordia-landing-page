export const AUTHORS: Record<string, string> = {
  camila: "Camila Paz Ramírez Rebolledo",
  lorenzo: "Lorenzo Lemungürü Kiñenawel",
  maria: "María Francisca Barbosa Barceló",
}

export function formatDate(raw: string) {
  return new Date(raw).toLocaleDateString("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  })
}
