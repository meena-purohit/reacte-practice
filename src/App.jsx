import User from "./User";

function App() {
  const displayName = (name) => {
    alert(name);
  };

  const getUser = ()=>{
    alert("getUser function called")
  }
  return (
    <div>
      <h1>Call Parent Component from child component</h1>
      <User displayName={displayName} name = "meena" getUser={getUser}/>
      <User displayName={displayName} name = "Sam" getUser={getUser}/>
      <User displayName={displayName} name = "Petter"getUser={getUser}/>
      <User displayName={displayName} name = "bruce"getUser={getUser}/>
    </div>
  );
}

export default App;
