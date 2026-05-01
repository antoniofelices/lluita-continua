export const stringToTranslate = {
  es: {
    navHome: "Inicio",
    navPage1: "Presiona",
    home: "inicio",
    accessMenu: "Acceso Menú",
    formName: "Nombre",
    formLastName: "Apellidos",
    formEmail: "Email",
    formPhone: "Teléfono",
    formPostalCode: "Código postal",
    formPrivacyPolicy:
      "Acepto la política de privacidad y el tratamiento de mis datos para registrar mi apoyo.",
    formSend: "Firma ahora",
    all: "Todos",
    title: "Defiende la prórroga",
    description: "…",
  },
  ca: {
    navHome: "Inici",
    navPage1: "Demana-la",
    home: "inici",
    accessMenu: "Accés Menú",
    formName: "Nom",
    formLastName: "Cognoms",
    formEmail: "Correu electrònic",
    formPhone: "Telèfon",
    formPostalCode: "Codi Postal",
    formPrivacyPolicy: "He llegit i accepto la política de privacitat.",
    formSend: "Signa la petició",
    all: "Tots",
    title: "Defensem la pròrroga",
    description: "…",
  },
}

export type TranslationKeyType = keyof (typeof stringToTranslate)[keyof typeof stringToTranslate]
