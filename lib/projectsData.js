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

]
