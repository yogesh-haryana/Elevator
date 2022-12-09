import React from "react";
import useStyles from "./BuildingStyles";
import LiftButton from "./LiftButton";
import UpDownButtons from "./UpDownButtons";

function Building() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.building}>
        <div className={classes.elevatorSection}>
          <div className={classes.elevator}>
            <LiftButton />
          </div>
        </div>
        <div className={classes.floorSection}>
          <div className={classes.floor}>
            <UpDownButtons />
            <span className={classes.floorHeading}>Floor - 3</span>
          </div>
          <div className={classes.floor}>
            <UpDownButtons />
            <span className={classes.floorHeading}>Floor - 2</span>
          </div>
          <div className={classes.floor}>
            <UpDownButtons />
            <span className={classes.floorHeading}>Floor - 1</span>
          </div>
          <div className={classes.floor}>
            <UpDownButtons />
            <span className={classes.floorHeading}>Ground - Floor</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Building;
