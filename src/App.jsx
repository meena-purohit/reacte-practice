import styled from "styled-components";

function App() {

  const Heading = styled.h1`
  color: red;
  border: 1px solid green;
  border-Radius: 5px;
  margin: 20px;
  padding: 20px;`

  const Stylbtn = styled.button`
  border: 2px solid black;
  border-radius:5px;
  height:40px;
  width:130px;
  margin:20px;`

  return(
      <div>
        <h1>Styled Component with React Js</h1>
        <Heading>Hello Heading</Heading>
         <Heading>Hello Heading</Heading>
          <Heading>Hello Heading</Heading>
           <Heading>Hello Heading</Heading>
            <Heading>Hello Heading</Heading>
            <Stylbtn>signin</Stylbtn>
            <Stylbtn>signup</Stylbtn>
            <Stylbtn>exit</Stylbtn>
            <Stylbtn>back</Stylbtn>

      </div>
  )
}

export default App;