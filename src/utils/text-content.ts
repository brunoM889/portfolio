export const navTextContent = (lang: boolean): string[] => {
  if (lang) {
    return ["about", "projects", "contact"];
  } else {
    return ["sobre mí", "proyectos", "contacto"];
  }
};

export const aboutTextContent = (lang: boolean) => {
  if (lang) {
    return {
      h1: "Hey, I'm Bruno",
      h2: "My tech stack",
      callToAct: "Let's see some projects",
    };
  } else {
    return {
      h1: "Hola, soy Bruno",
      h2: "Mi stack de tecnologías",
      callToAct: "Ver algunos proyectos",
    };
  }
};

export const footerTextContent = (lang: boolean) => {
  if (lang) {
    return "All rights reserved © 2024";
  } else {
    return "Todos los derechos reservados © 2024";
  }
};

export const contactTextContent = (lang: boolean) => {
  if (lang) {
    return {
      h1: "Contact",
      p: "Get in touch or send me an email directly on",
      callToAct: "Send",
    };
  } else {
    return {
      h1: "Contacto",
      p: "Envía un mensaje o contactate conmigo directamente con",
      callToAct: "Enviar",
    };
  }
};

export const formAlertsTextContent = (lang: boolean) => {
  if (lang) {
    return {
      name: {
        required: "Name is required",
        minLength: "Name must be at least 3 characters",
      },
      email: {
        required: "Email is required",
        pattern: "Email is not valid",
      },
      message: {
        required: "Message is required",
        minLength: "Message must be at least 3 characters",
      },
      success: "Message sent successfully",
      error: "Error sending message",
    };
  } else {
    return {
      name: {
        required: "El nombre es requerido",
        minLength: "El nombre debe tener al menos 3 caracteres",
      },
      email: {
        required: "El correo electrónico es requerido",
        minLength: "El correo electrónico debe tener al menos 3 caracteres",
        pattern: "El correo electrónico no es válido",
      },
      message: {
        required: "El mensaje es requerido",
        minLength: "El mensaje debe tener al menos 3 caracteres",
      },
      success: "Mensaje enviado con éxito",
      error: "Error al enviar el mensaje",
    };
  }
};

export const projectsTextContent = (lang: boolean) => {
  if (lang) {
    return {
      h1: "Projects",
    };
  } else {
    return {
      h1: "Proyectos",
    };
  }
};

interface ProjectCard {
  title: string;
  description: string[];
  techs: string[];
  link: string;
  video?: string;
  image: string;
}

