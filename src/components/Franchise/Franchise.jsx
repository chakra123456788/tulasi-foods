import "./Franchise.css";

function Franchise() {
  return (
    <section id="enquiry" className="franchise">
      <h1>🥘 Tulasi Foods Franchise</h1>

      <p className="franchise-subtitle">
        Bringing Authentic Bangarpet Pani Puri Taste Across Locations
      </p>

      <div className="franchise-container">
        <div className="franchise-card">
          <div className="franchise-shop">🏪</div>

          <h2>KR Puram</h2>

          <p>Bengaluru, Karnataka</p>

          <span>Official Franchise Outlet</span>
        </div>

        <div className="franchise-card">
          <div className="franchise-shop">🏪</div>

          <h2>Kotha Peta</h2>

          <p>Rayachoty, Andhra Pradesh</p>

          <span>Official Franchise Outlet</span>
        </div>
      </div>

      {/* Enquiry Form */}

      <div className="enquiry-form">
        <h2>Franchise Enquiry Form</h2>

        <form>
          <input
            type="text"
            placeholder="Full Name"
            required
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            required
          />

          <input
            type="text"
            placeholder="City"
            required
          />

          <textarea
            rows="5"
            placeholder="Tell us why you want a Tulasi Foods Franchise"
          ></textarea>

          <button type="submit">
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}

export default Franchise;