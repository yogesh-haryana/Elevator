/* eslint-disable react/prop-types */
import React from "react";
import Button from "./Button";
import useStyles from "./LiftButtonStyles";

function LiftButton(props) {
  const { selectedFloor = [], onFloorSelect, floorValue } = props;
  const classes = useStyles();

  function handleClick(i) {
    onFloorSelect(floorValue);
    selectedFloor.push(i);
  }

  const mapMyButtons = () => {
    const btnsArr = [];
    for (let i = 3; i >= 0; i - 1) {
      btnsArr.push(
        <Button
          key={i}
          floorValue={floorValue}
          onClick={() => handleClick(i)}
          className={classes.liftButton}
        >
          {i}
        </Button>
      );
    }
    return btnsArr;
  };

  return (
    <div className={classes.liftButtonContainer}>
      {mapMyButtons()}
    </div>
  );
}

export default LiftButton;
