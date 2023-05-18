
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ color: "#4CAF50", textAlign: "center", height: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "lightblue", marginLeft:"250px" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>Today is the day</h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>Page not found!</p>
      <Link to="/" style={{ padding: "10px 20px", fontSize: "18px", background: "#ff9800", color: "white", textDecoration: "none", borderRadius: "4px", cursor: "pointer" }}>Back To Home</Link>
    </div>
  );
}

export default NotFound;
