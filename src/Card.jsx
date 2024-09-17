import React, { useState } from 'react'
import Pro from "./Product.json"
import "./Global.css"
const Card = () => {
    let [state,setState]=useState(Pro)
    return(
        <section>
  {state.map((m)=>{
        
    return (
        
        <div>
        <h5>Titte:{m.Title}</h5>
        <img src={m.img} alt={m.img} />
        <h6>{m.Description}</h6>
        <sec><a href={m.Url}>Click here to view the Content</a></sec>
        </div>    
    )
    })}

</section>)}
export default Card
