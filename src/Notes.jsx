// // // // // function App() {

// // // // //   const [color, setColor] = useState("green");


// // // // //   return( 
    
// // // // //     <div>
// // // // //     <h1>Digital Clock in React Js</h1>

// // // // //       <select onChange={(event) =>setColor(event.target.value)}>
// // // // //         <option value="red">Red</option>
// // // // //         <option value="green">Green</option>
// // // // //         <option value="blue">Blue</option>
// // // // //         <option value="orange">Orange</option>
// // // // //       </select>
// // // // //       <Clock color={color} />
// // // // //     </div>
// // // // //   )


// // // // // }
// // // // //   export default App;

// // // // //   import { useEffect, useState } from "react";

// // // // // const Clock = ({color}) => {
// // // // //   const [time, setTime] = useState(0);

// // // // //   useEffect(() => {
// // // // //     setInterval(() => {
// // // // //       setTime(new Date().toLocaleTimeString())  
// // // // //     }, 1000);
// // // // //   },[])
// // // // //   return (
// // // // //     <div>
// // // // //       <h1
// // // // //         style={{
// // // // //           color: color,
// // // // //           backgroundColor: "#000",
// // // // //           width: "200px",
// // // // //           padding: "10px",
// // // // //           borderRadius: "5px",
// // // // //         }}
// // // // //       >
// // // // //         {time}
// // // // //       </h1>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Clock;

// // // // // import College from "./College";
// // // // // import Student from "./Student";


// // // // // function App() {

// // // // // const collegeData = [
// // // // //   {
// // // // //     name: "IET Alwar",
// // // // //     city: "Alwer",
// // // // //     website: "www.iet.com",
// // // // //     student: [
// // // // //       {
// // // // //         name: "Meena Purohit",
// // // // //         age: "29",
// // // // //         email: "meena@test.com"
// // // // //       },
// // // // //        {
// // // // //         name: "Peter",
// // // // //         age: "27",
// // // // //         email: "peter@test.com"
// // // // //       },
// // // // //        {
// // // // //         name: "Bruce",
// // // // //         age: "25",
// // // // //         email: "bruce@test.com"
// // // // //       }
// // // // //     ]
// // // // //   },
// // // // //   {
// // // // //     name: "IIT Delhi",
// // // // //     city: "Delhi",
// // // // //     website: "www.iit.com",
// // // // //      student: [
// // // // //       {
// // // // //         name: "Meena Purohit",
// // // // //         age: "29",
// // // // //         email: "meena@test.com"
// // // // //       },
// // // // //        {
// // // // //         name: "Peter",
// // // // //         age: "27",
// // // // //         email: "peter@test.com"
// // // // //       },
// // // // //        {
// // // // //         name: "Bruce",
// // // // //         age: "25",
// // // // //         email: "bruce@test.com"
// // // // //       }
// // // // //     ]
// // // // //   },
// // // // //   {
// // // // //     name: "KCIET Hissar",
// // // // //     city: "Hisar",
// // // // //     website: "www.kciet.com",
// // // // //      student: [
// // // // //       {
// // // // //         name: "Meena Purohit",
// // // // //         age: "29",
// // // // //         email: "meena@test.com"
// // // // //       },
// // // // //        {
// // // // //         name: "Peter",
// // // // //         age: "27",
// // // // //         email: "peter@test.com"
// // // // //       },
// // // // //        {
// // // // //         name: "Bruce",
// // // // //         age: "25",
// // // // //         email: "bruce@test.com"
// // // // //       }
// // // // //     ]
// // // // //   }
// // // // // ]


// // // // //   return(
// // // // //     <div>
// // // // //       {/* <h1>Nested Looping with Component</h1> */}
// // // // //       {
// // // // //         collegeData.map((college,index)=>(
// // // // //           <div key={index}>
// // // // //             <College college= {college}/>
// // // // //             </div>
// // // // //         ))
// // // // //       }
      
// // // // //     </div>
// // // // //   )


// // // // // }

// // // // // export default App;

// // // // // const Student=({student})=> {
// // // // //     return (
// // // // //         <div>
// // // // //             {
// // // // //                     student.map((student,index) => (
// // // // //                      <ul key={index}>
// // // // //                         <li>Name: {student.name}</li>
// // // // //                      </ul>    
// // // // //                     ))
// // // // //                 }
// // // // //         </div>
// // // // //     )
    
// // // // // }

