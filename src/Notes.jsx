// // // // function App() {

// // // //   const [color, setColor] = useState("green");


// // // //   return( 
    
// // // //     <div>
// // // //     <h1>Digital Clock in React Js</h1>

// // // //       <select onChange={(event) =>setColor(event.target.value)}>
// // // //         <option value="red">Red</option>
// // // //         <option value="green">Green</option>
// // // //         <option value="blue">Blue</option>
// // // //         <option value="orange">Orange</option>
// // // //       </select>
// // // //       <Clock color={color} />
// // // //     </div>
// // // //   )


// // // // }
// // // //   export default App;

// // // //   import { useEffect, useState } from "react";

// // // // const Clock = ({color}) => {
// // // //   const [time, setTime] = useState(0);

// // // //   useEffect(() => {
// // // //     setInterval(() => {
// // // //       setTime(new Date().toLocaleTimeString())  
// // // //     }, 1000);
// // // //   },[])
// // // //   return (
// // // //     <div>
// // // //       <h1
// // // //         style={{
// // // //           color: color,
// // // //           backgroundColor: "#000",
// // // //           width: "200px",
// // // //           padding: "10px",
// // // //           borderRadius: "5px",
// // // //         }}
// // // //       >
// // // //         {time}
// // // //       </h1>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Clock;

// // // // import College from "./College";
// // // // import Student from "./Student";


// // // // function App() {

// // // // const collegeData = [
// // // //   {
// // // //     name: "IET Alwar",
// // // //     city: "Alwer",
// // // //     website: "www.iet.com",
// // // //     student: [
// // // //       {
// // // //         name: "Meena Purohit",
// // // //         age: "29",
// // // //         email: "meena@test.com"
// // // //       },
// // // //        {
// // // //         name: "Peter",
// // // //         age: "27",
// // // //         email: "peter@test.com"
// // // //       },
// // // //        {
// // // //         name: "Bruce",
// // // //         age: "25",
// // // //         email: "bruce@test.com"
// // // //       }
// // // //     ]
// // // //   },
// // // //   {
// // // //     name: "IIT Delhi",
// // // //     city: "Delhi",
// // // //     website: "www.iit.com",
// // // //      student: [
// // // //       {
// // // //         name: "Meena Purohit",
// // // //         age: "29",
// // // //         email: "meena@test.com"
// // // //       },
// // // //        {
// // // //         name: "Peter",
// // // //         age: "27",
// // // //         email: "peter@test.com"
// // // //       },
// // // //        {
// // // //         name: "Bruce",
// // // //         age: "25",
// // // //         email: "bruce@test.com"
// // // //       }
// // // //     ]
// // // //   },
// // // //   {
// // // //     name: "KCIET Hissar",
// // // //     city: "Hisar",
// // // //     website: "www.kciet.com",
// // // //      student: [
// // // //       {
// // // //         name: "Meena Purohit",
// // // //         age: "29",
// // // //         email: "meena@test.com"
// // // //       },
// // // //        {
// // // //         name: "Peter",
// // // //         age: "27",
// // // //         email: "peter@test.com"
// // // //       },
// // // //        {
// // // //         name: "Bruce",
// // // //         age: "25",
// // // //         email: "bruce@test.com"
// // // //       }
// // // //     ]
// // // //   }
// // // // ]


// // // //   return(
// // // //     <div>
// // // //       {/* <h1>Nested Looping with Component</h1> */}
// // // //       {
// // // //         collegeData.map((college,index)=>(
// // // //           <div key={index}>
// // // //             <College college= {college}/>
// // // //             </div>
// // // //         ))
// // // //       }
      
// // // //     </div>
// // // //   )


// // // // }

// // // // export default App;

// // // // const Student=({student})=> {
// // // //     return (
// // // //         <div>
// // // //             {
// // // //                     student.map((student,index) => (
// // // //                      <ul key={index}>
// // // //                         <li>Name: {student.name}</li>
// // // //                      </ul>    
// // // //                     ))
// // // //                 }
// // // //         </div>
// // // //     )
    
// // // // }

// // // // export default Student;

// // // // import Student from "./Student";

// // // // const College = ({college})=> {

    
// // // //     return(
// // // //         <div style={{
// // // //             backgroundColor: "#ccc",
// // // //             padding: "20px",
// // // //             borderBottom: "2px solid #000",
// // // //             margin: "10px",
// // // //             borderRadius: "10px"
// // // //         }}>
// // // //             <h1>Name: {college.name}</h1>
// // // //             <ul>
// // // //               <li>
// // // //                 <h3>City: {college.city}</h3>
// // // //               </li>
// // // //             </ul>
// // // //             <ul>
// // // //               <li>
// // // //                 <h3>Website: {college.website}</h3>
// // // //               </li>
// // // //               <li>
// // // //                  <Student student={college.student}/>
         
