/* eslint-disable react/prop-types */
import React from "react";
import useStyles from "./LiftButtonStyles";

function LiftButton(props) {
  const { selectFloor } = props;
  const classes = useStyles();

  const handleClick3 = () => {
    selectFloor(3);
  };
  const handleClick2 = () => {
    selectFloor(2);
  };
  const handleClick1 = () => {
    selectFloor(1);
  };
  const handleClick0 = () => {
    selectFloor(0);
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
