import React from "react";
import Grid from "@material-ui/core/Grid";

const List = (props) => {
  const { data } = props;

  return (
    <div style={{ background: "#6AB8EE" }}>
      <Grid container spacing={1}>
        {data.map((item, index) => (
          <Grid item md={3} sm={3} xs={12} style={{}} key={index}>
            <img
              src={item.img}
              style={{
                width: "100%",
                maxHeight: "300px",
                background: "#D6D6D6",
              }}
            />
            <div style={{ textAlign: "center" }}> {item.prix} FCFA</div>
          </Grid>
        ))}
      </Grid>
      {/* <p></p> */}
    </div>
  );
};
export default List;
