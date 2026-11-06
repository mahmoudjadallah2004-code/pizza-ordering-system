function MenuCard({ pizza, addToCart }) {
  return (
    <div className="menu-card">
      <img src={pizza.image} alt={pizza.name} />

      <div className="menu-card-content">
        <span className="category">{pizza.category}</span>
        <h3>{pizza.name}</h3>
        <p>{pizza.description}</p>

        <div className="menu-card-bottom">
          <strong>${pizza.price.toFixed(2)}</strong>
          <button onClick={() => addToCart(pizza)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;