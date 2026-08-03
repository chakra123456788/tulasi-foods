import "./Contact.css";


function Contact(){

  return(

    <section className="contact-section">


      <div className="contact-container">


        <h1>
          Tulasi Foods Franchise
        </h1>


        <p className="contact-tagline">
          Premium Pani Puri Business Partnership
        </p>



        <div className="contact-card">


          <div className="contact-logo">
            🥘
          </div>



          <h2>
            Tulasi Foods
          </h2>



          <h3>
            Business Partner : R. Bhanu
          </h3>



          <div className="contact-info">


            <p>
              📍 <b>Branch Location</b>
              <br/>
              KR Puram, Bengaluru, Karnataka
            </p>



            <p>
              📞 <b>Contact Number</b>
              <br/>
              +91 81060 56022
            </p>



          </div>



          <div className="contact-buttons">


            <a 
              href="tel:+918106056022"
              className="call-button"
            >
              📞 Call Now
            </a>



            <a
              href="https://wa.me/918106056022"
              className="whatsapp-button"
            >
              🟢 WhatsApp Chat
            </a>


          </div>


        </div>


      </div>


    </section>

  );

}


export default Contact;