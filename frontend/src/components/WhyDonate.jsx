import React from 'react';

const WhyDonate = () => {
  return (
    <section className="why-donate">
      <h2 className="why-donate-title">Why Donate Blood?</h2>
      <div className="why-donate-cards">
        <div className="card">
          <h3>Save Lives</h3>
          <p>Your donation can save up to three lives.</p>
        </div>
        <div className="card">
          <h3>Health Benefits</h3>
          <p>Donating blood can reduce the risk of heart disease.</p>
        </div>
        <div className="card">
          <h3>Community Impact</h3>
          <p>Help ensure a steady blood supply for your community.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyDonate;