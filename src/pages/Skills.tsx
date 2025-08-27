import { motion } from 'framer-motion';
import { Code, Database, Brain, Palette, Server, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      color: 'accent-pink',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Framer Motion', level: 88 },
        { name: 'Vue.js', level: 80 },
      ],
    },
    {
      icon: Server,
      title: 'Backend Development',
      color: 'accent-cyan',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Python', level: 92 },
        { name: 'Express.js', level: 85 },
        { name: 'FastAPI', level: 82 },
        { name: 'PostgreSQL', level: 80 },
      ],
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      color: 'accent-purple',
      skills: [
        { name: 'TensorFlow', level: 90 },
        { name: 'PyTorch', level: 88 },
        { name: 'Scikit-learn', level: 92 },
        { name: 'OpenCV', level: 85 },
        { name: 'Transformers', level: 80 },
      ],
    },
    {
      icon: Database,
      title: 'DevOps & Tools',
      color: 'accent-pink',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 82 },
        { name: 'Git/GitHub', level: 95 },
        { name: 'Linux', level: 88 },
        { name: 'CI/CD', level: 80 },
      ],
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      color: 'accent-cyan',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Flutter', level: 78 },
        { name: 'iOS Development', level: 75 },
        { name: 'Android Development', level: 80 },
      ],
    },
    {
      icon: Palette,
      title: 'Design & UI/UX',
      color: 'accent-purple',
      skills: [
        { name: 'Figma', level: 88 },
        { name: 'Adobe Creative Suite', level: 82 },
        { name: 'UI/UX Design', level: 85 },
        { name: 'Prototyping', level: 80 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const getColorClass = (color: string) => {
    switch (color) {
      case 'accent-pink':
        return 'text-accent-pink border-accent-pink/30 bg-accent-pink/10';
      case 'accent-cyan':
        return 'text-accent-cyan border-accent-cyan/30 bg-accent-cyan/10';
      case 'accent-purple':
        return 'text-accent-purple border-accent-purple/30 bg-accent-purple/10';
      default:
        return 'text-accent-pink border-accent-pink/30 bg-accent-pink/10';
    }
  };

  const getGradientClass = (color: string) => {
    switch (color) {
      case 'accent-pink':
        return 'from-accent-pink to-accent-purple';
      case 'accent-cyan':
        return 'from-accent-cyan to-accent-pink';
      case 'accent-purple':
        return 'from-accent-purple to-accent-cyan';
      default:
        return 'from-accent-pink to-accent-purple';
    }
  };

  return (
    <div className="min-h-screen py-20 px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-20"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              My Skills
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my technical expertise and the tools I use to bring ideas to life.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-card/80 transition-all duration-300 border border-border/50"
                data-cursor-hover
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-xl border ${getColorClass(category.color)}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-medium">
                          {skill.name}
                        </span>
                        <span className="text-muted-foreground text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1, 
                            delay: 1 + categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          className={`h-full bg-gradient-to-r ${getGradientClass(category.color)} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Technologies */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Technologies I Work With
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A selection of technologies and frameworks I'm proficient in.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                'React', 'Next.js', 'TypeScript', 'Python', 'TensorFlow', 'PyTorch',
                'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS',
                'Tailwind CSS', 'Framer Motion', 'Figma', 'Git'
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.5 + index * 0.05 }}
                  className="px-4 py-2 bg-gradient-primary/10 text-foreground rounded-full border border-accent-pink/30 hover:bg-gradient-primary/20 transition-all duration-300 cursor-pointer"
                  data-cursor-hover
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-subtle rounded-3xl p-8 lg:p-12"
          >
            <div className="text-center space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Certifications & Learning
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="space-y-2">
                  <div className="text-xl font-semibold text-accent-pink">AWS Certified</div>
                  <div className="text-muted-foreground">Cloud Solutions Architect</div>
                </div>
                <div className="space-y-2">
                  <div className="text-xl font-semibold text-accent-cyan">Google AI</div>
                  <div className="text-muted-foreground">Machine Learning Engineer</div>
                </div>
                <div className="space-y-2">
                  <div className="text-xl font-semibold text-accent-purple">Meta</div>
                  <div className="text-muted-foreground">React Developer</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;