import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import zysk from './Images/zysk-logo.png';

const Footer = () => {
  return (
    <footer className="py-5 container">
      <Container>
        <Row className='foothed'>
          <Col xs={12} sm={6} md={2}>
            <h5>Product</h5>
            <ul className="list-unstyled">
              <li>Overview</li>
              <li>Features</li>
              <li>Solutions</li>
              <li>Tutorials</li>
              <li>Pricing</li>
              <li>Releases</li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={2}>
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>About us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>News</li>
              <li>Media kit</li>
              <li>Contact</li>
            </ul>
          </Col>

          <Col xs={12} sm={6} md={2}>
            <h5>Resources</h5>
            <ul className="list-unstyled">
              <li>Blog</li>
              <li>Newsletter</li>
              <li>Events</li>
              <li>Help centre</li>
              <li>Tutorials</li>
              <li>Support</li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={2}>
            <h5>Use cases</h5>
            <ul className="list-unstyled">
              <li>Startups</li>
              <li>Enterprise</li>
              <li>Government</li>
              <li>SaaS centre</li>
              <li>Marketplaces</li>
              <li>Ecommerce</li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={2}>
            <h5>Social</h5>
            <ul className="list-unstyled">
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>GitHub</li>
              <li>AngelList</li>
              <li>Dribbble</li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={2}>
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li>Terms</li>
              <li>Privacy</li>
              <li>Cookies</li>
              <li>Licenses</li>
              <li>Settings</li>
              <li>Contact</li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="footer-bottom">
          <Col className="text text-md-left mt-4">
            <img
              src={zysk}
              alt="Zysk Logo"
              style={{ width: '50px', height: '50px', objectFit: 'contain' }}
            />
          </Col>
          <Col className="text-center mt-4">
            <p className="mt-3">© 2077 Zysk Technologies. All rights reserved.</p>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
  .footer-bottom {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    justify-items: start;
    align-items: center;
  }

  .foothed {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
  }

  @media (max-width: 991px) {
    .footer-bottom {
      grid-template-columns: 1fr 1fr;
      justify-items: start;
    }
    .foothed {
      grid-template-columns: 1fr 1fr;
      justify-items: center;
    }
  }

  @media (max-width: 767px) {
    .footer-bottom {
      grid-template-columns: 1fr 1fr;
      justify-items: center;
    }
    .foothed {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
    .footer ul {
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 576px) {
    .footer-bottom {
      grid-template-columns: 1fr 1fr;
      justify-items: center;
    }
    .foothed {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
    .footer ul {
      margin-bottom: 1rem;
    }
  }
`}</style>

    </footer>
  );
};

export default Footer;
