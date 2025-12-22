import { useState } from "react";
import Login,{Profile,Setting, UserKey} from "./UserComponent";
function App(){
  return (
    <div>
      <Login />
      <Profile />
      <Setting />
      <h1>{UserKey}</h1>
    <h1>hello</h1>
    <h1>code step by step</h1>
    </div>
  );
}

export default App;
