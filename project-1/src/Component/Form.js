import "./Form.css";
import Input from "./Input";
import Output from "./Output";
import Model from "./Model";

const Form = (props) => {
  return (
    <div class="container">
      <Input />
      <Output />
      <Model />
    </div>
  );
};

export default Form;
