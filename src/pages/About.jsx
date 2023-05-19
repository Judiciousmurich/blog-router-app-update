
import { Link } from 'react-router-dom';

function About() {
  return (
    <div style={{ color: "#4CAF50", height: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "lightblue", marginLeft:"400px"}}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>About</h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>Learn more about our company and mission.</p>
      <Link to="/" style={{ padding: "10px 20px", fontSize: "18px", background: "#ff9800", color: "white", textDecoration: "none", borderRadius: "4px", cursor: "pointer" }}>Back To Home</Link>
    </div>
  );
}

export default About;