// // // //               </li>
// // // //             </ul>
           
// // // //         </div>
// // // //     )
// // // // }

// // // // export default College;

// // // import { useEffect, useState } from "react";

// // // function App() {

// // //   const [counter,setCounter] = useState(0);
// // //   const [data,setData] = useState(0);

// // //   useEffect(()=>{
// // //     //  callOnce();  
// // //      counterFunction();

// // //   },[counter])
// // //   function callOnce(){
// // //     console.log("callOnce function called");
// // //   }

  
// // //    function counterFunction() {
// // //     console.log("counterFunction",counter)
// // //    }
 
// // //   return(

// // //     <div>
// // //       <h1>useEffect Hook</h1>
// // //       <button onClick={()=>setCounter(counter+1)}>counter {counter}</button>
// // //       <button onClick={()=>setData(data+1)}>Data {data}</button>
// // //     </div>

// // //   )
// // // }

// // // export default App;

// // // import { useState } from "react";
// // // import Counter from "./Counter";

// // // function App() {

// // //   const [count,setCount] = useState(0)
  
 
// // //   return(

// // //     <div>
// // //       {/* <h1>Handel Props Side Effect with useEffect in component </h1> */}
// // //       <button onClick={()=>setCount(count+1)}>Count</button>
// // //      <Counter count={count}/>
// // //     </div>

// // //   )
// // // }

// // // export default App;
// // // import { useEffect } from "react";

// // // const Counter =({count})=>{

// // //     const handlCounter=()=>{
// // //         console.log("counter called")
// // //     }

// // //     useEffect(()=>{
// // //         handlCounter();

// // //     },[])


// // //     return(
// // //         <div>
// // //             <h1>Counter Value{count}</h1>
// // //         </div>

// // //     )                
// // // }

// // // export default Counter;

// // // import { useState } from "react";
// // // import Counter from "./Counter";

// // // function App() {

// // //   const [count,setCount] = useState(0)
// // //   const [data,setData] = useState(0)
// // //   const [display,setDisplay] = useState(true)
 
// // //   return(

// // //     <div>
// // //       {/* <h1>Life cycle in React Js</h1> */}
// // //       {
// // //         display? <Counter count={count} data={data}/>:null
// // //       }
// // //       <button onClick={()=>setCount(count+1)}>Count</button>
// // //        <button onClick={()=>setData(data+1)}>Data</button>
// // //        <button onClick={()=>setDisplay(!display)}>Toggle</button>
     
// // //     </div>

// // //   )
// // // }

// // // export default App;
// // // import { useEffect } from "react";

// // // const Counter =({count,data})=>{



// // //     useEffect(()=>{
// // //      console.log("mount phas only");
// // //     },[]);

// // //      useEffect(()=>{
// // //      console.log("update phase only");
// // //     },[count]);

// // //     useEffect(()=>{
// // //         return()=>{
// // //             console.log("unmounting phase only");
            
// // //         }
// // //     },[])

// // //     return(
// // //         <div>
// // //             <h1>Counter Value{count}</h1>
// // //              <h1>Data Value{data}</h1>
// // //         </div>

// // //     )                
// // // }

// // // export default Counter;
// // // import myImage from "./assets/test-external-2519778_1920.jpg"
// // // function App() {

// // //   const cardStyle = {border:"2px solid #cccccc28",
// // //           width:"200px",
// // //           boxShadow: "1px 2px 3px 0px #cccccc57",
// // //           margin: "10px"}
// // //   return(
// // //     <div>
// // //       <h1 style={{color:"red"}}>Inline Style in React</h1>
// // //       <div style={{display:"flex",flexWrap:"wrap"}}>
// // //       <div style={cardStyle}>
// // //         <img style={{width:"200px"}} src={myImage} alt="not found"/>
// // //          <div>
// // //       <h4>Meena Purohit</h4>
// // //       <p>Software Developer</p>
// // //      </div>
// // //      </div>
// // //      <div style={cardStyle}>
// // //         <img style={{width:"200px"}} src={myImage} alt="not found"/>
// // //          <div>
// // //       <h4>Meena Purohit</h4>
// // //       <p>Software Developer</p>
// // //      </div>
// // //      </div>

// // //      </div>
// // //      </div>
    
// // //   )
// // // }

