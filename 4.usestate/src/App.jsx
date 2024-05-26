import { useState } from "react";
import "./App.css";

function App() {
  // Bir state'in değeri set metodunu kullanarak değiştirildiğinde component yeniden render edilir

  // const [firstName, setFirstName] = useState("Başak");
  // const [lastName, setLastName] = useState("Tepe");

  // const handleChange = () => {
  //   debugger;
  //   setFirstName("Ayşenur");
  // };
  // const [names, setNames] = useState(["Başak", "Dilara", "İlayda"]);

  const [count, setCount] = useState(0);
  const arttir = () => {
    setCount(count + 1);
  };

  console.log("component render edildi.");

  return (
    <div>
      {/* <div> {firstName}</div>
      <div>
        <button onClick={handleChange}>İsmi değiştir</button>
      </div>
      <div>
        {names.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
      </div> */}
      <div>
        <button onClick={arttir}>Arttır</button>
      </div>
    </div>
  );
}

export default App;
