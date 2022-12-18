import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  liftButtonContainer: {
    display: "flex",
    flexDirection: "column",
    alignContent: "flex-end"
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
