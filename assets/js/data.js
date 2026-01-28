export const projects = {
  neexos: {
    title: "Neexos",
    subtitle: "Empresa y producto digital en producción",
    badges: ["React", "Tailwind", "Firebase", "SaaS"],
    context:
      "Neexos nace a partir de una necesidad real: muchos emprendimientos locales tienen productos y servicios de calidad, pero carecen de visibilidad digital y de herramientas simples para conectar con clientes cercanos. La mayoría depende únicamente de redes sociales o del boca a boca, lo que limita su crecimiento y alcance. El proyecto se concibe como una plataforma que centraliza emprendimientos locales en un solo lugar, facilitando su descubrimiento y promoviendo el comercio de cercanía mediante tecnología accesible y una experiencia de usuario clara.",
    solution:
      "Neexos permite a los usuarios descubrir emprendimientos cercanos, filtrarlos por categoría, calificaciones y ubicación, y acceder rápidamente a información relevante de cada negocio. Para los emprendedores, ofrece una forma sencilla de crear, gestionar y actualizar su presencia digital sin necesidad de conocimientos técnicos.",
    role: "Fui responsable del diseño y desarrollo del frontend, así como de la definición de la arquitectura general del producto. Tomé decisiones técnicas orientadas a la escalabilidad, seguridad y experiencia de usuario, priorizando un diseño limpio, moderno y enfocado en conversión. Además, participé activamente en la conceptualización del modelo de negocio, la estructura de datos y el despliegue en producción. Neexos es un proyecto real en funcionamiento, construido con una mentalidad de producto y orientado a crecer de forma sostenible.",
    images: [
      "/assets/img/neexos/neexos-2.png",
      "/assets/img/neexos/neexos-1.png",
      "/assets/img/neexos/neexos-3.png",
    ],
    liveUrl: "https://neexos.app",
  },

  pizzeria: {
    title: "Pizzería Mamma Mia",
    subtitle: "Aplicación frontend con autenticación JWT y carrito de compras",
    badges: ["React", "Tailwind", "JWT", "Express"],
    context:
      "Este proyecto fue desarrollado en el marco de una formación académica, con el objetivo de aplicar conceptos fundamentales de frontend moderno y consumo de APIs. La idea principal fue simular la experiencia de una pizzería digital, desde la visualización del catálogo hasta la gestión de un carrito de compras y autenticación de usuarios.",
    solution:
      "La aplicación permite a los usuarios explorar un catálogo de pizzas, visualizar detalles de cada producto, agregar y quitar elementos del carrito de compras y gestionar el estado de la sesión mediante autenticación con JWT. Aunque no cuenta con una pasarela de pago integrada, el flujo completo de compra está simulado, permitiendo entender y validar la lógica de un e-commerce básico, desde la selección de productos hasta la preparación para el pago.",
    role: "Me encargué del desarrollo del frontend en React, implementando la lógica de estado del carrito, la navegación entre vistas y la integración con una API REST para obtener productos y manejar la autenticación de usuarios.",
    images: [
      "/assets/img/pizzeria/pizza-1.png",
      "/assets/img/pizzeria/pizza-2.png",
      "/assets/img/pizzeria/pizza-3.png",
    ],
    liveUrl: "https://pizzeria-bao9a03pj-raimers-projects.vercel.app",
  },
  guitarla: {
    title: "GuitarLA",
    subtitle: "Proyecto frontend",
    badges: ["React", "Tailwind", "TypeScript"],
    context:
      "GuitarLA es un proyecto sencillo enfocado en practicar los fundamentos de un e-commerce básico, como la visualización de productos y la gestión de un carrito de compras. Fue desarrollado como una primera aproximación al uso de TypeScript en un entorno frontend. El objetivo principal del proyecto fue comprender cómo tipar correctamente datos, estados y funciones, manteniendo una estructura clara y predecible en una aplicación pequeña.",
    solution:
      "La aplicación muestra un catálogo de guitarras que pueden agregarse, eliminarse y gestionarse dentro de un carrito de compras. El sistema calcula cantidades y totales en tiempo real, simulando un flujo básico de compra. Aunque el alcance funcional es limitado, el proyecto permite validar la correcta manipulación del estado y el uso de TypeScript para evitar errores comunes en tiempo de desarrollo.",
    role: "Desarrollé la aplicación frontend implementando TypeScript desde cero, definiendo interfaces y tipos para los productos, el estado del carrito y las funciones de negocio. Este proyecto marcó mi primer acercamiento práctico a TypeScript, ayudándome a comprender su valor para escribir código más seguro, legible y mantenible, incluso en aplicaciones pequeñas.",
    images: [
      "/assets/img/guitarla/guitarla-1.png",
      "/assets/img/guitarla/guitarla-2.png",
      "/assets/img/guitarla/guitarla-3.png",
    ],
    liveUrl: "https://guitarlats-five.vercel.app/",
  },
  comedor: {
    title: "El Comedor",
    subtitle: "Aplicación frontend para gestión de colaciones con Firebase",
    badges: ["React", "Tailwind", "firebase"],
    context:
      "Proyecto personal creado a partir de una necesidad real en un restaurante donde trabajaba. Fue mi primer proyecto completo utilizando Firebase Realtime Database y mi primera experiencia diseñando y maquetando una aplicación desde cero sin experiencia previa.",
    solution:
      "La plataforma permite a los trabajadores ingresar con un usuario personal para ver la colación del día y confirmar su asistencia mediante un like o dislike. Automáticamente se genera una lista con quienes comerán y quienes no, facilitando la organización diaria del restaurante. Los usuarios con rol admin pueden registrar nuevos trabajadores y gestionar los accesos.",
    role: "Diseñé y desarrollé completamente la aplicación, desde la maquetación inicial hasta la implementación de la lógica. Integré Firebase Realtime Database y autenticación, gestioné roles de usuario (admin y trabajador) y construí la lógica para registrar confirmaciones en tiempo real. Este proyecto fue clave para consolidar mis bases en arquitectura, bases de datos y aplicaciones funcionales.",
    images: [
      "/assets/img/comedor/comedor-4.png",
      "/assets/img/comedor/comedor-2.png",
      "/assets/img/comedor/comedor-3.png",
    ],
    liveUrl: "https://el-comedor-3ymbqs15f-raimers-projects.vercel.app",
  },
  raices: {
    title: "Bienes Raices",
    subtitle: "Proyecto frontend",
    badges: ["HTML5", "CSS3", "Sass", "Gulp"],
    context:
      "Página web inmobiliaria orientada a la venta de propiedades residenciales, diseñada para presentar casas y departamentos de forma clara, visual y atractiva. El sitio incluye secciones de propiedades destacadas, testimoniales de clientes, contenido informativo y un formulario de contacto para captar potenciales compradores o vendedores. El proyecto fue desarrollado con un enfoque en experiencia de usuario, navegación intuitiva y diseño responsive, asegurando una correcta visualización tanto en desktop como en dispositivos móviles.",
    solution:
      "El sitio permite mostrar propiedades inmobiliarias de forma clara y atractiva, destacando información clave como precio, características y llamados a la acción. Incluye secciones de anuncios, blog, testimonios y formularios, ofreciendo una estructura completa para un negocio inmobiliario.",
    role: "Implementé el diseño utilizando HTML, CSS y Sass, siendo mi primer proyecto trabajando con Sass y con un flujo de automatización mediante Gulp. Durante el desarrollo reforcé conceptos clave como organización de estilos, uso de variables, anidación, modularización y estructura de proyectos frontend. Este proyecto fue útil para consolidar mis bases en estilos, entender un flujo de trabajo más profesional.",
    images: [
      "/assets/img/raices/raices-1.png",
      "/assets/img/raices/raices-2.png",
      "/assets/img/raices/raices-3.png",
    ],
    liveUrl: "https://bienes-raices-djoa743m0-raimers-projects.vercel.app/",
  },
  cafe: {
    title: "Blog de Cafe",
    subtitle: "Proyecto frontend",
    badges: ["HTML5", "CSS3"],
    context:
      "Sitio web informativo orientado a una marca de café, enfocado en compartir contenido sobre recetas, cursos y talleres relacionados con el mundo del café. El proyecto cuenta con secciones de blog, información de cursos, llamados a la acción y un formulario de contacto, priorizando un diseño visual limpio y atractivo.",
    solution:
      "Permite centralizar contenido educativo y promocional en un solo sitio, facilitando la difusión de cursos, recetas y consejos, además de ofrecer un canal de contacto directo con los usuarios interesados.",
    role: "Desarrollé la estructura y el diseño del sitio utilizando HTML y CSS como parte de un proyecto de aprendizaje. Este trabajo me ayudó a reforzar fundamentos de maquetación, uso de layouts, diseño responsive y buenas prácticas en estilos sin el uso de frameworks.",
    images: [
      "/assets/img/cafe/cafe-1.webp",
      "/assets/img/cafe/cafe-2.png",
      "/assets/img/cafe/cafe-3.png",
    ],
    liveUrl: "https://superb-faun-985f10.netlify.app/",
  },
};
