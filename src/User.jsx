function User({user}) {
    return (
        <div>
             <hr />
            <h2>Name:{user.name}</h2>
            <h3>Age:{user.age}</h3>
            <h3>email:{user.email}</h3>
           
        </div>
    )
}

export default User;