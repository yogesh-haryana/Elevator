/* eslint-disable import/no-cycle */
import React, { useContext } from "react";
import useStyles from "./LiftButtonStyles";
import { mainContext } from "./Building";

function LiftButton() {
  const { onSelectFloor } = useContext(mainContext);
  const classes = useStyles();

  const handleClick3 = () => {
    onSelectFloor(3);
  };
  const handleClick2 = () => {
    onSelectFloor(2);
  };
  const handleClick1 = () => {
    onSelectFloor(1);
  };
  const handleClick0 = () => {
    onSelectFloor(0);
  };
  return (
    <div className={classes.liftButtonContainer}>
      <button type="button" onClick={handleClick3} className={classes.liftButton}>3</button>
      <button type="button" onClick={handleClick2} className={classes.liftButton}>2</button>
      <button type="button" onClick={handleClick1} className={classes.liftButton}>1</button>
      <button type="button" onClick={handleClick0} className={classes.liftButton}>0</button>
    </div>

  );
}

export default LiftButton;
