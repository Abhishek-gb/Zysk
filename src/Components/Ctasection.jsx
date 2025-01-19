import React from 'react';
import './Catsection.css';

const Ctasection = () => {
  return (
    <div className="cta-container bg-light">
      <h1>Start your free trial</h1>
      <p>Join over 4,000+ startups already growing with Untitled</p>
      <div className="button-group">
        <button className="btn btn-light">Learn more</button>
        <button className="btn btn-danger">Get started</button>
      </div>
    </div>
  );
};

export default Ctasection;
