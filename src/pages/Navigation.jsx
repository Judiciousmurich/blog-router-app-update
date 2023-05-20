
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div style={{ color: "#4CAF50", height: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "lightblue" , marginLeft:"50%" ,marginRight:"-30%"}}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>Navigation</h1>
      <Link to="/" style={{ padding: "10px 20px", fontSize: "18px", background: "#ff9800", color: "white", textDecoration: "none", borderRadius: "4px", cursor: "pointer" }}>Back To Home</Link>
    </div>
  );
}

export default Navigation;
