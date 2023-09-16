import Form from "components/Form";
import Header from "../../components/header/Header";
import Footer from "components/Footer";
import React from "react";

const national = () => {
  return (
    <div>
       <div className="about-header">
        <Header />
      </div>
      <div style={{marginTop:"5.3rem"}}>
      <Form />
      </div>
      <Footer/>
    </div>
  );
};

export default national;
