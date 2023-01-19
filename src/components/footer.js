import * as React from "react"
import { Link } from "gatsby"

const Footer = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      flexDirection: 'column',
      alignItems: `center`,
      justifyContent: `space-between`,
      backgroundColor: 'white',
      zIndex: '100',
      bottom: '0',
      width: '100%',
    }}
  >

    <div
       style={{
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
        backgroundColor: 'white',
        zIndex: '100',
        width: '100%',
      }}>

      <Link
        to="/"
        style={{
          fontSize: `var(--font-sm)`,
          textDecoration: `none`,
        }}
      >
        Let's connect!
      </Link>

      <div
      style={{
        width: '200px',
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center",
      }}>

        <Link
          to="mailto:mandyrwu1@gmail.com"
          style={{
            fontSize: `var(--font-sm)`,
            textDecoration: `none`,
          }}
        >
          Email
        </Link>

        <Link
          to="https://www.linkedin.com/in/mandyrwu/"
          style={{
            fontSize: `var(--font-sm)`,
            textDecoration: `none`,
          }}
        >
          LinkedIn
        </Link>
      </div>

    </div>


    {/* <div
       style={{
        backgroundColor: 'black',
        bottom: '0',
        width: '100%',
      }}>
      <p
      style={{
        color: 'white',
      }}>

      © {new Date().getFullYear()} &middot; Built by Mandy Wu with Gatsby
      </p>
    </div> */}

  </header>
)

export default Footer
