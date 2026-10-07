const ProductCard = (props) => {
  return (
    <article className="product-card">
      <div className="product-card__image">
        <img
          src={props.image}
          alt={props.title}
          loading="lazy"
        />

        <button
          className={
            props.isFavorite ? "product-card__favorite active" : "product-card__favorite"
          }
          type="button"
        >
          <i
            className={
              props.isFavorite ? "fa-solid fa-heart" : "fa-regular fa-heart"
            }
          ></i>
        </button>
      </div>

      <div className="product-card__content">
        <span className="product-card__category">
          {props.category}
        </span>

        <h2 className="product-card__title">
          {props.title}
        </h2>

        <span className="product-card__price">
          €{props.price}
        </span>
      </div>
    </article>
  );
};

export default ProductCard;