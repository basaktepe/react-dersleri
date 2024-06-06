import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  useEffect(() => {
    console.log("her zaman çalışır");
  });

  useEffect(() => {
    console.log("ilk render edildiğinde çalışır");
  }, []);
  useEffect(() => {
    console.log(
      "ilk render edildiğinde ve firstName state değeri değiştiğinde çalışır"
    );
  }, [firstName]);

  useEffect(() => {
    console.log(
      "ilk render edildiğinde ve lastName veya firstName state değeri değiştiğinde çalışır"
    );
  }, [firstName, lastName]);
  return (
    <div>
      <div>
        <button
          onClick={() => {
            setFirstName("Başak");
          }}
        >
          Adı Değiştir
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setLastName("Tepe");
          }}
        >
          Soyadı Değiştir
        </button>
      </div>
    </div>
  );
}

export default App;
