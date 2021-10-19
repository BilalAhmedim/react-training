import "./Input.css";

const Input = (props) => {
  const inputNameHandler = (inputName) => {
    props.onSaveEnteredName(inputName.target.value);
  };
  const inputAgeHandler = (inputAge) => {
    props.onSaveEnteredAge(inputAge.target.value);
  };
  return (
    <div className="form-control">
      <label>
        Username
        <input
          type="text"
          onChange={inputNameHandler}
          value={props.inputDate.Name}
        />
      </label>
      <label>
        Age
        <input
          type="text"
          onChange={inputAgeHandler}
          value={props.inputDate.Age}
        />
      </label>
      <button type="submit">Add User</button>
    </div>
  );
};

export default Input;
