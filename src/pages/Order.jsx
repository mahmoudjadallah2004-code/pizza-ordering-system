import { useState } from "react";
import menuData from "../data/menuData";
import MenuCard from "../components/MenuCard";
import CartItem from "../components/CartItem";

function Order({ cart, addToCart, increase, decrease, remove, total, placeOrder, orderStatus }) {
  const [trackingNumber, setTrackingNumber] = useState("");

  return (
    <section className="page-section order-page">
      <span className="section-label">OUR MENU</span>
      <h1>ORDER YOUR FAVORITE PIZZA</h1>

      <div className="pizza-grid">
        {menuData.map((pizza) => (
          <MenuCard
            key={pizza.id}
            pizza={pizza}
            addToCart={addToCart}
          />
        ))}
      </div>

      <div className="cart-section">
        <h2>YOUR SHOPPING CART</h2>

        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                increase={increase}
                decrease={decrease}
                remove={remove}
              />
            ))}

            <div className="cart-total">
              <h3>Total: ${total.toFixed(2)}</h3>

              <button onClick={() => placeOrder()}>
                PLACE ORDER
              </button>
            </div>
          </>
        )}
      </div>

      <div className="tracking-section">
        <h2>ORDER TRACKING</h2>

        {orderStatus ? (
          <div className="tracking-result">
            <p><strong>Order:</strong> {orderStatus.id}</p>
            <p><strong>Status:</strong> {orderStatus.status}</p>
            <p><strong>Total:</strong> ${orderStatus.total.toFixed(2)}</p>
          </div>
        ) : (
          <p>No order has been placed yet.</p>
        )}

        <label htmlFor="tracking-number">
          Enter your order number
        </label>

        <input
          id="tracking-number"
          type="text"
          placeholder="Order number"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
        />

        {orderStatus && (
          <button
            onClick={() =>
              alert(
                trackingNumber === orderStatus.id
                  ? `Order status: ${orderStatus.status}`
                  : "Order number not found."
              )
            }
          >
            TRACK ORDER
          </button>
        )}
      </div>
    </section>
  );
}

export default Order;