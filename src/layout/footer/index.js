import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const Footer = () => {
  return (
    <div style={{ textAlign: "center"}}>
      <Grid
        direction="row"
        container
        alignItems="center"
        justify="center"
        style={{ minHeight: 100, background: "#E3AD04", color: "white" }}
      >
        <Grid item xs={12} sm={3}>
          <p>ADRESSE</p>
          <p>10 mètres de .....</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>
            <p>CONTACTS</p>
            <div>+2250777986032</div>
            <div>+2250140088195</div>
          </p>
        </Grid>
        <Grid item xs={12} sm={3}>
          <p>
            <p> HEURE DE TRAVAIL</p>
            <div>Lundi-Dimanche:08h-20h</div>
            <div>Vendredi:fermé</div>
          </p>
        </Grid>
      </Grid>
    </div>
  );
};
export default Footer;
