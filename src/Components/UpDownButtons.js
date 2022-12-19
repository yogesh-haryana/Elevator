/* eslint-disable import/no-cycle */
import React, { useContext } from "react";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import PropTypes from "prop-types";
import useStyles from "./UpDownStyles";
import { mainContext } from "./Building";

function UpDownButtons(props) {
  const classes = useStyles();
  const { onSelectFloor } = useContext(mainContext);
  const { floorValue } = props;
  const handleClickUp = () => {
    onSelectFloor(floorValue, "up");
  };
  const handleClickDown = () => {
    onSelectFloor(floorValue, "down");
  };
  return (
    <div className={classes.buttonsContainer}>
      <button type="button" onClick={handleClickUp} className={classes.floorButtons}>
        <BiUpArrow />
      </button>
      <button type="button" onClick={handleClickDown} className={classes.floorButtons}>
        <BiDownArrow />
      </button>
    </div>
  );
}

export default UpDownButtons;

UpDownButtons.propTypes = {
  floorValue: PropTypes.number
};

UpDownButtons.defaultProps = {
  floorValue: 0
};
