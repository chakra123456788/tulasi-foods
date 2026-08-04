import { useState } from "react";
import "./EnquiryForm.css";


function EnquiryForm(){

const [form,setForm] = useState({

name:"",
phone:"",
email:"",
product:"",
place:"",
quantity:"",
message:""

});



const handleChange = (e)=>{

setForm({

...form,

[e.target.name]: e.target.value

});

};





const submitForm = async (e)=>{

e.preventDefault();


try{


const response = await fetch(
"http://localhost:5000/api/enquiry",
{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify(form)

}

);



const data = await response.json();


console.log(data);


alert("Enquiry Submitted Successfully!");



setForm({

name:"",
phone:"",
email:"",
product:"",
place:"",
quantity:"",
message:""

});


}

catch(error){

console.log(error);

alert("Something went wrong");

}


};





return(

<section className="enquiry-section">


<div className="enquiry-card">


<h1>
Order & Franchise Enquiry
</h1>


<p>
Fill your details and our team will contact you
</p>



<form onSubmit={submitForm}>


<div className="row">


<input

name="name"

value={form.name}

placeholder="Full Name (Example: Ramu Kumar)"

onChange={handleChange}

/>



<input

name="phone"

value={form.phone}

placeholder="Mobile Number (Example: +91 9897989778)"

onChange={handleChange}

/>


</div>




<div className="row">


<input

name="email"

value={form.email}

placeholder="Email Address (Example: ramu@gmail.com)"

onChange={handleChange}

/>



<input

name="place"

value={form.place}

placeholder="Franchise Place (Example: Bengaluru)"

onChange={handleChange}

/>


</div>





<select

name="product"

value={form.product}

onChange={handleChange}

>


<option value="">
Select Product
</option>


<option>
All Products
</option>


<option>
Pani Puri
</option>


<option>
Masala Puri
</option>


<option>
Nippat Masala
</option>


<option>
Franchise
</option>


</select>





<input

name="quantity"

value={form.quantity}

placeholder="Quantity Required (Example: 10 Boxes)"

onChange={handleChange}

/>





<textarea

name="message"

value={form.message}

placeholder="Write your requirements"

onChange={handleChange}

/>





<button type="submit">

Submit Enquiry

</button>



</form>


</div>


</section>


)

}


export default EnquiryForm;