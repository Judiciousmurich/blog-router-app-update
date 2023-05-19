
import { Link } from "react-router-dom";

function Header() {
  return (
    <div style={{ width: "100%", borderBottom: "2px solid white",justifyContent:"center" , marginLeft:"200px"}}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "9rem",}}>
        
        <Link to="/navigation" style={{ display: "flex", alignItems: "center", gap: "3px", textDecoration: "none", color: "lightseagreen" }}>
          Navigation
        </Link>
        <Link to="/popular" style={{ display: "flex", alignItems: "center", gap: "3px", textDecoration: "none", color: "lightseagreen" }}>
          Popular
        </Link>
        <Link to="/About" style={{ display: "flex", alignItems: "center", gap: "3px", textDecoration: "none", color: "lightseagreen" }}>
          About
        </Link>
        <Link to="/Downloads" style={{ display: "flex", alignItems: "center", gap: "3px", textDecoration: "none", color: "lightseagreen" }}>
          Downloads
        </Link>
      </div>
      <hr />
    </div>
  );
}

export default Header;
