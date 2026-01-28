

function AddUser({setUser}) {
    
    

    return(
        <div>
            <h2>Add User</h2>
            <input type="text"onChange={(event)=>setUser(event.target.value)} placeholder="Enter user name" />
             <hr />
        </div>
    )
}

export default AddUser;