import { useEffect, useState } from "react";

const API_URL = "http://localhost:5000/api/pizzas/p001";

const formatPrice = (price) =>
  new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(price);

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getPizza = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        setPizza(data);
      } catch (err) {
        setError(
          "No se pudo cargar la pizza. Verifica que el backend esté ejecutándose en http://localhost:5000."
        );
      } finally {
        setLoading(false);
      }
    };

    getPizza();
  }, []);

  if (loading) {
    return <main className="detail-page"><p className="status">Cargando pizza...</p></main>;
  }

  if (error) {
    return (
      <main className="detail-page">
        <div className="error-box" role="alert">
          <strong>Ups, ocurrió un problema.</strong>
          <span>{error}</span>
        </div>
      </main>
    );
  }

  return (
    <main className="detail-page">
      <section className="pizza-detail">
        <div className="pizza-detail__image-wrapper">
          <img src={pizza.img} alt={`Pizza ${pizza.name}`} />
        </div>

        <div className="pizza-detail__content">
          <p className="eyebrow">Pizzería Mamma Mía</p>
          <h1>{pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}</h1>
          <p className="pizza-detail__description">{pizza.desc}</p>

          <h2>Ingredientes</h2>
          <ul>
            {pizza.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>

          <p className="pizza-detail__price">{formatPrice(pizza.price)}</p>
          <button className="detail-button" type="button">Añadir al carrito</button>
        </div>
      </section>
    </main>
  );
};

export default Pizza;