// // // export default App;
// // import { useState } from "react";
// // import myImage from "./assets/test-external-2519778_1920.jpg";
// // function App() {

// //   const [cardStyle,setCardStyle] = useState( {
// //     border: "2px solid #cccccc28",
// //     width: "200px",
// //     boxShadow: "1px 2px 3px 0px #cccccc57",
// //     margin: "10px",
// //   })
// //   const [grid,setGrid] = useState(true)
// //   const [textColor,setTextColor]= useState('green')

// //   const updateTheme=((bgColor,textColor)=>{
// //     setCardStyle({...cardStyle,backgroundColor:bgColor})
// //     setTextColor()
// //   })
  
// //   return (
// //     <>
// //       <h2>Dynamic and Conditional Inline Style</h2>
// //       <button onClick={()=>updateTheme('gray','green')}>Gray Theme</button>
// //       <button onClick={()=>updateTheme('white','black')}>Default Theme</button>
// //       <button onClick={()=>setGrid(!grid)}>Toggle Grid</button>
// //       <div style={{ display: grid?"flex":"block", flexWrap:"wrap"}}>
// //         <div style={cardStyle}>
// //           <img style={{ width:"200px"}} src={myImage} alt="not found"/>
// //           <div style={{padding:'5px',color:textColor}}>
// //             <h4>Meena Purohit</h4>
// //             <p>Software Developer</p>
// //           </div>
// //         </div>
// //         <div style={cardStyle}>
// //           <img style={{ width:"200px"}} src={myImage} alt="not found"/>
// //           <div style={{padding:'5px',color:textColor}}>
// //             <h4>Meena Purohit</h4>
// //             <p>Software Developer</p>
// //           </div>
// //         </div>
// //         <div style={cardStyle}>
// //           <img style={{ width:"200px"}} src={myImage} alt="not found"/>
// //           <div style={{padding:'5px',color:textColor}}>
// //             <h4>Meena Purohit</h4>
// //             <p>Software Developer</p>
// //           </div>
// //         </div>
// //         <div style={cardStyle}>
// //           <img style={{ width:"200px"}} src={myImage} alt="not found"/>
// //           <div style={{padding:'5px',color:textColor}}>
// //             <h4>Meena Purohit</h4>
// //             <p>Software Developer</p>
// //           </div>
// //         </div>
// //         <div style={cardStyle}>
// //           <img style={{ width:"200px"}} src={myImage} alt="not found"/>
// //           <div style={{padding:'5px',color:textColor}}>
// //             <h4>Meena Purohit</h4>
// //             <p>Software Developer</p>
// //           </div>
// //         </div>
// //         <div style={cardStyle}>
// //           <img style={{ width:"200px"}} src={myImage} alt="not found"/>
// //           <div style={{padding:'5px',color:textColor}}>
// //             <h4>Meena Purohit</h4>
// //             <p>Software Developer</p>
// //           </div>
// //         </div>
// //         <div style={cardStyle}>
// //           <img style={{ width:"200px"}} src={myImage} alt="not found"/>
// //           <div style={{padding:'5px',color:textColor}}>
// //             <h4>Meena Purohit</h4>
// //             <p>Software Developer</p>
// //           </div>
// //         </div>
// //         <div style={cardStyle}>
// //           <img style={{ width:"200px"}} src={myImage} alt="not found"/>
// //           <div style={{padding:'5px',color:textColor}}>
// //             <h4>Meena Purohit</h4>
// //             <p>Software Developer</p>
// //           </div>
// //         </div>
// //         <div style={cardStyle}>
// //           <img style={{ width:"200px"}} src={myImage} alt="not found"/>
// //           <div style={{padding:'5px',color:textColor}}>
// //             <h4>Meena Purohit</h4>
// //             <p>Software Developer</p>
// //           </div>
// //         </div>
// //         <div style={cardStyle}>
// //           <img style={{ width:"200px"}} src={myImage} alt="not found"/>
// //           <div style={{padding:'5px',color:textColor}}>
// //             <h4>Meena Purohit</h4>
// //             <p>Software Developer</p>
// //           </div>
// //         </div>
// //         <div style={cardStyle}>
// //           <img style={{ width:"200px"}} src={myImage} alt="not found"/>
// //           <div style={{padding:'5px',color:textColor}}>
// //             <h4>Meena Purohit</h4>
// //             <p>Software Developer</p>
// //           </div>
// //         </div>
// //         <div style={cardStyle}>
// //           <img style={{ width:"200px"}} src={myImage} alt="not found"/>
// //           <div style={{padding:'5px',color:textColor}}>
// //             <h4>Meena Purohit</h4>
// //             <p>Software Developer</p>
// //           </div>
// //         </div>
// //         <div style={cardStyle}>
// //           <img style={{ width:"200px"}} src={myImage} alt="not found"/>
// //           <div style={{padding:'5px',color:textColor}}>
// //             <h4>Meena Purohit</h4>
// //             <p>Software Developer</p>
// //           </div>
// //         </div>
// //         <div style={cardStyle}>
// //           <img style={{ width:"200px"}} src={myImage} alt="not found"/>
// //           <div style={{padding:'5px',color:textColor}}>
// //             <h4>Meena Purohit</h4>
// //             <p>Software Developer</p>
// //           </div>
// //         </div>
// //         <div style={cardStyle}>
// //           <img style={{ width:"200px"}} src={myImage} alt="not found"/>
// //           <div style={{padding:'5px',color:textColor}}>
// //             <h4>Meena Purohit</h4>
// //             <p>Software Developer</p>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default App;
// import  "./css/style.css"
// import myImage from "./assets/test-external-2519778_1920.jpg";
// function App() {
//   return(
//     <>
//       <h1 className='heading'>External Style </h1>
//       <div className="container">
//       <div className="card-style">
//         <img className="img-style" src={myImage}  />
//         <div className="text-wrap">
//           <h4>Meena Purohit</h4>
//           <p>Software Developer</p>
//         </div>
//       </div>
//       <div className="card-style">
//         <img className="img-style" src={myImage}  />
//         <div className="text-wrap">
//           <h4>Meena Purohit</h4>
//           <p>Software Developer</p>
//         </div>
//       </div>
//       <div className="card-style">
//         <img className="img-style" src={myImage}  />
//         <div className="text-wrap">
//           <h4>Meena Purohit</h4>
//           <p>Software Developer</p>
//         </div>
//       </div>
//       <div className="card-style">
//         <img className="img-style" src={myImage}  />
//         <div className="text-wrap">
//           <h4>Meena Purohit</h4>
//           <p>Software Developer</p>
//         </div>
//       </div>
//       <div className="card-style">
//         <img className="img-style" src={myImage}  />
//         <div className="text-wrap">
//           <h4>Meena Purohit</h4>
//           <p>Software Developer</p>
//         </div>
//       </div>
//       <div className="card-style">
//         <img className="img-style" src={myImage}  />
//         <div className="text-wrap">
//           <h4>Meena Purohit</h4>
//           <p>Software Developer</p>
//         </div>
//       </div>
//       <div className="card-style">
//         <img className="img-style" src={myImage}  />
//         <div className="text-wrap">
//           <h4>Meena Purohit</h4>
//           <p>Software Developer</p>
//         </div>
//       </div>
//       <div className="card-style">
//         <img className="img-style" src={myImage}  />
//         <div className="text-wrap">
//           <h4>Meena Purohit</h4>
//           <p>Software Developer</p>
//         </div>
//       </div>
//       <div className="card-style">
//         <img className="img-style" src={myImage}  />
//         <div className="text-wrap">
//           <h4>Meena Purohit</h4>
//           <p>Software Developer</p>
//         </div>
//       </div>
//       <div className="card-style">
//         <img className="img-style" src={myImage}  />
//         <div className="text-wrap">
//           <h4>Meena Purohit</h4>
//           <p>Software Developer</p>
//         </div>
//       </div>
//       </div>
//     </>
//   )
// }

// export default App;

// import UserProfile from "./UserProfile";
// import "./css/style.css"



// function App() {
//   return (
//     <div>
//       <h1 className="heading">Style with CSS Module in React Js</h1>
//       <div style={{display:"flex",flexWrap:"wrap"}}>
//         <UserProfile/>
//         <UserProfile/>
//         <UserProfile/>
//         <UserProfile/>
//         <UserProfile/>
//         <UserProfile/>
//         <UserProfile/>
//         <UserProfile/>
//         <UserProfile/>
//         <UserProfile/>
//         <UserProfile/>
//         <UserProfile/>
//         <UserProfile/>
//         <UserProfile/>
//       </div>
//     </div>
//   );
// }

// export default App;

// import myImage from "./assets/test-external-2519778_1920.jpg";
// import style from "./css/userprofile.module.css"


// function UserProfile() {
//     return(
//         <div>
//             {/* <h1 className={style.heading}>Modular Card</h1> */}
//             <div className={style.container}>
//                 <img className={style.width} src={myImage} />
//                 <div className={style.textWrap}>
//                     <h4>Meena Purohit</h4>
//                     <p>Software Developer</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default UserProfile;
