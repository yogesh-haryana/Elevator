/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  useState,
  useEffect,
  createContext
} from "react";
import useStyles from "./BuildingStyles";
import Elevator from "./Elevator";
import Floor from "./Floor";

const initialState = {
  liftPosition: 0,
  selectedFloors: [],
  direction: null,
  upFloors: [],
  downFloors: [],
  move: false,
  open: false
};

export const mainContext = createContext();
function Building() {
  const [appState, updateState] = useState(initialState);
  const classes = useStyles();

  const openLift = () => {
    updateState((prevState) => ({
      ...prevState,
      open: true
    }));
    setTimeout(() => {
      updateState((prevState) => ({
        ...prevState,
        open: false
      }));
    }, 1000);
  };

  const moveLift = () => {
    if (appState.liftPosition === 0) {
      const liftDirection = "up";
      const liftPosition = appState.upFloors[0];
      const upFloors = appState.upFloors.slice(1, appState.upFloors.length);
      updateState((prevState) => ({
        ...prevState,
        liftPosition,
        direction: liftDirection,
        upFloors
      }));
    } else {
      let isUp = appState.direction === "up";
      let direction = isUp ? "up" : "down";
      if (!appState.upFloors.length && !appState.downFloors.length) {
        updateState((prevState) => ({
          ...prevState,
          move: false,
          direction: null
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
          const downFloorArr = [...appState.downFloors];
          const liftPosition = downFloorArr.shift();
          direction = !downFloorArr.length && !appState.upFloors.lenght ? null : direction;
          updateState((prevState) => ({
            ...prevState,
            liftPosition,
            direction,
            downFlrs: downFloorArr
          }));
        }
      } else if (appState.downFloors.length) {
        const downFloorArr = [...appState.downFloors];
        const liftPosition = downFloorArr.shift();
        direction = !downFloorArr.length && !appState.upFloors.lenght ? null : direction;

        updateState((prevState) => ({
          ...prevState,
          liftPosition,
          downFloors: downFloorArr
        }));
      } else if (appState.upFloors.length) {
        direction = "up";
        isUp = true;
        const upFlrArr = [...appState.upFloors];
        const liftPosition = upFlrArr.shift();
        direction = !upFlrArr.length && !appState.downFloors.lenght ? null : direction;
        updateState((prevState) => ({
          ...prevState,
          liftPosition,
          direction,
          upFloors: upFlrArr
        }));
      }
    }
  };

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

  useEffect(() => {
    moveLift();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appState.move]);

  useEffect(() => {
    setTimeout(() => {
      openLift();
    }, 3000);
  }, [appState.liftPosition]);

  useEffect(() => {
    if (!appState.open) {
      moveLift();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appState.open]);

  const valueToElev = {
    liftPosition: appState.liftPosition,
    onSelectFloor: selectFloor,
    isLiftOpen: appState.open
  };

  const valueToUpDown = {
    onSelectFloor: selectFloor
  };

  return (
    <div className={classes.building}>
      <div className={classes.elevatorSection}>
        <mainContext.Provider value={valueToElev}>
          <Elevator />
        </mainContext.Provider>
      </div>
      <div className={classes.floorSection}>
        <mainContext.Provider value={valueToUpDown}>
          <Floor />
        </mainContext.Provider>
      </div>
    </div>
  );
}

export default Building;
