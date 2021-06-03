import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useWindowWidthAndHeight } from "./custumWidth";
import Cave1 from "../assets/cave1.jpg";
import Cave2 from "../assets/cave2.jpg";
import Cave3 from "../assets/cave3.jpg";
import Cave4 from "../assets/cave4.jpg";
import Cave5 from "../assets/cave5.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: Cave1,
  },
  {
    label: "Bird",
    imgPath: Cave2,
  },
  {
    label: "Bali, Indonesia",
    imgPath: Cave4,
  },
  {
    label: "NeONBRAND Digital Marketing, Las Vegas, United States",
    imgPath: Cave5,
  },
  {
    label: "Goč, Serbia",
    imgPath: Cave3,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 600,
    marginTop: "40",
    flexGrow: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    // height: 300,
    display: "block",
    // width: "100%",
    overflow: "hidden",
    // marginLeft:"auto",
    margin: "auto",
  },
}));

function Carousel() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const [width, height] = useWindowWidthAndHeight();

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                className={classes.img}
                src={step.imgPath}
                alt={step.label}
                style={{
                  height: width < 500 ? 300 : 400,
                  width: width < 500 ? "100%" : "70%",
                }}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </div>
  );
}

export default Carousel;