export const projectCardsTextContent = (lang: boolean): ProjectCard[] => {
  if (lang) {
    return [
      {
        title: "Blog",
        description: [
          "It's a simple website with a minimalist design inspired by Guillermo Rauch's blog, where I cover topics of technology and web development, as well as share my ideas and knowledge with others.",
        ],
        techs: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Node.js",
          "Express",
          "PostgreSQL",
        ],
        link: "https://brunos-blog.vercel.app",
        image: "blog.PNG",
      },
      {
        title: "eduAI",
        description: [
          "The concept emerged as a kind of minigames where the user would provide their study material or the topics they want to study, and the AI would generate specific outputs to process them and generate an intuitive and playable interface.",
          "From there, I decided to develop 5 modalities with this methodology. After developing them, I had a solid core functionality, but I felt it lacked something to be more complete and useful. So, I added a section where users could create notes, assisted by AI, search for notes from other people, and use them in the practice section, forming a kind of community. In the end, I added a chat section that works like any other chat with AI.",
          "At this point, I began to think about how to put the platform into operation since it uses the OpenAI or Gemini API, which incurs considerable expenses, in addition to resource costs, as when processing PDFs or very long texts, the algorithm divides the texts into several parts to obtain more precise prompts and summaries, since the Gemini context window in this case is 30,000 tokens (around 120,000 characters).",
          "The idea, at this stage, was to develop one or two more sections with functionalities that accompany the two main ones to make the platform more attractive and serious. But after thinking about the expenses, I realized it wasn't a good option to continue developing it since it would be impossible for me to maintain it. I considered the option of applying a subscription system to sustain the expenses, but due to the user target, I didn't believe it would work because, on average, a student doesn't have the money to invest in a tool like this, and if they do, no matter how good the platform is, I don't think they would spend it on that.",
          "I also thought about using ads, but I quickly discarded them for two reasons: the first was the time it could take for the platform to achieve a user base that self-sustains the expenses since during that time I would have to invest my own money, and on the other hand, ads are ugly.",
          "For these reasons, I decided to make a demonstration of all these functionalities so that this development doesn't go to waste since I consider it a good idea.",
        ],
        techs: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
        link: "",
        image: "eduAI.PNG",
        video: "eduAI.mp4",
      },

      {
        title: "barber app",
        description: [
          "This application was developed with the idea of creating a website that is informative and aesthetic, as well as functional and useful. From the customer's perspective, the website has several informative sections about the barbershop, as well as a dedicated page for scheduling appointments.",
          "But the most interesting part lies in the barber's admin panel, where they can view scheduled appointments using filters by date or barber. They also have the ability to adjust the prices of the services displayed on the page and cancel days when they do not want to accept appointments, as well as schedule appointments manually.",
          "For the security of the customers, access to the control panel cannot be provided in the functional demo.",
        ],
        image: "barber.PNG",
        techs: ["Node.js", "Next.js", "PostgreSQL", "Prisma"],
        link: "https://barber-demo.vercel.app/",
        video: "barber.mp4",
      },
    ];
  } else {
    return [
      {
        title: "Blog",
        description: [
          "Es una web sencilla con un diseño minimalista inspirado en el blog de Guillermo Rauch, donde abordo temas de tecnología y desarrollo web, además de compartir mis ideas y conocimientos con otros.",
        ],
        techs: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Node.js",
          "Express",
          "PostgreSQL",
        ],
        link: "https://brunos-blog.vercel.app",
        image: "blog.PNG",
      },
      {
        title: "eduAI",
        description: [
          "El concepto surgió como una especie de minijuegos donde el usuario proporcionaría su material de estudio o los temas que quiere estudiar, y la IA generaría salidas específicas para procesarlos y generar una interfaz intuitiva y jugable.",
          "A partir de ahí, decidí desarrollar 5 modalidades con esta metodología. Después de desarrollarlas, tenía una funcionalidad central sólida, pero sentí que le faltaba algo para ser más completa y útil. Entonces, agregué una sección donde los usuarios podían crear notas, asistidos por IA, buscar notas de otras personas y usarlas en la sección de práctica, formando una especie de comunidad. Al final, agregué una sección de chat que funciona como cualquier otro chat con IA.",
          "En este punto, comencé a pensar en cómo poner en funcionamiento la plataforma ya que usa la API de OpenAI o Gemini, lo que incurre en gastos considerables, además de los costos de recursos, ya que al procesar PDFs o textos muy largos, el algoritmo divide los textos en varias partes para obtener indicaciones y resúmenes más precisos, ya que la ventana de contexto de Gemini en este caso es de 30,000 tokens (alrededor de 120,000 caracteres).",
          "La idea, en esta etapa, era desarrollar una o dos secciones más con funcionalidades que acompañaran las dos principales para hacer la plataforma más atractiva y seria. Pero después de pensar en los gastos, me di cuenta de que no era una buena opción continuar desarrollándola ya que me sería imposible mantenerla. Consideré la opción de aplicar un sistema de suscripción para sostener los gastos, pero debido al público objetivo, no creí que funcionaría porque, en promedio, un estudiante no tiene el dinero para invertir en una herramienta así, y si lo tiene, no importa lo buena que sea la plataforma, no creo que lo gastaría en eso.",
          "También pensé en usar anuncios, pero los descarté rápidamente por dos razones: la primera era el tiempo que podría tomar para que la plataforma lograra una base de usuarios que autosostuviera los gastos, ya que durante ese tiempo tendría que invertir mi propio dinero, y por otro lado, los anuncios son feos.",
          "Por estas razones, decidí hacer una demostración de todas estas funcionalidades para que este desarrollo no se desperdiciara ya que considero que es una buena idea.",
        ],
        techs: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
        link: "",
        image: "eduAI.PNG",
        video: "eduAI.mp4",
      },
      {
        title: "barber app",
        description: [
          "Esta aplicación fue desarrollada con la idea de crear un sitio web que sea tanto informativo y estético, como funcional y útil. Desde el punto de vista del cliente, el sitio web tiene varias secciones informativas sobre la barbería, así como una página dedicada a la programación de turnos.",
          "Pero la parte más interesante reside en el panel de administración del barbero, donde este puede ver los turnos programados, utilizando filtros por fechas o barberos. También tiene la capacidad de ajustar los precios de los servicios exibidos en la página y cancelar días en los que no desean recibir turnos, así como realizar turnos manuales.",
          "Por seguridad, no se puede proporcionar acceso al panel de control en la demo funcional.",
        ],
        image: "barber.PNG",
        techs: ["Node.js", "Next.js", "PostgreSQL", "Prisma"],
        link: "https://barber-demo.vercel.app/",
        video: "barber.mp4",
      },
    ];
  }
};
