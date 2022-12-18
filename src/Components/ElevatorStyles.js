import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  elevator: {
    height: "90px",
    width: "90%",
    border: "1px solid grey",
    backgroundColor: "#CBEDD5",
    position: "absolute",
    left: "2px",
    transition: "all 2.5s ease"
  },
  liftDoor: {
    position: "relative",
    left: "0",
    top: "0",
    height: "100%",
    width: "100%",
    backgroundColor: "grey"
  },
  open: {
    width: "5%",
    backgroundColor: "yellow",
    opacity: "80%",
    transition: "all 1.5s ease",
    border: "1px solid red"
  },
  close: {
    width: "100%",
    backgroundColor: "grey",
    transition: "all 1s ease"
  }

});

export default useStyles;
