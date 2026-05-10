import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "PMAS Arid University",
    location: "Rawalpindi, Pakistan | EQF level 6",
    description: "Specialized in Artificial Intelligence. Applied machine learning, natural language processing, and advanced programming concepts in diverse projects.",
    icon: "🎓"
  },
  {
    degree: "FSc Pre-Engineering",
    institution: "Milestone College",
    location: "Rawalpindi, Pakistan | EQF level 4",
    description: "Core science and engineering foundations with a focus on mathematics and physics.",
    icon: "🏫"
  }
];

const certificationsData = [
  { title: "Natural Language Processing Intern", issuer: "Eleevo Pathways", date: "10/2025" },
  { title: "Machine Learning Engineer", issuer: "NextGenLearners", date: "08/2025" },
  { title: "Data Science Intern", issuer: "Arch Technologies", date: "08/2025" },
  { title: "Data Analyst", issuer: "Deloitte", date: "06/2025" }
];

export default function Education() {
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
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="education" className="section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <h2 className="gradient-text">Education & Certifications</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', marginTop: '4rem' }}>
            
            {/* Education Column */}
            <motion.div variants={containerVariants}>
              <h3 style={{ color: 'var(--text-main)', fontSize: '1.8rem', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <GraduationCap size={32} style={{ color: 'var(--accent-cyan)' }} /> Education
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {educationData.map((edu, idx) => (
                  <motion.div 
                    key={idx}
                    variants={itemVariants}
                    className="glass-card"
                    whileHover={{ y: -5, borderColor: 'rgba(120, 194, 173, 0.3)' }}
                    style={{ position: 'relative' }}
                  >
                    <h4 style={{ color: 'var(--accent-cyan)', fontSize: '1.3rem', marginBottom: '0.5rem' }}>{edu.degree}</h4>
                    <p style={{ color: 'var(--text-main)', fontWeight: 600, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                       {edu.institution}
                    </p>
                    <p style={{ color: 'var(--accent-purple)', fontSize: '0.9rem', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <MapPin size={14} /> {edu.location}
                    </p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                      {edu.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications Column */}
            <motion.div variants={containerVariants}>
              <h3 style={{ color: 'var(--text-main)', fontSize: '1.8rem', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Award size={32} style={{ color: 'var(--accent-purple)' }} /> Certifications
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {certificationsData.map((cert, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={itemVariants}
                    className="glass-card" 
                    whileHover={{ scale: 1.02, x: 5, borderColor: 'rgba(229, 184, 140, 0.3)' }}
                    style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}
                  >
                    <div style={{ flex: 1 }}>
                      <h4 style={{ color: 'var(--text-main)', fontSize: '1.15rem', marginBottom: '0.3rem' }}>{cert.title}</h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', opacity: 0.8 }}>{cert.issuer}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ 
                        color: 'var(--accent-cyan)', 
                        fontFamily: 'var(--font-mono)', 
                        fontSize: '0.85rem',
                        background: 'rgba(120, 194, 173, 0.1)',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '20px',
                        border: '1px solid rgba(120, 194, 173, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem'
                      }}>
                        <Calendar size={12} /> {cert.date}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
