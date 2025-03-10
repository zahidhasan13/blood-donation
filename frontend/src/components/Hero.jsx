

const Hero = ({isModalOpen, setIsModalOpen}) => {
  
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Donate Blood, Save Lives</h1>
        <p className="hero-subtitle">
          Your single donation can save up to three lives. Join us in making a difference today!
        </p>
        <button onClick={()=> setIsModalOpen(!isModalOpen)} className="hero-button">Become a Donor</button>
      </div>
   
    </section>
  );
};

export default Hero;