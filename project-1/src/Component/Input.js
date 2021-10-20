import "./Input.css";

const Input = (props) => {
  const inputNameHandler = (inputName) => {
    props.onSaveEnteredName(inputName.target.value);
  };

  const inputAgeHandler = (inputAge) => {
    props.onSaveEnteredAge(inputAge.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAgeValidation();
    console.log("clicked");
    props.postData(props.inputData);
  };

  return (
    <form className="form-control" onSubmit={submitHandler}>
      <label>
        Username
        <input
          type="text"
          onChange={inputNameHandler}
          value={props.inputData.Name}
        />
      </label>
      <label>
        Age
        <input
          type="number"
          onChange={inputAgeHandler}
          value={props.inputData.Age}
        />
      </label>
      <button type="submit">Add User</button>
    </form>
  );
};

export default Input;
