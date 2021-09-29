import Expenseitem from "./components/Expenseitem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenseitem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></Expenseitem>
      <Expenseitem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></Expenseitem>
      <Expenseitem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></Expenseitem>
      <Expenseitem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></Expenseitem>
    </div>
  );
}

export default App;
