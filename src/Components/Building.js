/* eslint-disable react/prop-types */
import React from "react";
import useStyles from "./BuildingStyles";
import Elevator from "./Elevator";
import Floor from "./Floor";

function Building() {
  const classes = useStyles();

  return (
    <div className={classes.building}>
      <div className={classes.elevatorSection}>
        <Elevator />
      </div>
      <div className={classes.floorSection}>
        <Floor />
      </div>
    </div>
  );
}

export default Building;
