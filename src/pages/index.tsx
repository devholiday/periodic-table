import * as React from "react"
import { createPortal } from "react-dom";
import { HeadFC, PageProps, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Element from "../components/element"
import ElementGroup from "../components/elementGroup";
import Modal from "../components/modal";
import ModalElement from "../components/modal-element";
import { ElementType, ElementGroupType } from "../types/node"
import * as styles from "../styles/grid.module.css"

type Data = {
  data: {
    allMongodbPeriodicTableElements: {
      nodes: ElementType[]
    },
    allMongodbPeriodicTableElementgroups: {
      nodes: ElementGroupType[]
    }
  }
}

const Home:React.FC<PageProps&Data> = ({data}) => {
  const [element, setElement] = React.useState<ElementType|undefined>();
  const [activeElement, setActiveElement] = React.useState(false);
  const handleChangeElement = React.useCallback(() => setActiveElement(!activeElement), [activeElement]);

  const showElement = (element: ElementType): void => {
    setElement(element);
    handleChangeElement();
  };

  return (
    <>
     {activeElement && createPortal(
          <Modal
              open={activeElement}
              onClose={handleChangeElement}
              title="Element properties"
          >
              <ModalElement element={element} />
          </Modal>,
          document.body
      )}

      <Layout pageTitle="Periodic Table of Elements">
        <div className={styles.gridContainer}>
          <div className={styles.gridItem + ' ' + styles.placeholderElement}>
            <Element legend={true}  showElement={showElement} element={data.allMongodbPeriodicTableElements.nodes[16]} />
          </div>

          {
            data.allMongodbPeriodicTableElements.nodes.map((element, i) => (
              <div key={i} className={styles.gridItem + ' ' + styles['item'+element.atomicNumber]}>
                <Element showElement={showElement} element={element} />
              </div>
            ))
          }
        </div>

        <div className={styles.gridContainerElGroups}>
          {
            data.allMongodbPeriodicTableElementgroups.nodes.map((elementGroup, i) => (
              <div key={i} className={styles.gridItemGroup}>
                <ElementGroup elementGroup={elementGroup} />
              </div>
            ))
          }
        </div>
      </Layout>
    </>
  )
}
export default Home

export const query = graphql`
  query {
    allMongodbPeriodicTableElements(sort: { atomicNumber: ASC }) {
      totalCount
      nodes {
        id
        name
        symbol
        atomicNumber
        atomicMass
        group
        period
        meltingPoint
        boilingPoint
        description
        block
        discoveryDate
        discoveredBy
        elementGroup {
          name
          bgColor
          borderColor
          bgColorRGB
          borderColorRGB
        }
      }
    }
    allMongodbPeriodicTableElementgroups {
      totalCount
      nodes {
        name
        bgColor
        borderColor
        bgColorRGB
        borderColorRGB
      }
    }
  }
`

export const Head: HeadFC = () => <Seo title="Elements" />