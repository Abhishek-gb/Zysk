import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import boltshiftLogo from './Images/boltshiftLogo.png'; 
import lightboxLogo from './Images/lightboxLogo.png';
import featherdevLogo from './Images/featherdevLogo.png';
import spheruleLogo from './Images/Spherule.png';
import globalbankLogo from './Images/globalbankLogo.png';
import nietzscheLogo from './Images/nietzscheLogo.png';

const CompanyLogos = () => {
  return (
    <section className="mt-5">
      <Container>
        <div className="text-center mb-4">
          <p>Join 4,000+ companies already growing</p>
        </div>
        <Row className="logo-row">
          <Col md={2} sm={4} xs={6} className="text-center mb-3">
            <img src={boltshiftLogo} alt="Boltshift Logo" className='w-100'/>
          </Col>
          <Col md={2} sm={4} xs={6} className="text-center mb-3">
            <img src={lightboxLogo} alt="Lightbox Logo"  className='w-100'/>
          </Col>
          <Col md={2} sm={4} xs={6} className="text-center mb-3">
            <img src={featherdevLogo} alt="FeatherDev Logo"  className='w-100'/>
          </Col>
          <Col md={2} sm={4} xs={6} className="text-center mb-3">
            <img src={spheruleLogo} alt="Spherule Logo"  className='w-100'/>
          </Col>
          <Col md={2} sm={4} xs={6} className="text-center mb-3">
            <img src={globalbankLogo} alt="GlobalBank Logo"  className='w-100'/>
          </Col>
          <Col md={2} sm={4} xs={6} className="text-center mb-3">
            <img src={nietzscheLogo} alt="Nietzsche Logo"  className='w-100'/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CompanyLogos;
