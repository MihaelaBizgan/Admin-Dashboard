import "./datatable.scss";
import { userColumns } from "../../datatablesource";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { firestore } from "../../firebase";

function Datatable() {
  const [data, setData] = useState([]);
  //const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    // const fetchData = async () => {
    //   let list = [];
    //   try {
    //     const querySnapshot = await getDocs(collection(firestore, "users"));
    //     querySnapshot.forEach((doc) => {
    //       list.push({ id: doc.id, ...doc.data() });
    //     });
    //     setData(list);
    //     console.log(list);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // fetchData();

    // LISTEN (REALTIME)
    const unsub = onSnapshot(
      collection(firestore, "users"),
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

  const handleDelete = async (id) => {
    try {
      if (window.confirm("Are you sure you want to delete this user?")) {
        await deleteDoc(doc(firestore, "users", id));
        setData(data.filter((item) => item.id !== id));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Edit user",
      width: 280,
      renderCell: (params) => {
        return (
          <div>
            {/* <button className="userListView">View</button> */}
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <VisibilityIcon className="userListView" />
            </Link>
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];
  return (
    <div className="userList">
      <div className="datatableTitle">
        Add new user
        <Link
          to="/users/new"
          style={{ textDecoration: "none" }}
          className="link"
        >
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        disableRowSelectionOnClick
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
}

export default Datatable;
