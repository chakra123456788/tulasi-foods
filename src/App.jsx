import Hero from "./components/Hero/Hero";
import Franchise from "./components/Franchise/Franchise";
import Products from "./components/Products/Products";
import EnquiryForm from "./components/EnquiryForm/EnquiryForm";
import Contact from "./components/Contact/Contact";


function App() {

  return (

    <>

      {/* Company Header */}
      <Hero />


      {/* Franchise Locations */}
      <Franchise />


      {/* Products Section */}
      <Products />


      {/* Customer Enquiry */}
      <EnquiryForm />


      {/* Contact Section */}
      <Contact />

    </>

  );

}


export default App;