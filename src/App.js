import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { DarkModeContext } from "./context/darkModeContext";
import { useContext } from "react";
import Products from "./pages/products/Products";
import Register from "./pages/register/Register";
import { AuthContext } from "./context/AuthContext";
// import handleSubmit from "./handles/handlesubmit";
// import { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // const dataRef = useRef();
  // const submithandler = (event) => {
  //   event.preventDefault();
  //   handleSubmit(dataRef.current.value);
  //   dataRef.current.value = "";
  // };

  const { darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  // console.log(currentUser);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      {/* <form onSubmit={submithandler}>
        <input type="text" ref={dataRef} />
        <button type="submit">Save</button>
      </form> */}
      <BrowserRouter>
        <Routes>
          {/* login path */}
          <Route path="/login" element={<Login />}></Route>
          {/* main path */}
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          ></Route>

          <Route path="/register" element={<Register />}></Route>
          <Route path="users">
            <Route
              index
              element={
                <RequireAuth>
                  <List />
                </RequireAuth>
              }
            />
            <Route
              path=":userId"
              element={
                <RequireAuth>
                  <Single />
                </RequireAuth>
              }
            />
            <Route
              path="new"
              element={
                <RequireAuth>
                  <New inputs={userInputs} title="Add New User" />
                </RequireAuth>
              }
            />
          </Route>
          <Route path="products">
            <Route
              index
              element={
                <RequireAuth>
                  <Products />
                </RequireAuth>
              }
            />
            <Route
              path=":productId"
              element={
                <RequireAuth>
                  <Single />
                </RequireAuth>
              }
            />
            <Route
              path="new"
              element={
                <RequireAuth>
                  <New inputs={productInputs} title="Add New Product" />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
