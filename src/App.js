import "./App.css";
import BarChart from "./charts/BarChart";
import Table from "./Components/Component/Table";
import InputForm from "./Components/InputForm";
import { useApp } from "./Context/AppContext";

function App() {
  // console.log(Object.keys(countUsers(data)));
  // console.log(Object.values(countUsers(data)));
  //hello();
  //const dataCount = countUsers(data);
  // const dataCount = { HR: 10, MH: 14, DL: 28, NL: 35, RJ: 8 };
  // const len = dataCount.length;
  // for (let i = 0; i < len; i++) {
  //   console.log(dataCount[i]);
  // }

  // const dataCountTemp = [
  //   { state: "HR", count: 10 },
  //   { state: "MH", count: 40 },
  //   { state: "DL", count: 28 },
  //   { state: "NL", count: 35 },
  //   { state: "RJ", count: 8 },
  //   { state: "ML", count: 65 },
  // ];
  // console.log(dataCount);

  // dataCount.map((d) => console.log(d.state));
  const { dataCount } = useApp();
  console.log(dataCount);
  return (
    <div className="">
      <InputForm />
      <Table />
      <BarChart />
    </div>
  );
}

export default App;
