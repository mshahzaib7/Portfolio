import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: "AI Strategy and Automation Associate",
    company: "Zas Financials Ltd",
    location: "United Kingdom",
    date: "12/2025 – Current",
    points: [
      "Led AI automation projects that improved financial decision making efficiency.",
      "Built and deployed ML models solving high impact financial challenges.",
      "Transformed complex business problems into scalable AI solutions.",
      "Collaborated with senior leaders to align AI strategy with business objectives.",
      "Delivered data driven insights that shaped operational and strategic outcomes.",
      "Evaluated and integrated emerging AI technologies into financial systems for measurable impact."
    ]
  },
  {
    role: "Natural Language Processing Intern",
    company: "Elevvo Pathways",
    location: "Egypt",
    date: "10/2025",
    points: [
      "Specialized in Natural Language Processing transforming raw text into meaningful insights.",
      "Advanced preprocessing, sentiment analysis, and entity recognition.",
      "Leveraged Python and Machine Learning to drive AI powered language understanding."
    ]
  },
  {
    role: "Machine Learning Engineer",
    company: "NextGenLearners",
    location: "Pakistan",
    date: "07/2025 – 08/2025",
    points: [
      "Developed expertise in supervised and unsupervised learning mastering regression, classification, clustering, and model evaluation using Python libraries.",
      "Executed end to end Machine Learning projects from data preprocessing to model optimization and hyperparameter tuning."
    ]
  },
  {
    role: "Data Science Intern",
    company: "Arch Technologies",
    location: "Pakistan",
    date: "07/2025 – 08/2025",
    points: [
      "Collected and prepared data, performing analysis, and building predictive models.",
      "Created clear visualizations and dashboards to communicate insights.",
      "Collaborated on workflow automation and model deployment."
    ]
  },
  {
    role: "AI Intern",
    company: "Dione",
    location: "Pakistan",
    date: "06/2024 – 08/2024",
    points: [
      "Developed and fine tuned AI models for object detection and OCR, optimizing YOLO models for custom datasets.",
      "Built Deep Learning solutions using PyTorch and TensorFlow and integrated them into production with RESTful APIs."
    ]
  }
];

// Highlight important keywords to make reading effortless
const highlightText = (text: string) => {
  const keywords = ['AI', 'ML', 'Machine Learning', 'Natural Language Processing', 'NLP', 'Python', 'PyTorch', 'TensorFlow', 'YOLO', 'RESTful APIs', 'Deep Learning', 'Data Science', 'automation', 'predictive models'];
  
  let result = text;
  keywords.forEach(keyword => {
    const regex = new RegExp(`\\b(${keyword})\\b`, 'gi');
    result = result.replace(regex, '<span style="color: var(--accent-cyan); font-weight: 600;">$1</span>');
  });
  
  return <span dangerouslySetInnerHTML={{ __html: result }} />;
};

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: { 
      height: '100%', 
      transition: { 
        duration: 2, 
        ease: "easeInOut" as const 
      } 
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -40, scale: 0.9 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1, 
      transition: { 
        type: "spring" as const, 
        stiffness: 120, 
        damping: 12 
      } 
    }
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      rotate: 0, 
      transition: { 
        type: "spring" as const, 
        stiffness: 120, 
        damping: 12 
      } 
    }
  };

  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <h2 className="gradient-text">Work Experience</h2>
             <div style={{ position: 'relative', marginTop: '3rem', paddingLeft: '0.5rem' }}>
            
            {/* Animated Main Timeline Line */}
            <motion.div 
              variants={lineVariants}
              style={{
                position: 'absolute',
                left: '21px',
                top: '0',
                width: '3px',
                background: 'linear-gradient(to bottom, var(--accent-cyan) 0%, var(--accent-purple) 50%, transparent 100%)',
                borderRadius: '5px',
                zIndex: 0
              }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {experiences.map((exp, idx) => (
                <div key={idx} style={{ position: 'relative', paddingLeft: '4.5rem' }}>
                  
                  {/* Timeline Dot (Pulsing Orbit Effect) */}
                  <motion.div 
                    variants={dotVariants}
                    style={{ 
                      position: 'absolute', 
                      left: '7px', 
                      top: '20px', 
                      width: '28px', 
                      height: '28px', 
                      borderRadius: '50%', 
                      background: 'var(--bg-primary)',
                      border: '3px solid var(--accent-cyan)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 20px rgba(120, 194, 173, 0.4)',
                      zIndex: 1,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-purple)' }} />
                  </motion.div>
                  
                  {/* Experience Card */}
                  <motion.div 
                    variants={cardVariants}
                    className="glass-card"
                    style={{ 
                      position: 'relative', 
                      padding: '2rem',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                      borderTop: '1px solid rgba(255,255,255,0.08)',
                      borderLeft: '1px solid rgba(255,255,255,0.08)'
                    }}
                    whileHover={{ 
                      y: -5, 
                      scale: 1.01,
                      boxShadow: '0 20px 40px -15px rgba(120, 194, 173, 0.2)',
                      borderColor: 'rgba(120, 194, 173, 0.3)'
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.2rem' }}>
                      <div style={{ flex: '1 1 300px' }}>
                        <h3 style={{ color: 'var(--text-main)', fontSize: 'var(--h3-size)', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.8rem', letterSpacing: '-0.5px' }}>
                          <Briefcase size={20} style={{ color: 'var(--accent-magenta)' }} /> {exp.role}
                        </h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '0.3rem' }}>
                          <h4 style={{ color: 'var(--accent-purple)', fontFamily: 'var(--font-mono)', fontSize: '1rem', margin: 0 }}>{exp.company}</h4>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                            <MapPin size={12} /> {exp.location}
                          </span>
                        </div>
                      </div>
                      <span style={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        color: 'var(--text-main)', 
                        fontSize: '0.85rem', 
                        fontFamily: 'var(--font-mono)',
                        padding: '0.4rem 1rem', 
                        background: 'rgba(120, 194, 173, 0.05)', 
                        borderRadius: '30px', 
                        border: '1px solid rgba(120, 194, 173, 0.2)',
                        whiteSpace: 'nowrap'
                      }}>
                        <Calendar size={12} style={{ color: 'var(--accent-cyan)' }} /> {exp.date}
                      </span>
                    </div>
                    
                    <ul style={{ color: 'var(--text-muted)', paddingLeft: '1.2rem', marginTop: '1.5rem', listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                      {exp.points.map((point, i) => (
                        <li key={i} style={{ position: 'relative', lineHeight: '1.6', fontSize: '1rem' }}>
                          <span style={{ position: 'absolute', left: '-1.2rem', top: '0.5rem', width: '5px', height: '5px', borderRadius: '50%', background: 'var(--glass-border)' }}></span>
                          {highlightText(point)}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
