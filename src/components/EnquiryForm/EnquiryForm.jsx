import { useState } from "react";
import "./EnquiryForm.css";

function EnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    place: "",
    quantity: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://tulasi-foods-backend.onrender.com/api/enquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("✅ Enquiry Submitted Successfully!");

        setForm({
          name: "",
          phone: "",
          email: "",
          product: "",
          place: "",
          quantity: "",
          message: "",
        });
      } else {
        alert(data.message || "❌ Failed to submit enquiry.");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <section className="enquiry-section">
      <div className="enquiry-card">
        <h1>Order & Franchise Enquiry</h1>

        <p>Fill your details and our team will contact you</p>

        <form onSubmit={submitForm}>
          <div className="row">
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="Full Name (Example: Ramu Kumar)"
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              value={form.phone}
              placeholder="Mobile Number (Example: +91 9897989778)"
              onChange={handleChange}
              required
            />
          </div>

          <div className="row">
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="Email Address (Example: ramu@gmail.com)"
              onChange={handleChange}
            />

            <input
              type="text"
              name="place"
              value={form.place}
              placeholder="Franchise Place (Example: Bengaluru)"
              onChange={handleChange}
            />
          </div>

          <select
            name="product"
            value={form.product}
            onChange={handleChange}
          >
            <option value="">Select Product</option>
            <option value="All Products">All Products</option>
            <option value="Pani Puri">Pani Puri</option>
            <option value="Masala Puri">Masala Puri</option>
            <option value="Nippat Masala">Nippat Masala</option>
            <option value="Franchise">Franchise</option>
          </select>

          <input
            type="text"
            name="quantity"
            value={form.quantity}
            placeholder="Quantity Required (Example: 10 Boxes)"
            onChange={handleChange}
          />

          <textarea
            name="message"
            rows="5"
            value={form.message}
            placeholder="Write your requirements"
            onChange={handleChange}
          />

          <button type="submit">
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}

export default EnquiryForm;