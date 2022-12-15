import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  floorContainer: {
    width: "100%"
  },
  floor: {
    borderBottom: ".1px solid grey",
    height: "25%",
    width: "100%",
    position: "relative",
    bottom: "3px",
    display: "flex",
    alignContent: "flex-end"
  },
  floorHeading: {
    margin: "auto"
  }
});

export default useStyles;
