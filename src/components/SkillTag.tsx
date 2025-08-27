import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SkillTagProps {
  children: React.ReactNode;
  variant?: 'pink' | 'cyan' | 'purple';
  className?: string;
}

const SkillTag = ({ children, variant = 'pink', className }: SkillTagProps) => {
  const variants = {
    pink: 'bg-accent-pink/20 text-accent-pink border-accent-pink/30',
    cyan: 'bg-accent-cyan/20 text-accent-cyan border-accent-cyan/30',
    purple: 'bg-accent-purple/20 text-accent-purple border-accent-purple/30',
  };

  return (
    <motion.span
      data-cursor-hover
      className={cn(
        'inline-flex items-center px-3 py-1.5 rounded-lg border text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-glow',
        variants[variant],
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.span>
  );
};

export default SkillTag;