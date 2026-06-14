import { motion } from 'framer-motion';

const projects = [
  {
    title: "Hand Gesture Rehabilitation System",
    description: "Tracks hand gestures in real time with precision to support physical therapy through interactive exercises. Detects grasp, pinch, stretch, and swipe gestures with adaptive levels.",
    tags: ["Computer Vision", "Real-time Tracking", "Interactive"],
    image: `${import.meta.env.BASE_URL}hand-gesture-rehab.png`
  },
  {
    title: "Enhanced Brick Breaker (Face Control)",
    description: "Multi-level progression game with multiple power-ups, particle effects, and a separate camera thread for low latency face tracking controls.",
    tags: ["Python", "OpenCV", "Game Development"],
    image: `${import.meta.env.BASE_URL}brick-breaker.png`
  },
  {
    title: "ClearSlot NHS AI Appointment Platform",
    description: "AI powered NHS outpatient intelligence platform that predicts DNA (Did Not Attend) risk using XGBoost ML, automates smart backfill with reserve list management, and delivered a 30% DNA reduction saving £27.5M annually per Trust.",
    tags: ["Machine Learning", "XGBoost", "FHIR API", "NHS", "HealthTech"],
    image: `${import.meta.env.BASE_URL}NHS.png`
  },
  {
    title: "Rippled Reef Operating System",
    description: "Professional grade aquarium OS for reef enthusiasts. Track, analyze, and perfect your aquatic ecosystem with precision parameter monitoring, intelligent alerts, and a clean real-time dashboard built for serious reef keepers.",
    tags: ["React", "IoT", "Real-time Dashboard", "Aquarium Tech"],
    image: `${import.meta.env.BASE_URL}rippled.png`
  },
  {
    title: "Real Time Facial Recognition",
    description: "Developed a real time facial recognition system using Python and OpenCV. Implemented face detection, feature extraction, and recognition algorithms.",
    tags: ["OpenCV", "Feature Extraction", "Machine Learning"],
    image: `${import.meta.env.BASE_URL}real-time-facial.jpeg`
  },
  {
    title: "RAG Document Chatbot",
    description: "Developed a Retrieval-Augmented Generation (RAG) chatbot using LangChain and LLMs to answer complex queries accurately based on custom document repositories.",
    tags: ["GenAI", "LangChain", "NLP"],
    image: `${import.meta.env.BASE_URL}rag-document-chatbot.png`
  },
  {
    title: "COVID-19 Detection System",
    description: "Created a computer vision pipeline utilizing Convolutional Neural Networks (CNNs) to analyze chest X-rays for rapid and reliable COVID-19 screening.",
    tags: ["CNN", "Computer Vision", "Healthcare AI"],
    image: `${import.meta.env.BASE_URL}covid19-detection.jpeg`
  },
  {
    title: "Smart City Big Data Analytics",
    description: "Built a comprehensive data analytics dashboard for smart city metrics, processing vast amounts of urban data to predict traffic and energy consumption.",
    tags: ["Big Data", "Data Visualization", "Predictive Modeling"],
    image: `${import.meta.env.BASE_URL}smart-city-analytics.png`
  },
  {
    title: "3D Dental STL Processing System",
    description: "Built a fast, CPU based 3D modeling system for automated STL processing. Features real time interactive controls to generate hybrid structures and iBars with precision cuts and automated gap generation.",
    tags: ["3D Modeling", "Computational Geometry", "CAD"],
    image: `${import.meta.env.BASE_URL}dental.png`
  },
  {
    title: "Rule Based System For Examination",
    description: "Engineered a robust rule based expert system for automated examination evaluation and dynamic grading, minimizing human error.",
    tags: ["Expert Systems", "Automation", "Python"],
    image: `${import.meta.env.BASE_URL}rule-based-system.jpeg`
  },
  {
    title: "Cash And Carry Billing System",
    description: "Full featured billing system in Java enabling item scanning, dynamic cart updates, tax/discount calculations, and automatic invoice generation.",
    tags: ["Java", "System Design", "Inventory Management"],
    image: `${import.meta.env.BASE_URL}billing-system.jpeg`
  },
  {
    title: "Intelligent Python Chatbot",
    description: "Intelligent chatbot using Python for automated user interactions, implementing Natural Language Processing to understand and respond to user queries.",
    tags: ["NLP", "Python", "Conversational AI"],
    image: `${import.meta.env.BASE_URL}python-chatbot.jpeg`
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6, 
            ease: "easeOut" as const 
          }}
        >
          <h2 className="gradient-text">Featured Projects</h2>
          
          <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2.5rem', marginTop: '3rem' }}>
            {projects.map((project, idx) => (
              <motion.div 
                key={idx}
                className="glass-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.1, 
                  type: "spring" as const, 
                  stiffness: 120, 
                  damping: 12 
                }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(120, 194, 173, 0.15)', borderColor: 'rgba(120, 194, 173, 0.3)' }}
                style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: 0, overflow: 'hidden' }}
              >
                {/* Project Image */}
                <div style={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(18, 20, 23, 0.3)', zIndex: 1, transition: 'background 0.3s' }} className="image-overlay"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                    className="project-image"
                  />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(to top, var(--bg-secondary), transparent)', zIndex: 2 }}></div>
                </div>

                {/* Project Details */}
                <div style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', flex: 1, background: 'linear-gradient(to bottom, var(--bg-secondary), transparent)' }}>
                  <h3 style={{ color: 'var(--text-main)', fontSize: 'var(--h3-size)', marginBottom: '0.8rem', lineHeight: '1.3' }}>{project.title}</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6', fontSize: '1rem' }}>{project.description}</p>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        style={{ 
                          fontSize: '0.7rem', 
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--accent-cyan)', 
                          background: 'rgba(120, 194, 173, 0.05)',
                          padding: '0.3rem 0.7rem',
                          borderRadius: '20px',
                          border: '1px solid rgba(120, 194, 173, 0.15)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .glass-card:hover .project-image {
          transform: scale(1.05);
        }
        .glass-card:hover .image-overlay {
          background: rgba(18, 20, 23, 0.1) !important;
        }
      `}</style>
    </section>
  );
}
