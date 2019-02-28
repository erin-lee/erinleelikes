import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import LogoSVG from '../components/logo'

import styles from './index.module.css'
console.log(styles)
const IndexPage = () => (
  <Layout>
    <div className={styles.container}>
      <SEO title="Home" keywords={[`gatsby`, `personal site`, `react`]} />
        <LogoSVG className="homeLogo" />
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