// // // // // export default Student;

// // // // // import Student from "./Student";

// // // // // const College = ({college})=> {

    
// // // // //     return(
// // // // //         <div style={{
// // // // //             backgroundColor: "#ccc",
// // // // //             padding: "20px",
// // // // //             borderBottom: "2px solid #000",
// // // // //             margin: "10px",
// // // // //             borderRadius: "10px"
// // // // //         }}>
// // // // //             <h1>Name: {college.name}</h1>
// // // // //             <ul>
// // // // //               <li>
// // // // //                 <h3>City: {college.city}</h3>
// // // // //               </li>
// // // // //             </ul>
// // // // //             <ul>
// // // // //               <li>
// // // // //                 <h3>Website: {college.website}</h3>
// // // // //               </li>
// // // // //               <li>
// // // // //                  <Student student={college.student}/>
         
// // // // //               </li>
// // // // //             </ul>
           
// // // // //         </div>
// // // // //     )
// // // // // }

// // // // // export default College;

// // // // import { useEffect, useState } from "react";

// // // // function App() {

// // // //   const [counter,setCounter] = useState(0);
// // // //   const [data,setData] = useState(0);

// // // //   useEffect(()=>{
// // // //     //  callOnce();  
// // // //      counterFunction();

// // // //   },[counter])
// // // //   function callOnce(){
// // // //     console.log("callOnce function called");
// // // //   }

  
// // // //    function counterFunction() {
// // // //     console.log("counterFunction",counter)
// // // //    }
 
// // // //   return(

// // // //     <div>
// // // //       <h1>useEffect Hook</h1>
// // // //       <button onClick={()=>setCounter(counter+1)}>counter {counter}</button>
// // // //       <button onClick={()=>setData(data+1)}>Data {data}</button>
// // // //     </div>

// // // //   )
// // // // }

// // // // export default App;

// // // // import { useState } from "react";
// // // // import Counter from "./Counter";

// // // // function App() {

// // // //   const [count,setCount] = useState(0)
  
 
// // // //   return(

// // // //     <div>
// // // //       {/* <h1>Handel Props Side Effect with useEffect in component </h1> */}
// // // //       <button onClick={()=>setCount(count+1)}>Count</button>
// // // //      <Counter count={count}/>
// // // //     </div>

// // // //   )
// // // // }

// // // // export default App;
// // // // import { useEffect } from "react";

// // // // const Counter =({count})=>{

// // // //     const handlCounter=()=>{
// // // //         console.log("counter called")
// // // //     }

// // // //     useEffect(()=>{
// // // //         handlCounter();

// // // //     },[])


// // // //     return(
// // // //         <div>
// // // //             <h1>Counter Value{count}</h1>
// // // //         </div>

// // // //     )                
// // // // }

// // // // export default Counter;

// // // // import { useState } from "react";
// // // // import Counter from "./Counter";

// // // // function App() {

// // // //   const [count,setCount] = useState(0)
// // // //   const [data,setData] = useState(0)
// // // //   const [display,setDisplay] = useState(true)
 
// // // //   return(

// // // //     <div>
// // // //       {/* <h1>Life cycle in React Js</h1> */}
// // // //       {
// // // //         display? <Counter count={count} data={data}/>:null
// // // //       }
// // // //       <button onClick={()=>setCount(count+1)}>Count</button>
// // // //        <button onClick={()=>setData(data+1)}>Data</button>
// // // //        <button onClick={()=>setDisplay(!display)}>Toggle</button>
     
// // // //     </div>

// // // //   )
// // // // }

// // // // export default App;
// // // // import { useEffect } from "react";

// // // // const Counter =({count,data})=>{



// // // //     useEffect(()=>{
// // // //      console.log("mount phas only");
// // // //     },[]);

// // // //      useEffect(()=>{
// // // //      console.log("update phase only");
// // // //     },[count]);

// // // //     useEffect(()=>{
// // // //         return()=>{
// // // //             console.log("unmounting phase only");
            
// // // //         }
// // // //     },[])

// // // //     return(
// // // //         <div>
// // // //             <h1>Counter Value{count}</h1>
// // // //              <h1>Data Value{data}</h1>
// // // //         </div>

// // // //     )                
// // // // }

// // // // export default Counter;
// // // // import myImage from "./assets/test-external-2519778_1920.jpg"
// // // // function App() {

