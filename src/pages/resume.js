import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Resume from  "../images/resume.png"
import ResumeDownload from "../images/resume.pdf"


const ResumePage = () => (
  <Layout>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <img src={Resume}
        style={{
          boxShadow: '0px 0px 30px #828282',
          marginTop: '120px',
        }}></img>

        <button>
          <a href={ResumeDownload} download={ResumeDownload} target="_blank">Download PDF</a>
        </button>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Page Resume" />

export default ResumePage
