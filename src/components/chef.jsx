import chef from "../assets/images/chef.png";
const Chef = () =>{
    return(
<section className="chef">
  <div className="section-divider" aria-hidden="true"></div>

  <div className="container">
    <div className="chef__inner">
      <div className="chef__image-wrapper" data-aos="fade-right">
        <img
          src={chef}
          alt="Chef Adrian Moreau"
          className="chef__image"
        />
      </div>

      <div className="chef__content" data-aos="fade-left">
        <span className="chef__label">Meet the Chef</span>

        <h2 className="chef__title">The Craft Behind Every Plate</h2>

        <p className="chef__text">
          Chef Adrian Moreau brings together European tradition and a modern
          approach to seasonal cuisine. His philosophy is simple —
          exceptional ingredients, thoughtful technique, and dishes created
          to be remembered.
        </p>

        <div className="chef__facts">
          <div className="chef__fact">
            <span className="chef__fact-value">12+</span>
            <span className="chef__fact-label">Years Experience</span>
          </div>

          <div className="chef__fact">
            <span className="chef__fact-value">European</span>
            <span className="chef__fact-label">Cuisine</span>
          </div>

          <div className="chef__fact">
            <span className="chef__fact-value">Seasonal</span>
            <span className="chef__fact-label">Menu</span>
          </div>
        </div>

        <button className="btn btn--secondary chef__btn">
          Meet Our Chef
        </button>
      </div>
    </div>
  </div>
</section>
);
};
export default Chef