// // // //   const cardStyle = {border:"2px solid #cccccc28",
// // // //           width:"200px",
// // // //           boxShadow: "1px 2px 3px 0px #cccccc57",
// // // //           margin: "10px"}
// // // //   return(
// // // //     <div>
// // // //       <h1 style={{color:"red"}}>Inline Style in React</h1>
// // // //       <div style={{display:"flex",flexWrap:"wrap"}}>
// // // //       <div style={cardStyle}>
// // // //         <img style={{width:"200px"}} src={myImage} alt="not found"/>
// // // //          <div>
// // // //       <h4>Meena Purohit</h4>
// // // //       <p>Software Developer</p>
// // // //      </div>
// // // //      </div>
// // // //      <div style={cardStyle}>
// // // //         <img style={{width:"200px"}} src={myImage} alt="not found"/>
// // // //          <div>
// // // //       <h4>Meena Purohit</h4>
// // // //       <p>Software Developer</p>
// // // //      </div>
// // // //      </div>

// // // //      </div>
// // // //      </div>
    
// // // //   )
// // // // }

// // // // export default App;
// // // import { useState } from "react";
// // // import myImage from "./assets/test-external-2519778_1920.jpg";
// // // function App() {

// // //   const [cardStyle,setCardStyle] = useState( {
// // //     border: "2px solid #cccccc28",
// // //     width: "200px",
// // //     boxShadow: "1px 2px 3px 0px #cccccc57",
// // //     margin: "10px",
// // //   })
// // //   const [grid,setGrid] = useState(true)
// // //   const [textColor,setTextColor]= useState('green')

// // //   const updateTheme=((bgColor,textColor)=>{
// // //     setCardStyle({...cardStyle,backgroundColor:bgColor})
// // //     setTextColor()
// // //   })
  
// // //   return (
// // //     <>
// // //       <h2>Dynamic and Conditional Inline Style</h2>
// // //       <button onClick={()=>updateTheme('gray','green')}>Gray Theme</button>
// // //       <button onClick={()=>updateTheme('white','black')}>Default Theme</button>
// // //       <button onClick={()=>setGrid(!grid)}>Toggle Grid</button>
// // //       <div style={{ display: grid?"flex":"block", flexWrap:"wrap"}}>
// // //         <div style={cardStyle}>
// // //           <img style={{ width:"200px"}} src={myImage} alt="not found"/>
// // //           <div style={{padding:'5px',color:textColor}}>
// // //             <h4>Meena Purohit</h4>
// // //             <p>Software Developer</p>
// // //           </div>
// // //         </div>
// // //         <div style={cardStyle}>
// // //           <img style={{ width:"200px"}} src={myImage} alt="not found"/>
// // //           <div style={{padding:'5px',color:textColor}}>
// // //             <h4>Meena Purohit</h4>
// // //             <p>Software Developer</p>
// // //           </div>
// // //         </div>
// // //         <div style={cardStyle}>
// // //           <img style={{ width:"200px"}} src={myImage} alt="not found"/>
// // //           <div style={{padding:'5px',color:textColor}}>
// // //             <h4>Meena Purohit</h4>
// // //             <p>Software Developer</p>
// // //           </div>
// // //         </div>
// // //         <div style={cardStyle}>
// // //           <img style={{ width:"200px"}} src={myImage} alt="not found"/>
// // //           <div style={{padding:'5px',color:textColor}}>
// // //             <h4>Meena Purohit</h4>
// // //             <p>Software Developer</p>
// // //           </div>
// // //         </div>
// // //         <div style={cardStyle}>
// // //           <img style={{ width:"200px"}} src={myImage} alt="not found"/>
// // //           <div style={{padding:'5px',color:textColor}}>
// // //             <h4>Meena Purohit</h4>
// // //             <p>Software Developer</p>
// // //           </div>
// // //         </div>
// // //         <div style={cardStyle}>
// // //           <img style={{ width:"200px"}} src={myImage} alt="not found"/>
// // //           <div style={{padding:'5px',color:textColor}}>
// // //             <h4>Meena Purohit</h4>
// // //             <p>Software Developer</p>
// // //           </div>
// // //         </div>
// // //         <div style={cardStyle}>
// // //           <img style={{ width:"200px"}} src={myImage} alt="not found"/>
// // //           <div style={{padding:'5px',color:textColor}}>
// // //             <h4>Meena Purohit</h4>
// // //             <p>Software Developer</p>
// // //           </div>
// // //         </div>
// // //         <div style={cardStyle}>
// // //           <img style={{ width:"200px"}} src={myImage} alt="not found"/>
// // //           <div style={{padding:'5px',color:textColor}}>
// // //             <h4>Meena Purohit</h4>
// // //             <p>Software Developer</p>
// // //           </div>
// // //         </div>
// // //         <div style={cardStyle}>
// // //           <img style={{ width:"200px"}} src={myImage} alt="not found"/>
// // //           <div style={{padding:'5px',color:textColor}}>
// // //             <h4>Meena Purohit</h4>
// // //             <p>Software Developer</p>
// // //           </div>
// // //         </div>
// // //         <div style={cardStyle}>
// // //           <img style={{ width:"200px"}} src={myImage} alt="not found"/>
// // //           <div style={{padding:'5px',color:textColor}}>
// // //             <h4>Meena Purohit</h4>
// // //             <p>Software Developer</p>
// // //           </div>
// // //         </div>
// // //         <div style={cardStyle}>
// // //           <img style={{ width:"200px"}} src={myImage} alt="not found"/>
// // //           <div style={{padding:'5px',color:textColor}}>
// // //             <h4>Meena Purohit</h4>
// // //             <p>Software Developer</p>
// // //           </div>
// // //         </div>
// // //         <div style={cardStyle}>
// // //           <img style={{ width:"200px"}} src={myImage} alt="not found"/>
// // //           <div style={{padding:'5px',color:textColor}}>
// // //             <h4>Meena Purohit</h4>
// // //             <p>Software Developer</p>
// // //           </div>
// // //         </div>
// // //         <div style={cardStyle}>
// // //           <img style={{ width:"200px"}} src={myImage} alt="not found"/>
// // //           <div style={{padding:'5px',color:textColor}}>
// // //             <h4>Meena Purohit</h4>
// // //             <p>Software Developer</p>
// // //           </div>
// // //         </div>
// // //         <div style={cardStyle}>
// // //           <img style={{ width:"200px"}} src={myImage} alt="not found"/>
// // //           <div style={{padding:'5px',color:textColor}}>
// // //             <h4>Meena Purohit</h4>
// // //             <p>Software Developer</p>
// // //           </div>
// // //         </div>
// // //         <div style={cardStyle}>
// // //           <img style={{ width:"200px"}} src={myImage} alt="not found"/>
// // //           <div style={{padding:'5px',color:textColor}}>
// // //             <h4>Meena Purohit</h4>
// // //             <p>Software Developer</p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // }

