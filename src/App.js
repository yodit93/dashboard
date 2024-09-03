
import './App.css';
import Card from './card';

function App() {

  const data = [ 
    [
      { name: "Garage", value: 21, color: "red" },
      { name: "Active", value: 40 , color: "#00C49F"},
      { name: "Yard", value: 60, color: "#fab73b" },
    ],
    [
      { name: "Harsh Acceleration", value: 615, color: "darkorange" },
      { name: "Night Drive", value: 50, color: "lightgray" }, 
      { name: "Speeding", value: 45, color: "#00C49F" },
      { name: "Harsh Breaking", value: 610, color: "cyan"},
    ],
    [
      { name: "Garage", value: 21, color: "red" },
      { name: "Active", value: 40 , color: "#00C49F"},
      { name: "Yard", value: 60, color: "#fab73b" },
    ],
    [
      { name: "Harsh Acceleration", value: 615, color: "darkorange" },
      { name: "Night Drive", value: 50, color: "lightgray" }, 
      { name: "Speeding", value: 45, color: "#00C49F" },
      { name: "Harsh Breaking", value: 610, color: "cyan"},
    ]
  ];

  const titles = ["Assets Status", "Total Violations", "Licenses", "Assets Service Summary"];

  return (
    <div className="container">
      {data.map((data, index) => (
        <Card data={data} title={titles[index]} />
      ))}
    </div>
   
  );
}

export default App;
