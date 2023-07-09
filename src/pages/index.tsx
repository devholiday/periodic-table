import * as React from "react"
import { HeadFC, PageProps, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Home:React.FC<PageProps> = ({data}) => {
  return (
    <Layout pageTitle="Periodic Elements">
      <ul>
      {
        data.allMongodbPeriodicTableElements.nodes.map(node => (
          <li key={node.name} style={{background: '#'+node.elementGroup.bgColor}}>
            {node.name}
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}
export default Home

export const query = graphql`
  query {
    allMongodbPeriodicTableElements {
      totalCount
      nodes {
        id
        name
        symbol
        atomicNumber
        elementGroup {
          name
          bgColor
          borderColor
        }
      }
    }
  }
`

export const Head: HeadFC = () => <Seo title="Periodic Table" />