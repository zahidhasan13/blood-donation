import React from 'react';

const CTA = ({isModalOpen, setIsModalOpen}) => {
  return (
    <section className="cta">
      <h2 className="cta-title">Ready to Make a Difference?</h2>
      <p className="cta-text">Join us today and become a lifesaver.</p>
      <button onClick={()=> setIsModalOpen(!isModalOpen)} className="cta-button">Become a Donor Now!</button>
    </section>
  );
};

export default CTA;