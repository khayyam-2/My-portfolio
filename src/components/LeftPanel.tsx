import { motion } from 'framer-motion';
import SkillTag from './SkillTag';
import profileImage from '@/assets/profile.png';

const LeftPanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-1/3 xl:w-2/5 w-full h-auto bg-gradient-subtle flex flex-col items-center justify-center p-8 lg:p-12"
    >
      <div className="text-center space-y-8">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden mx-auto shadow-elegant">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-primary opacity-20"
            animate={{
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-2"
        >
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Your Name
          </h1>
          <p className="text-xl text-muted-foreground">
            Software Developer
          </p>
        </motion.div>

        {/* Skill Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          <SkillTag variant="pink">Deep Learning</SkillTag>
          <SkillTag variant="cyan">Machine Learning</SkillTag>
          <SkillTag variant="purple">App Development</SkillTag>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LeftPanel;