// // // export default App;
// // import  "./css/style.css"
// // import myImage from "./assets/test-external-2519778_1920.jpg";
// // function App() {
// //   return(
// //     <>
// //       <h1 className='heading'>External Style </h1>
// //       <div className="container">
// //       <div className="card-style">
// //         <img className="img-style" src={myImage}  />
// //         <div className="text-wrap">
// //           <h4>Meena Purohit</h4>
// //           <p>Software Developer</p>
// //         </div>
// //       </div>
// //       <div className="card-style">
// //         <img className="img-style" src={myImage}  />
// //         <div className="text-wrap">
// //           <h4>Meena Purohit</h4>
// //           <p>Software Developer</p>
// //         </div>
// //       </div>
// //       <div className="card-style">
// //         <img className="img-style" src={myImage}  />
// //         <div className="text-wrap">
// //           <h4>Meena Purohit</h4>
// //           <p>Software Developer</p>
// //         </div>
// //       </div>
// //       <div className="card-style">
// //         <img className="img-style" src={myImage}  />
// //         <div className="text-wrap">
// //           <h4>Meena Purohit</h4>
// //           <p>Software Developer</p>
// //         </div>
// //       </div>
// //       <div className="card-style">
// //         <img className="img-style" src={myImage}  />
// //         <div className="text-wrap">
// //           <h4>Meena Purohit</h4>
// //           <p>Software Developer</p>
// //         </div>
// //       </div>
// //       <div className="card-style">
// //         <img className="img-style" src={myImage}  />
// //         <div className="text-wrap">
// //           <h4>Meena Purohit</h4>
// //           <p>Software Developer</p>
// //         </div>
// //       </div>
// //       <div className="card-style">
// //         <img className="img-style" src={myImage}  />
// //         <div className="text-wrap">
// //           <h4>Meena Purohit</h4>
// //           <p>Software Developer</p>
// //         </div>
// //       </div>
// //       <div className="card-style">
// //         <img className="img-style" src={myImage}  />
// //         <div className="text-wrap">
// //           <h4>Meena Purohit</h4>
// //           <p>Software Developer</p>
// //         </div>
// //       </div>
// //       <div className="card-style">
// //         <img className="img-style" src={myImage}  />
// //         <div className="text-wrap">
// //           <h4>Meena Purohit</h4>
// //           <p>Software Developer</p>
// //         </div>
// //       </div>
// //       <div className="card-style">
// //         <img className="img-style" src={myImage}  />
// //         <div className="text-wrap">
// //           <h4>Meena Purohit</h4>
// //           <p>Software Developer</p>
// //         </div>
// //       </div>
// //       </div>
// //     </>
// //   )
// // }

