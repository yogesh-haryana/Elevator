import "./App.css";
import React, { useEffect, useState } from "react";
import Building from "./Components/Building";

const initialState = {
  liftPosition: 0,
  upFloors: [],
  downFloors: [],
  selectedFloor: [],
  direction: null,
  open: false,
  move: false
};

function App() {
  const [myState, UpdatedState] = useState(initialState);

  const moveElevetor = () => {
    console.log(myState);

    if (!myState.liftPosition) {
      const elevatorDirection = "up";
      const liftPosition = myState.upFloors[0];
      const selectedFloor = myState.upFloors.slice(1, myState.upFloors.length);
      UpdatedState((oldState) => ({
        ...oldState,
        liftPosition,
        direction: elevatorDirection,
        upFloors: selectedFloor
      }));
    } else {
      let isLiftUp = myState.direction === "up";
      let direction = isLiftUp ? "up" : "down";
      if (!myState.upFloors.length && !myState.downFloors.length) {
        UpdatedState((oldState) => ({
          ...oldState,
          direction: null,
          move: false
        }));
        return;
      }

      if (isLiftUp) {
        if (myState.upFloors.length) {
          const upFloors = [...myState.upFloors];
          const liftPosition = upFloors.shift();
          direction = !upFloors.length && !myState.downFloors.length ? null : direction;
          UpdatedState((oldState) => ({
            ...oldState,
            liftPosition,
            direction,
            upFloors
          }));
        } else if (myState.downFloors.length) {
          direction = "down";
          isLiftUp = false;
          const downFloorArray = [...myState.downFloors];
          const liftPosition = downFloorArray.shift();
          direction = !downFloorArray.length && !myState.upFloors.length ? null : direction;
          UpdatedState((oldState) => ({
            ...oldState,
            liftPosition,
            direction,
            downFloors: downFloorArray
          }));
        }
      } else if (myState.downFloors.length) {
        const downFloorArray = [...myState.downFloors];
        const liftPosition = downFloorArray.shift();
        direction = !downFloorArray.length && !myState.upFloors.lenght ? null : direction;

        UpdatedState((oldState) => ({
          ...oldState,
          liftPosition,
          downFloors: downFloorArray
        }));
      } else if (myState.upFloors.length) {
        direction = "up";
        isLiftUp = true;
        const upFloorsArray = [...myState.upFloors];
        const liftPosition = upFloorsArray.shift();
        direction = !upFloorsArray.length && !myState.downFloors.length ? null : direction;
        UpdatedState((oldState) => ({
          ...oldState,
          liftPosition,
          direction,
          upFloors: upFloorsArray
        }));
      }
    }
  };

  const onFloorSelect = (floorValue, direction = null) => {
    if (floorValue === myState.liftPosition) {
      return;
    }
    let isLiftUp = false;
    if (direction) {
      isLiftUp = direction === "up";
    } else {
      const currentPosition = myState.liftPosition || 0;
      isLiftUp = floorValue > currentPosition;
    }

    UpdatedState((oldState) => ({
      ...oldState,
      upFloors: isLiftUp
        ? [...oldState.upFloors, floorValue].sort((a, b) => a - b)
        : oldState.upFloors,
      move: true,
      downFloors: isLiftUp
        ? [...oldState.downFloors, floorValue].sort((a, b) => b - a)
        : oldState.downFloors
    }));
  };

  const openLift = () => {
    UpdatedState((oldState) => ({
      ...oldState,
      open: true
    }));

    setTimeout(() => {
      UpdatedState((oldState) => ({
        ...oldState,
        open: false
      }));
    }, 3000);
  };

  const closeLift = () => {
    UpdatedState((oldState) => ({
      ...oldState,
      open: false
    }));
    moveElevetor();
  };

  useEffect(() => {
    moveElevetor();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myState.move]);

  useEffect(() => {
    if (!myState.open) {
      moveElevetor();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myState.open]);

  useEffect(() => {
    setTimeout(() => {
      openLift();
    }, 3000);
  }, [myState.liftPosition]);

  return (
    <div className="App">
      <Building
        selectedFloor={myState.selectedFloor}
        liftPosition={myState.liftPosition}
        onFloorSelect={onFloorSelect}
        openLift={openLift}
        closeLift={closeLift}
        isOpen={myState.open}
      />
    </div>
  );
}

export default App;
