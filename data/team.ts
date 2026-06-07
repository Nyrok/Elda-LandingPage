export type Member = {
  name: string;
  /** explicit split for the two-line display (dimmed last name) */
  firstName: string;
  lastName: string;
  role: string;
  bio: string;
  /** playful one-liner shown only when the panel is expanded (optional) */
  funFact?: string;
  /** /members/<file> or any remote URL */
  photo: string;
  links: {
    github?: string;
    linkedin?: string;
    x?: string;
    site?: string;
  };
  /** highlight the lead / "you" panel */
  isYou?: boolean;
};

export const team: Member[] = [
  {
    name: "Minh Nhut NGUYEN",
    firstName: "Minh Nhut",
    lastName: "Nguyen",
    role: "AI Robotics Engineer",
    bio: "Master's student in Artificial Intelligence with a strong passion for robotics, entrepreneurship, and building technology that solves real-world problems. I was first fascinated by robots and later discovered AI as the missing piece that enables machines to perceive, reason, and act autonomously. Today, I focus on Physical AI and embodied intelligence, exploring how cutting-edge research can be transformed into impactful products and scalable solutions.",
    funFact: "First in line at 7 AM, before the hackathon opened.",
    photo: "/members/minh.jpg",
    links: {
      linkedin: "https://www.linkedin.com/in/minh-nhut-nguyen-474ab1259/",
    },
  },
  {
    name: "Hamza Konte",
    firstName: "Hamza",
    lastName: "Konte",
    role: "Software Engineer",
    bio: "I'm 21, a software engineer at Bolero Music while I finish a Business-IT degree (MIAGE) at Université Paris Dauphine-PSL and study at 42 School. I started coding at 13 and have built side projects ever since; making my own products, and the entrepreneurship around them, is the part I enjoy most. I'm also event host at 42 Entrepreneurs, where I run our events and meet a lot of people.",
    funFact: "Broke his voice during the hackathon.",
    photo: "/members/hamza.jpg",
    links: {
      github: "https://github.com/Nyrok",
      linkedin: "https://www.linkedin.com/in/hamza-konte",
    },
    isYou: true,
  },
  {
    name: "Myron Sydorov",
    firstName: "Myron",
    lastName: "Sydorov",
    role: "AI Robotics Engineer",
    bio: "21, Computer Science student at TU Berlin and R&D engineer in aerospace & defense. Building robots, autonomous systems, Physical AI, and AI-powered products across software and hardware. Contributed to one of Germany's few student satellites. Most interested in solving challenging engineering problems at the intersection of AI and the physical world.",
    funFact: "Corrects Hamza's \"Deutsche\" every time.",
    photo: "/members/myron.jpg",
    links: { github: "https://github.com/myroness", linkedin: "https://www.linkedin.com/in/myron-sydorov-271a693a8/" },
  },
  {
    name: "Gauthier Boula de Mareuil",
    firstName: "Gauthier",
    lastName: "Boula de Mareuil",
    role: "AI Robotics Engineer",
    bio: "Fifth-year double-master's student in electronics and computer engineering at DCU and in mechanical and electrical engineering at ECAM Lasalle Lyon. Passionate about robotics, where my electronics, mechanical, and software skills come together.",
    funFact: "Single-handedly cleared out the snack table.",
    photo: "/members/gauthier.jpg",
    links: { linkedin: "https://www.linkedin.com/in/gauthier-boula-de-mareuil/" },
  },
];
