import React from "react";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import useStyles from "./UpDownStyles";

function UpDownButtons() {
  const classes = useStyles();
  return (
    <div className={classes.buttonsContainer}>
      <button type="button" className={classes.floorButtons}>
        <BiUpArrow />
      </button>
      <button type="button" className={classes.floorButtons}>
        <BiDownArrow />
      </button>
    </div>
  );
}

export default UpDownButtons;
