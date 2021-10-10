import React, { useRef, useState } from "react";
import DropDown from "./Component/DropDown";
import Input from "./Component/Input";
import "../styles/InputForm.css";
import { useApp } from "../Context/AppContext";

const InputForm = () => {
  const { states, data, setData } = useApp();
  const regRef = useRef(null);
  const appRef = useRef(null);
  const [state, setState] = useState(states[0].state);

  const submitHandler = (event) => {
    event.preventDefault();
    const selectedState = states.filter((stat) => stat.state === state);
    const regNo = regRef.current.value;
    const app = appRef.current.value;
    const code = selectedState[0].code;

    const dataPoint = {
      regNo: Number(regNo),
      name: app,
      state: state,
      code: code,
    };
    setState(states[0].state);
    setData([...data, dataPoint]);
    regRef.current.value = null;
    appRef.current.value = null;
  };

  return (
    <form onSubmit={submitHandler}>
      <Input forLabel="regno" labelText="Reg No" ref={regRef} />
      <Input forLabel="application" labelText="Application Name" ref={appRef} />
      <DropDown forLabel="dropdown" state={state} setState={setState} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputForm;
