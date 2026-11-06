import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Order from "./pages/Order";

import "./styles.css";

function App() {
  const [cart, setCart] = useState([]);
  const [orderStatus, setOrderStatus] = useState(null);

  const addToCart = (pizza) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === pizza.id);

      if (existing) {
        return prev.map((item) =>
          item.id === pizza.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...pizza, quantity: 1 }];
    });
  };

  const increase = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrease = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const remove = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const placeOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const newOrder = {
      id: "PH" + Date.now().toString().slice(-6),
      status: "Order Received",
      total,
    };

    setOrderStatus(newOrder);
    setCart([]);

    alert("Order placed successfully! Your order number is " + newOrder.id);
  };

  return (
    <BrowserRouter>
      <Navbar cartCount={cartCount} />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="/order"
            element={
              <Order
                cart={cart}
                addToCart={addToCart}
                increase={increase}
                decrease={decrease}
                remove={remove}
                total={total}
                placeOrder={placeOrder}
                orderStatus={orderStatus}
              />
            }
          />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;