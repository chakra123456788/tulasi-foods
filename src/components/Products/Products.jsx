import "./Products.css";

function Products() {

  const products = [

    {
      name: "Pani Puri Box",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxTRzuUX9QqEDNe9S__stCfebxdKUUIYqT9S5mvy-MNw&s=10",
      desc:
        "Authentic Bangarpet-style pani puri with premium quality ingredients.",
      price:
        "Material Cost: ₹500 Per Box"
    },


    {
      name: "Masala Puri Mix",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1k6GqIyfxsyr87QCV-GAZ3SLQNOD7RH203J3zF-kcw&s=10",
      desc:
        "Traditional South Indian masala puri mix with rich flavours.",
      price:
        "Material Cost: ₹500 Per Pack"
    },


    {
      name: "Nippat Masala",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT01aJbUUGV2MLzTEZq0G_ZAu2nUkG1nFuDn9TnSwu79Q&s=10",
      desc:
        "Crunchy and spicy nippat masala made with quality ingredients.",
      price:
        "Material Cost: ₹500 Per Pack"
    }

  ];



  return (

    <section className="products-section">


      {/* Franchise Offer */}

      <div className="franchise-price-box">

        <h2>
          🚀 Start Your Tulasi Foods Franchise
        </h2>


        <h1>
          ₹3,00,000
        </h1>


        <p>
          Complete Franchise Setup Starting From
        </p>


        <span>
          Products Supply • Training Support • Marketing Guidance
        </span>


      </div>





      {/* Products Section */}

      <h1>
        Our Special Products
      </h1>



      <div className="product-row">


        {
          products.map((product, index) => (


            <div
              className="product-card"
              key={index}
            >


              <img
                src={product.image}
                alt={product.name}
                className="food-image"
              />



              <h2>
                {product.name}
              </h2>



              <p>
                {product.desc}
              </p>



              <h3>
                {product.price}
              </h3>



              <button>
                Order Now
              </button>



            </div>


          ))
        }


      </div>


    </section>

  );

}


export default Products;