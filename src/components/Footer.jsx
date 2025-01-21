import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1rem",
        backgroundColor: "rgba(33,37,41,1)",
        position: "fixed",
        bottom: 0,
        width: "100%",
        color: "white",
      }}
    >
      Made with <span style={{ color: "red" }}>❤️</span> by Aditya Amaiya
    </footer>
  );
};

export default Footer;
