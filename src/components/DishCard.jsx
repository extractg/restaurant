const DishCard = (props) => {
  return (
    <div className="specials__card">
      <div className="specials__card-image">
        <img
          src={props.image}
          alt={props.title}
          className="specials__card-img"
        />
      </div>

      <div className="specials__card-content">
        <h3 className="specials__card-title">
          {props.title}
        </h3>

        <p className="specials__card-text">
          {props.description}
        </p>

        <span className="specials__card-price">
          €{props.price}
        </span>
      </div>
    </div>
  );
};

export default DishCard;  