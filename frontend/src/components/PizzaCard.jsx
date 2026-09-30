const formatPrice = (price) =>
  new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(price);

const PizzaCard = ({ pizza }) => {
  return (
    <article className="pizza-card">
      <div className="pizza-card__image-wrapper">
        <img src={pizza.img} alt={`Pizza ${pizza.name}`} className="pizza-card__image" />
      </div>

      <div className="pizza-card__body">
        <h3>{pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}</h3>
        <p className="pizza-card__description">{pizza.desc}</p>

        <div className="ingredients">
          {pizza.ingredients.map((ingredient) => (
            <span key={ingredient}>{ingredient}</span>
          ))}
        </div>

        <div className="pizza-card__footer">
          <strong>{formatPrice(pizza.price)}</strong>
          <button type="button">Añadir al carrito</button>
        </div>
      </div>
    </article>
  );
};

export default PizzaCard;
