import "./Form.css";
import { useState } from "react";
import Input from "./Input";
import Output from "./Output";
import Model from "./Model";

const Form = (props) => {
  const [enteredName, setEnteredName] = useState();
  const [enteredAge, setEnteredAge] = useState();

  const saveEnteredNameHandler = (inputName) => {
    setEnteredName(inputName);
  };

  const saveEnteredAgeHandler = (inputAge) => {
    setEnteredAge(inputAge);
  };
  const enteredDate = {
    Name: enteredName,
    Age: enteredAge,
  };
  return (
    <div className="container">
      <Input
        onSaveEnteredName={saveEnteredNameHandler}
        onSaveEnteredAge={saveEnteredAgeHandler}
        inputDate={enteredDate}
      />
      <Output />
      <Model />
    </div>
  );
};

export default Form;
