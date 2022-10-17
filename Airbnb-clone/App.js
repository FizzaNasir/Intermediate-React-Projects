import Navbar from "./Navbar"
import Card from "./Card"
import data from "./data"
import React from "react"
import ReactDOM from "react-dom"
export default function App(){
    const items=data.map(item=>{
    return (
                <Card
                {...item}/>
           )
    })
    return(
        <div>
             <Navbar/>
             {items}
        </div>
    )
}