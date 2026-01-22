import myImage from "./assets/test-external-2519778_1920.jpg"
function App() {

  const cardStyle = {border:"2px solid #cccccc28",
          width:"200px",
          boxShadow: "1px 2px 3px 0px #cccccc57",
          margin: "10px"}
  return(
    <div>
      <h1 style={{color:"red"}}>Inline Style in React</h1>
      <div style={{display:"flex",flexWrap:"wrap"}}>
      <div style={cardStyle}>
        <img style={{width:"200px"}} src={myImage} alt="not found"/>
         <div>
      <h4>Meena Purohit</h4>
      <p>Software Developer</p>
     </div>
     </div>
     <div style={cardStyle}>
        <img style={{width:"200px"}} src={myImage} alt="not found"/>
         <div>
      <h4>Meena Purohit</h4>
      <p>Software Developer</p>
     </div>
     </div>

     </div>
     </div>
    
  )
}

export default App;