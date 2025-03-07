import React from 'react';

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2 className="how-it-works-title">How It Works</h2>
      <div className="steps">
        <div className="step">
          <span>1</span>
          <h3>Register</h3>
          <p>Sign up as a donor and complete your profile.</p>
        </div>
        <div className="step">
          <span>2</span>
          <h3>Find a Center</h3>
          <p>Locate the nearest blood donation center.</p>
        </div>
        <div className="step">
          <span>3</span>
          <h3>Donate</h3>
          <p>Visit the center and donate blood.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;