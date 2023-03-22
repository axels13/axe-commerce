import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <main className="footer__flex">
        <div className="footer__links">
          <ul>
            <li>About</li>
            <li>Store locator</li>
            <li>FAQS</li>
            <li>News</li>
            <li>Careers</li>
            <li>Coontact Us</li>
          </ul>
        </div>

        <div>
          <span>Desing by Axel Cadona</span>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
