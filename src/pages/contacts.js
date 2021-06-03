import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Cave1 from "../assets/cave1.jpg";

const Contacts = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        style={{ minHeight: 464, backgroundColor: "#5B9D55" }}
        justify="center"
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          style={{
            backgroundColor: "",
            textAlign: "center",
            margin: "auto",
          }}
        >
          <p style={{ color: "" }}>
            Etes-vous à la recherche d'une boutique, pour vos achats de boisson
            ?
          </p>

          <Typography variant="h5" style={{ fontFamily: "unset" }}>
            Bienvenu chez C.MARCELINE. Nous sommes une boutique de ventes de
            boisson de toutes sortes et à moindre cout.
          </Typography>
          <p>Situation géographique: yop Keneya en face de la station total</p>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
        >
          <img src={Cave1} style={{ height: 464, width: "100%" }} />
        </Grid>
      </Grid>
    </>
  );
};
export default Contacts;
