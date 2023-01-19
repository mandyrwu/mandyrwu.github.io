import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Me from  "./images/me.png"

const AboutPage = () => (
  <Layout>
    <div
    style={{
      display: 'flex',
      marginTop: '120px',
      marginBottom: '80px',
    }}>
      <img src={Me}
      style={{
        width: '400px',
        marginRight: '50px',
        borderRadius: '30px',
      }}></img>

      <div>

        <div class="wrapper">
          <div class="typing-demo">
            <h2>Hello there!</h2>
          </div>
        </div>

        <p
        style={{
          marginTop: '20px',
        }}>
          My name is Mandy Wu (she/her), and I am currently a sophomore at the University of Washington-Seattle studying <b>Human-Centered Design & Engineering</b>.</p>
        <p>
          I am interested in all things related to user-centered design, but am especially passionate about creating accessible products that <b>empower marginalized groups </b>
          and designing for underrepresented populations in tech.
        </p>
        <p>In addition to design, some of my other hobbies are exploring new restaurants & cafes, playing badminton, hiking, and watching reality TV!</p>
      </div>
    </div>

    <div
    style={{
      marginBottom: '120px',
    }}>
        <h3>What I'm currently up to: </h3>
        <li>
          Graphics Director at <Link to="https://sweuw.org/"><b>Society of Women Engineers @ UW</b></Link>
        </li>
        <li>
          Undergraduate Researcher at <Link to="https://www.kidsteam.ischool.uw.edu/"><b>KidsTeam UW</b></Link>
        </li>
        <li>
          Designer at <Link to="http://students.washington.edu/uwdfa/"><b>Design for America</b></Link>
        </li>
        <li>
          Food Enthusiast at <Link to="https://www.instagram.com/mandu.munchies/"><b>@mandu.munchies</b></Link>
        </li>
      </div>

  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default AboutPage
