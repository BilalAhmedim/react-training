import "./Expenses.css";
import Expenseitem from "./Expenseitem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expense = (props) => {
  const saveChangeFilterHandler = (enteredFilterData) => {
    const filterData = enteredFilterData;
    console.log(filterData);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter onSaveFilterData={saveChangeFilterHandler} />
      <Expenseitem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <Expenseitem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <Expenseitem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <Expenseitem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
};

export default Expense;
