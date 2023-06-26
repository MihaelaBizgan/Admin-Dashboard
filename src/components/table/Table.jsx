import React, { useState, useEffect } from "react";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { firestore } from "../../firebase";
import { firedb } from "../../firebase";
import { productColumns } from "../../data";
import {
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  collection,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Table1 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const querySnapshot = await firestore.collection("products").get();
    //       const fetchedData = querySnapshot.docs.map((doc) => doc.data());
    //       setData((rows) => [...rows, ...fetchedData]); // Merge fetched data with initial rows
    //     } catch (error) {
    //       console.error("Error fetching data:", error);
    //     }
    //   };

    //   fetchData();
    // }, []);
    const unsub = onSnapshot(
      collection(firestore, "products"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
        console.log(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  const handleEdit = async (id) => {
    try {
      const productRef = doc(firestore, "products", id);
      const productDoc = await getDoc(productRef);

      if (productDoc.exists()) {
        const updatedData = {
          price: productDoc.data().price + 100,
          // Add more fields to update as needed
        };

        await updateDoc(productRef, updatedData);
        console.log(
          `Product with ID ${productColumns.id} successfully updated.`
        );
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleViewClick = (id) => {
    // Navigate to view product page
    // You can replace this with your own navigation logic
    console.log(`View Product: /products/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      if (window.confirm("Are you sure you want to delete this product?")) {
        await deleteDoc(doc(firestore, "products", id));
        setData((data) => data.filter((item) => item.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Edit product",
      width: 280,
      renderCell: (params) => {
        return (
          <div>
            {/* <button className="userListView">View</button> */}
            <Link
              to={`/products/${params.id}`}
              style={{ textDecoration: "none" }}
            >
              <VisibilityIcon
                className="viewIcon"
                onClick={() => handleViewClick(params.id)}
              />
            </Link>
            <Link
              to={`/products/${params.id}`}
              style={{ textDecoration: "none" }}
            >
              <EditIcon
                className="editIcon"
                onClick={() => handleEdit(params.id)}
              />
            </Link>
          </div>
        );
      },
    },
  ];

  // const actionColumns = [
  //   {
  //     field: "view",
  //     headerName: "View",
  //     width: 120,
  //     renderCell: (params) => (
  //       <Link to={`/products/${params.id}`}>
  //         <VisibilityIcon className="viewIcon" onClick={handleViewClick} />
  //       </Link>
  //     ),
  //   },
  //   {
  //     field: "edit",
  //     headerName: "Edit",
  //     width: 120,
  //     renderCell: (params) => {
  //       return (
  //         <Link to={`/products/edit/${params.data.id}`}>
  //           <EditIcon className="editIcon" onClick={handleEdit} />
  //         </Link>
  //       );
  //     },
  //   },
  // ];

  return (
    <div className="tableContainer">
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell" id="head">
                ID
              </TableCell>
              <TableCell className="tableCell" id="head">
                Product
              </TableCell>
              <TableCell className="tableCell" id="head">
                Product Group
              </TableCell>
              <TableCell className="tableCell" id="head">
                Product Subgroup
              </TableCell>
              <TableCell className="tableCell" id="head">
                Price
              </TableCell>
              <TableCell className="tableCell" id="head">
                Product details
              </TableCell>
              <TableCell className="tableCell" id="head">
                Edit/View
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productColumns.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell" width={"10px"} align="center">
                  {row.id}
                </TableCell>
                <TableCell className="tableCell" align="center" width={"180px"}>
                  <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.product}
                  </div>
                </TableCell>
                <TableCell className="tableCell" align="center" width={"120px"}>
                  {row.productGroup}
                </TableCell>
                <TableCell className="tableCell" align="center" width={"120px"}>
                  {row.productSubgroup}
                </TableCell>
                <TableCell className="tableCell" align="center" width={"80px"}>
                  <span className={`status ${row.price}`}>{row.price}</span>
                </TableCell>
                <TableCell className="tableCell" align="center" width={"540px"}>
                  <span className={`status ${row.description}`}>
                    {row.description}
                  </span>
                </TableCell>
                <TableCell className="tableCell" align="center" width={"100px"}>
                  {actionColumn.map((column) =>
                    column.renderCell({ data: row })
                  )}
                </TableCell>
              </TableRow>
            ))}
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell" width={"10px"} align="center">
                  {row.id}
                </TableCell>
                <TableCell className="tableCell" align="center" width={"180px"}>
                  <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.product}
                  </div>
                </TableCell>
                <TableCell className="tableCell" align="center" width={"120px"}>
                  {row.productGroup}
                </TableCell>
                <TableCell className="tableCell" align="center" width={"120px"}>
                  {row.productSubgroup}
                </TableCell>
                <TableCell className="tableCell" align="center" width={"80px"}>
                  <span className={`status ${row.price}`}>{row.price}</span>
                </TableCell>
                <TableCell className="tableCell" align="center" width={"540px"}>
                  <span className={`status ${row.description}`}>
                    {row.description}
                  </span>
                </TableCell>
                <TableCell className="tableCell" align="center" width={"100px"}>
                  {actionColumn.map((column) =>
                    column.renderCell({ id: row.id, ...row })
                  )}
                </TableCell>
                {/* Render other table cells for fetched data */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Table1;
