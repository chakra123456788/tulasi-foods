import "./Hero.css";

function Hero() {
  const enquiryClick = () => {
    document.getElementById("enquiry")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const whatsappClick = () => {
    window.open(
      "https://wa.me/918106056022?text=Hello%20Tulasi%20Foods,%20I%20am%20interested%20in%20your%20franchise.%20Please%20share%20the%20details.",
      "_blank"
    );
  };

  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-text">
          <span className="tag">
            🍽 Premium Food Franchise
          </span>

          <h1>
            Grow Your Business With
            <br />
            <span>Tulasi Foods</span>
          </h1>

          <p>
            India's trusted Pani Puri franchise with authentic taste,
            premium ingredients and complete business support.
          </p>

          <div className="buttons">
            <button
              onClick={enquiryClick}
              className="primary"
            >
              Start Franchise
            </button>

            <button
              onClick={whatsappClick}
              className="secondary"
            >
              WhatsApp Us
            </button>
          </div>

          <div className="stats">
            <div>
              <h2>₹3L+</h2>
              <p>Starting Setup</p>
            </div>

            <div>
              <h2>50+</h2>
              <p>Happy Partners</p>
            </div>

            <div>
              <h2>100%</h2>
              <p>Quality</p>
            </div>
          </div>
        </div>

        <div className="offer-card">
          <h3>Franchise Offer</h3>

          <h2>Complete Setup</h2>

          <p>
            ✔ Products Supply
            <br />
            ✔ Training Support
            <br />
            ✔ Marketing Help
            <br />
            ✔ Business Guidance
          </p>

          <button onClick={enquiryClick}>
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;