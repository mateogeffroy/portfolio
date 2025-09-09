export const projectsData = [
  {
    id: 1,
    title: "Kicenter",
    description: "Sistema de gestion de historias clinicas, turnos y pacientes para un centro de kinesiología.",
    image: "/kicenter/kicenter-dashboard.svg",
    githubUrl: "https://github.com/mateogeffroy/KI-APP",
    imageNeedsBackground: true,
    detailedDescription: "Kicenter es una aplicación web que permite la gestión de turnos, pacientes y historias clínicas en un centro de kinesiología. Este proyecto fue desarrollado en el marco de la materia *Desarrollo de software - Tercer nivel, 2° Cuatrimestre*. El objetivo era la conexion con otros dos proyectos, uno que nos disponían los turnos del centro y otro que recomienda productos deportivos. El proyecto es full-stack de un grupo de 4 integrantes con el backend desarrollado con Django y el frontend desarrollado con React.js. El sistema se divide en 2 portales, el portal del kinesiologo que puede ver los turnos que se le asignaron y agregar consultas que son las conclusiones de una visita y el portal del administrados que gestiona los turnos de los kinesiologos. Ambos dos pueden dar de alta pacientes.",
    demoVideoUrl: "/kicenter/kicenter-demo.mp4",
    galleryImages: [
      {
        title: "Página de Inicio",
        src: "/kicenter/home-main.png"
      },
      {
        title: "Página de consultas",
        src: "/kicenter/kine-consultas.png"
      },
      {
        title: "Página de historial clínico",
        src: "/kicenter/kine-historialclinico.png"
      },
      {
        title: "Página de pacientes",
        src: "/kicenter/kine-pacientes.png"
      },
      {
        title: "Página de inicio de sesión",
        src: "/kicenter/login-page.png"
      },
      {
        title: "Página de administracion de turnos",
        src: "/kicenter/admin-turnos.png"
      }
    ]
  },
  {
    id: 2,
    title: "Caballos borrados",
    description: "Sistema de manejo de información mostrada en pantalla usando un celular como panel de administración",
    image: "/caballos/caballos-dashboard.svg",
    githubUrl: "https://github.com/mateogeffroy/caballos-borrados",
    imageNeedsBackground: false,
    detailedDescription: "El cliente buscaba que en el televisor de su agencia hípica se listen los caballos que no iban a participar en las carreras del dia, ya que los espectadores suelen tener una revista con los que participan pero si un caballo se baja a ultimo momento no tienen forma de informarlos. La solución fue una aplicación web que tiene una dirección que se pone fijo en televisores con miniordenadores tipo ChromeCast y otra dirección que se abre en el celular para administrar la información que se muestra en pantalla. El proyecto fue desarrollado con React.js en el frontend y Flask en el backend para hacer los endpoints.",
    demoVideoUrl: "",
    galleryImages: [
      {
        title: "Vista del televisor (vacío)",
        src: "/caballos/caballos-televisor1.png"
      },
      {
        title: "Vista del televisor (con datos)",
        src: "/caballos/caballos-televisor2.png"
      },
      {
        title: "Vista del administrador",
        src: "/caballos/caballos-celular.png"
      }
    ]
  },
  {
    id: 3,
    title: "Gestor DNI",
    description: "Sistema de registro de DNI en una base de datos para gestionar una billetera de clientes",
    image: "/gestor-dni/gestor-dashboard.svg",
    githubUrl: "https://github.com/mateogeffroy/caballos-borrados",
    imageNeedsBackground: false,
    detailedDescription: "El cliente buscaba un sistema que le permita registrar los DNI de las personas que hayan consultado por un prestamo previamente. Como solucion hice una aplicacion web que permite registrar personas en la base de datos, filtrarlas por el tipo de trabajo que tienen y buscar por nombre, apelliyo y/o DNI.",
    demoVideoUrl: "",
    galleryImages: [
      {
        title: "Inicio del gestor",
        src: "/gestor-dni/gestor-home1.png"
      },
      {
        title: "Alta de un nuevo cliente",
        src: "/gestor-dni/gestor-altaCliente.png"
      },
      {
        title: "Inicio del gestor con datos",
        src: "/gestor-dni/gestor-home2.png"
      }
    ]
  },
  {
    id: 4,
    title: "Conversor de audio analógico a digital",
    description: "Sistema que emula la conversión de audio analógico a digital permitiendo modificar parámetros como la frecuencia de muestreo y la profundidad de bits.",
    image: "/conversor-aad/conversor-dashboard.svg",
    githubUrl: "https://github.com/mateogeffroy/caballos-borrados",
    imageNeedsBackground: false,
    detailedDescription: "El proyecto permite subir (ya sea como archivo o grabado en el momento) un archivo de audio para poder modificarle la frecuencia de muestreo y la profundidad de bits. El audio al procesarse muestra un espectro de frecuencia para el antes y el despues de la conversión que permite visualizar las diferencias. Este proyecto fue desarrollado en el marco de la materia *Comunicación de datos - Tercer nivel, 1° Cuatrimestre*. El objetivo era poder implementar con una solución tecnológica los temas desarrollados a lo largo de la cursada como por ejemplo las Series Trigonométricas de Fourier. El proyecto es full-stack de un grupo de 4 integrantes con el backend desarrollado con Django y deployado en Render para poder lograr una persistencia de los audios convertidos y el frontend desarrollado con React.js.",
    demoVideoUrl: "",
    galleryImages: [
      {
        title: "Inicio del conversor",
        src: "/conversor-aad/conversor-home.png"
      },
      {
        title: "Audio subido",
        src: "/conversor-aad/conversor-conversion.png"
      },
      {
        title: "Comparación de los resultados",
        src: "/conversor-aad/conversor-comparacion.png"
      },
      {
        title: "Biblioteca de audios convertidos",
        src: "/conversor-aad/conversor-biblioteca.png"
      },
      {
        title: "Audio almacenado en la biblioteca",
        src: "/conversor-aad/conversor-audioB.png"
      },
    ]
  },
  {
    id: 5,
    title: "SaaS para productos y ventas",
    description: "Sistema que permite controlar stock, ventas y productos para pequeñas empresas.",
    image: "/saas/saas-dashboard.svg",
    githubUrl: "https://github.com/mateogeffroy/caballos-borrados",
    imageNeedsBackground: false,
    detailedDescription: "Aplicacion web que fue implementada en el negocio familiar para llevar el control de stock y ventas. Al terminarlo fue empaquetado para que cualquier negocio que necesite un control del dominio del sistema pueda utilizarlo. Guarda todas las ventas en cajas por día y permite ver el detalle tanto de la caja como de las ventas. Esta desarrollado con React.js con un backend hecho con Django. Tiene persistencia de datos local y cada negocio tiene un ejecutable para iniciar el proyecto",
    demoVideoUrl: "",
    galleryImages: [
      {
        title: "Inicio del SaaS",
        src: "/saas/saas-home.png"
      },
      {
        title: "Vista del panel de ventas",
        src: "/saas/saas-ventas.png"
      },
      {
        title: "Vista del panel de productos",
        src: "/saas/saas-productos.png"
      },
      {
        title: "Vista del panel de cajas",
        src: "/saas/saas-cajas.png"
      },
    ]
  },
]
