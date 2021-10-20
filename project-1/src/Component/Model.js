import "./Model.css";

const Model = (props) => {
  const modelHandler = () => {
    props.onInvalid();
  };
  return (
    <div
      className={!props.isValid ? "model close" : "model open"}
      onClick={modelHandler}
    >
      <div className="form-model">
        <h2>Invali Input!</h2>
        <p>{"Please Enter Age < 0 !"}</p>
        <button className="model-btn" onClick={modelHandler}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Model;