// // export default App;

// // import UserProfile from "./UserProfile";
// // import "./css/style.css"



// // function App() {
// //   return (
// //     <div>
// //       <h1 className="heading">Style with CSS Module in React Js</h1>
// //       <div style={{display:"flex",flexWrap:"wrap"}}>
// //         <UserProfile/>
// //         <UserProfile/>
// //         <UserProfile/>
// //         <UserProfile/>
// //         <UserProfile/>
// //         <UserProfile/>
// //         <UserProfile/>
// //         <UserProfile/>
// //         <UserProfile/>
// //         <UserProfile/>
// //         <UserProfile/>
// //         <UserProfile/>
// //         <UserProfile/>
// //         <UserProfile/>
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;

// // import myImage from "./assets/test-external-2519778_1920.jpg";
// // import style from "./css/userprofile.module.css"


// // function UserProfile() {
// //     return(
// //         <div>
// //             {/* <h1 className={style.heading}>Modular Card</h1> */}
// //             <div className={style.container}>
// //                 <img className={style.width} src={myImage} />
// //                 <div className={style.textWrap}>
// //                     <h4>Meena Purohit</h4>
// //                     <p>Software Developer</p>
// //                 </div>
// //             </div>
// //         </div>
// //     )
// // }

// // export default UserProfile;

// // import styled from "styled-components";

// // function App() {
// //   const Heading = styled.h1`
// //     color: red;
// //     border: 1px solid green;
// //     border-radius: 5px;
// //     margin: 20px;
// //     padding: 20px;
// //   `;

// //   const Stylbtn = styled.button`
// //     border: 2px solid black;
// //     border-radius: 5px;
// //     height: 40px;
// //     width: 130px;
// //     margin: 20px;
// //   `;

// //   return (
// //     <div>
// //       <h1>Styled Component with React Js</h1>
// //       <Heading>Hello Heading</Heading>
// //       <Heading>Hello Heading</Heading>
// //       <Heading>Hello Heading</Heading>
// //       <Heading>Hello Heading</Heading>
// //       <Heading>Hello Heading</Heading>
// //       <Stylbtn>signin</Stylbtn>
// //       <Stylbtn>signup</Stylbtn>
// //       <Stylbtn>exit</Stylbtn>
// //       <Stylbtn>back</Stylbtn>
// //     </div>
// //   );
// // }

// // export default App;
// import Button from 'react-bootstrap/Button';
// import Alert from 'react-bootstrap/Alert';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// // import { Alert } from 'bootstrap';

// function App() {
  

//   return (
//     <div>
//        <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//       <h1> React Bootstrap</h1>
      
//       {/* <Button variant='danger'>okay</Button> */}

//       {/* <Alert variant='success'>Hello user</Alert> */}
//     </div>
//   )
// }

// export default App;
// import { useRef } from "react"; 

// function App() {

//   const inputRef = useRef(null)
//   const h1Ref = useRef(null)


//   const inputHandler=()=>{
//     console.log(inputRef);
//     inputRef.current.style.color='red';
//     inputRef.current.focus();
//     inputRef.current.placeholder="Enter password";
//     inputRef.current.value="123"; 
//   }

//   const toggleHandler=()=>{

//       if( inputRef.current.style.display!='none'){
//         inputRef.current.style.display='none'
//       } else{
//         inputRef.current.style.display='inline'
//       }
//     }
//     const h1handler=()=>{
//       h1Ref.current.style.color="green"
//     }

//   return(

