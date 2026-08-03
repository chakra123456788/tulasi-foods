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


const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:e.target.value

});

};



const submitForm=(e)=>{

e.preventDefault();


let oldData =
JSON.parse(localStorage.getItem("orders")) || [];


oldData.push(form);


localStorage.setItem(
"orders",
JSON.stringify(oldData)
);


alert("Enquiry Submitted Successfully!");

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

placeholder="Full Name (Example: Ramu Kumar)"

onChange={handleChange}

/>



<input

name="phone"

placeholder="Mobile Number (Example: +91 9897989778)"

onChange={handleChange}

/>


</div>



<div className="row">


<input

name="email"

placeholder="Email Address (Example: ramu@gmail.com)"

onChange={handleChange}

/>



<input

name="place"

placeholder="Franchise Place (Example: Bengaluru)"

onChange={handleChange}

/>


</div>




<select

name="product"

onChange={handleChange}

>

<option>
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

placeholder="Quantity Required (Example: 10 Boxes)"

onChange={handleChange}

/>





<textarea

name="message"

placeholder="Write your requirements"

onChange={handleChange}

/>





<button>

Submit Enquiry

</button>



</form>


</div>


</section>


)

}


export default EnquiryForm;