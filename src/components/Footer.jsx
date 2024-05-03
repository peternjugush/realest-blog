import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        <div style={footerSectionStyle}>
          <h2>About Realest Blog</h2>
          <p>Your brief description about the blog goes here...</p>
          <div style={contactStyle}>
            <span>Contact Us:</span>
            <p>contact@realestblog.com</p>
          </div>
        </div>
        <div style={footerSectionStyle}>
          <h2>Quick Links</h2>
          <ul style={listStyle}>
            <li><a href="home">Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="contact">Contact</a></li>
          </ul>
        </div>
        <div style={footerSectionStyle}>
          <h2>Follow Us</h2>
          <div style={socialLinksStyle}>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div style={footerBottomStyle}>
        &copy; 2024 Realest Blog | Designed by [Your Name]
      </div>
    </footer>
  );
};

export default Footer;

const footerStyle = {
  background: 'black',
  color: 'orange',
  padding: '50px 0',
};

const footerContentStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
};

const footerSectionStyle = {
  flex: 1,
  marginRight: '20px',
};

const contactStyle = {
  marginTop: '15px',
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
};

const socialLinksStyle = {
  display: 'flex',
};

const footerBottomStyle = {
  marginTop: '20px',
  textAlign: 'center',
  background: '#444',
  padding: '10px 0',
};
