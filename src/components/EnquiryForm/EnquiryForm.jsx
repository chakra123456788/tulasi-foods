import { useState } from "react";
import "./EnquiryForm.css";

function EnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    place: "Bengaluru",
    quantity: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const phone = value.replace(/\D/g, "").slice(0, 10);

      setForm({
        ...form,
        phone,
      });

      return;
    }

    setForm({
      ...form,
      [name]: value,
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
        alert(
          "✅ Thank you!\n\nYour enquiry has been received successfully.\n\nOur Tulasi Foods team will contact you within 24 hours."
        );

        setForm({
          name: "",
          phone: "",
          email: "",
          product: "",
          place: "Bengaluru",
          quantity: "",
          message: "",
        });
      } else {
        alert(data.message || "Failed to submit enquiry.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="enquiry-section">
      <div className="enquiry-card">
        <h1>Order & Franchise Enquiry</h1>

        <p>Fill your details and our team will contact you.</p>

        <form onSubmit={submitForm}>
          <div className="row">
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="Full Name"
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              value={form.phone}
              placeholder="Mobile Number"
              onChange={handleChange}
              maxLength={10}
              pattern="[0-9]{10}"
              title="Enter a valid 10-digit mobile number"
              required
            />
          </div>

          <div className="row">
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="Email Address"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="place"
              value={form.place}
              placeholder="Franchise Interested Place"
              onChange={handleChange}
              required
            />
          </div>

          <select
            name="product"
            value={form.product}
            onChange={handleChange}
            required
          >
            <option value="">Select Product</option>
            <option value="Pani Puri Box">Pani Puri Box</option>
            <option value="Masala Puri Mix">Masala Puri Mix</option>
            <option value="Nippat Masala">Nippat Masala</option>
            <option value="Complete Franchise">Complete Franchise</option>
            <option value="All Products">All Products</option>
          </select>

          <input
            type="text"
            name="quantity"
            value={form.quantity}
            placeholder="Required Materials (Example: 10 Pani Puri Boxes)"
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            rows="5"
            value={form.message}
            placeholder="Any Requirements / Queries"
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