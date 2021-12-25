import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Container className="text-center">
        <div className="footer-main">
          <div className="our-Brances">
            <h3 className="text-white">Our Brances</h3>
            <p>Dhaka</p>
            <p>Chittagong</p>
            <p>Khulna</p>
            <p>Rajshahi</p>
          </div>
          <div className="quick-Links">
            <h3 className="text-white">Quick Links</h3>
            <p>Home</p>
            <p>Services</p>
            <p>LogIn</p>
            <p>Contact</p>
          </div>
          <div className="follow">
            <h3 className="text-white">Follow Us</h3>
            <p>Facebook</p>
            <p>Linked In</p>
            <p>Instagram</p>
            <p>Twitter</p>
          </div>
        </div>

        <div style={{ borderTop: "3px solid gray" }}>
          <p className="text-white p-3">All Rights Reserved</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
