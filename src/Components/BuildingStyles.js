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
    width: "30%",
    border: "1px solid grey",
    borderRight: "none",
    alignItems: "right",
    position: "relative"
  },
  floorSection: {
    height: "100%",
    width: "70%",
    border: "1px solid grey",
    borderLeft: "none",
    display: "flex",
    flexDirection: "column"
  }

});

export default useStyles;
