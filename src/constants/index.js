// Navigation links configuration
export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

// Social links configuration
export const SOCIAL_LINKS = [
  {
    icon: "Github",
    label: "GitHub",
    link: "https://github.com/Ram9219",
  },
  {
    icon: "Linkedin",
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/ram4409290/",
  },
];

// Contact information
export const CONTACT_INFO = [
  {
    label: "Email",
    value: "ramkkumar977@gmail.com",
    link: "mailto:ramkkumar977@gmail.com",
  },
  {
    label: "Location",
    value: "India",
  },
  {
    label: "Twitter",
    value: "Ramkuma623422609",
    link: "https://x.com/Ramkuma62342260",
  },
];

// Skill categories
export const SKILL_CATEGORIES = {
  Frontend: {
    icon: "Palette",
    color: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-500/20",
    skills: [
      { name: "React", level: 85, color: "#61DAFB" },
      { name: "JavaScript", level: 90, color: "#F7DF1E" },
      { name: "HTML5", level: 95, color: "#E34F26" },
      { name: "CSS3", level: 90, color: "#1572B6" },
      { name: "Tailwind CSS", level: 88, color: "#06B6D4" },
      { name: "TypeScript", level: 80, color: "#3178C6" },
      { name: "Jquery", level: 75, color: "#0769AD" },
      { name: "Bootstrap", level: 70, color: "#7952B3" },
      { name: "Redux", level: 75, color: "#764ABC" },
      { name: "Figma", level: 80, color: "#F24E1E" },
    ],
  },
  Backend: {
    icon: "Database",
    color: "from-green-500 to-emerald-400",
    bgColor: "bg-green-500/20",
    skills: [
      { name: "Node.js", level: 80, color: "#339933" },
      { name: "Express", level: 78, color: "#000000" },
      { name: "PostgreSQL", level: 82, color: "#4169E1" },
      { name: "MongoDB", level: 75, color: "#47A248" },
      { name: "SQL", level: 85, color: "#FF6B35" },
      { name: "PHP", level: 90, color: "#777BB4" },
      { name: "Axios", level: 80, color: "#5A29E4" },
    ],
  },
  Programming: {
    icon: "Code",
    color: "from-purple-500 to-pink-400",
    bgColor: "bg-purple-500/20",
    skills: [
      { name: "C", level: 85, color: "#A8B9CC" },
      { name: "C++", level: 90, color: "#00599C" },
      { name: "Python", level: 85, color: "#3776AB" },
      { name: "Java", level: 80, color: "#007396" },
    ],
  },
  Tools: {
    icon: "Terminal",
    color: "from-orange-500 to-red-400",
    bgColor: "bg-orange-500/20",
    skills: [
      { name: "Git", level: 80, color: "#F05032" },
      { name: "Docker", level: 65, color: "#2496ED" },
      { name: "Linux", level: 80, color: "#FCC624" },
      { name: "AWS", level: 65, color: "#FF9900" },
      { name: "GitHub", level: 95, color: "#181717" },
    ],
  },
};

// Education data
export const EDUCATION_DATA = [
  {
    degree: "Bachelor of Technology in Software Engineering",
    institution: "Lovely Professional University (LPU)",
    period: "2023 - 2027",
    description: "Focused on software development, algorithms, and system design",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Saraswati Vidya Mandir Senior Secondary School",
    period: "2021 - 2022",
    description: "Science stream with a focus on Physics, Chemistry, and Mathematics",
  },
];

// Project highlights for About section
export const ABOUT_HIGHLIGHTS = [
  {
    icon: "Code",
    title: "Clean Code",
    description: "Writing maintainable and efficient code",
  },
  {
    icon: "Rocket",
    title: "Fast Learner",
    description: "Quick to adapt to new technologies",
  },
  {
    icon: "Lightbulb",
    title: "Problem Solver",
    description: "Creative solutions to complex challenges",
  },
];
