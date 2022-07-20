import React from "react"
import { useState } from "react"

const Searchbar= (props) => 
    const {onSearch}= props
    const[search,setSearch]= useState("Dito")

    const onChangehandler =(e) =>{
        console.log("pokemon:", e.target.value)
        setSearch(e.target.value)
    }
    const onbuttonClickhandler=() => {
        onSearch(search)
    } 
    return(
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar Pokemon" onChange= {onChangehandler} />
                <div className="searchbar-bnt">
                    <button onClick={onbuttonClickhandler}>Buscar</button>
                </div>
            </div>
        </div>
    )
}
export default Searchbar