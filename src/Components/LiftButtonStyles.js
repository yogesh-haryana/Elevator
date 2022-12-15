import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  liftButtonContainer: {
    position: "relative",
    top: "8%",
    left: "35%"
  },
  liftButton: {
    border: ".2px solid black",
    borderRadius: "50%",
    height: "20px",
    width: "20px",
    backgroundColor: "#181D31",
    cursor: "pointer",
    color: "white",
    display: "block",
    textAlign: "center",
    lineHeight: "20px"
  }
});

export default useStyles;
