import { Link } from "react-router-dom"
function Downloads() {
    return(
        
        <div style={{ color: "#4CAF50", height: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "lightblue" ,marginLeft:"50%" ,marginRight:"-30%"}}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>Downloads</h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>Explore and download our available files.</p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <a href="/path-to-file-1.pdf" style={{ padding: "10px 20px", fontSize: "18px", background: "#ff9800", color: "white", textDecoration: "none", borderRadius: "4px", cursor: "pointer", marginRight: "10px" }}>File 1</a>
        <a href="/path-to-file-2.pdf" style={{ padding: "10px 20px", fontSize: "18px", background: "#ff9800", color: "white", textDecoration: "none", borderRadius: "4px", cursor: "pointer" }}>File 2</a>
      </div>
      <Link to="/" style={{ marginTop: "20px", padding: "10px 20px", fontSize: "18px", background: "#ff9800", color: "white", textDecoration: "none", borderRadius: "4px", cursor: "pointer" }}>Back To Home</Link>
    </div>
    )
}
export default Downloads;