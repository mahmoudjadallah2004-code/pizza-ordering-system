function CartItem({ item, increase, decrease, remove }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />

      <div className="cart-item-info">
        <h4>{item.name}</h4>
        <p>${item.price.toFixed(2)}</p>

        <div className="quantity-controls">
          <button onClick={() => decrease(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => increase(item.id)}>+</button>
        </div>
      </div>

      <div className="cart-item-actions">
        <strong>
          ${(item.price * item.quantity).toFixed(2)}
        </strong>
        <button className="remove-btn" onClick={() => remove(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;