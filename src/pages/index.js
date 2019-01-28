import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>erinleelikes.com</h1>
    <p>Watch this space</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
