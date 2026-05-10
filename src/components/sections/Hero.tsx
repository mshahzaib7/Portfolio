import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Mouse } from 'lucide-react';

export default function Hero() {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="home" className="section hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
      {/* Background Glow Orb */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '20%',
        width: '40vw',
        height: '40vw',
        background: 'radial-gradient(circle, rgba(229,184,140,0.1) 0%, rgba(0,0,0,0) 70%)',
        transform: 'translate(-50%, -50%)',
        zIndex: 0,
        pointerEvents: 'none',
        filter: 'blur(60px)'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: '800px' }}
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0, 240, 255, 0.1)', border: '1px solid rgba(0, 240, 255, 0.2)', padding: '0.5rem 1rem', borderRadius: '50px', marginBottom: '2rem' }}>
            <span style={{ width: '8px', height: '8px', background: 'var(--accent-cyan)', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 10px var(--accent-cyan)' }} className="animate-pulse"></span>
            <span style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>Available for new opportunities</span>
          </motion.div>

          <motion.h4 variants={itemVariants} style={{ color: 'var(--text-main)', marginBottom: '1rem', fontFamily: 'var(--font-mono)', fontSize: '1rem', letterSpacing: '2px', opacity: 0.8 }}>
            HELLO WORLD, I AM
          </motion.h4>
          
          <motion.h1 variants={itemVariants} style={{ fontSize: 'var(--h1-size)', marginBottom: '0.5rem', textShadow: '0 0 30px rgba(255,255,255,0.1)', lineHeight: '1.1' }}>
            Muhammad Shahzaib Khan
          </motion.h1>
          
          <motion.h2 variants={itemVariants} style={{ fontSize: 'var(--h3-size)', paddingBottom: '0.2em', marginBottom: '1.5rem', fontWeight: 500, color: 'var(--accent-cyan)' }}>
            AI Consultant | GenAI & Agentic AI Developer
          </motion.h2>
          
          <motion.p variants={itemVariants} style={{ color: 'var(--text-muted)', fontSize: 'var(--body-size)', marginBottom: '2.5rem', maxWidth: '650px', lineHeight: '1.8' }}>
            I aspire to create innovative AI solutions that inspire and transform the future. Specialized in Natural Language Processing, Computer Vision, and intelligent agentic systems.
          </motion.p>
          
          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn btn-primary">
              Let's Talk <ArrowRight size={20} />
            </a>
            <a href="#projects" className="btn btn-outline">
              <Terminal size={20} /> View Work
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}
      >
        <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', letterSpacing: '2px', textTransform: 'uppercase' }}>Scroll</span>
        <div className="animate-float">
          <Mouse size={24} style={{ color: 'var(--accent-cyan)' }} />
        </div>
      </motion.div>
    </section>
  );
}
