import React from "react";
import PropTypes from "prop-types";

import "./Buttons.css";

const Buttons = ({ onCreate, onRemove }) => {
  return (
    <div className="buttons">
      <div className="btn add" onClick={onCreate}>
        Add
      </div>

      <div className="btn remove" onClick={onRemove}>
        Remove
      </div>
    </div>
  );
};

Buttons.propTypes = {
  onCreate: PropTypes.func,
  onRemove: PropTypes.func
};

Buttons.defautProps = {
  onCreate: () => console.warn("onCreate not defined"),
  onRemove: () => console.warn("onRemove not defined")
};

export default Buttons;
