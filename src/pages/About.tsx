import { motion } from 'framer-motion';
import { Code, Lightbulb, Target, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'I believe in writing maintainable, scalable, and efficient code that stands the test of time.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always exploring new technologies and methodologies to solve complex problems creatively.',
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Focused on delivering high-quality solutions that exceed expectations and drive business value.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Genuinely passionate about technology and its power to transform lives and businesses.',
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

  return (
    <div className="min-h-screen py-20 px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-20"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A passionate developer committed to creating innovative solutions and pushing the boundaries of technology.
            </p>
          </motion.div>

          {/* Story Section */}
          <motion.div 
            variants={itemVariants}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                My Journey
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  My journey in technology began with a curiosity about how things work. 
                  This curiosity led me to explore programming, where I discovered my passion 
                  for creating solutions that make a difference.
                </p>
                <p>
                  Over the years, I've specialized in machine learning and full-stack development, 
                  working on projects that range from AI-powered applications to scalable web platforms. 
                  I believe technology should be accessible and impactful.
                </p>
                <p>
                  When I'm not coding, you'll find me staying up-to-date with the latest in AI research, 
                  contributing to open-source projects, or mentoring aspiring developers.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="w-full aspect-square rounded-2xl bg-gradient-secondary p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-bold text-white">5+</div>
                  <div className="text-white/80 text-xl">Years of Experience</div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-accent-pink/20 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Values Section */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                My Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide my work and drive my commitment to excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="text-center space-y-4 p-6 rounded-2xl bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group"
                  data-cursor-hover
                >
                  <motion.div
                    className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <value.icon className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fun Facts */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-subtle rounded-3xl p-8 lg:p-12"
          >
            <div className="text-center space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Fun Facts
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-accent-pink">100+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-accent-cyan">24/7</div>
                  <div className="text-muted-foreground">Learning Mindset</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-accent-purple">∞</div>
                  <div className="text-muted-foreground">Curiosity Level</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;