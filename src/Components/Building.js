import React, { useState, useEffect, useCallback } from "react";
import useStyles from "./BuildingStyles";
import Elevator from "./Elevator";
import Floor from "./Floor";

const initialState = {
  liftPosition: 0,
  selectedFloors: [],
  direction: null,
  upFloors: [],
  downFloors: [],
  move: false

};
function Building() {
  const [appState, updateState] = useState(initialState);
  const classes = useStyles();
  console.log(appState);

  const moveLift = useCallback(() => {
    if (appState.liftPosition) {
      const liftPosition = appState.upFloors[0];
      const direction = "up";
      const selectedFloors = appState.upFloors.slice(1, appState.upFloors.length);

      updateState((prevState) => ({
        ...prevState,
        liftPosition,
        selectedFloors,
        direction
      }));
    } else {
      let isUp = appState.direction === "up";
      let direction = isUp ? "up" : "down";
      if (!appState.upFloors.length && !appState.downFloors.length) {
        updateState((prevState) => ({
          ...prevState,
          direction: null,
          move: false
        }));
        return;
      }

      if (isUp) {
        if (appState.upFloors.length) {
          const upFloors = [...appState.upFloors];
          const liftPosition = upFloors.shift();
          direction = !upFloors.length && !appState.downFloors.lenght ? null : direction;
          updateState((prevState) => ({
            ...prevState,
            liftPosition,
            direction,
            upFloors
          }));
        } else if (appState.downFloors.length) {
          direction = "down";
          isUp = false;
          const downFloorsArray = [...appState.downFloors];
          const liftPosition = downFloorsArray.shift();
          direction = !downFloorsArray.length && !appState.upFloors.lenght ? null : direction;
          updateState((prevState) => ({
            ...prevState,
            liftPosition,
            direction,
            downFloors: downFloorsArray
          }));
        }
      } else if (appState.downFloors.length) {
        const downFloorsArray = [...appState.downFloors];
        const liftPosition = downFloorsArray.shift();
        direction = !downFloorsArray.length && !appState.upFloors.lenght ? null : direction;

        updateState((prevState) => ({
          ...prevState,
          liftPosition,
          downFloors: downFloorsArray
        }));
      } else if (appState.upFloors.length) {
        direction = "up";
        isUp = true;
        const upFloorsArray = [...appState.upFloors];
        const liftPosition = upFloorsArray.shift();
        direction = !upFloorsArray.length && !appState.downFloors.lenght ? null : direction;
        updateState((prevState) => ({
          ...prevState,
          liftPosition,
          direction,
          upFloors: upFloorsArray
        }));
      }
    }
  }, [appState]);

  const selectFloor = (value, direction = null) => {
    if (value === appState.liftPosition) {
      return;
    }
    let isUp = false;
    if (direction) {
      isUp = direction === "up";
    } else {
      const currPosition = appState.liftPosition || 0;
      isUp = value > currPosition;
    }

    updateState((prevState) => ({
      ...prevState,
      upFloors: isUp
        ? [...prevState.upFloors, value].sort((a, b) => a - b)
        : prevState.upFloors,
      move: true,
      downFloors: !isUp
        ? [...prevState.downFloors, value].sort((a, b) => b - a)
        : prevState.downFloors
    }));
  };

  // useEffect(() => {
  //   moveLift();
  //   // setTimeout(moveLift(), 5000);
  // }, [moveLift]);

  useEffect(() => {
    if (appState.move) {
      moveLift();
    }
  }, [moveLift, appState.move]);

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
