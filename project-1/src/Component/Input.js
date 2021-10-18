import "./Input.css";

const Input = (props) => {
  return (
    <div class="form-control">
      <label for="Username">
        Username <input type="text" />
      </label>
      <label for="Username">
        Age <input type="number" />
      </label>
      <button type="submit">Add User</button>
    </div>
  );
};

export default Input;
