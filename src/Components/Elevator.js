/* eslint-disable react/prop-types */
import React from "react";
import LiftButton from "./LiftButton";
import useStyles from "./ElevatorCSS";

function Elevator(props) {
  // eslint-disable-next-line react/prop-types
  const {
    liftPosition, selectedFloor, onFloorSelect, floorValue
  } = props;
  const floor = 3 - liftPosition;
  const elevStyles = {
    top: `${floor * 125}px`
  };
  const classes = useStyles();
  return (
    <div
      style={elevStyles}
      className={classes.elevator}
    >
      <LiftButton
        selectedFloor={selectedFloor}
        onFloorSelect={onFloorSelect}
        floorValue={floorValue}
      />
    </div>
  );
}

export default Elevator;
