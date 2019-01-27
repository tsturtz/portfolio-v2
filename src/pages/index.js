import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {/* <div style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <h3>This site is a <strong>work in progress</strong>.</h3>
    <p>While I'm working on it you can go check me out on <a target="_blank" href="https://github.com/tsturtz">GitHub</a> and <a target="_blank" href="https://twitter.com/taylorsturtz">Twitter</a> or go do a little reading on <a target="_blank" href="https://nothingtoocrazy.netlify.com">my blog</a>.</p>
    
    <p>Run <code>npx taylorsturtz</code> in your terminal for some more info about me. 🤓</p>

    <p><em>Thanks and enjoy your day!</em></p>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
