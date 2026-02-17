import { Link } from "react-router";

export default function PageNotFound() {
    return(
        <div style={{textAlign:"center"}}>
            <h1>Page Not Found</h1>
            <h2>404 ERROR</h2>
           <div>
             <Link to='/'>Go To Home Page</Link>
           </div>
            <img style={{width:"60%"}} src="https://tse4.mm.bing.net/th/id/OIP.Ah3BcMmM5s3sP2MDIAR-wwHaE7?pid=Api&P=0&h=180"/>
        </div>
    )
}