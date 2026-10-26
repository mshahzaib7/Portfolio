import { motion } from 'framer-motion';
import { Presentation, HeartHandshake, MapPin } from 'lucide-react';

const teachingData = [
  {
    role: "Teaching Assistant, Artificial Intelligence and Machine Learning",
    organization: "Barani Institute of Information Technology",
    location: "Rawalpindi, Pakistan",
    icon: Presentation,
    points: [
      "Taught core AI and ML concepts to a class of more than 40 undergraduates over two months.",
      "Led hands on lab sessions in Python, data preprocessing and model building; graded assignments and gave individual feedback on student projects.",
      "Took students with no prior ML experience to the point of building and evaluating their own models."
    ]
  },
  {
    role: "Data Science Outreach Volunteer",
    organization: "Community Outreach",
    location: "Pakistan",
    icon: HeartHandshake,
    points: [
      "Taught Python and exploratory data analysis to 10 beginners and advised them on AI/ML careers."
    ]
  }
];

export default function Teaching() {
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
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section id="teaching" className="section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <h2 className="gradient-text">Teaching & Volunteering</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {teachingData.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-card"
                whileHover={{ y: -5, borderColor: 'rgba(120, 194, 173, 0.3)' }}
              >
                <h3 style={{ color: 'var(--text-main)', fontSize: '1.3rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start', gap: '0.8rem', lineHeight: '1.3' }}>
                  <item.icon size={22} style={{ color: 'var(--accent-magenta)', flexShrink: 0, marginTop: '0.15rem' }} /> {item.role}
                </h3>
                <p style={{ color: 'var(--accent-purple)', fontFamily: 'var(--font-mono)', fontSize: '0.95rem', marginBottom: '0.3rem' }}>{item.organization}</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <MapPin size={12} /> {item.location}
                </p>
                <ul style={{ color: 'var(--text-muted)', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                  {item.points.map((point, i) => (
                    <li key={i} style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
