import Expenses from "./component/Expenses/Expenses";

const App = () => {

  const expenses = [
    {
      id: 'e1',
      title: 'toilet paper',
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2020, 2, 28)
    },
    {
      id: 'e4',
      title: 'New Desk (wooden)',
      amount: 450,
      date: new Date(2020, 5, 9)
    }
  ]

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );


  return (
    <Expenses items={expenses}/>
  );
}

export default App;
