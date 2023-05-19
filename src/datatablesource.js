export const userColumns = [
  { field: "id", headerName: "ID", width: 80 },
  {
    field: "username",
    headerName: "User",
    width: 250,
    renderCell: (params) => {
      return (
        <div className="userListUser">
          <img className="userListImg" src={params.row.avatar} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    type: "string",
    width: 270,
  },
  {
    field: "phone",
    headerName: "Phone number",
    type: "string",
    width: 250,
  },
  {
    field: "country",
    headerName: "Country",
    type: "string",
    width: 200,
    // renderCell: (params) => {
    //   return (
    //     <div className={`cellWithStatus ${params.row.country}`}>
    //       {params.row.country}
    //     </div>
    //   );
    // },
  },
  {
    field: "department",
    headerName: "Department",
    type: "text",
    width: 250,
  },
];
//temporary data
export const userRows = [
  {
    id: 1,
    username: "AN",
    avatar: "/images/users/AKN.PNG",
    department: "HR",
    usertype: "Passiv user",
    status: "active",
  },
  {
    id: 2,
    username: "NB",
    avatar: "/images/users/NBO.JPG",
    department: "Finance DBT",
    usertype: "Super Admin",
    status: "active",
  },
  {
    id: 3,
    username: "SO",
    avatar: "/images/users/SOH.JPG",
    department: "R&D",
    usertype: "Super Admin",
    status: "active",
  },
  {
    id: 4,
    username: "MC",
    avatar: "/images/users/MMC.jpg",
    department: "R&D/System SW",
    usertype: "Passiv user",
    status: "inactive",
  },
  {
    id: 5,
    username: "MB",
    avatar: "/images/users/MBI.JPG",
    department: "R&D/Management Software",
    usertype: "Passiv user",
    status: "active",
  },
  {
    id: 6,
    username: "KM",
    avatar: "/images/users/KMN.jpg",
    department: "R&D/Manuals",
    usertype: "Super Admin",
    status: "inactive",
  },
  {
    id: 7,
    username: "JD",
    avatar: "/images/users/JDI.jpg",
    department: "Markets/SKOV Academy",
    usertype: "Admin",
    status: "inactive",
  },
  {
    id: 8,
    username: "MG",
    avatar: "/images/users/MGE.jpg",
    department: "Sales/Markets",
    usertype: "Admin",
    status: "active",
  },
  {
    id: 9,
    username: "LØ",
    avatar: "/images/users/LEO.JPG",
    department: "Management",
    usertype: "Passiv user",
    status: "active",
  },
  {
    id: 10,
    username: "MG",
    avatar: "/images/users/MGE.jpg",
    department: "Sales/Markets",
    usertype: "Admin",
    status: "active",
  },
  // {
  //   id: 11,
  //   username: "LØ",
  //   avatar: "/images/users/LEO.JPG",
  //   department: "Management",
  //   usertype: "Passiv user",
  //   status: "inactive",
  // },
  // {
  //   id: 12,
  //   username: "MG",
  //   avatar: "/images/users/MGE.jpg",
  //   department: "Sales/Markets",
  //   usertype: "Admin",
  //   status: "active",
  // },
];
