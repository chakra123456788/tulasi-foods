function Dashboard(){

    const orders =
    JSON.parse(localStorage.getItem("orders")) || [];
    
    
    return(
    
    <section className="dashboard">
    
    
    <h1>
    📊 Admin Dashboard
    </h1>
    
    
    <h2>
    Total Enquiries : {orders.length}
    </h2>
    
    
    {
    orders.map((item,index)=>(
    
    
    <div className="customer-card" key={index}>
    
    
    <h3>
    👤 {item.name}
    </h3>
    
    
    <p>
    📞 {item.phone}
    </p>
    
    
    <p>
    📧 {item.email}
    </p>
    
    
    <p>
    🍽 Product : {item.product}
    </p>
    
    
    <p>
    📦 Quantity : {item.quantity}
    </p>
    
    
    <p>
    📍 Franchise Place : {item.place}
    </p>
    
    
    <p>
    💬 Message : {item.message}
    </p>
    
    
    </div>
    
    
    ))
    }
    
    
    </section>
    
    )
    
    }
    
    
    export default Dashboard;