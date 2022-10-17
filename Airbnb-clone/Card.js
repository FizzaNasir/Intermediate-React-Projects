import React from "react"
import ReactDOM from "react-dom"
export default function Card(props){
    return(
        <div className="cardCont">
            <img id="place" src={props.imageUrl} width="130px" height="290px" />  
            <div id="content">
                <div id="fstline">
                 <img id="loc" src="./images/location.png" width="12px" height="12px"/><span id="country">{props.location}</span>
                 <a id="link" href={props.googleMapsUrl}>View on Google Maps</a></div>
                 <h1 id="title">{props.title}</h1>
                 <p id="date"><strong>{props.startDate} - {props.endDate}</strong></p>
                 <p id="desc">{props.description}</p>                
            </div> 
             <hr/>                     
        </div>
    )
}