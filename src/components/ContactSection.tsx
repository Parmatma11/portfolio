import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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

    setTimeout(() => {
      toast({
        title: "[OK] TRANSMISSION_SENT",
        description: "Message received. Response queued.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: '$EMAIL',
      value: 'krishankaushik1002@gmail.com',
      href: 'mailto:krishankaushik1002@gmail.com'
    },
    {
      icon: Phone,
      label: '$PHONE',
      value: '+91 9350160150',
      href: 'tel:+919350160150'
    },
    {
      icon: MapPin,
      label: '$LOCATION',
      value: 'New Delhi, Delhi, India',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Parmatma11/', label: 'github.com/Parmatma11' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/krishan-kaushik-8b2518232/', label: 'linkedin.com/in/krishan-kaushik' },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden scanlines">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-mono font-bold text-4xl md:text-5xl tracking-wider uppercase glow-text mb-4">
            {'>'} INIT_CONTACT
          </h2>
          <div className="w-32 h-[1px] bg-phosphor/50 shadow-[0_0_10px_rgba(0,255,65,0.3)]" />
          <p className="font-mono text-sm text-silver/60 mt-4 max-w-lg">
            Ready to bring your next project to life? Let's discuss.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="terminal-container">
            <div className="terminal-header">
              [MESSAGE_COMPOSER.sh]
            </div>
            <div className="terminal-body">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="font-mono text-[10px] text-silver/40 tracking-widest block mb-2">
                      // YOUR_NAME:
                    </label>
                    <input
                      name="name"
                      placeholder="Enter name..."
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="terminal-input text-sm"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] text-silver/40 tracking-widest block mb-2">
                      // YOUR_EMAIL:
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="Enter email..."
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="terminal-input text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-[10px] text-silver/40 tracking-widest block mb-2">
                    // SUBJECT:
                  </label>
                  <input
                    name="subject"
                    placeholder="Enter subject..."
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="terminal-input text-sm"
                  />
                </div>

                <div>
                  <label className="font-mono text-[10px] text-silver/40 tracking-widest block mb-2">
                    // MESSAGE:
                  </label>
                  <textarea
                    name="message"
                    placeholder="Compose message..."
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="terminal-input text-sm resize-none border border-phosphor/15"
                    style={{ borderBottom: '1px solid rgba(0,255,65,0.3)' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-terminal btn-terminal-primary text-sm disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="animate-pulse">▊</span>
                      TRANSMITTING...
                    </span>
                  ) : (
                    '[ SEND_TRANSMISSION → ]'
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="terminal-container">
              <div className="terminal-header">
                [GET_IN_TOUCH]
              </div>
              <div className="terminal-body space-y-3">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-3 font-mono text-xs text-silver/60 hover:text-phosphor transition-colors duration-75 group py-2 border-b border-phosphor/5 last:border-0"
                  >
                    <span className="text-cyan-term">$ echo</span>
                    <span className="text-amber-term">{info.label}</span>
                    <span className="text-silver/30">→</span>
                    <info.icon className="w-3.5 h-3.5 text-phosphor/50 group-hover:text-phosphor" />
                    <span className="text-phosphor/70 group-hover:text-phosphor">{info.value}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="terminal-container">
              <div className="terminal-header">
                [NETWORK_LINKS]
              </div>
              <div className="terminal-body space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 font-mono text-xs text-silver/60 hover:text-phosphor transition-colors duration-75 group"
                  >
                    <social.icon className="w-4 h-4 text-phosphor/50 group-hover:text-phosphor" />
                    <span className="text-phosphor/70 group-hover:text-phosphor group-hover:underline">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="border border-dashed border-phosphor/25 p-6 bg-surface-2/50 hover:border-phosphor/40 transition-all duration-75"
              style={{ borderRadius: '2px' }}
            >
              <h4 className="font-mono font-bold text-sm text-phosphor tracking-wider mb-3">
                {'>'} READY_TO_START
              </h4>
              <p className="font-mono text-xs text-silver/50 mb-4">
                Let's turn your vision into reality with cutting-edge technology.
              </p>
              <button
                className="btn-terminal btn-terminal-secondary text-[10px] py-2"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                [ VIEW_MY_WORK ]
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-phosphor/15">
          <div className="text-center space-y-3">
            <p className="font-mono text-xs text-phosphor/40 tracking-widest uppercase">
              © 2024 KRISHAN_KAUSHIK // ALL_RIGHTS_RESERVED
            </p>
            {/* <p className="font-mono text-[10px] text-silver/25 tracking-wider">
              SYSTEM_STATUS: <span className="text-phosphor/50">ONLINE</span> | UPTIME: <span className="text-cyan-term/50">99.9%</span> | LAST_DEPLOY: <span className="text-amber-term/50">TODAY</span>
            </p> */}
            <div className="flex justify-center">
              <span className="text-phosphor/40 animate-cursor-blink text-xs">▊</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;