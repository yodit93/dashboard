
import './App.css';
import { Chart } from './chart';

function App() {
  const data1 = [
    { name: "Garage", value: 21 },
    { name: "Active", value: 40 },
    { name: "Yard", value: 60 },
  
  ];

  const data2 = [
    { name: "Harsh Acceleration", value: 615 },
    { name: "Night Drive", value: 50}, 
    { name: "Speeding", value: 45 },
    { name: "Harsh Breaking", value: 610 },
  ];
  const COLORS1 = [ "red", "#00C49F", "#fab73b" ];
  const COLORS2 = [ "darkorange",  "lightgray", "#00C49F", "cyan"];


  return (
    <div className="container">
      <div className="card">
        <h3 className="title">Assets Status</h3>
        <Chart data={data1} COLORS={COLORS1} />
      </div>
      <div className="card">
        <h3 className="title">Total violations</h3>
        <Chart data={data2} COLORS={COLORS2} />
      </div>
      <div className="card">
        <h3 className="title">Assets Status</h3>
        <Chart data={data1} COLORS={COLORS1} />
      </div>
      <div className="card">
        <h3 className="title">Assets Status</h3>
        <Chart data={data1} COLORS={COLORS1} />
      </div>
    </div>
   
  );
}

export default App;
