import "./WhyChoose.css";

function WhyChoose(){

  const features = [
    {
      icon:"🥗",
      title:"Premium Quality",
      text:"Fresh ingredients and authentic street food taste."
    },
    {
      icon:"🏪",
      title:"Complete Setup",
      text:"We help you start your pani puri business easily."
    },
    {
      icon:"🎓",
      title:"Training Support",
      text:"Complete guidance for preparation and operations."
    },
    {
      icon:"📈",
      title:"Business Growth",
      text:"Marketing and franchise support for success."
    }
  ];


  return(

    <section className="why">


      <div className="why-image">

        <img
          src="/preparation.jpg"
          alt="Food Preparation"
        />

      </div>



      <div className="why-content">


        <h2>
          Why Choose Tulasi Foods?
        </h2>


        <p>
          Build your own successful pani puri franchise
          with our trusted products and business support.
        </p>



        <div className="features">


        {
          features.map((item,index)=>(

            <div className="feature" key={index}>

              <span>
                {item.icon}
              </span>

              <div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </div>

            </div>

          ))
        }


        </div>


      </div>


    </section>

  );

}


export default WhyChoose;