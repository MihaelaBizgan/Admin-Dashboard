import React from "react";
import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import Footer from "../../components/footer/Footer";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable type="users" />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </div>
  );
};

export default List;
