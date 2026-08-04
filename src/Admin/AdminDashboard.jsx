import { useEffect, useState } from "react";

function AdminDashboard() {

  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    fetch("https://tulasi-foods-backend.onrender.com/api/enquiry")
      .then((res) => res.json())
      .then((data) => {

        setOrders(data);
        setLoading(false);

      })
      .catch((error) => {

        console.log(error);
        setLoading(false);

      });

  }, []);



  const filteredOrders = orders.filter((customer) => {

    return (
      customer.name
        .toLowerCase()
        .includes(search.toLowerCase())
        ||
      customer.phone.includes(search)
    );

  });



  return (

    <section className="admin-dashboard">


      <h1>
        📊 Tulasi Foods Admin Dashboard
      </h1>



      <div className="total-box">

        Total Enquiries : {orders.length}

      </div>



      <input

        type="text"

        placeholder="🔍 Search by Name or Phone"

        value={search}

        onChange={(e)=>setSearch(e.target.value)}

        style={{
          width:"100%",
          padding:"15px",
          margin:"20px 0",
          borderRadius:"10px",
          border:"1px solid #ddd",
          fontSize:"16px"
        }}

      />



      {
        loading ? (

          <h3>
            Loading enquiries...
          </h3>

        )

        :

        filteredOrders.length === 0 ? (

          <h3>
            No enquiries received yet
          </h3>

        )

        :

        (

          filteredOrders.map((customer)=>(


            <div

              className="customer-card"

              key={customer._id}

            >


              <h2>
                👤 {customer.name}
              </h2>



              <p>
                📞 Phone: {customer.phone}
              </p>



              <p>
                📧 Email: {customer.email}
              </p>



              <p>
                🍽 Product: {customer.product}
              </p>



              <p>
                📦 Required Materials: {customer.quantity}
              </p>



              <p>
                📍 Franchise Interested Place: {customer.place}
              </p>



              <p>
                💬 Any Requirements / Queries: {customer.message || "No message"}
              </p>



              <p>
                📅 Submitted On:{" "}
                {new Date(customer.createdAt).toLocaleString()}
              </p>


            </div>


          ))

        )

      }



    </section>

  );

}


export default AdminDashboard;