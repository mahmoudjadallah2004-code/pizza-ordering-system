import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting Pizza House!");

    setForm({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section className="page-section contact-page">
      <span className="section-label">GET IN TOUCH</span>
      <h1>CONTACT US</h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          required
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Your Email"
          required
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <textarea
          placeholder="Your Message"
          required
          value={form.message}
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
        />

        <button type="submit">SEND MESSAGE</button>
      </form>
    </section>
  );
}

export default Contact;