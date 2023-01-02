import React from "react"
import '../styles/index.css'
import '../styles/card.css'


export default function Card(props){
    return(
        <main>
            <div className="card">
                <img className="img" src={props.item.imageUrl} alt={props.item.title + " location"}/>
                <section>
                <div className="data-set">
                    <h4><i className="fa-solid fa-map-pin"></i>{props.item.location}</h4>
                    <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>  
                <div className="travel-data">
                    <h1>{props.item.title}</h1>
                    <p className="date">{props.item.startDate} - {props.item.endDate}</p>
                    <p className="text">{props.item.description}</p>
                </div>
                </section>
            </div>
        </main>
    )
}