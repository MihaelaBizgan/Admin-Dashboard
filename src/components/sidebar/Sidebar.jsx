import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
//import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useState } from "react";

//import styled from "styled-components";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen((prevState) => !prevState);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">
            <img
              src="/images/app-icons/icon-application-docs.svg"
              alt="products"
              className="docsIcon"
            />
            Products Admin
          </span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span className="">Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <Person2OutlinedIcon className="icon" />
              <span className="">Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <InventoryOutlinedIcon className="icon" />
              <span className="">Products</span>
            </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <PrecisionManufacturingOutlinedIcon className="icon" />
              <span className="">Spare parts</span>
            </li>
          </Link>
          <p className="title">USEFUL LINKS</p>
          <li>
            <PaidOutlinedIcon className="icon" />
            <span className="">Transactions</span>
          </li>
          <li>
            <ShoppingCartOutlinedIcon className="icon" />
            <span className="">Orders</span>
          </li>
          <li>
            <AutoGraphOutlinedIcon className="icon" />
            <span className="">Analytics</span>
          </li>
          <Link to="/chatBot" style={{ textDecoration: "none" }}>
            {/* <li onClick={toggleChatbot}> */}
            <li>
              <LiveHelpOutlinedIcon className="icon" />
              <span className="">Chatbot Q&A</span>
            </li>
          </Link>
          <p className="title">ACCOUNT</p>
          <li>
            <SendOutlinedIcon className="icon" />
            <span className="">Send invite</span>
          </li>

          <li>
            <SettingsSuggestOutlinedIcon className="icon" />
            <span className="">Settings</span>
          </li>
          <li>
            <ManageAccountsOutlinedIcon className="icon" />
            <span className="">Profile</span>
          </li>
          <li>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <ExitToAppOutlinedIcon className="icon" />
              <span className="">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
