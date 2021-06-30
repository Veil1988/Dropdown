import { useState } from "react";

import { OPTIONS } from "./options";

import "./styles.css";

export const Dropdown = () => {
  const [selectedValue, selectValue] = useState("");
  const [hasOpen, toggleOpen] = useState(false);

  const handleToggle = (value) => {
    toggleOpen(value);
  };

  const handleSelected = (event) => {
    const { id } = event.target;
    selectValue(id);
  };

  return (
    <div className="dropdown-wrapper">
      <input
        value={selectedValue}
        onFocus={handleToggle(true)}
        onBlur={handleToggle(false)}
      />
      {hasOpen && (
        <div className="dropdown-options-wrapper" onClick={handleSelected}>
          {OPTIONS.map((option) => {
            const { id, label } = option;
            return (
              <div id={label} key={id}>
                {label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
