const DishCard = ({ image, title, description, number }) => {
    return (
        <article className="specials__card">
            <div className="specials__card-image">
                <img
                    src={image}
                    alt={title}
                    className="specials__card-img"
                    draggable="false"
                />

                <span
                    className="specials__card-number"
                    aria-hidden="true"
                >
                    {number}
                </span>
            </div>

            <div className="specials__card-content">
                <h3 className="specials__card-title">
                    {title}
                </h3>

                <p className="specials__card-text">
                    {description}
                </p>

                <span
                    className="specials__card-line"
                    aria-hidden="true"
                ></span>
            </div>
        </article>
    );
};

export default DishCard;