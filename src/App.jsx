import { useRef } from "react";
import UserInput from "./Userinput";

function App() {
  const inputRef = useRef(null);

  const updateInput = () => {
    inputRef.current.value=1000;
    inputRef.current.focus();
    inputRef.current.style.color="red";
  };
  return (
    <div>
      <h1>ForwardRef in React Js</h1>
      <UserInput ref={inputRef}/>
      <button onClick={updateInput}>Update input field</button>
    </div>
  );
}

export default App;
