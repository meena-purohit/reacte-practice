import { useRef } from "react"; 

function App() {

  const inputRef = useRef(null)
  const h1Ref = useRef(null)


  const inputHandler=()=>{
    console.log(inputRef);
    inputRef.current.style.color='red';
    inputRef.current.focus();
    inputRef.current.placeholder="Enter password";
    inputRef.current.value="123"; 
  }

  const toggleHandler=()=>{

      if( inputRef.current.style.display!='none'){
        inputRef.current.style.display='none'
      } else{
        inputRef.current.style.display='inline'
      }
    }
    const h1handler=()=>{
      h1Ref.current.style.color="green"
    }

  return(

    <div>
      <h1>useRef in React Js</h1>
       <button onClick={toggleHandler}>Toggle</button>
      <input ref={inputRef} type="text" placeholder="Enter your text" />
      <button onClick={inputHandler}>Focus in input</button>
      <h1 ref={h1Ref}>Code Step by Step</h1>
      <button onClick={h1handler}>handle</button>
    </div>
  )
}

export default App;