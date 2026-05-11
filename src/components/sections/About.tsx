import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const LinkedinIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="gradient-text">About Me</h2>
          
          <div className="glass-card" style={{ marginTop: '2rem', display: 'flex', gap: '3rem', flexWrap: 'wrap', alignItems: 'center' }}>
            
            {/* Profile Image Section */}
            <motion.div 
              style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '350px',
                aspectRatio: '3/4',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '2px solid var(--glass-border)',
                boxShadow: '0 0 30px rgba(0, 240, 255, 0.15)',
              }}>
                <img 
                  src={`${import.meta.env.BASE_URL}profile.jpg`} 
                  alt="Muhammad Shahzaib Khan" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 30%)', pointerEvents: 'none' }}></div>
              </div>
            </motion.div>

            {/* Text & Details Section */}
            <div style={{ flex: '2 1 500px' }}>
              <p style={{ fontSize: 'var(--body-size)', color: 'var(--text-main)', marginBottom: '2rem', lineHeight: '1.8' }}>
                I am a Computer Science graduate specialized in Artificial Intelligence, exploring machine learning and NLP. I have developed projects in text analysis and intelligent systems. I aspire to create innovative AI solutions that inspire and transform the future.
              </p>


              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                <div>
                  <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>Location</h4>
                  <p style={{ color: 'var(--text-muted)' }}>Rawalpindi, Pakistan</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>Email</h4>
                  <p style={{ color: 'var(--text-muted)' }}>muhammadshazebb@gmail.com</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>Phone</h4>
                  <p style={{ color: 'var(--text-muted)' }}>(+92) 3335523734</p>
                </div>
              </div>

              {/* Social Links */}
              <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <a href="https://www.linkedin.com/in/sib00" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.8rem 1.5rem', fontSize: '0.9rem' }}>
                  <LinkedinIcon size={18} /> LinkedIn
                </a>
                <a href="https://github.com/mshahzaib7" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.8rem 1.5rem', fontSize: '0.9rem' }}>
                  <GithubIcon size={18} /> GitHub
                </a>
                <a href="https://muhammadshahzaibkhan.medium.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.8rem 1.5rem', fontSize: '0.9rem' }}>
                  <BookOpen size={18} /> Medium
                </a>
              </div>
            </div>

          </div>

          {/* Full-width Statistics Grid */}
          <div className="glass-card" style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', padding: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-cyan)', marginBottom: '0.3rem', fontFamily: 'var(--font-mono)', textShadow: '0 0 20px rgba(120, 194, 173, 0.4)' }}>20+</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 500 }}>Projects Completed</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-purple)', marginBottom: '0.3rem', fontFamily: 'var(--font-mono)', textShadow: '0 0 20px rgba(229, 184, 140, 0.4)' }}>3</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 500 }}>Professional Roles</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-magenta)', marginBottom: '0.3rem', fontFamily: 'var(--font-mono)', textShadow: '0 0 20px rgba(224, 139, 136, 0.4)' }}>15+</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 500 }}>Technologies</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-cyan)', marginBottom: '0.3rem', fontFamily: 'var(--font-mono)', textShadow: '0 0 20px rgba(120, 194, 173, 0.4)' }}>10+</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 500 }}>AI Models Deployed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
