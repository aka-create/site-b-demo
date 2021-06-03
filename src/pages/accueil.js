import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Carousel from "../component/carrousel";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import HistoryIcon from "@material-ui/icons/History";

const data = [
  {
    id: 0,
    icon: <AccountCircleIcon style={{ color: "#6AB8EE" }} />,
    titre: "QUI SOMMES NOUS?",
    texte:
      "C.MARCELINE vous accueille au Boulevard de Marseille à Abidjan et vous propose un large choix de vins, champagnes et spiritueux.",
  },
  {
    id: 1,
    icon: <SettingsIcon style={{ color: "#6AB8EE" }} />,
    titre: "NOS SRVICES",
    texte:
      "On y retrouve un large choix dont 200 références de vins (parmi elles 40 grands crus sélectionnés), ainsi que 35 références de champagnes et crémants et 100 références de spiritueux.La boutique comporte un espace épicerie offrant une large sélection (thé Kusmi tea, caféNespresso, rillettes, foie gras, chocolats…), vous donnant la possibilité de composer un panier gourmand avec ou sans alcool, pour les offrir en cadeau.",
  },
  {
    id: 2,
    icon: <HistoryIcon style={{ color: "#6AB8EE" }} />,
    titre: "HISTORIQUE",
    texte: "Nous sommes dans le domaine depuis 2010",
  },
];

const Accueil = () => {
  return (
    <div>
      <div style={{ background: "#6AB8EE" }}>
        <div style={{ marginTop: 0 }}>
          <Carousel />
        </div>
        <p style={{ color: "white", textAlign: "center" }}>
          <p>
            <h4>VOULEZ-VOUS FAIRE DES ACHATS?</h4>
          </p>
          <div>Retrouvez tout ce dont vous avez besoin avec nous</div>
        </p>
      </div>
      {data.map((item, index) => (
        <Grid
          // container
          direction="column"
          style={{
            margin: "auto",
            marginTop: 30,
          }}
          md={6}
          key={index}
        >
          <Grid container direction="row" spacing={2}>
            <Grid item>{item.icon}</Grid>
            <Grid item style={{ fontSize: 12, fontWeight: 20 }}>
              {item.titre}
            </Grid>
          </Grid>
          <Divider style={{ backgroundColor: "#6AB8EE", height: 2 }} />
          <Grid item style={{ fontSize: 14 }}>
            {item.texte}
          </Grid>
        </Grid>
      ))}
      <p></p>
    </div>
  );
};
export default Accueil;
