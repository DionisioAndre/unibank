import { useState } from "react"
import useAxios from "../utils/Axios/UseAxios"
import { jwtDecode } from "jwt-decode"

function Dashboard() {
    const [res,setRes]=useState("")
   // const api=useAxios()
    const token=localStorage.getItem("authTokens")
    if(token){
        const decode=jwtDecode(token)
        var user_id=decode.user_id
        var username=decode.username
        var full_name=decode.full_name
        var image=decode.image
        
    }
    return(
        <div className="container">
           
        <div className="container py-5 h-100">
            <section className="row d-flex justify-content-center align-items-center h-100">
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit.Autem unde odit ut,
     officiis asperiores molestiae eum! Assumenda ipsum sunt praesentium, nostrum~
     , distinctio voluptatibus incidunt doloribus recusandae reprehenderit eius,
      repellendus itaque.</p>
      <button type=""></button>
        </section>
        <section>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit.Autem unde odit ut,
     officiis asperiores molestiae eum! Assumenda ipsum sunt praesentium, nostrum~
     , distinctio voluptatibus incidunt doloribus recusandae reprehenderit eius,
      repellendus itaque.</p>
        </section>
        <section>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit.Autem unde odit ut,
     officiis asperiores molestiae eum! Assumenda ipsum sunt praesentium, nostrum~
     , distinctio voluptatibus incidunt doloribus recusandae reprehenderit eius,
      repellendus itaque.</p>
        </section>
        </div>
        <div>
          {username!==null && <>
             <p>ola {username} </p></>
           }
        </div>
        
        
    </div>
    
    )
    
}

export default Dashboard