//     <div>
//       <h1>useRef in React Js</h1>
//        <button onClick={toggleHandler}>Toggle</button>
//       <input ref={inputRef} type="text" placeholder="Enter your text" />
//       <button onClick={inputHandler}>Focus in input</button>
//       <h1 ref={h1Ref}>Code Step by Step</h1>
//       <button onClick={h1handler}>handle</button>
//     </div>
//   )
// }

// export default App;

// import { useRef } from "react";

// function App() {

//     const userRef = useRef();
//     const passwordRef = useRef();

//     const handleForm=(event)=>{
//         event.preventDefault();
//         const user=document.querySelector("#user").value;
//         const password= document.querySelector("#password").value;
//         console.log(user,password);
//         }

//         const handleFormRef=(event)=>{
//             event.preventDefault()
//             const user = userRef.current.value 
//             const password= passwordRef.current.value 
//              console.log("handleFormRef",user,password)
//         }

       

        
      
//     return(
//         <div>
//             <h1>Uncontrolled Component</h1>
//             <form action="" method="post" onSubmit={handleForm}>
//             <input type="text" id="user" placeholder="Enter user name" />
//             <br />
//             <br />
//             <input type="password" id="password" placeholder="Enter user password" />
//             <br />
//             <br />
//             <button>
//                 Submit
//             </button>
//             </form>

//             <hr />
//             <h1>Uncontrolled Component with Ref</h1>
//             <form action="" method="post" onSubmit={handleFormRef}>
//             <input type="text" ref={userRef} placeholder="Enter user name" />
//             <br />
//             <br />
//             <input type="password" ref={passwordRef}  placeholder="Enter user password" />
//             <br />
//             <br />
//             <button>
//                 Submit with Ref
//             </button>
//             </form>
//         </div>
//     )
// }

// export default App;

// function User({displayName,name,getUser}) {


       
    
//     return (
//         <div>
//             <button onClick={()=>displayName(name)}>Display Name</button>
//             <button onClick={getUser}>GetUser</button>
//         </div>
//     )
// }

// export default User;

// import User from "./User";

// function App() {
//   const displayName = (name) => {
//     alert(name);
//   };

//   const getUser = ()=>{
//     alert("getUser function called")
//   }
//   return (
//     <div>
//       <h1>Call Parent Component from child component</h1>
//       <User displayName={displayName} name = "meena" getUser={getUser}/>
//       <User displayName={displayName} name = "Sam" getUser={getUser}/>
//       <User displayName={displayName} name = "Petter"getUser={getUser}/>
//       <User displayName={displayName} name = "bruce"getUser={getUser}/>
//     </div>
//   );
// }

// export default App;

// import { forwardRef } from "react";

// const UserInput=(props,ref)=>{
//     return(
//         <div>
//             <input type="text" ref={ref}/>
//         </div>
//     )

// }

// export default forwardRef(UserInput);

// const UserInput=(props)=>{

//     return (
//         <div>
//             <input type="text"ref={props.ref} />
//         </div>

//     )
// }

// export default UserInput;

// import { useRef } from "react";
// import UserInput from "./Userinput";

// function App() {
//   const inputRef = useRef(null);

//   const updateInput = () => {
//     inputRef.current.value=1000;
//     inputRef.current.focus();
//     inputRef.current.style.color="red";
//   };
//   return (
//     <div>
//       <h1>ForwardRef in React Js</h1>
//       <UserInput ref={inputRef}/>
//       <button onClick={updateInput}>Update input field</button>
//     </div>
//   );
// }

// export default App;
//import { useFormStatus } from "react-dom";

// function App() {
//   const handleSubmit = async () => {
//     await new Promise((res) => setTimeout(res, 5000));
//     console.log("submit");
//   };

//   function CustomerForm() {
//     const { pending } = useFormStatus();
//     console.log(pending);

//     return (
//       <div>
//         <input type="text" placeholder="Enter Text" />
//         <br />
//         <br />
//         <input type="text" placeholder="Enter Password" />
//         <br />
//         <br />
//         <button disabled={pending}>{pending?'submiting...':'Submit'}</button>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h1>useFormStatus Hook in React js 19</h1>
//       <form action={handleSubmit}>
//         <CustomerForm/>
//       </form>
     
//     </div>
//   );
// }
// //
// export default App;
// import { useState, useTransition } from "react";

// function App() {
//     const [pending,startTransition]= useTransition();

 
   
//     const handleButton=()=>{
//         startTransition(async()=>{
//          await new Promise(res=>setTimeout(res,2000))
//     })
        
