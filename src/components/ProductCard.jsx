import { useNavigate } from "react-router-dom";
const ProductCard = (props) => {
    const navigate = useNavigate();
  return (
    <article className="product-card" onClick={() => navigate(`/products/${props.id}`)}>
      <div className="product-card__image">
          <img
              src={props.image}
              alt={props.title}
              loading="lazy"
          />

          <button
              className={
                  props.isFavorite
                      ? "product-card__favorite active"
                      : "product-card__favorite"
              }
              onClick={(event) => {
                  event.stopPropagation();
                  props.onFavoriteClick(props.id);
              }}
              type="button"
          >
              <i
                  className={
                      props.isFavorite
                          ? "fa-solid fa-heart"
                          : "fa-regular fa-heart"
                  }
              ></i>
          </button>

          <span className="product-card__view">
              View Dish
          </span>
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