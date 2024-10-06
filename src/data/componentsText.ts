const sections: { name: { FR: string; EN: string }; linkTo: string }[] = [
  {
    name: { FR: "A propos", EN: "About" },
    linkTo: "#about",
  },
  {
    name: { FR: "Compétences", EN: "Skills" },
    linkTo: "#skills",
  },
  {
    name: { FR: "Expérience", EN: "Experience" },
    linkTo: "#experience",
  },
  {
    name: { FR: "Projets", EN: "Projects" },
    linkTo: "#projects",
  },
  {
    name: { FR: "Contact", EN: "Contact" },
    linkTo: "#contact",
  },
];

const resume = { FR: "CV", EN: "Resume" };
const resumeUrl =
  "https://drive.google.com/file/d/1cj_715kR2YYhrmHlk59s3FUwPpS8Z5cE/view?usp=sharing";

const visiter = { FR: "Visiter", EN: "Visit" };

const contactText = {
  title: {
    FR: "Des questions? Des propositions?",
    EN: "Any questions? Any proposals?",
  },
  labels: {
    name: {
      FR: "Nom:",
      EN: "Name:",
    },
    email: {
      FR: "Email:",
      EN: "Email:",
    },
    message: {
      FR: "Message:",
      EN: "Message:",
    },
  },
  placeholders: {
    name: {
      FR: "John Doe",
      EN: "John Doe",
    },
    email: {
      FR: "johndoe@example.com",
      EN: "johndoe@example.com",
    },
    message: {
      FR: "écrire ton message ici...",
      EN: "write your message here...",
    },
  },
  errors: {
    emailInvalid: {
      FR: "Veuillez fournir un email valide!",
      EN: "Please provide a valid email!",
    },
    required: {
      FR: "Email et message sont obligatoires!",
      EN: "Email and message are required!",
    },
  },
  button: {
    send: {
      FR: "Envoyer",
      EN: "Send",
    },
  },
  successMessage: {
    FR: "Message envoyé avec succès!",
    EN: "Message sent successfully!",
  },
  failureMessage: {
    FR: "Une erreur est survenue lors de l'envoi du message.",
    EN: "An error occurred while sending the message.",
  },
};

export { sections, resume, resumeUrl, visiter, contactText };
