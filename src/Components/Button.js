/* eslint-disable react/prop-types */
import React from "react";

function Button({ children, onClick }) {
  return (
    <div>
      <button onClick={onClick} type="button">
        { children }
      </button>
    </div>
  );
}

export default Button;
