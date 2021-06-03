import React from "react";
import Grid from "@material-ui/core/Grid";
import List from "../component/list";
import { DataLiqueur } from "../data/dataLiqueur";

const Vin = () => {
  return <List data={DataLiqueur} />;
};
export default Vin;
