// function App() {

//   const [color, setColor] = useState("green");


//   return( 
    
//     <div>
//     <h1>Digital Clock in React Js</h1>

//       <select onChange={(event) =>setColor(event.target.value)}>
//         <option value="red">Red</option>
//         <option value="green">Green</option>
//         <option value="blue">Blue</option>
//         <option value="orange">Orange</option>
//       </select>
//       <Clock color={color} />
//     </div>
//   )


// }
//   export default App;

//   import { useEffect, useState } from "react";

// const Clock = ({color}) => {
//   const [time, setTime] = useState(0);

//   useEffect(() => {
//     setInterval(() => {
//       setTime(new Date().toLocaleTimeString())  
//     }, 1000);
//   },[])
//   return (
//     <div>
//       <h1
//         style={{
//           color: color,
//           backgroundColor: "#000",
//           width: "200px",
//           padding: "10px",
//           borderRadius: "5px",
//         }}
//       >
//         {time}
//       </h1>
//     </div>
//   );
// };

// export default Clock;

// import College from "./College";
// import Student from "./Student";


// function App() {

// const collegeData = [
//   {
//     name: "IET Alwar",
//     city: "Alwer",
//     website: "www.iet.com",
//     student: [
//       {
//         name: "Meena Purohit",
//         age: "29",
//         email: "meena@test.com"
//       },
//        {
//         name: "Peter",
//         age: "27",
//         email: "peter@test.com"
//       },
//        {
//         name: "Bruce",
//         age: "25",
//         email: "bruce@test.com"
//       }
//     ]
//   },
//   {
//     name: "IIT Delhi",
//     city: "Delhi",
//     website: "www.iit.com",
//      student: [
//       {
//         name: "Meena Purohit",
//         age: "29",
//         email: "meena@test.com"
//       },
//        {
//         name: "Peter",
//         age: "27",
//         email: "peter@test.com"
//       },
//        {
//         name: "Bruce",
//         age: "25",
//         email: "bruce@test.com"
//       }
//     ]
//   },
//   {
//     name: "KCIET Hissar",
//     city: "Hisar",
//     website: "www.kciet.com",
//      student: [
//       {
//         name: "Meena Purohit",
//         age: "29",
//         email: "meena@test.com"
//       },
//        {
//         name: "Peter",
//         age: "27",
//         email: "peter@test.com"
//       },
//        {
//         name: "Bruce",
//         age: "25",
//         email: "bruce@test.com"
//       }
//     ]
//   }
// ]


//   return(
//     <div>
//       {/* <h1>Nested Looping with Component</h1> */}
//       {
//         collegeData.map((college,index)=>(
//           <div key={index}>
//             <College college= {college}/>
//             </div>
//         ))
//       }
      
//     </div>
//   )


// }

// export default App;

// const Student=({student})=> {
//     return (
//         <div>
//             {
//                     student.map((student,index) => (
//                      <ul key={index}>
//                         <li>Name: {student.name}</li>
//                      </ul>    
//                     ))
//                 }
//         </div>
//     )
    
// }

// export default Student;

// import Student from "./Student";

// const College = ({college})=> {

    
//     return(
//         <div style={{
//             backgroundColor: "#ccc",
//             padding: "20px",
//             borderBottom: "2px solid #000",
//             margin: "10px",
//             borderRadius: "10px"
//         }}>
//             <h1>Name: {college.name}</h1>
//             <ul>
//               <li>
//                 <h3>City: {college.city}</h3>
//               </li>
//             </ul>
//             <ul>
//               <li>
//                 <h3>Website: {college.website}</h3>
//               </li>
//               <li>
//                  <Student student={college.student}/>
         
//               </li>
//             </ul>
           
//         </div>
//     )
// }

// export default College;

import { useEffect, useState } from "react";

function App() {

  const [counter,setCounter] = useState(0);
  const [data,setData] = useState(0);

  useEffect(()=>{
    //  callOnce();  
     counterFunction();

  },[counter])
  function callOnce(){
    console.log("callOnce function called");
  }

  
   function counterFunction() {
    console.log("counterFunction",counter)
   }
 
  return(

    <div>
      <h1>useEffect Hook</h1>
      <button onClick={()=>setCounter(counter+1)}>counter {counter}</button>
      <button onClick={()=>setData(data+1)}>Data {data}</button>
    </div>

  )
}

export default App;