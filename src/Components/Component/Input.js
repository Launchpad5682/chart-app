import React from "react";

const Input = ({ forLabel, labelText }, ref) => {
  return (
    <div>
      <label htmlFor={forLabel}>{labelText}</label>
      <input type="text" ref={ref} />
    </div>
  );
};

const forwardedInput = React.forwardRef(Input);

export default forwardedInput;
