import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Project from "../../components/project"

//photos:

import lofi from "../projects/philoimages/lofi.png"
import p1 from "../projects/philoimages/1.png"
import p2 from "../projects/philoimages/2.png"
import p3 from "../projects/philoimages/3.png"
import competitor from "../projects/philoimages/competitor.png"
import keep from "../projects/philoimages/keepdiscard.jpeg"
import mind from "../projects/philoimages/mindmap.jpeg"
import style from "../projects/philoimages/styleguide.png"
import test from "../projects/philoimages/testing2.png"
import map from "../projects/philoimages/map.png"




const PhiloPage = () => (

  <Layout>
    <Project
      title="Philo Cards"
      text="Philo Cards is a student-startup company founded at the University of Washington. We re-designed a website for their
      product with the goal of promoting their values and business, as well as provide an accessible platform for customers to purchase a deck of Philo Cards."
      tags="Website Design"
      duration="5 weeks"
      role="UX Designer"
      team="5 Designers"
      tools="Figma, FigJam, Miro, Pen & paper"
    />

    <div>
      <h3>Problem</h3>
      <p>
        The original website for Philo Cards did not reflect the vibrant and imaginative aesthetic of the brand.
        In addition, there was a lack of organization for the site, which prompted difficulties navigating the page despite
        the minimal functions available.
      </p>
      <p>The goal of the redesign is to better reflect the brand image, as well as create a smoother user experience for customers.
      </p>
    </div>

    <div>
      <h3>Solution</h3>
      <p>
        After researching and ideating, we created a new website that offers a fresh landscape to represent the brand identity. We also
        reorganized the flow of the website by separating the three main goals of the site into respective pages, offering a smoother
        navigation process for visitors.
      </p>
    </div>

    <div>
      <img src={p1}></img>
      <img src={p2}></img>
      <img src={p3}></img>

    </div>

    <div>
      <h3>Research</h3>
        <p>We kickstarted our project with a client interview to seek out their needs and desires with the new Philo Cards website.
          With what we learned, we created a <b>mind map</b> that focalizes the goal of the website in order to guide us through the design proceess.</p>
        <img src={mind}></img>
        <p>Because we were redesigning a pre-existing website for a client rather than creating a product from scratch,
          we chose to focus on researching competitor products. In our informal <b>competitor analysis</b>, we researched five different products
          that were similar to Philo Cards, and noted the well and poor designs on their website. We then compiled our findings
          on a spreadsheet to find general design patterns that we wanted to follow, as well as design flaws that we wanted to avoid.
        </p>
        <img src={competitor}></img>
    </div>

    <div>
      <h3>Information Architecture</h3>
      <p>
          To start, we made a list of features that could possibly be on the site. This was largely taken from features on the pre-existing sites,
          additional functions our client wanted us to impelement, and cool add-ons that we found through our competitor analysis. Then, we organized
          these on a <b>MoSCoW chart</b> to identify which features are the most important and which are the least. This map was adjusted many times based on
          further research and user interviews, and after we had a well-refined list, we organized it into our site map.
        </p>
        <img src={keep}></img>
        <p>In our <b>site map</b>, we organized the different features we wanted to include in a way that best represents the flow of the map. This helped
        us set up the design of each page while maintaining overall functionality of the site.</p>
        <img src={map}></img>
    </div>

    <div>
      <h3>Design</h3>
      <p><b>Low-Fidelity Prototype:</b></p>
      <img src={lofi}></img>
      <p>With our lo-fi prototypes, we conducted <b>usability testing</b> to determine how we can improve our design, then used our findings to translate
      the low-fidelity mockups to high-fidelity prototypes.</p>
      <img src={test}></img>
      <p>As we worked on the high-fidelity prototypes, we developed a <b>style guide</b> to ensure consistency across the different pages. We chose brighter
      iterations of the colors that the client originally had to convey a upbeat atmosphere, and selected typography that also reflected the vibrant feeling
      while still being legible.</p>
      <img src={style}></img>
      <p><b>High-Fidelity Interactive Prototype:</b></p>
      <iframe
      style={{
        border: 'border: 1px solid rgba(0, 0, 0, 0)',
        width: '100%',
        height: '600px',
      }}
      src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F03VTlXVnKsFhfmUsAbmCt6%2FPrototyping-(Copy)%3Fpage-id%3D909%253A1348%26node-id%3D909%253A1865%26viewport%3D241%252C48%252C0.2%26scaling%3Dscale-down%26starting-point-node-id%3D909%253A1865" allowfullscreen></iframe>
    </div>
  </Layout>



)


export default PhiloPage
