import React from "react";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Table1 = () => {
  const rows = [
    {
      sapId: 1,
      product: "DA 1200 wall inlet",
      img: "https://www.skov.com/media/orfnz0vy/air-inlet-da-1200-wall-inlet-3d-product-drawing.png?width=800&format=webp",
      productGroup: "Air Inlets",
      productSubgroup: "Wall inlets",
      price: 3435,
      description:
        "DA 1200 bricked-in wall inlets are suitable for concrete and brick houses and available for various wall thicknesses. The inlets require no additional support in connection with bricking in or fixing inlets in walls.",
    },
    {
      sapId: 2,
      product: "DA 3800 wall inlet",
      img: "https://www.skov.com/media/ovhjrdmt/air-inlet-da-3800-3d-product-drawing.png?width=800&format=webp",
      productGroup: "Air Inlets",
      productSubgroup: "Wall inlets",
      price: 7815,
      description:
        "DA 3800 is a high-capacity wall inlet that combines correct minimum ventilation during cold periods with high performance and a good chill effect during hot periods.  The DA 3800, with Advanced Flow Control (optional without), maintains excellent pressure stability at all ventilation ranges.",
    },
    {
      sapId: 3,
      product: "DOL 532 climate controller",
      img: "https://www.skov.com/media/hs1bvr25/poultry-dol-539-controller-3d-product-drawing.png?width=800&format=webp",
      productGroup: "Climate and production controler",
      productSubgroup: "Controller",
      price: 7685,
      description:
        "DOL 532 T is a climate controller specially developed for simple tunnel houses. Its functionality is reduced compared to the other DOL 53X variants, in that the focus is on the functions used in tropical and subtropical areas. Several factors make DOL 532 T especially suited for use under these climate conditions.",
    },
    {
      sapId: 4,
      product: "Combi-Tunnel",
      img: "https://www.skov.com/media/mf2d2xs1/combitunnel-w-chimney-17k_summer.png?width=800&format=webp",
      productGroup: "Climate and production controler",
      productSubgroup: "Controller",
      price: 5785,
      description:
        "Combi-Tunnel is a fully automatic all-weather system that provides the poultry the best possible productivity conditions when the outside temperature changes from very cold to very hot.",
    },
    {
      sapId: 5,
      product: "DA 10K/17K tunnel inlet",
      img: "https://www.skov.com/media/fzfijgny/air-inlet-da-17k-tunnel-inlet-3d-product-drawing.png?width=800&format=webp",
      productGroup: "Air inlets",
      productSubgroup: "Tunnel opening",
      price: 3785,
      description:
        "DA 17K The tunnel inlet is used as an air inlet in houses with Tunnel ventilation or Combi-Tunnel ventilation. It can be mounted directly in interior walls or sandwich panels and is available both with high-insulated inlet flaps made from PVC (polyvinyl chloride) with insulation and with semiinsulated inlet flaps made from PVC (polyvinyl chloride).",
    },
  ];
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
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.sapId}>
                <TableCell className="tableCell" width={"10px"} align="center">
                  {row.sapId}
                </TableCell>
                <TableCell className="tableCell" align="center" width={"150px"}>
                  <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.product}
                  </div>
                </TableCell>
                <TableCell className="tableCell" align="center" width={"100px"}>
                  {row.productGroup}
                </TableCell>
                <TableCell className="tableCell" align="center" width={"90px"}>
                  {row.productSubgroup}
                </TableCell>
                <TableCell className="tableCell" align="center" width={"80px"}>
                  <span className={`status ${row.price}`}>{row.price}</span>
                </TableCell>
                <TableCell className="tableCell" align="center" width={"340px"}>
                  <span className={`status ${row.description}`}>
                    {row.description}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Table1;
