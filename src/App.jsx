import UserProfile from "./UserProfile";
import "./css/style.css"



function App() {
  return (
    <div>
      <h1 className="heading">Style with CSS Module in React Js</h1>
      <div style={{display:"flex",flexWrap:"wrap"}}>
        <UserProfile/>
        <UserProfile/>
        <UserProfile/>
        <UserProfile/>
        <UserProfile/>
        <UserProfile/>
        <UserProfile/>
        <UserProfile/>
        <UserProfile/>
        <UserProfile/>
        <UserProfile/>
        <UserProfile/>
        <UserProfile/>
        <UserProfile/>
      </div>
    </div>
  );
}

export default App;