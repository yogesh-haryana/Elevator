/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import useStyles from "./UpDownStyles";

function UpDownButtons(props) {
  const classes = useStyles();
  const { onFloorSelect, floorValue } = props;
  const handleClick = () => {
    onFloorSelect(floorValue);
  };
  return (
    <div className={classes.buttonsContainer}>
      <button type="button" onClick={handleClick} className={classes.floorButtons}>
        <BiUpArrow />
      </button>
      <button type="button" onClick={handleClick} className={classes.floorButtons}>
        <BiDownArrow />
      </button>
    </div>
  );
}

export default UpDownButtons;
