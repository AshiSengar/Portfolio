function PortfolioExperience() {
  return (
    <section id="experience" style={{ padding: "60px", color: "white" }}>
      
      {/* Heading */}
      <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
        Experience
      </h2>

      {/* Card */}
      <div
        style={{
          background: "#1e1e2f",
          padding: "25px",
          borderRadius: "12px",
          marginTop: "10px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          lineHeight: "1.6"
        }}
      >
        {/* Title */}
        <h3 style={{ color: "#00bcd4" }}>
          Infosys Springboard — Virtual Internship
        </h3>

        {/* Basic Info */}
        <p><b>Role:</b> AI Intern</p>
        <p><b>Project:</b> Concept Clarity (AI-driven Learning Platform)</p>
        <p><b>Duration:</b> Jan 2025 – Feb 2026</p>

        {/* Work Description */}
        <ul style={{ marginTop: "10px" }}>
          <li>
            Developed an AI-driven learning platform, "Concept Clarity", focused on simplifying complex concepts into clear and structured explanations
  </li>
  <li>
    Designed the platform to provide concise, easy-to-understand content, reducing information overload for learners
  </li>
  <li>
    Built a level-based learning approach to adapt explanations according to different understanding levels
  </li>
  <li>
    Focused on improving user experience through intuitive interaction and clear content presentation
  </li>
  <li>
    Gained practical exposure to building structured solutions and understanding real-world problem solving
  </li>
  
  <li>
    Successfully completed the internship and earned certification
  </li>
        </ul>

        {/* Certificate Button */}
        <p style={{ marginTop: "15px" }}>
          <a
            href="https://drive.google.com/file/d/10x8ONn9dI4HNye7FD5fSAxpYlu9hcqZm/view?usp=drive_link"
            target="_blank"
            style={{
              color: "#00bcd4",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            View Certificate →
          </a>
        </p>

      </div>
    </section>
  );
}

export default PortfolioExperience;
