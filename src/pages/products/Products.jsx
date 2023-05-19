import React from "react";
import "./products.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Table from "../../components/table/Table";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="productsList">
      <Sidebar />
      <div className="container">
        <Navbar />
        <br />
        <div className="products">
          <div className="datatableTitle">
            Skov products database
            <Link
              to="/products/new"
              style={{ textDecoration: "none" }}
              className="link"
            >
              Add New Product
            </Link>
          </div>

          <Table />
          <br />
          <br />
          <br />
          <br />
        </div>

        <Footer className="footer" />
      </div>
    </div>
  );
};

export default Products;
