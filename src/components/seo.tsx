import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

type ComponentProps = {
  title: string
}

const Seo:React.FC<ComponentProps> = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <title>{title} | {data.site.siteMetadata.title}</title>
  )
}

export default Seo