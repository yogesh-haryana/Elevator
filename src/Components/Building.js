/* eslint-disable react/prop-types */
import React from "react";
import useStyles from "./BuildingStyles";
import Elevator from "./Elevator";
import Floor from "./Floor";

function Building(props) {
  const {
    onFloorSelect, liftPosition, isOpen, selectedFloor
  } = props;
  const classes = useStyles();
  const mapMyFloors = () => {
    const floorsArr = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 3; i >= 0; i--) {
      floorsArr.push(<Floor onFloorSelect={onFloorSelect} key={i} floorValue={i} />);
    }
    return floorsArr;
  };

  return (
    <div className={classes.building}>
      <div className={classes.elevatorSection}>
        <Elevator
          liftPosition={liftPosition}
          onFloorSelect={onFloorSelect}
          selectedFloor={selectedFloor}
          isOpen={isOpen}
        />
      </div>
      <div className={classes.floorSection}>
        {mapMyFloors()}
      </div>
    </div>
  );
}

export default Building;
