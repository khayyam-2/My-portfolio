import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com',
      color: 'hover:text-accent-pink',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:text-accent-cyan',
    },
    {
      icon: Twitter,
      name: 'Twitter',
      href: 'https://twitter.com',
      color: 'hover:text-accent-purple',
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
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Have a project in mind or just want to chat about technology? I'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Send Me a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <Input
                      placeholder="Your Name"
                      required
                      className="bg-card/50 border-border/50 focus:border-accent-pink transition-colors duration-300"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <Input
                      type="email"
                      placeholder="Your Email"
                      required
                      className="bg-card/50 border-border/50 focus:border-accent-cyan transition-colors duration-300"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Input
                    placeholder="Subject"
                    required
                    className="bg-card/50 border-border/50 focus:border-accent-purple transition-colors duration-300"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <Textarea
                    placeholder="Your Message"
                    rows={6}
                    required
                    className="bg-card/50 border-border/50 focus:border-accent-pink transition-colors duration-300 resize-none"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    data-cursor-hover
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-white group"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Contact Information</h2>
                <p className="text-muted-foreground">
                  Feel free to reach out through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-card/50 rounded-lg hover:bg-card/80 transition-all duration-300 group"
                    data-cursor-hover
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.title}</div>
                      <div className="text-foreground font-medium">{info.value}</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent-pink transition-colors duration-300 ml-auto" />
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="space-y-6 pt-8">
                <h3 className="text-xl font-semibold text-foreground">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      className={`p-4 bg-card/50 rounded-lg text-muted-foreground ${social.color} transition-all duration-300 hover:bg-card/80 hover:scale-110`}
                      data-cursor-hover
                    >
                      <social.icon className="w-6 h-6" />
                      <span className="sr-only">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="bg-gradient-subtle rounded-2xl p-8 text-center space-y-4"
              >
                <h3 className="text-2xl font-bold text-foreground">Ready to Start a Project?</h3>
                <p className="text-muted-foreground">
                  Let's discuss your ideas and turn them into reality.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-accent-pink text-accent-pink hover:bg-accent-pink/10"
                  data-cursor-hover
                >
                  <a href="mailto:your.email@example.com">
                    Schedule a Call
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;