import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "Location1"
    },
    { 
      id: 'e2',
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2021, 2, 12),
      location: "Location2"},
      
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "Location3"
    },
    {
      id: 'e4',
      title: 'New Desk',
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "Location4"
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <div>{expenses.map((i)=>{
          return <ExpenseItem date={i.date} title={i.title} amount={i.amount} location={i.location}/>
      })}</div>
      
    </div>
  );
}
export default App;

