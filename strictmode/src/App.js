import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import UseEffectRelated from "./Components/UseEffectRelated";
let globalVariable = 0;
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <button
        onClick={() =>
          setCount((prev) => {
           globalVariable= globalVariable+1;
            console.log(prev);
            return prev + 4;
          })
        }
      >
        count:{count}
      </button>
      <p>globalVariable:{globalVariable}</p>
      {/* here globalvariable is incresing by 2 but I intended by 1;So because of Reeact.
      strict mode which will renders twice each thing.It will show the unintended sideeffect by showing this result
      Its our work to figure out which is sideeffect.Normally we place sideeffects in useEffect.isn't it? */}
     <UseEffectRelated/>
    </div>
  );
}

export default App;
