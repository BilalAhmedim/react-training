import "./Output.css";

const Output = (props) => {
  const data = props.usersData.map((userData) => (
    <p>
      {userData.Name} (Age {userData.Age})
    </p>
  ));
  return <div className="users">{data}</div>;
};

export default Output;
