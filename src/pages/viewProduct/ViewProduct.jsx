import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Table1 from "../../components/table/Table";
import Footer from "../../components/footer/Footer";

const ViewProduct = () => {
  const { productId } = useParams();

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Product name</h1>
            <div className="item">
              <img src="/images/users/LEO.JPG" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">DA 1200</h1>
                <div className="detailItem">
                  <span className="itemKey">Product group: </span>
                  <span className="itemValue">Air inlets</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Product subgroup: </span>
                  <span className="itemValue">Wall inlets</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Description: </span>
                  <span className="itemValue">
                    DA 1200 bricked-in wall inlets are suitable for concrete and
                    brick houses and available for various wall thicknesses. The
                    inlets require no additional support in connection with
                    bricking in or fixing inlets in walls.
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">SAP id: </span>
                  <span className="itemValue">123456</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last added products</h1>
          <Table1 />
        </div>
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </div>
  );
};

export default ViewProduct;
