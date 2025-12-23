 
 function App() {
  const userName="Meena Purohit";
  let x = 10;
  let y = 60;

return (
  <>
   <h1>{userName}</h1>
    <h1>{10+60+10}</h1>
    <h2>{x*y}</h2>
    <button onClick={()=>alert("hello")}>click</button>
  </>
);
 }

 export default App;