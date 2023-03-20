import React from 'react'
import "./homeElement.css"

export default function HomeElement(props) {
  return (
    <div className="homeElement">
        <img className="elementImage" src={props.image} alt={props.name}/>
        <div className="element">
            <p><span className='elementName'>Name</span>: {props.name}</p>
            <p><span className='elementName'>Price</span>: {props.price}$</p>
        </div>
    </div>
  )
}
