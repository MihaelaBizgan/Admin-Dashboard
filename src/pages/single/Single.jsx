import React from "react";
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Table1 from "../../components/table/Table";
import Footer from "../../components/footer/Footer";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="/images/users/LEO.JPG" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Teo Smart</h1>
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">leo@skov.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone: </span>
                  <span className="itemValue">+45 1234586</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Location: </span>
                  <span className="itemValue">Glyngøre, Management Dep.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User's transactions (last 6 months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <Table1 />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Single;
