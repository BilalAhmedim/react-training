import "./Home.css";

const Home = (props) => {
  return (
    <div class="container">
      <div class="form-control">
        <label for="Username">
          Username <input type="text" />
        </label>
        <label for="Username">
          Age <input type="number" />
        </label>
        <button type="submit">Add User</button>
      </div>

      <div class="users">
        <p>User (Age)</p>
        <p>User (Age)</p>
      </div>

      <div class="model close">
        <div class="form-model">
          <h2>Invali Input!</h2>
          <p>Please Enter Valid Input</p>
          <button class="model-btn">Close</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
