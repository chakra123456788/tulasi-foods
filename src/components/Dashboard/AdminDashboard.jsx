import { useEffect, useState } from "react";
import "./AdminDashboard.css";


function AdminDashboard() {


const [orders,setOrders] = useState([]);



useEffect(()=>{


fetch("http://localhost:5000/api/enquiry")

.then((response)=>response.json())

.then((data)=>{

setOrders(data);

})

.catch((error)=>{

console.log(error);

});


},[]);




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