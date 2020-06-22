import React from "react";
import OrderForm from "./OrderForm";
import "antd/dist/antd.css";
import "./index.css";

const DragPage = () => {
  return (
    <div className="box-wrapper-grid">
      <div className="box">
        <OrderForm />
      </div>
    </div>
  );
};

export default DragPage;
