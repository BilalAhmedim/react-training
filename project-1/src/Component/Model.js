import "./Model.css";

const Model = (props) => {
  return (
    <div className="model close">
      <div className="form-model">
        <h2>Invali Input!</h2>
        <p>{props.text}</p>
        <button className="model-btn">Close</button>
      </div>
    </div>
  );
};

export default Model;
