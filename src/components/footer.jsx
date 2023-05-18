function Footer() {
    const year = new Date().getFullYear();
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%",  paddingTop: "20px",  color: "darkgray", fontSize: "12px" ,marginLeft:"135px"}}>
        <span style={{ marginRight: "10px" }}>Contact Us:</span>
        <a href="mailto:contact@theJitu.com" style={{ color: "#333", textDecoration: "none" }}>contact@theJitu.com</a>
        <span style={{ marginLeft: "10px", marginRight: "10px" }}>|</span>
        <span>&copy; {year} JudithMuthui@theJitu.com. All rights reserved.</span>
      </div>
    );
  }
  
  export default Footer;
  