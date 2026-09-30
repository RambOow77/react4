const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__brand">
        <span className="navbar__icon" aria-hidden="true">🍕</span>
        <span>Pizzería Mamma Mía</span>
      </div>

      <nav className="navbar__links" aria-label="Navegación principal">
        <a href="#inicio">Home</a>
        <a href="#pizzas">Pizzas</a>
      </nav>

      <button className="cart-button" type="button" aria-label="Carrito de compras">
        🛒 <span>Carrito</span>
      </button>
    </header>
  );
};

export default Navbar;
