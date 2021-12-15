import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 21),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        ddate={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        ddate={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        ddate={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        ddate={expenses[0].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
