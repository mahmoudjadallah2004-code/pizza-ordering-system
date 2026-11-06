import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span>WELCOME TO PIZZA HOUSE</span>
        <h1>THE PERFECT PIZZA FOR EVERY MOMENT</h1>
        <p>
          Discover delicious pizzas made with fresh ingredients
          and unforgettable flavors.
        </p>
        <Link to="/order" className="primary-btn">
          ORDER NOW
        </Link>
      </div>
    </section>
  );
}

export default Home;