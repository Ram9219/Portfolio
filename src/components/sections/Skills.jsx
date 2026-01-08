import { Card } from "@/components/ui/card";
import { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Database, Palette, Terminal, Sparkles } from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isPending, startTransition] = useTransition();

  const handleCategoryChange = (category) => {
    startTransition(() => {
      setActiveCategory(category);
    });
  };

  const getTechIcon = (techName) => {
    const icons = {
      React: "⚛️",
      JavaScript: "🟨",
      HTML5: "🌐",
      CSS3: "🎨",
      "Tailwind CSS": "💨",
      TypeScript: "🔷",
      "Next.js": "⏭️",
      Jquery: "📜",
      Bootstrap: "👢",
      Redux: "🗂️",
      Figma: "🎛️",
      "Node.js": "🟢",
      Express: "🚂",
      PostgreSQL: "🐘",
      MongoDB: "🍃",
      SQL: "🗃️",
      PHP: "🐘",
      Axios: "📡",
      C: "🔵",
      "C++": "➕",
      Python: "🐍",
      Java: "☕",
      Git: "📚",
      Docker: "🐳",
      Linux: "🐧",
      AWS: "☁️",
      Jest: "🃏",
      GitHub: "🐙",
    };
    return icons[techName] || "💼";
  };

  const skillCategories = {
    Frontend: {
      icon: <Palette className="w-5 h-5" />,
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
      icon: <Database className="w-5 h-5" />,
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
      icon: <Code className="w-5 h-5" />,
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
      icon: <Terminal className="w-5 h-5" />,
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const iconVariants = {
    rest: {
      scale: 1,
      y: 0,
      rotate: 0,
    },
    hover: {
      scale: 1.2,
      y: -5,
      rotate: [0, -10, 10, -5, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    bounce: {
      y: [0, -15, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-4 bg-gradient-to-br from-background via-background to-purple-950/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-400">Technical Arsenal</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              TECH
            </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              STACK
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Tools and technologies I master to build amazing digital experiences
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto"
        >
          {Object.keys(skillCategories).map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoryChange(category)}
              className={`flex items-center gap-2 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 border-2 backdrop-blur-sm ${
                activeCategory === category
                  ? `bg-gradient-to-r ${skillCategories[category].color} text-white border-transparent shadow-lg shadow-blue-500/25`
                  : "bg-white/5 text-gray-300 border-white/10 hover:border-white/20 hover:bg-white/10"
              }`}
            >
              {skillCategories[category].icon}
              {category}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-6xl mx-auto"
            style={{ opacity: isPending ? 0.6 : 1, transition: 'opacity 0.2s' }}
          >
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="relative group"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="p-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl hover:border-white/20 transition-all duration-500 group-hover:bg-white/10 h-full flex flex-col relative overflow-hidden">
                  {/* Animated gradient background */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20"
                    initial={false}
                    animate={{
                      background: [
                        `radial-gradient(circle at 0% 0%, ${skill.color} 0%, transparent 50%)`,
                        `radial-gradient(circle at 100% 100%, ${skill.color} 0%, transparent 50%)`,
                        `radial-gradient(circle at 0% 0%, ${skill.color} 0%, transparent 50%)`,
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />

                  <motion.div
                    variants={iconVariants}
                    initial="rest"
                    animate={hoveredSkill === skill.name ? "bounce" : "rest"}
                    whileHover="hover"
                    className="text-center flex-1 flex flex-col items-center justify-center gap-4 relative z-10"
                  >
                    {/* Floating particles effect */}
                    {hoveredSkill === skill.name && (
                      <>
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 rounded-full"
                            style={{ backgroundColor: skill.color }}
                            initial={{ 
                              x: 0, 
                              y: 0, 
                              opacity: 0,
                              scale: 0 
                            }}
                            animate={{
                              x: [0, (Math.random() - 0.5) * 100],
                              y: [0, -50 - Math.random() * 50],
                              opacity: [0, 1, 0],
                              scale: [0, 1.5, 0],
                            }}
                            transition={{
                              duration: 1.5,
                              delay: i * 0.1,
                              repeat: Infinity,
                              repeatDelay: 0.5,
                            }}
                          />
                        ))}
                      </>
                    )}

                    <motion.span
                      className="text-6xl block relative"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{ 
                        y: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.1,
                        },
                        scale: { type: "spring", stiffness: 400, damping: 10 },
                      }}
                    >
                      {getTechIcon(skill.name)}
                      
                      {/* Rotating ring effect */}
                      <motion.div
                        className="absolute inset-0 border-2 rounded-full opacity-0 group-hover:opacity-30"
                        style={{ borderColor: skill.color }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.span>

                    <motion.h3 
                      className="text-center font-bold text-white text-lg"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1.05 }}
                    >
                      {skill.name}
                    </motion.h3>
                  </motion.div>

                  {/* Glowing border effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      boxShadow: `0 0 0 1px ${skill.color}00`,
                    }}
                    whileHover={{
                      boxShadow: `0 0 20px ${skill.color}60, 0 0 40px ${skill.color}30`,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.1); }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-pulse {
          animation: pulse 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;

