import "./Form.css";
import { useState } from "react";
import Input from "./Input";
import Output from "./Output";
import Model from "./Model";

const Form = (props) => {
  const [enteredName, setEnteredName] = useState();
  const [enteredAge, setEnteredAge] = useState();
  const [isValid, setIsValid] = useState(false);

  const saveEnteredNameHandler = (inputName) => {
    setEnteredName(inputName);
  };

  const saveEnteredAgeHandler = (inputAge) => {
    setEnteredAge(inputAge);
  };

  const enteredDate = [{ Name: enteredName, Age: enteredAge }];
  let modelMsg = null;

  const ageValidationHandler = () => {
    if (enteredDate.enteredAge > 0) {
      modelMsg = "Please Enter Age < 0!";
      setIsValid(true);
    }
  };
  return (
    <div className="container">
      <Input
        onSaveEnteredName={saveEnteredNameHandler}
        onSaveEnteredAge={saveEnteredAgeHandler}
        onAgeValidation={ageValidationHandler}
        inputDate={enteredDate}
      />
      <Output usersData={enteredDate} />
      <Model text={modelMsg} />
    </div>
  );
};

export default Form;
