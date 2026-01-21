const Student=({student})=> {
    return (
        <div>
            {
                    student.map((student,index) => (
                     <ul key={index}>
                        <li>Name: {student.name}</li>
                     </ul>    
                    ))
                }
        </div>
    )
    
}

export default Student;