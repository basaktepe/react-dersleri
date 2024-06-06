import { useState } from "react";
import "./App.css";

function App() {
  const [vize1, setVize1] = useState(0);

  const [vize2, setVize2] = useState(0);

  const ortalamaBul = () => {
    debugger;
    const toplamSonuc = topla() / 2;
    yazdir(toplamSonuc);
  };

  const topla = () => {
    const toplam = vize1 + vize2;
    debugger;
    return toplam;
  };

  const yazdir = (sonuc) => {
    debugger;
    console.log("Ortalama: " + sonuc);
  };

  return (
    <div>
      <div>
        <input
          type="number"
          value={vize1}
          onChange={(e) => setVize1(Number(e.target.value))}
        />
      </div>
      <div>
        <input
          type="number"
          value={vize2}
          onChange={(e) => setVize2(Number(e.target.value))}
        />
      </div>
      <div>
        <button onClick={ortalamaBul}>Ortalama Bul</button>
      </div>
    </div>
  );
}

export default App;
