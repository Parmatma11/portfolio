import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'krishankaushik1002@gmail.com',
      href: 'mailto:krishankaushik1002@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9350160150',
      href: 'tel:+919350160150'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'New Delhi, Delhi, India',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Parmatma11/', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/krishan-kaushik-8b2518232/', label: 'LinkedIn' },
    // { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 particles opacity-20" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl lg:text-6xl mb-6 gradient-text">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="glass p-8 rounded-2xl border border-primary/10">
            <h3 className="font-orbitron font-bold text-2xl mb-6 gradient-text-secondary">
              Send Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="glass border-primary/20 focus:border-primary/50 bg-background/50"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="glass border-primary/20 focus:border-primary/50 bg-background/50"
                  />
                </div>
              </div>
              
              <Input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="glass border-primary/20 focus:border-primary/50 bg-background/50"
              />
              
              <Textarea
                name="message"
                placeholder="Your message..."
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                required
                className="glass border-primary/20 focus:border-primary/50 bg-background/50 resize-none"
              />
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground font-semibold py-3 glow-primary"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2" />
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </div>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass p-8 rounded-2xl border border-secondary/10">
              <h3 className="font-orbitron font-bold text-2xl mb-6 gradient-text-secondary">
                Get In Touch
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborations, or just chat about technology. 
                Feel free to reach out through any of the channels below.
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 glass rounded-lg border border-accent/10 hover:border-accent/30 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="font-medium text-foreground">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass p-8 rounded-2xl border border-primary/10">
              <h4 className="font-orbitron font-bold text-xl mb-6 gradient-text">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass rounded-lg border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 glow-primary"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="glass p-8 rounded-2xl border border-secondary/10 text-center">
              <h4 className="font-orbitron font-bold text-xl mb-4 gradient-text-secondary">
                Ready to Start?
              </h4>
              <p className="text-muted-foreground mb-6">
                Let's turn your vision into reality with cutting-edge technology and innovative design.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/80 hover:to-accent/80 text-primary-foreground font-semibold px-8"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;