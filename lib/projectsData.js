export const projectsData = [
  {
    id: 1,
    title: {
      es: "Kicenter",
      en: "Kicenter"
    },
    category: "academico",
    description: {
      es: "Sistema de gestion de historias clinicas, turnos y pacientes para un centro de kinesiología.",
      en: "Management system for clinical records, appointments, and patients for a physical therapy center."
    },
    image: "/kicenter/kicenter-dashboard.svg",
    githubUrl: "https://github.com/mateogeffroy/KI-APP",
    imageNeedsBackground: true,
    detailedDescription: {
      es: "Aplicación web que permite la gestión de turnos, pacientes y historias clínicas en un centro de kinesiología. Este proyecto fue desarrollado en el marco de la materia *Desarrollo de software - Tercer nivel, 2° Cuatrimestre*. El objetivo era la conexion con otros dos proyectos, uno que nos disponían los turnos del centro y otro que recomienda productos deportivos. El proyecto es full-stack de un grupo de 4 integrantes con el backend desarrollado con Django y el frontend desarrollado con React.js. El sistema se divide en 2 portales, el portal del kinesiologo que puede ver los turnos que se le asignaron y agregar consultas que son las conclusiones de una visita y el portal del administrados que gestiona los turnos de los kinesiologos. Ambos dos pueden dar de alta pacientes.",
      en: "Kicenter is a web application that allows the management of appointments, patients, and clinical records in a physical therapy center. This project was developed as part of the *Software Development - Third Level, 2nd Semester* course. The objective was to connect with two other projects, one that provided the center's appointments and another that recommends sports products. The project is a full-stack effort by a group of 4 members with the backend developed in Django and the frontend in React.js. The system is divided into 2 portals: the kinesiologist's portal, where they can see assigned appointments and add consultation notes, and the administrator's portal, which manages the kinesiologists' schedules. Both can register new patients."
    },
    demoVideoUrl: "/kicenter/kicenter-demo.mp4",
    galleryImages: [
      {
        title: { es: "Página de Inicio", en: "Home Page" },
        src: "/kicenter/home-main.png"
      },
      {
        title: { es: "Página de consultas", en: "Consultations Page" },
        src: "/kicenter/kine-consultas.png"
      },
      {
        title: { es: "Página de historial clínico", en: "Clinical History Page" },
        src: "/kicenter/kine-historialclinico.png"
      },
      {
        title: { es: "Página de pacientes", en: "Patients Page" },
        src: "/kicenter/kine-pacientes.png"
      },
      {
        title: { es: "Página de inicio de sesión", en: "Login Page" },
        src: "/kicenter/login-page.png"
      },
      {
        title: { es: "Página de administracion de turnos", en: "Appointment Administration Page" },
        src: "/kicenter/admin-turnos.png"
      }
    ]
  },
  {
    id: 2,
    title: {
      es: "Caballos borrados",
      en: "Scratched Horses"
    },
    category: "laboral",
    description: {
      es: "Sistema de manejo de información mostrada en pantalla usando un celular como panel de administración.",
      en: "Information management system displayed on a screen using a cell phone as an admin panel."
    },
    image: "/caballos/caballos-dashboard.svg",
    githubUrl: "https://github.com/mateogeffroy/caballos-borrados",
    imageNeedsBackground: true,
    detailedDescription: {
      es: "El cliente buscaba que en el televisor de su agencia hípica se listen los caballos que no iban a participar en las carreras del dia, ya que los espectadores suelen tener una revista con los que participan pero si un caballo se baja a ultimo momento no tienen forma de informarlos. La solución fue una aplicación web que tiene una dirección que se pone fijo en televisores con miniordenadores tipo ChromeCast y otra dirección que se abre en el celular para administrar la información que se muestra en pantalla. El proyecto fue desarrollado con React.js en el frontend y Flask en el backend para hacer los endpoints.",
      en: "The client wanted the television in their horse racing agency to list the horses that would not be participating in the day's races, as spectators usually have a magazine with the participants but have no way of knowing if a horse is scratched at the last minute. The solution was a web application with one URL for display on TVs with mini-computers like ChromeCast, and another URL for a mobile phone to manage the information displayed. The project was developed with React.js on the frontend and Flask on the backend for the endpoints."
    },
    galleryImages: [
      {
        title: { es: "Vista del televisor (vacío)", en: "Television View (Empty)" },
        src: "/caballos/caballos-televisor1.png"
      },
      {
        title: { es: "Vista del televisor (con datos)", en: "Television View (With Data)" },
        src: "/caballos/caballos-televisor2.png"
      },
      {
        title: { es: "Vista del administrador", en: "Administrator View" },
        src: "/caballos/caballos-celular.png"
      }
    ]
  },
  {
    id: 3,
    title: {
      es: "Gestor DNI",
      en: "ID Manager"
    },
    category: "laboral",
    description: {
      es: "Sistema de registro de DNI en una base de datos para gestionar una billetera de clientes.",
      en: "ID registration system in a database to manage a client portfolio."
    },
    image: "/gestor-dni/gestor-dashboard.svg",
    githubUrl: "https://github.com/mateogeffroy/gestor-dni",
    imageNeedsBackground: true,
    detailedDescription: {
      es: "El cliente buscaba un sistema que le permita registrar los DNI de las personas que hayan consultado por un prestamo previamente. Como solucion hice una aplicacion web que permite registrar personas en la base de datos, filtrarlas por el tipo de trabajo que tienen y buscar por nombre, apelliyo y/o DNI.",
      en: "The client was looking for a system to register the IDs of people who had previously inquired about a loan. As a solution, I made a web application that allows registering people in the database, filtering them by job type, and searching by name, last name, and/or ID."
    },
    galleryImages: [
      {
        title: { es: "Inicio del gestor", en: "Manager Home" },
        src: "/gestor-dni/gestor-home1.png"
      },
      {
        title: { es: "Alta de un nuevo cliente", en: "New Client Registration" },
        src: "/gestor-dni/gestor-altaCliente.png"
      },
      {
        title: { es: "Inicio del gestor con datos", en: "Manager Home with Data" },
        src: "/gestor-dni/gestor-home2.png"
      }
    ]
  },
  {
    id: 4,
    title: {
      es: "Conversor de audio analógico a digital",
      en: "Analog to Digital Audio Converter"
    },
    category: "academico",
    description: {
      es: "Sistema que emula la conversión de audio analógico a digital permitiendo modificar parámetros como la frecuencia de muestreo y la profundidad de bits.",
      en: "System that emulates analog to digital audio conversion, allowing modification of parameters like sampling rate and bit depth."
    },
    image: "/conversor-aad/conversor-dashboard.svg",
    githubUrl: "https://github.com/mateogeffroy/conversor-audio-analogico-digital",
    imageNeedsBackground: true,
    detailedDescription: {
      es: "El proyecto permite subir (ya sea como archivo o grabado en el momento) un archivo de audio para poder modificarle la frecuencia de muestreo y la profundidad de bits. El audio al procesarse muestra un espectro de frecuencia para el antes y el despues de la conversión que permite visualizar las diferencias. Este proyecto fue desarrollado en el marco de la materia *Comunicación de datos - Tercer nivel, 1° Cuatrimestre*. El objetivo era poder implementar con una solución tecnológica los temas desarrollados a lo largo de la cursada como por ejemplo las Series Trigonométricas de Fourier. El proyecto es full-stack de un grupo de 4 integrantes con el backend desarrollado con Django y deployado en Render para poder lograr una persistencia de los audios convertidos y el frontend desarrollado con React.js.",
      en: "The project allows uploading (either as a file or recorded on the spot) an audio file to modify its sampling rate and bit depth. When processed, the audio displays a frequency spectrum for before and after the conversion to visualize the differences. This project was developed as part of the *Data Communications - Third Level, 1st Semester* course. The objective was to implement technological solutions for topics developed throughout the course, such as the Fourier Trigonometric Series. The project is a full-stack effort by a group of 4 members with the backend developed in Django and deployed on Render to achieve persistence of the converted audios, and the frontend developed with React.js."
    },
    galleryImages: [
      {
        title: { es: "Inicio del conversor", en: "Converter Home" },
        src: "/conversor-aad/conversor-home.png"
      },
      {
        title: { es: "Audio subido", en: "Uploaded Audio" },
        src: "/conversor-aad/conversor-conversion.png"
      },
      {
        title: { es: "Comparación de los resultados", en: "Results Comparison" },
        src: "/conversor-aad/conversor-comparacion.png"
      },
      {
        title: { es: "Biblioteca de audios convertidos", en: "Converted Audio Library" },
        src: "/conversor-aad/conversor-biblioteca.png"
      },
      {
        title: { es: "Audio almacenado en la biblioteca", en: "Audio Stored in Library" },
        src: "/conversor-aad/conversor-audioB.png"
      },
    ]
  },
  {
    id: 5,
    title: {
      es: "SaaS para productos y ventas",
      en: "SaaS for Products and Sales"
    },
    category: "laboral",
    description: {
      es: "Sistema que permite controlar stock, ventas y productos para pequeñas empresas.",
      en: "System to control stock, sales, and products for small businesses."
    },
    image: "/saas/saas-dashboard.svg",
    githubUrl: "https://github.com/mateogeffroy/SaaS-Ventas",
    imageNeedsBackground: true,
    detailedDescription: {
      es: "Aplicacion web que fue implementada en el negocio familiar para llevar el control de stock y ventas. Al terminarlo fue empaquetado para que cualquier negocio que necesite un control del dominio del sistema pueda utilizarlo. Guarda todas las ventas en cajas por día y permite ver el detalle tanto de la caja como de las ventas. Esta desarrollado con React.js con un backend hecho con Django. Tiene persistencia de datos local y cada negocio tiene un ejecutable para iniciar el proyecto",
      en: "A web application that was implemented in the family business to manage stock and sales. After completion, it was packaged so that any business needing control over the system's domain could use it. It saves all sales in daily cash registers and allows viewing details of both the register and the sales. It is developed with React.js and a Django backend. It has local data persistence, and each business has an executable to start the project."
    },
    galleryImages: [
      {
        title: { es: "Inicio del SaaS", en: "SaaS Home" },
        src: "/saas/saas-home.png"
      },
      {
        title: { es: "Vista del panel de ventas", en: "Sales Panel View" },
        src: "/saas/saas-ventas.png"
      },
      {
        title: { es: "Vista del panel de productos", en: "Products Panel View" },
        src: "/saas/saas-productos.png"
      },
      {
        title: { es: "Vista del panel de cajas", en: "Cash Registers Panel View" },
        src: "/saas/saas-cajas.png"
      },
    ]
  },
  {
    id: 6,
    title: {
      es: "ArSens para no-videntes",
      en: "ArSens for the Visually Impaired"
    },
    category: "academico",
    description: {
      es: "Modulo de adaptación para un software adquisidor de datos orientado para usuarios no-videntes.",
      en: "Data acquisition software adaptation module for the visually impaired."
    },
    image: "/arsens/arsens-dashboard.svg",
    githubUrl: "https://github.com/mateogeffroy/SaaS-Ventas",
    imageNeedsBackground: true,
    demoVideoUrl: "/arsens/arsens-demo.mp4",
    detailedDescription: {
      es: "Aplicacion web que fue implementada en el negocio familiar para llevar el control de stock y ventas. Al terminarlo fue empaquetado para que cualquier negocio que necesite un control del dominio del sistema pueda utilizarlo. Guarda todas las ventas en cajas por día y permite ver el detalle tanto de la caja como de las ventas. Esta desarrollado con React.js con un backend hecho con Django. Tiene persistencia de datos local y cada negocio tiene un ejecutable para iniciar el proyecto",
      en: "A web application that was implemented in the family business to manage stock and sales. After completion, it was packaged so that any business needing control over the system's domain could use it. It saves all sales in daily cash registers and allows viewing details of both the register and the sales. It is developed with React.js and a Django backend. It has local data persistence, and each business has an executable to start the project."
    },
    galleryImages: [
      {
        title: { es: "Inicio del SaaS", en: "SaaS Home" },
        src: "/saas/saas-home.png"
      },
      {
        title: { es: "Vista del panel de ventas", en: "Sales Panel View" },
        src: "/saas/saas-ventas.png"
      },
      {
        title: { es: "Vista del panel de productos", en: "Products Panel View" },
        src: "/saas/saas-productos.png"
      },
      {
        title: { es: "Vista del panel de cajas", en: "Cash Registers Panel View" },
        src: "/saas/saas-cajas.png"
      },
    ]
  },
]