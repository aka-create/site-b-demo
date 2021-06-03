import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useWindowWidthAndHeight } from "../../component/custumWidth";
import { UseLocalStorage } from "../../component/useLocaleStorage";


const Header = () => {
  const [open, setOpen] = useState(false);
  const [buttonColor, setButtonColor] = UseLocalStorage("name", "");

  const handleClick = () => {
    setOpen(!open);
  };
  const closeMenu = () => {
    setOpen(false);
  };

  const [width] = useWindowWidthAndHeight();
  return (
    <Grid className="navbar" style={{ width: "100%" }}>
      <Paper style={{}}>
        <Grid
          container
          direction="row"
          style={{ minHeight: 50, background: "#F9CC11", color: "grey" }}
          alignItems="center"
          justify="center"
        >
          <Grid
            item
            xs={4}
            sm={3}
            container
            item
            xs
            sm
            justify="flex-start"
            alignItems="center"
            spaccing={3}
          >
            <Typography variant="h5" style={{}}>
              C.MARCELINE
            </Typography>
          </Grid>
          <Grid
            container
            xs
            sm
            justify="center"
            className={open ? "nav-links active" : "nav-links"}
            spacing={1}
          >
            <Button
              className="nav-item"
              // onClick={closeMenu}
              href="/accueil"
              color="inherit"
              style={{
                backgroundColor: buttonColor === "Acccueil" ? "#6AB8EE" : "",
                color: buttonColor === "Acccueil" ? "#dadada" : "inherit",
              }}
              onClick={() => {
                setButtonColor("Acccueil");
              }}
            >
              Acccueil
            </Button>
            <Button
              className="nav-item"
              style={{
                backgroundColor: buttonColor === "Energisante" ? "#6AB8EE" : "",
                color: buttonColor === "Energisante" ? "#dadada" : "inherit",
              }}
              onClick={() => {
                setButtonColor("Energisante");
              }}
              // color= "inherit"
              href="/contacts"
            >
              Energisante
            </Button>
            <Button
              style={{
                backgroundColor: buttonColor === "Vins" ? "#6AB8EE" : "",
                color: buttonColor === "Vins" ? "#dadada" : "inherit",
              }}
              onClick={() => {
                setButtonColor("Vins");
              }}
              className="nav-item"
              color="inherit"
              href="/vin"
            >
              Vins
            </Button>
            <Button
              style={{
                backgroundColor: buttonColor === "Liqueur" ? "#6AB8EE" : "",
                color: buttonColor === "Liqueur" ? "#dadada" : "inherit",
              }}
              onClick={() => {
                setButtonColor("Liqueur");
              }}
              className="nav-item"
              color="inherit"
              href="/liqueur"
            >
              Liqueur
            </Button>
          </Grid>
          {width < 500 && (
            <IconButton
              className="icon"
              onClick={handleClick}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          )}
        </Grid>
      </Paper>
    </Grid>
  );
};
export default Header;
