import { motion } from 'framer-motion';

const skills = [
  {
    category: "AI Agents & Generative AI",
    items: ["Agentic Frameworks", "LangChain", "AutoGPT", "LLMs", "RAG", "Tool-using Agents"]
  },
  {
    category: "Natural Language Processing & Computer Vision",
    items: ["NLTK", "spaCy", "OpenCV", "OCR", "Object Detection", "YOLO"]
  },
  {
    category: "Advanced ML & Deep Learning",
    items: ["PyTorch", "TensorFlow", "Keras", "Transformers", "Scikit-learn"]
  },
  {
    category: "AI Infrastructure & Cloud",
    items: ["Docker", "AWS", "GCP", "Kubernetes", "Model Deployment", "ML Pipelines"]
  },
  {
    category: "Data Engineering & Analysis",
    items: ["Python", "Pandas", "NumPy", "SQL", "BigQuery", "Data Preprocessing"]
  },
  {
    category: "Visualization & Insights",
    items: ["Matplotlib", "Seaborn", "Plotly", "Power BI", "Tableau"]
  }
];

const profSkills = [
  "Adaptability & Rapid Learning", 
  "Problem Solving & Analytical Thinking", 
  "Collaboration & Teamwork", 
  "Research & Innovation in AI"
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="gradient-text">Skills & Expertise</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {skills.map((skillGroup, idx) => (
              <motion.div 
                key={idx}
                className="glass-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <h3 style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem', marginBottom: '1.5rem', minHeight: '3rem' }}>{skillGroup.category}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                  {skillGroup.items.map((item, i) => (
                    <span 
                      key={i} 
                      style={{ 
                        background: 'rgba(120, 194, 173, 0.1)', 
                        border: '1px solid rgba(120, 194, 173, 0.3)',
                        padding: '0.4rem 1rem', 
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        color: 'var(--text-main)',
                        transition: 'all 0.3s ease',
                        cursor: 'default'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(120, 194, 173, 0.3)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(120, 194, 173, 0.1)';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.borderColor = 'rgba(120, 194, 173, 0.3)';
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <h3 style={{ color: 'var(--text-main)', fontSize: '1.8rem', marginTop: '4rem', marginBottom: '2rem', textAlign: 'center' }}>Professional Skills</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            {profSkills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--accent-cyan)',
                  padding: '1rem 2rem',
                  borderRadius: '50px',
                  color: 'var(--accent-cyan)',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
