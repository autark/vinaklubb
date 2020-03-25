import React from 'react'
import './card-style.css';

export const Card = props => {
    return (
        <div className="card text-center shadow" >
            <div className="overflow">
                <img src={props.imgsrc} height="400rem" alt="Card image cap" className="card-img-top " />
            </div>
            <div className="card-body text-dark">             
                <h4 className="card-title">{props.description}</h4>
                <p className="card-text">{props.navn}</p>
                <p className="card-text">{props.born}</p>
                <p className="card-text ">{props.posisjon}</p> 
            </div>
        </div>
    )
}
