function ToDO() {
    function callFun() {
        alert("function called")
    }
    return (
      <div>
        <h1>Meena Purohit ToDo </h1>
        <img src="https://cdn.pixabay.com/photo/2018/07/28/09/23/woman-3567600_1280.jpg" alt="Meena Purohit" />
        <ul>
            <li>invent new traffic light</li>
            <li>Rehearse a movie scene </li>
            <li>Improve the spectrum technology</li>
        </ul>
        <button onClick={callFun}>Click Me</button>
      </div>
    )
}
export default ToDO;