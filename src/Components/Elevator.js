/* eslint-disable import/no-cycle */
import React, { useContext } from "react";
import useStyles from "./ElevatorStyles";
import LiftButton from "./LiftButton";
import { mainContext } from "./Building";

function Elevator() {
  const { liftPosition, isLiftOpen } = useContext(mainContext);
  const classes = useStyles();
  const floor = 3 - liftPosition;
  const elevStyles = {
    top: `${floor * 125 + 30}px`
  };
  return (
    <div style={elevStyles} className={classes.elevator}>
      <div className={[classes.liftDoor, isLiftOpen ? classes.open : classes.close].join(" ")}>
        <LiftButton />
      </div>

    </div>
  );
}

export default Elevator;
