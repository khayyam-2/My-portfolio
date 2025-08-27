import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SkillTag from '@/components/SkillTag';
import profileImage from '@/assets/profile.png';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-accent-pink font-medium text-lg"
              >
                Hello, I'm
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-5xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight"
              >
                Your Name
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-2xl lg:text-3xl text-muted-foreground font-light"
              >
                Software Developer & AI Engineer
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
            >
              I create innovative solutions that bridge the gap between complex AI technologies 
              and user-friendly applications. Passionate about machine learning, deep learning, 
              and building scalable web applications.
            </motion.p>

            {/* Skill Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-wrap gap-3"
            >
              <SkillTag variant="pink">Deep Learning</SkillTag>
              <SkillTag variant="cyan">Machine Learning</SkillTag>
              <SkillTag variant="purple">App Development</SkillTag>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                data-cursor-hover
                asChild
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-white group"
              >
                <a href="/contact" className="inline-flex items-center gap-2">
                  Get In Touch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
              
              <Button
                data-cursor-hover
                variant="outline"
                size="lg"
                className="border-accent-pink text-accent-pink hover:bg-accent-pink/10 transition-all duration-300 group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Download CV
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-elegant">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Animated Rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-accent-pink/30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-accent-cyan/30"
                animate={{
                  scale: [1.1, 1.2, 1.1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-accent-pink rounded-full shadow-glow"
                animate={{
                  y: [-10, 10, -10],
                  x: [-5, 5, -5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <motion.div
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-accent-cyan rounded-full shadow-glow"
                animate={{
                  y: [10, -10, 10],
                  x: [5, -5, 5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;