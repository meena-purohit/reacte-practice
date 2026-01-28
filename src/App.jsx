import { useState } from "react";
import AddUser from "./AddUser";
import DisplayUser from "./DisplayUser";

function App() {

    const[user,setUser] = useState('');
    return(

        <div>
            {/* <h1>Lifting State Up React Js</h1> */}
            <AddUser setUser={setUser}/>
            <DisplayUser user={user}/>
           
        </div>
    )
}

export default App;