import { useEffect, useState } from "react";
import PizzaCard from "./PizzaCard";

const API_URL = "http://localhost:5000/api/pizzas";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getPizzas = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        setPizzas(data);
      } catch (err) {
        setError(
          "No se pudieron cargar las pizzas. Verifica que el backend esté ejecutándose en http://localhost:5000."
        );
      } finally {
        setLoading(false);
      }
    };

    getPizzas();
  }, []);

  return (
    <main>
      <section className="hero" id="inicio">
        <div className="hero__content">
          <p className="eyebrow">Pizzería Mamma Mía</p>
          <h1>Las mejores pizzas, directamente desde nuestra cocina.</h1>
          <p>
            Descubre nuestra selección de pizzas preparadas con ingredientes
            frescos y mucho sabor.
          </p>
          <a className="hero__button" href="#pizzas">Ver nuestras pizzas</a>
        </div>
      </section>

      <section className="pizza-section" id="pizzas">
        <div className="section-heading">
          <p className="eyebrow">Nuestro menú</p>
          <h2>Elige tu pizza favorita</h2>
          <p>Información obtenida directamente desde nuestra API.</p>
        </div>

        {loading && <p className="status">Cargando pizzas...</p>}

        {error && (
          <div className="error-box" role="alert">
            <strong>Ups, ocurrió un problema.</strong>
            <span>{error}</span>
          </div>
        )}

        {!loading && !error && (
          <div className="pizza-grid">
            {pizzas.map((pizza) => (
              <PizzaCard key={pizza.id} pizza={pizza} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Home;
