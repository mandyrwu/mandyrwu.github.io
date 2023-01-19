

 import * as React from "react"
 import { useStaticQuery, graphql } from "gatsby"

 import Header from "./header"
 import Footer from "./footer"
 import Layout from "./layout"
 import "./layout.css"

 const Project = props => (

     <div className="proj">
      <img src={props.image}/>
      <div className="content">
        <p>{props.tags}</p>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        {/* <h3>Project Logistics:</h3> */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div>
          <p/><b>Duration:</b>
          <p>{props.duration}</p>
          </div>
          <div>
          <p/><b>Role:</b>
          <p>{props.role}</p>
          </div>
          <div>
          <p/><b>Team:</b>
          <p>{props.team}</p>
          </div>
          <div>
          <p/><b>Tools:</b>
          <p>{props.tools}</p>
          </div>

        </div>

      </div>
    </div>
)

 export default Project
