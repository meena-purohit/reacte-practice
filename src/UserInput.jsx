// import { forwardRef } from "react";

// const UserInput=(props,ref)=>{
//     return(
//         <div>
//             <input type="text" ref={ref}/>
//         </div>
//     )

// }br

// export default forwardRef(UserInput);

const UserInput=(props)=>{

    return (
        <div>
            <input type="text"ref={props.ref} />
        </div>

    )
}

export default UserInput;