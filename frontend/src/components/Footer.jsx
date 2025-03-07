import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Blood Donation. All rights reserved.</p>
        <div className="social-links">
          <a href="#facebook">Facebook</a>
          <a href="#twitter">Twitter</a>
          <a href="#instagram">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;