//     }

//     return (
//         <div>
//             <h1>useTransition Hook in React Js 19</h1>
//            {
//             pending?
//             <img style={{width:"100px"}} src="https://gifdb.com/images/high/minimalist-black-loading-screen-yrjqekpw1qvj8e6o.gif" alt=""/>:null
//            }
//             <button disabled={pending} onClick={handleButton}>Click</button>
//         </div>
//     )
// }
// export default App;

// let guest= 0

// function App() {
   
//   return (
//     <div>
//       <h1>Keeping Components Pure</h1>
//       <Cup guest={1} />
//       <Cup guest={2} />
//       <Cup guest={3} />
//       <Cup guest={4} />
//       <Cup guest={5} />
//     </div>
//   );
// }

// const Cup = ({guest}) => {
//     //  let guest = 0
//   return (
//     <h1>
//       we have {guest} guest and we have to make {guest} cup of tea
//     </h1>
//   );
// };

// export default App;
// import { useState } from "react";

// function App() {
//   const [users, setUsers] = useState([]);
//   const [user, setUser] = useState("");
//   const handleAddUsers = () => {
//     setUsers([...users, user]);
//     setUser("");
//   };

//   const total = users.length;
//   const last = users[users.length-1];
//   const unique =[...new Set(users)].length;
//   return (
//     <div>
//       <h1>Derived State in React Js</h1>
//       <h2>Total User :{total}</h2>
//       <h2>Last User :{last}</h2>
//       <h2>Unique User :{unique}</h2>
//       <br />
//       <br />
//       <input
//       value={user}
//         type="text"
//         onChange={(event) => setUser(event.target.value)}
//         placeholder="add New User"
//       />
//       <button onClick={handleAddUsers}>Add User</button>
//       {users.map((item, index) => (
//         <h4 key={index}>{item}</h4>
//       )
// )}
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import AddUser from "./AddUser";
// import DisplayUser from "./DisplayUser";

// function App() {

//     const[user,setUser] = useState('');
//     return(

//         <div>
//             {/* <h1>Lifting State Up React Js</h1> */}
//             <AddUser setUser={setUser}/>
//             <DisplayUser user={user}/>
           
//         </div>
//     )
// }

// export default App;



// function AddUser({setUser}) {
    
    

//     return(
//         <div>
//             <h2>Add User</h2>
//             <input type="text"onChange={(event)=>setUser(event.target.value)} placeholder="Enter user name" />
//              <hr />
//         </div>
//     )
// }

// export default AddUser;

// function DisplayUser({user}) {
//     return(
//         <div>
//            <h3>{user}</h3>
//         </div>
//     )
// }

// export default DisplayUser;

// import { useState } from "react";


// function App() {

//   const [data, setData] = useState({
//     name:"Meena purohit",
//     address:{
//         city:"Delhi",
//         country:"India"
//     }
//   })
//   const handleName = (val)=>{
//     data.name=val

//     console.log(data);
//     setData({...data})
// }
// const handleCity=(city)=>{
//   data.address.city=city
//   setData({...data,address:{...data.address,city}})
// }
//     return(

//         <div>
//             <h1>Updating Object in State React Js</h1>
            
//             <input type="text" placeholder="update name" 
//             onChange={(event)=>handleName(event.target.value)}/>

//              <input type="text" placeholder="update city" 
//             onChange={(event)=>handleCity(event.target.value)}/>
//             <h2>Name:{data.name}</h2>
//             <h2>City:{data.address.city}</h2>
//             <h2>Country:{data.address.country}</h2>
//         </div>
//     )
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [data, setData] = useState(["sam", "peter", "bruce", "tony"]);
//   const [dataDetails, setDataDetails] = useState([
//     { name: "meena", age: "25" },
//     { name: "sam", age: "20" },
//     { name: "pater", age: "21" },
//   ]);
//   const handelUser = (name) => {
//     data[data.length - 1] = name;
//     console.log(data);
//     setData([...data]);
//   };
//   const handleAge=(age)=>{
//    dataDetails[dataDetails.length-1].age=age
//    console.log(dataDetails)
//    setDataDetails([...dataDetails])
   
//   }
//   return (
//     <div>
//       <h1>Updating Array in State</h1>
//       <input
//         type="text"
//         placeholder="Enter last user name"
//         onChange={(event) => handelUser(event.target.value)}
//       />
//       {data.map((item, index) => (
//         <h3 key={index}>{item}</h3>
//       ))}

