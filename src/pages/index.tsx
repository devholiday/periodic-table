import * as React from "react"
import { HeadFC, PageProps, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Element from "../components/element"
import { NodeType } from "../types/node"
import * as styles from "../styles/grid.module.css"

type Data = {
  data: {
    allMongodbPeriodicTableElements: {
      nodes: [NodeType]
    }
  }
}

const Home:React.FC<PageProps&Data> = ({data}) => {
  const grid = [];
  const gridWithEmptyGroup = [];

  for (let i=1; i < 9; i++) {
    for (let j=1; j < 19; j++) {
      grid.push(data.allMongodbPeriodicTableElements.nodes.find((node:NodeType) => node.period === i && node.group === j));
    }
  }

  for (let i=57; i < 104; i++) {
    if (i > 71 && i < 89) continue;

    gridWithEmptyGroup.push(data.allMongodbPeriodicTableElements.nodes.find((n:NodeType) => n.atomicNumber === i));
  }

  return (
    <Layout pageTitle="Periodic Table of Elements">
      <div className={styles.gridContainer}>
        {
          grid.map((element, i) => (
            <div key={i} className={styles.gridItem}>
              {element ? <Element element={element} /> : <div></div>}              
            </div>
          ))
        }
      </div>

      <div className={styles.gridContainerWOGroup}>
        {
          gridWithEmptyGroup.map((element, i) => (
            <div key={i} className={styles.gridItem}>
              {element && <Element element={element} /> }
            </div>
          ))
        }
      </div>
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
        atomicMass
        group
        period
        elementGroup {
          name
          bgColor
          borderColor
          bgColorRGB
        }
      }
    }
  }
`

export const Head: HeadFC = () => <Seo title="Elements" />