import React from 'react'
import { Link } from "gatsby"

import './card.css'


const Card = props => (
    <div className="Card">
      <a href={props.link}>
        <div className="overlay"></div>
        {/* // <Link to={props.link}><img src={props.image}/></Link> */}
        <img src={props.image}/>
        <div className="content">
          <p>{props.tags}</p>
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </div>
      </a>
    </div>
)

export default Card
