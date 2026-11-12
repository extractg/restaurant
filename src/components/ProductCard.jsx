import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProductCard = ({
    id,
    title,
    image,
    category,
    price,
    isFavorite,
    onFavoriteClick,
}) => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const categoryKey = category?.toLowerCase();

    return (
        <article
            className="product-card"
            onClick={() => navigate(`/products/${id}`)}
        >
            <div className="product-card__image">
                <img
                    src={image}
                    alt={title}
                    loading="lazy"
                />

                <button
                    className={
                        isFavorite
                            ? "product-card__favorite active"
                            : "product-card__favorite"
                    }
                    onClick={(event) => {
                        event.stopPropagation();
                        onFavoriteClick(id);
                    }}
                    type="button"
                    aria-label={
                        isFavorite
                            ? t("productCard.removeFavorite")
                            : t("productCard.addFavorite")
                    }
                >
                    <i
                        className={
                            isFavorite
                                ? "fa-solid fa-heart"
                                : "fa-regular fa-heart"
                        }
                    ></i>
                </button>

                <span className="product-card__view">
                    {t("productCard.viewDish")}
                </span>
            </div>

            <div className="product-card__content">
                <span className="product-card__category">
                    {t(
                        `products.categories.${categoryKey}`,
                        {
                            defaultValue: category,
                        },
                    )}
                </span>

                <h2 className="product-card__title">
                    {title}
                </h2>

                <span className="product-card__price">
                    €{price}
                </span>
            </div>
        </article>
    );
};

export default ProductCard;