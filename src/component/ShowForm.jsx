import React from "react"
import { useSelector } from "react-redux"

const ShowForm = () =>{
    const name = useSelector((state)=>state.form.name)
    const age  = useSelector((state)=>state.form.age)
    return(
        <div style={{display: "flex", flexDirection:"column"}}>
            <p>Name:{name}</p>
            <p>Age:{age}</p>
        </div>
    )
}

export default ShowForm