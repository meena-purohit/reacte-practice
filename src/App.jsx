import { useState } from "react";
import myImage from "./assets/test-external-2519778_1920.jpg";
function App() {

  const [cardStyle,setCardStyle] = useState( {
    border: "2px solid #cccccc28",
    width: "200px",
    boxShadow: "1px 2px 3px 0px #cccccc57",
    margin: "10px",
  })
  const [grid,setGrid] = useState(true)
  const [textColor,setTextColor]= useState('green')

  const updateTheme=((bgColor,textColor)=>{
    setCardStyle({...cardStyle,backgroundColor:bgColor})
    setTextColor()
  })
  
  return (
    <>
      <h2>Dynamic and Conditional Inline Style</h2>
      <button onClick={()=>updateTheme('gray','green')}>Gray Theme</button>
      <button onClick={()=>updateTheme('white','black')}>Default Theme</button>
      <button onClick={()=>setGrid(!grid)}>Toggle Grid</button>
      <div style={{ display: grid?"flex":"block", flexWrap:"wrap"}}>
        <div style={cardStyle}>
          <img style={{ width:"200px"}} src={myImage} alt="not found"/>
          <div style={{padding:'5px',color:textColor}}>
            <h4>Meena Purohit</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img style={{ width:"200px"}} src={myImage} alt="not found"/>
          <div style={{padding:'5px',color:textColor}}>
            <h4>Meena Purohit</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img style={{ width:"200px"}} src={myImage} alt="not found"/>
          <div style={{padding:'5px',color:textColor}}>
            <h4>Meena Purohit</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img style={{ width:"200px"}} src={myImage} alt="not found"/>
          <div style={{padding:'5px',color:textColor}}>
            <h4>Meena Purohit</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img style={{ width:"200px"}} src={myImage} alt="not found"/>
          <div style={{padding:'5px',color:textColor}}>
            <h4>Meena Purohit</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img style={{ width:"200px"}} src={myImage} alt="not found"/>
          <div style={{padding:'5px',color:textColor}}>
            <h4>Meena Purohit</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img style={{ width:"200px"}} src={myImage} alt="not found"/>
          <div style={{padding:'5px',color:textColor}}>
            <h4>Meena Purohit</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img style={{ width:"200px"}} src={myImage} alt="not found"/>
          <div style={{padding:'5px',color:textColor}}>
            <h4>Meena Purohit</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img style={{ width:"200px"}} src={myImage} alt="not found"/>
          <div style={{padding:'5px',color:textColor}}>
            <h4>Meena Purohit</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img style={{ width:"200px"}} src={myImage} alt="not found"/>
          <div style={{padding:'5px',color:textColor}}>
            <h4>Meena Purohit</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img style={{ width:"200px"}} src={myImage} alt="not found"/>
          <div style={{padding:'5px',color:textColor}}>
            <h4>Meena Purohit</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img style={{ width:"200px"}} src={myImage} alt="not found"/>
          <div style={{padding:'5px',color:textColor}}>
            <h4>Meena Purohit</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img style={{ width:"200px"}} src={myImage} alt="not found"/>
          <div style={{padding:'5px',color:textColor}}>
            <h4>Meena Purohit</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img style={{ width:"200px"}} src={myImage} alt="not found"/>
          <div style={{padding:'5px',color:textColor}}>
            <h4>Meena Purohit</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img style={{ width:"200px"}} src={myImage} alt="not found"/>
          <div style={{padding:'5px',color:textColor}}>
            <h4>Meena Purohit</h4>
            <p>Software Developer</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
