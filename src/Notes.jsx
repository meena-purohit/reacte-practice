function Notes() {

const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString())  
    }, 1000);
  },[]) 


  return (



    <div>{time}</div>
  )
} 
export default Notes;