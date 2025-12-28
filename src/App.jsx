 
 function App() {
  const name = "meena";
  const userObj = {
    name: "Meena Purohit",
    age: 29,
    email: "meena@test.com"
  }
  const userArray = ["sam","ravi","dev"];
  let path = "https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_1280.jpg"
  function fruit() {
    return "Apple";
  }
  function sum(a,b) {
    return a+b
  }
  function operation(a,b,op) {
    if(op=="+") {
      return a+b;
    }else if(op=="-") {
      return a-b;
    }else {
      return a*b;
    }
  }

  return (
    <div>
      <h1>{name?name:"user not found"}</h1>
      <h1>{fruit()}</h1>
      <h1>{sum(10,100)}</h1>
      <h1>{operation(10,20,"")}</h1>
      <h1>{userObj.name}</h1>
      <h1>{userArray[0]}</h1>
      <input type="text" value={name} id= {name}/>
      <img 
      src={path}
       />
      </div>
  );
 }

 export default App;