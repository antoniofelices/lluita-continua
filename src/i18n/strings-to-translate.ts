export const stringToTranslate = {
  ca: {
    title: "I la Lluita Continua",
    description: "Documental. Del camp a la construcció de Catalunya.",
    tagline: "Documental",
    accessMenu: "Accés Menú",
    navProjections: "Projeccions",
    navMaterials: "Materials",
    navPress: "Premsa",
    navDirecting: "Direcció",
    footerCopyright: "© 2026 Lluita Continua",
    footerScrollTop: "Pujar",
    watchFull: "Veure el documental complet",
    credits: "Crèdits",
    moreInfo: "Més informació",
  },
  es: {
    title: "Y la Lucha Continua",
    description: "Documental. Del campo a la construcción de Cataluña.",
    tagline: "Documental",
    accessMenu: "Acceso Menú",
    navProjections: "Proyecciones",
    navMaterials: "Materiales",
    navPress: "Prensa",
    navDirecting: "Dirección",
    footerCopyright: "© 2026 Y la Lucha Continua",
    footerScrollTop: "Ir arriba",
    watchFull: "Ver el documental completo",
    credits: "Créditos",
    moreInfo: "Más información",
  },
}

export type TranslationKeyType =
  keyof (typeof stringToTranslate)[keyof typeof stringToTranslate]
