/* eslint-disable react/prop-types */
import React from "react";
import useStyles from "./ElevatorStyles";
import LiftButton from "./LiftButton";

function Elevator(props) {
  const { selectFloor, liftPosition } = props;
  const classes = useStyles();
  const floor = 3 - liftPosition;
  const elevStyles = {
    top: `${floor * 125 + 30}px`
  };
  return (
    <div style={elevStyles} className={classes.elevator}>
      <LiftButton selectFloor={selectFloor} />
    </div>
  );
}

export default Elevator;
