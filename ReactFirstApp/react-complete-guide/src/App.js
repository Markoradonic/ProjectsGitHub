// import logo from "./logo.svg";
import ExpenseItem from "./components/ExpenseItem";
import "./App.css";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 9.54,
      date: new Date(2022, 1, 21),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 294.54,
      date: new Date(2022, 1, 21),
    },
    { id: "e3", title: "Desk", amount: 194.54, date: new Date(2022, 1, 21) },
    {
      id: "e4",
      title: "Bike Insurance",
      amount: 394.54,
      date: new Date(2022, 1, 21),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />

      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />

      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
