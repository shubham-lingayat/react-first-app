import "./App.css";
import Item from "./components/Item.js";
import ItemDate from "./components/ItemDate.js";

function App() {
  const response = [
    {
      itemDate: "5",
      itemMonth: "November",
      itemYear: "2003",
    },
    {
      itemDate: "1",
      itemMonth: "Jan",
      itemYear: "2024",
    },
    {
      itemDate: "2",
      itemMonth: "Jan",
      itemYear: "2025",
    },
  ];

  return (
    <div className="App">
      <h1> hello </h1>
      <Item></Item>
      <ItemDate
        day={response[0].itemDate}
        month={response[0].itemMonth}
        year={response[0].itemYear}
      ></ItemDate>
      <ItemDate
        day={response[1].itemDate}
        month={response[1].itemMonth}
        year={response[1].itemYear}
      ></ItemDate>
      <ItemDate
        day={response[2].itemDate}
        month={response[2].itemMonth}
        year={response[2].itemYear}
      ></ItemDate>
    </div>
  );
}

export default App;
