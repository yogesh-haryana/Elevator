/* eslint-disable react/prop-types */
import React from "react";
import UpDownButtons from "./UpDownButtons";
import useStyles from "./FloorCSS";

function Floor(props) {
  const { floorValue, onFloorSelect } = props;
  const classes = useStyles();
  return (
    <div className={classes.floor}>
      <UpDownButtons onFloorSelect={onFloorSelect} floorValue={floorValue} />
      <span className={classes.floorHeading}>
        Floor -
        {floorValue}
      </span>
    </div>
  );
}

export default Floor;
