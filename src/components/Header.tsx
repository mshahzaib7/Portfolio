import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
          background: scrolled ? 'rgba(18, 20, 23, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
          transition: 'all 0.3s ease',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        {/* Logo / Name */}
        <a href="#home" style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none', letterSpacing: '1px' }}>
          MSK<span style={{ color: 'var(--text-muted)' }}>.ai</span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: 'flex', gap: '2rem' }}>
          {navItems.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              style={{
                color: 'var(--text-main)',
                textDecoration: 'none',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                fontWeight: 500,
                letterSpacing: '1px',
                position: 'relative',
                padding: '0.5rem 0'
              }}
              whileHover="hover"
              initial="rest"
            >
              {item.name}
              <motion.div
                variants={{
                  rest: { width: 0, opacity: 0 },
                  hover: { width: '100%', opacity: 1 }
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  height: '2px',
                  background: 'var(--accent-cyan)',
                  borderRadius: '2px'
                }}
              />
            </motion.a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '8px',
            padding: '0.5rem',
            cursor: 'pointer',
            color: 'var(--text-main)',
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              top: '70px',
              left: 0,
              right: 0,
              zIndex: 99,
              background: 'rgba(18, 20, 23, 0.98)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              padding: '1.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}
          >
            {navItems.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                style={{
                  color: 'var(--text-main)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1rem',
                  fontWeight: 500,
                  padding: '0.8rem 1rem',
                  borderRadius: '10px',
                  display: 'block',
                  transition: 'background 0.2s, color 0.2s'
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(120, 194, 173, 0.08)';
                  (e.currentTarget as HTMLElement).style.color = 'var(--accent-cyan)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                  (e.currentTarget as HTMLElement).style.color = 'var(--text-main)';
                }}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
