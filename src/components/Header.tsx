import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <nav className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink
              to="/"
              data-cursor-hover
              className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent"
            >
              Portfolio
            </NavLink>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                data-cursor-hover
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors duration-300 hover:text-accent-pink ${
                    isActive ? 'text-accent-pink' : 'text-muted-foreground'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-x-0 -bottom-1 h-0.5 bg-accent-pink rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              data-cursor-hover
              asChild
              variant="outline"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-white border-none"
            >
              <a href="mailto:your.email@example.com">
                Hire Me
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            data-cursor-hover
            onClick={toggleMenu}
            className="md:hidden p-2 text-muted-foreground hover:text-accent-pink transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-background/95 backdrop-blur-lg border-t border-border"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    data-cursor-hover
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-2 text-lg font-medium transition-colors duration-300 hover:text-accent-pink ${
                        isActive ? 'text-accent-pink' : 'text-muted-foreground'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
                <div className="px-4 pt-2">
                  <Button
                    data-cursor-hover
                    asChild
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-white"
                  >
                    <a href="mailto:your.email@example.com">
                      Hire Me
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;