/* eslint-disable react/prop-types */
import React from "react";
import useStyles from "./ElevatorStyles";
import LiftButton from "./LiftButton";

function Elevator(props) {
  const { selectFloor, liftPosition, isLiftOpen } = props;
  const classes = useStyles();
  const floor = 3 - liftPosition;
  const elevStyles = {
    top: `${floor * 125 + 30}px`
  };
  return (
    <div style={elevStyles} className={classes.elevator}>
      <div className={[classes.liftDoor, isLiftOpen ? classes.open : classes.close].join(" ")}>
        <LiftButton selectFloor={selectFloor} />
      </div>

    </div>
  );
}

export default Elevator;
