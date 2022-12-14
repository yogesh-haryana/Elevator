import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  elevator: {
    height: "120px",
    border: "1px solid red",
    backgroundColor: "#CBEDD5",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "80px",
    position: "absolute",
    // top: "220px",
    transition: "all 2s ease"
  }
});

export default useStyles;
