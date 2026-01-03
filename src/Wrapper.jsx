function Wrapper({children,color="green"}) {
    return (
        <div style={{color:color,border:"2px solid green",width:"400px",margin:"10px"}}>
           {children} 
        </div>
    )
}

export default Wrapper;