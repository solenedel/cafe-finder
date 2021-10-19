import React from 'react';

// eslint-disable-next-line
const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <h4>Contact us</h4>
      <div id="footer-content">
        <ul>
          <li>cafe.finder@mail.com</li>
          <div className="credits">
            {/* eslint-disable-next-line */}
          Icons by <a href="https://www.freepik.com" title="Freepik">Freepik </a>
            {/* eslint-disable-next-line */}
          from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com </a> 
          </div>
        </ul>
        <div className="social-icons">
          <i className="fab fa-instagram" />
          <i className="fab fa-twitter" />
          <i className="fab fa-facebook" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
