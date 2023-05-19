import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Link
        color="inherit"
        to="https://skov.com/"
        style={{ textDecoration: "none" }}
      >
        <footer className="footer-style">
          <img src="/images/logo-skov-grey.svg" alt="avatar" />
          <p
            className="footerText"
            style={{
              fontSize: "14px",
              fontWeight: "italic",
              color: "#484848",
            }}
          >
            © 2023 Skov A/S - Admin Dashboard
          </p>
        </footer>
      </Link>{" "}
    </div>
  );
};

export default Footer;
