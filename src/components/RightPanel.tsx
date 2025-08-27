import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0
  },
};

const skillsData = [
  { name: 'React/Next.js', level: 95 },
  { name: 'Python', level: 90 },
  { name: 'TypeScript', level: 88 },
  { name: 'TensorFlow', level: 85 },
  { name: 'PyTorch', level: 82 },
  { name: 'Node.js', level: 80 },
];

const RightPanel = () => {
  return (
    <div className="lg:ml-[33.333%] xl:ml-[40%] min-h-screen w-full lg:w-2/3 xl:w-3/5 p-8 lg:p-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto space-y-16"
      >
        {/* About Me Section */}
        <motion.section 
          variants={itemVariants} 
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            About Me
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a passionate software developer with expertise in machine learning, deep learning, 
              and full-stack application development. I love creating innovative solutions that bridge 
              the gap between complex AI technologies and user-friendly applications.
            </p>
            <p>
              With a strong background in modern web technologies and AI frameworks, I enjoy 
              building scalable applications that make a real-world impact. When I'm not coding, 
              you'll find me exploring the latest developments in AI research and contributing to 
              open-source projects.
            </p>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          variants={itemVariants} 
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Skills
          </h2>
          <div className="grid gap-6">
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-primary rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          variants={itemVariants} 
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Contact
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Let's connect and build something amazing together!
            </p>
            
            {/* Email Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                data-cursor-hover
                asChild
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-white"
                size="lg"
              >
                <a href="mailto:your.email@example.com" className="inline-flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Get In Touch
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: Github, href: 'https://github.com', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  data-cursor-hover
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-secondary/50 text-muted-foreground hover:text-accent-pink hover:bg-accent-pink/10 transition-all duration-300 hover:shadow-glow"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-6 h-6" />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default RightPanel;