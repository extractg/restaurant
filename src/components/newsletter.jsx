const Newsletter = () =>{
    return(
<section className="newsletter">
  <div className="container">
    <div className="newsletter__inner" data-aos="fade-up">
      <div className="newsletter__content">
        <span className="newsletter__label">Stay Connected</span>

        <h2 className="newsletter__title">
          A Taste of Deliciora,<br />
          Delivered to You
        </h2>

        <p className="newsletter__text">
          Be the first to discover seasonal menus, private dining events,
          and special evenings at Deliciora.
        </p>

        <form className="newsletter__form">
          <input
            type="email"
            className="newsletter__input"
            placeholder="Your email address"
            aria-label="Email address"
            required
          />

          <button type="submit" className="newsletter__button">
            Join the List
          </button>
        </form>

        <span className="newsletter__note">
          No spam. Only something worth opening.
        </span>
      </div>
    </div>
  </div>
</section>
    );
};
export default Newsletter