import React from "react";
import useStyles from "./FloorStyles";
import UpDownButtons from "./UpDownButtons";

function Floor() {
  const classes = useStyles();
  return (
    <div>
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

  );
}

export default Floor;