//       <hr />
//       <input type="text" placeholder="Enter last user age"
//       onChange={(event)=>handleAge(event.target.value)} />
//       {
//         dataDetails.map((item,index)=>(
//           <h4 key={index}>{item.name},{item.age}</h4>
//         ))
//       }
//     </div>
//   );
// }

// export default App;

// import { useActionState } from "react";

// function App() {
//   const handleSubmit =async(previousDta,formData)=>{
//     let name= formData.get('name');
//     let password = formData.get('password');
//     await new Promise(res=>setTimeout(res,2000))
//     // console.log("handleSubmit called" ,name,password);
//     if(name && password) {
//       return {message:"Data Submited",name,password}
//     }else{
//       return{error:"Failed to Submit. Enter proper data",name,password}
//     }
//   }
 
//   const [data,action,pending]= useActionState(handleSubmit,undefined)
//   // console.log(data);
//   return(
//     <div>
//       <h1>useActionState Hook in React Js</h1>
//       <form action={action}>
//         <input defaultValue={data?.name} type="text" placeholder="Enter name" name="name"/>
//         <br /><br />
//          <input defaultValue={data?.password} type="password" placeholder="Enter password" name="password"/>
//          <br /><br />
//          <button disabled={pending}>Submit data</button>
//          <br />
//          {
//           data?.error && <span style={{color:"red"}}>{data.error}</span>
//          }
//           {
//           data?.message && <span style={{color:"green"}}>{data.message}</span>
//          }
//       </form>
//       <h3> Name:{data?.name}</h3>
//       <h3>Password:{data?.password}</h3>
//     </div>
//   )
// }

// export default App;
// import { useId } from "react";

// function App () {

  
//   return(
//     <div>
      
//       <UserForm/>
//       <hr />
//       <UserForm/>
//     </div>
//   )
// }

// export default App;

// function UserForm () {

//   const user =useId();
   
//   return(
//     <div>
//       {/* <h1>useId Hook</h1> */}
//       <form action="">
//       <label htmlFor={user+"name"}>Enter User Name</label>
//       <input id={user+"name"} type="text" placeholder="Enter name" />
//       <br /><br />
//        <label htmlFor={user+"password"}>Enter User Password</label>
//       <input id={user+"password"} type="text" placeholder="Enter password" />
//       <br /><br />
//       <label htmlFor={user+"skills"}>Enter User Skills</label>
//       <input id={user+"skills"} type="text" placeholder="Enter skills" />
//        <br /><br />
      
//       <input id={user+"terms"} type="checkbox" placeholder="Enter name" />
//        <label htmlFor={user+"terms"}>Terms & Condition</label>
     
       
//       </form>
//     </div>
//   )
// }

// import { Fragment } from "react";

// export default function App() {
//   return(
   
//    <>
//     <Data></Data>
//      <Data></Data>
//       <Data></Data>
//        <Data></Data>
//         <Data></Data>
//   </>
   
//   )
// }

// function Data() {
//   return(
//    <>
//        <h1>Fragment In React Js</h1>
//    </>
//   )
// }

// import { useState } from "react";
// import useToggle from "./useToggle";

// function App() {
//   const [value , toggleValue]=useToggle(true);

//   const [data, setData]=useToggle(true)
//   // console.log("val----",value);
  
//   return(
//     <div>
//       <button onClick={toggleValue}>Toggle Heading</button>
//       <button onClick={()=>toggleValue(false)}>Hide Heading</button>
//       <button onClick={()=>toggleValue(true)}>Show Heading</button>
//       {
//         value? <h1>Make Custom Hook</h1>:null
//       }
//       <hr />
      
//       <button onClick={setData}>Toggle Heading</button>
//       <button onClick={()=>setData(false)}>Hide Heading</button>
//       <button onClick={()=>setData(true)}>Show Heading</button>
//       {data? <h1>Second Heading</h1>:null}
//     </div>
//   )
// }
// export default App;

// import { useState } from "react"

// const useToggle=(defaultVal)=>{
//     const [value,setValue ] = useState(defaultVal);

//     function toggleValue(val){
//         // console.log(val);
        
//         if(typeof val!='boolean'){
//             console.log("if");
            
//             setValue(!value)
//         }else{
//             console.log("else");
            
//             setValue(val)
//         }
//     }
//     return [value,toggleValue];
// }

// export default useToggle;