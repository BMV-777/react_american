import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");
  const [counter, setCounter] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCounter((c) => c + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>add</button>
      <Messages counter={counter} />
    </div>
  );
}

function Messages(props) {
  return (
    <p>
      Yo have click<strong> {props.counter} </strong> and poluchil sovetov
    </p>
  );
}

export default App;
// урок 10
