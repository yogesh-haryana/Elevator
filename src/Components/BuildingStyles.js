import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  building: {
    height: "500px",
    width: "30%",
    border: "1px solid black",
    margin: "0 auto",
    display: "flex"
  },
  elevatorSection: {
    height: "100%",
    width: "20%",
    border: "1px solid grey",
    borderRight: "none",
    alignItems: "right"
  },
  elevator: {
    height: "90px",
    width: "45px",
    border: "1px solid grey",
    backgroundColor: "#CBEDD5",
    position: "relative"
  },
  floorSection: {
    height: "100%",
    width: "80%",
    border: "1px solid grey",
    borderLeft: "none",
    display: "flex",
    flexDirection: "column"
  },
  floor: {
    borderBottom: "1px solid grey",
    height: "25%",
    width: "100%",
    position: "relative"
  },
  floorHeading: {
    margin: "auto"
  }
});

export default useStyles;
