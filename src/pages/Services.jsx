function Services() {
  return (
    <section className="page-section">
      <span className="section-label">WHAT WE OFFER</span>
      <h1>OUR SERVICES</h1>

      <div className="services-grid">
        <div className="service-card">
          <h2>Menu Display</h2>
          <p>Browse our different pizza varieties and prices.</p>
        </div>

        <div className="service-card">
          <h2>Shopping Cart</h2>
          <p>Add pizzas, change quantities, and review your order.</p>
        </div>

        <div className="service-card">
          <h2>Order Tracking</h2>
          <p>View the status of your submitted order.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;