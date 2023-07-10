import * as React from "react"
import { HeadFC, PageProps, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

import * as styles from "../styles/grid.module.css"

const Home:React.FC<PageProps> = ({data}) => {
  const grid = [];

  for (let i=1; i < 9; i++) {
    for (let j=1; j < 19; j++) {
      grid.push(data.allMongodbPeriodicTableElements.nodes.find(node => node.period === i && node.group === j));
    } 
  }

  return (
    <Layout pageTitle="Periodic Elements">
      <div className={styles.gridContainer}>
        {
          grid.map((element, i) => (
            <div key={i} className={styles.gridItem}>
              {element && (
                <div className={styles.item} style={{background: `linear-gradient(110deg, rgba(${element.elementGroup.bgColorRGB}, 0.2), rgba(${element.elementGroup.bgColorRGB}, 0.3)`}}>
                  {element.name}
                </div>
              )}

              {!element && (
                <div></div>
              )}
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

export const Head: HeadFC = () => <Seo title="Periodic Table" />