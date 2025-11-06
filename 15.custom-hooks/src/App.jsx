import "./App.css";
import useCopyToClipboard from "./hooks/useCopyToClipboard";
import useCounter from "./hooks/useCounter";
import useToggle from "./hooks/useToggle";

function App() {
  const { count, increase, decrease } = useCounter();
  const { open, change } = useToggle();

  const [copied, copy] = useCopyToClipboard("Don't give up");

  return (
    <div>
      <div>{count}</div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      {open && (
        <div
          style={{ width: "100px", height: "100px", backgroundColor: "red" }}
        ></div>
      )}
      <div>
        <button onClick={change}>{open ? "Hide" : "Show"}</button>
      </div>
      <div>
        {copied && "kopyalandı"}
        <button onClick={copy}>Copy</button>
      </div>
    </div>
  );
}

export default App;
