import React from "react";

import DetailSection from "../components/DetailSection";
import ProductsSection from "../components/ProductsSection";
import SubmitSection from "../components/SubmitSection";

const Home = () => {
  return (
    <div className="container-fluid">
      <h5>Create Order</h5>
      <div className="card mb-4">
        <div className="card-body">
          <DetailSection />
          <hr></hr>
          <ProductsSection />
          <hr></hr>
          <SubmitSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
