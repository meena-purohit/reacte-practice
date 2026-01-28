function User({displayName,name,getUser}) {


       
    
    return (
        <div>
            <button onClick={()=>displayName(name)}>Display Name</button>
            <button onClick={getUser}>GetUser</button>
        </div>
    )
}

export default User;