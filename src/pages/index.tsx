import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Home:React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="Periodic Elements">
      <span>Elements</span>
    </Layout>
  )
}
export default Home

export const Head: HeadFC = () => <Seo title="Periodic Table" />