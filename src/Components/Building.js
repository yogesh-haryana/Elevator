import React, { useState, useEffect, useCallback } from "react";
import useStyles from "./BuildingStyles";
import Elevator from "./Elevator";
import Floor from "./Floor";

const initialState = {
  liftPosition: 0,
  selectedFloors: [],
  direction: null
};
function Building() {
  const [appState, updateState] = useState(initialState);
  console.log(appState);
  const classes = useStyles();
  const moveLift = useCallback(() => {
    if (appState.selectedFloors.length) {
      const liftposn = appState.selectedFloors[0];
      appState.selectedFloors.shift();
      const floorsAfterShift = appState.selectedFloors;
      updateState((prevState) => ({
        ...prevState,
        liftPosition: liftposn,
        selectedFloors: floorsAfterShift
      }));
    }
  }, [appState.selectedFloors]);
  const selectFloor = (value) => {
    updateState((prevState) => ({
      ...prevState,
      selectedFloors: [...appState.selectedFloors, value]

    }));
  };
  useEffect(() => {
    moveLift();
  }, [moveLift]);

  return (
    <div className={classes.building}>
      <div className={classes.elevatorSection}>
        <Elevator selectFloor={selectFloor} liftPosition={appState.liftPosition} />
      </div>
      <div className={classes.floorSection}>
        <Floor selectFloor={selectFloor} />
      </div>
    </div>
  );
}

export default Building;
