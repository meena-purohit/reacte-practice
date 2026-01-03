import Wrapper from "./Wrapper";
import User from "./User";

function App() {

  return (
    <div>
      <h1>Props in React Js</h1>

      {/* <User />
      <User name={"Meena Purohit"}/>
      <User />
      <User />
      <User name="bhaskar"/> */}
      <Wrapper color="orange">
        <h1>Hello Everyone</h1>
      </Wrapper>
      <Wrapper color="blue">
        <h1>Hi, Meena</h1>
      </Wrapper>
      <Wrapper>
        <h1>Hi, user</h1>
        <h2 style={{color:"red"}}>please login</h2>
      </Wrapper>
    </div>
  )
}

export default App;