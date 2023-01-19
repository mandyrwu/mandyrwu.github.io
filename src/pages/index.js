import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Card from "../components/card"

//Photos:
import Mountaineer from "../components/images/mountaineers.png"
import buzz from "../components/images/buzzstop.png"
import handful from "../components/images/handful.png"
import owl from "../components/images/owlets.png"
import philo from "../components/images/philo.png"



const IndexPage = () => (
  <Layout>


    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '150px',
        marginBottom: '150px',
    }}>



      <h1>
        Hi, I'm <b>Mandy</b>
      </h1>
      <p className={styles.textCenter}>Human-Centered Design & Engineering Student at the University of Washington. Passionate about creating accessible designs
        for underrepresented populations in tech.
      </p>
    </div>



    <div className="Projects">
        <Card
          title="The Mountaineers"
          text="Reimagining the wild."
          tags="Brand & Identity | Visual Design"
          image={Mountaineer}/>

        <Card
          title="Handful"
          text="Digital playground created with accessibility and practicality in mind."
          tags="Hackathon | App Design"
          link="https://devpost.com/software/handful"
          image={handful} />

        <Card
          title="Owlet's"
          text="Reconnecting elderlies with the post-pandemic world through a
          healthy and accessible approach."
          tags="Hackathon | App Design"
          link="https://devpost.com/software/owlet-s"
          image={owl} />

        <Card
          title="Philo Cards"
          text="Redesigning a brand's website to reflect its identity, present engaging content, and drive sales."
          tags="Brand & Identity | Website Design"
          link="../projects/philo"
          image={philo} />

        <Card
          title="BUZZStop98040"
          text="A bi-partisan news outlet for the local Mercer Island community."
          tags="Website Design"
          link="https://www.buzzstop98040.com/"
          image={buzz} />

      <Link
        to="../projects/philo"
        style={{
          fontSize: `var(--font-sm)`,
          textDecoration: `none`,
        }}
      >
        testing
      </Link>
      </div>


  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
