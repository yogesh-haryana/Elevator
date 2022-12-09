import React from "react";
import useStyles from "./LiftButtonStyles";

function LiftButton() {
  const classes = useStyles();

  return (
    <div className={classes.liftButtonContainer}>
      <button type="button" className={classes.liftButton}>
        3
      </button>
      <button type="button" className={classes.liftButton}>
        2
      </button>
      <button type="button" className={classes.liftButton}>
        1
      </button>
      <button type="button" className={classes.liftButton}>
        0
      </button>
    </div>
  );
}

export default LiftButton;
