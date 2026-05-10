import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setFormState('submitting');
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/muhammadshazebb@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`
        })
      });

      if (response.ok) {
        setFormState('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormState('idle'), 5000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Oops! Something went wrong. Please try again or email me directly.");
      setFormState('idle');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="contact" className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <motion.h2 variants={itemVariants} className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Get In Touch</motion.h2>
            <motion.p variants={itemVariants} style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Have a project in mind or just want to chat? I'm always open to discussing new opportunities and creative AI solutions.
            </motion.p>
          </div>

          <div className="contact-grid" style={{ display: 'grid', gap: '4rem', alignItems: 'start' }}>
            
            {/* Contact Details */}
            <motion.div variants={containerVariants} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {[
                { icon: Mail, label: "Email", value: "muhammadshazebb@gmail.com", color: "var(--accent-cyan)", href: "mailto:muhammadshazebb@gmail.com" },
                { icon: Phone, label: "Phone", value: "(+92) 3335523734", color: "var(--accent-purple)", href: "tel:+923335523734" },
                { icon: MapPin, label: "Location", value: "Rawalpindi, Pakistan", color: "var(--accent-magenta)", href: "#" }
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  variants={itemVariants}
                  className="glass-card"
                  whileHover={{ x: 10, borderColor: item.color }}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1.5rem', 
                    textDecoration: 'none',
                    padding: '1.5rem',
                    transition: 'border-color 0.3s'
                  }}
                >
                  <div style={{ 
                    width: '60px', 
                    height: '60px', 
                    borderRadius: '16px', 
                    background: `rgba(${item.color === 'var(--accent-cyan)' ? '120, 194, 173' : item.color === 'var(--accent-purple)' ? '229, 184, 140' : '224, 139, 136'}, 0.1)`, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: item.color,
                    border: `1px solid rgba(${item.color === 'var(--accent-cyan)' ? '120, 194, 173' : item.color === 'var(--accent-purple)' ? '229, 184, 140' : '224, 139, 136'}, 0.2)`
                  }}>
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.3rem' }}>{item.label}</h4>
                    <p style={{ color: 'var(--text-main)', fontSize: '1.1rem', fontWeight: 500 }}>{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form 
                className="glass-card" 
                onSubmit={handleSubmit}
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '1.8rem', 
                  padding: '2.5rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <AnimatePresence mode="wait">
                  {formState === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      style={{ 
                        textAlign: 'center', 
                        padding: '2rem 0',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1.5rem'
                      }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                      >
                        <CheckCircle2 size={80} style={{ color: 'var(--accent-cyan)' }} />
                      </motion.div>
                      <div>
                        <h3 style={{ color: 'var(--text-main)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Message Sent!</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Thank you for reaching out. I'll get back to you soon.</p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div key="form" exit={{ opacity: 0, y: -20 }} style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        <label style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginLeft: '0.5rem' }}>Name</label>
                        <input 
                          required
                          type="text" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Your full name" 
                          style={{ width: '100%', padding: '1.2rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--glass-border)', borderRadius: '14px', color: 'var(--text-main)', outline: 'none', transition: 'border-color 0.3s' }}
                          className="contact-input"
                        />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        <label style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginLeft: '0.5rem' }}>Email</label>
                        <input 
                          required
                          type="email" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="hello@example.com" 
                          style={{ width: '100%', padding: '1.2rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--glass-border)', borderRadius: '14px', color: 'var(--text-main)', outline: 'none', transition: 'border-color 0.3s' }}
                          className="contact-input"
                        />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        <label style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginLeft: '0.5rem' }}>Message</label>
                        <textarea 
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          placeholder="What would you like to discuss?" 
                          style={{ width: '100%', padding: '1.2rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--glass-border)', borderRadius: '14px', color: 'var(--text-main)', outline: 'none', transition: 'border-color 0.3s', resize: 'none' }}
                          className="contact-input"
                        ></textarea>
                      </div>
                      <button 
                        type="submit" 
                        disabled={formState === 'submitting'}
                        className="btn btn-primary" 
                        style={{ 
                          width: '100%', 
                          justifyContent: 'center', 
                          padding: '1.2rem',
                          fontSize: '1.1rem',
                          opacity: formState === 'submitting' ? 0.7 : 1,
                          cursor: formState === 'submitting' ? 'not-allowed' : 'pointer'
                        }}
                      >
                        {formState === 'submitting' ? 'Sending...' : (
                          <>Send Message <Send size={20} style={{ marginLeft: '0.5rem' }} /></>
                        )}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <style>{`
        .contact-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr 1.2fr;
          }
        }
        .contact-input:focus {
          border-color: var(--accent-cyan) !important;
          background: rgba(120, 194, 173, 0.05) !important;
        }
      `}</style>
    </section>
  );
}
