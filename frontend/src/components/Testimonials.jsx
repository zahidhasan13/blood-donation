import React from 'react';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">What People Are Saying</h2>
      <div className="testimonial-cards">
        <div className="testimonial">
          <p>"Donating blood was a rewarding experience. I felt like I made a real difference!"</p>
          <h3>- John Doe</h3>
        </div>
        <div className="testimonial">
          <p>"The staff was very friendly, and the process was quick and easy."</p>
          <h3>- Jane Smith</h3>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;