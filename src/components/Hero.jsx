const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__content" data-aos="fade-right">
            <h1 className="hero__title">We provide the best food for you</h1>

            <p className="hero__text">
              Discover a unique dining experience where culinary mastery meets
              an elegant, cozy ambiance. We carefully craft every dish using
              only the freshest seasonal ingredients, rich traditional flavors,
              and a modern touch designed to satisfy every taste and create
              unforgettable moments.
            </p>

            <div className="hero__actions">
              <button className="btn btn--primary">Menu</button>
              <button className="btn btn--secondary">Book a table</button>
            </div>

            <div className="hero__socials">
              <a href="#" className="hero__social-link">
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a href="#" className="hero__social-link">
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a href="#" className="hero__social-link">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;