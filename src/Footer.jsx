import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      {/* Top section with links */}
      <div className="bg-white py-3 border-top">
        <Container>
          <Row className="text-center">
            <Col xs={4} md={2} className="mb-2">
              <a href="/about-us" className="fw-bold text-dark text-decoration-none">
                About Us
              </a>
            </Col>

            <Col xs={4} md={2} className="mb-2">
              <a href="/how-can-we-help" className="fw-bold text-dark text-decoration-none">
                How can we Help?
              </a>
            </Col>

            <Col xs={4} md={2} className="mb-2">
              <a href="/be-our-guest" className="fw-bold text-dark text-decoration-none">
                Be Our Guest
              </a>
            </Col>


            <Col xs={4} md={2} className="mb-2">
              <a
                href="https://www.instagram.com/24pods1?utm_source=qr&igsh=MWw1d21lMHJkNmJqcQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="fw-bold text-dark text-decoration-none"
              >
                Our Portfolio
              </a>
            </Col>
             <Col xs={4} md={2} className="mb-2">
              <a href="/blogs" className="fw-bold text-dark text-decoration-none">
                Blogs
              </a>
            </Col>

            <Col xs={4} md={2} className="mb-2">
              <a href="/contact-us" className="fw-bold text-dark text-decoration-none">
                Contact Us
              </a>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Bottom section */}
      <div className="footer-bottom">
        <Container>
        <div className="footer-part">
        <div>
          <p className="mb-0 text-white">
          © 2026 24PODS | All rights reserved | Developed by{" "}
          <a
            href="https://digiware.com.au/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Digiware Digital
          </a>
        </p>
        </div>
        <div>
          <div className="footer-social-icons d-flex justify-content-center gap-3 flex-wrap">
          <a
            href="https://www.instagram.com/accounts/login/?next=%2F24pods1&source=omni_redirect"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-dark fs-4"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/people/24-Pods/61579069562747/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-dark fs-4"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.linkedin.com/company/24pods/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-dark fs-4"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://www.youtube.com/@24pods"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-dark fs-4"
          >
            <FaYoutube />
          </a>
        </div>
        </div>
      </div>
      </Container>
      </div>
      
    </footer>
  );
};

export default Footer;