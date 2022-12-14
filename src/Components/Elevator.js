import React from "react";
import useStyles from "./ElevatorStyles";
import LiftButton from "./LiftButton";

function Elevator() {
  const classes = useStyles();
  return (
    <div className={classes.elevator}>
      <LiftButton />
    </div>
  );
}

export default Elevator;
