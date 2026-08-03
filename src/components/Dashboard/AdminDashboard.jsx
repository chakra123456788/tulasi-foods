function AdminDashboard() {

    const orders =
      JSON.parse(localStorage.getItem("orders")) || [];
  
  
    return (
  
      <section className="admin-dashboard">
  
        <h1>
          📊 Tulasi Foods Admin Dashboard
        </h1>
  
  
        <div className="total-box">
  
          Total Enquiries : {orders.length}
  
        </div>
  
  
        {
          orders.length === 0 ? (
  
            <h3>
              No enquiries received yet
            </h3>
  
          ) : (
  
            orders.map((customer,index)=>(
  
              <div 
                className="customer-card"
                key={index}
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
                  📦 Quantity: {customer.quantity}
                </p>
  
  
                <p>
                  📍 Franchise Place: {customer.place}
                </p>
  
  
                <p>
                  💬 Message: {customer.message}
                </p>
  
  
              </div>
  
            ))
  
          )
        }
  
  
      </section>
  
    );
  
  }
  
  
  export default AdminDashboard;