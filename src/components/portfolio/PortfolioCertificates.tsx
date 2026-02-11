import "./styles/style.css";

const PortfolioCertificates = () => {
  return (
    <section className="portfolio-certificates" id="certificates">
      <h2>Certificates</h2>
    
      <div className="certificate-grid">      
        <div className="certificate-card">
          <a href="https://drive.google.com/file/d/12xVZBBoT_SJyYQe3W3Wx3zRL85kyZCcL/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <img src="/Career Essentials in Data Analysis.jpg" alt="Certificate" />
          </a>
          <h3>Career Essentials in Data Analysis</h3>
          <p>Issued by Microsoft And LinkedIn</p>
        </div>

        <div className="certificate-card">
          <a href="https://drive.google.com/file/d/1XBP0Fvt5qbV1z25oLzJLIaKIzHamryOX/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <img src="/AWS Cloud Practitioner.jpg" alt="Certificate" />
          </a>
          <h3>AWS Cloud Practitioner</h3>
          <p>Issued by skillbuilder.aws</p>
        </div>

        <div className="certificate-card">
          <a href="https://drive.google.com/file/d/1LIGzgJIiFm8i7oFj4PT3OgdWSU7CTMac/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <img src="/Software Engineering Job simulation By Forage.jpg" alt="Certificate" />
          </a>
          <h3>Software Engineering</h3>
          <p>Issued by Forage</p>
        </div>

        <div className="certificate-card">
          <a href="https://drive.google.com/file/d/1XX5GZmsif370oYOWndoOnYh-Uhak35Lg/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <img src="/Generative AI Studio Powered By Google Cloud.jpg" alt="Certificate" />
          </a>
          <h3>Generative AI Studio</h3>
          <p>Google Cloud | Simplilearn Skillup </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCertificates;
