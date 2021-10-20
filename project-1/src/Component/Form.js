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

  const isValidStateChanger = () => {
    !isValid ? setIsValid(true) : setIsValid(false);
  };

  const enteredDate = [{ Name: enteredName, Age: enteredAge }];

  const ageValidationHandler = () => {
    if (enteredAge === undefined || enteredAge < 0) {
      isValidStateChanger();
    }
    console.log(enteredAge);
    console.log(isValid);
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
      <Model onInvalid={isValidStateChanger} isValid={isValid} />
    </div>
  );
};

export default Form;
