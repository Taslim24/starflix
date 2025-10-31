// src/Components/Footer.jsx
import React from "react";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer
            style={{
                backgroundColor: "#0b1622", // dark blackish-blue background
                color: "#ccc", // light grey text
                padding: "15px 40px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "14px",
                borderTop: '1px solid #1a2a3a'
            }}
        >
            <p style={{ margin: 0 }}>© 2025 StarFlix. All Rights Reserved.</p>
            <button
                onClick={scrollToTop}
                style={{
                    background: "none",
                    border: "none",
                    color: "#00AEEF", // Using StarFlix blue for the button
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "bold",
                    transition: 'color 0.2s',
                }}
                onMouseOver={(e) => e.target.style.color = 'white'}
                onMouseOut={(e) => e.target.style.color = '#00AEEF'}
            >
                Back to top ↑
            </button>
        </footer>
    );
};

export default Footer;
