/* eslint-disable react/prop-types */
import React from "react";
import useStyles from "./FloorStyles";
import UpDownButtons from "./UpDownButtons";

function Floor(props) {
  const { selectFloor } = props;
  const classes = useStyles();
  return (
    <div className={classes.floorContainer}>
      <div className={classes.floor}>
        <UpDownButtons selectFloor={selectFloor} floorValue={3} />
        <span className={classes.floorHeading}>Floor - 3</span>
      </div>
      <div className={classes.floor}>
        <UpDownButtons selectFloor={selectFloor} floorValue={2} />
        <span className={classes.floorHeading}>Floor - 2</span>
      </div>
      <div className={classes.floor}>
        <UpDownButtons selectFloor={selectFloor} floorValue={1} />
        <span className={classes.floorHeading}>Floor - 1</span>
      </div>
      <div className={classes.floor}>
        <UpDownButtons selectFloor={selectFloor} floorValue={0} />
        <span className={classes.floorHeading}>Ground - Floor</span>
      </div>
    </div>

  );
}

export default Floor;
