import "./Output.css";

const Output = (props) => {
  const data = props.usersData.map((userData) => (
    <p>
      {userData.Name} ({userData.Age})
    </p>
  ));
  return (
    <div className="users">
      <p>User 1 (40)</p>
      {data}
    </div>
  );
};

export default Output;
