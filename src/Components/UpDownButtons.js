/* eslint-disable react/prop-types */
import React from "react";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import useStyles from "./UpDownStyles";

function UpDownButtons(props) {
  const classes = useStyles();
  const { selectFloor, floorValue } = props;
  const handleClickUp = () => {
    selectFloor(floorValue, "up");
  };
  const handleClickDown = () => {
    selectFloor(floorValue, "down");
  };
  return (
    <div className={classes.buttonsContainer}>
      <button type="button" onClick={handleClickUp} className={classes.floorButtons}>
        <BiUpArrow />
      </button>
      <button type="button" onClick={handleClickDown} className={classes.floorButtons}>
        <BiDownArrow />
      </button>
    </div>
  );
}

export default UpDownButtons;
