import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">

        {/* LEFT */}
        <div className="footer__brand">
          <h3 className="footer__title">Forosho Insights</h3>
          <p className="footer__subtitle">
            Learn AI, improve your health, — one smart step at a time.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer__links">
          <h4>Explore</h4>
          <ul>
            <li><Link to="https://aiandtechtoday.com">AI & Tech</Link></li>
            <li><Link to="https://bettermindandbody.com/better-body-mind">Better Body & Mind</Link></li>
          </ul>

          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/disclaimer">Disclaimer</Link></li>
          </ul>
        </div>

        {/* SOCIAL OPTIONAL */}
        <div className="footer__social">
          <h4>Connect</h4>
          <ul>
            <li><a href="https://github.com/Forosho89" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href="https://youtube.com/@Forosho89" target="_blank" rel="noreferrer">YouTube</a></li>
          </ul>
        </div>

      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Forosho Insights. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
