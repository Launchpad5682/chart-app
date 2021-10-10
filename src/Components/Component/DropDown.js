import React from "react";
import { useApp } from "../../Context/AppContext";

const DropDown = ({ state, setState, forLabel }, ref) => {
  const { states } = useApp();

  const changeHandler = (event) => {
    setState(event.target.value);
  };

  return (
    <div>
      <label htmlFor={forLabel}>State</label>
      <select value={state} onChange={changeHandler}>
        {states.map((stat) => (
          <option value={stat.state} key={stat.code}>
            {stat.state}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
