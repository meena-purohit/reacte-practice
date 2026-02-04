import { useState } from "react";

function App() {
  const [data, setData] = useState(["sam", "peter", "bruce", "tony"]);
  const [dataDetails, setDataDetails] = useState([
    { name: "meena", age: "25" },
    { name: "sam", age: "20" },
    { name: "pater", age: "21" },
  ]);
  const handelUser = (name) => {
    data[data.length - 1] = name;
    console.log(data);
    setData([...data]);
  };
  const handleAge=(age)=>{
   dataDetails[dataDetails.length-1].age=age
   console.log(dataDetails)
   setDataDetails([...dataDetails])
   
  }
  return (
    <div>
      <h1>Updating Array in State</h1>
      <input
        type="text"
        placeholder="Enter last user name"
        onChange={(event) => handelUser(event.target.value)}
      />
      {data.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}

      <hr />
      <input type="text" placeholder="Enter last user age"
      onChange={(event)=>handleAge(event.target.value)} />
      {
        dataDetails.map((item,index)=>(
          <h4 key={index}>{item.name},{item.age}</h4>
        ))
      }
    </div>
  );
}

export default App;
