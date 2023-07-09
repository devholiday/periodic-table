import * as React from "react"

import { useStaticQuery, graphql } from "gatsby"

const Header: React.FC = () => {
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
        <header>
            <h1>{data.site.siteMetadata.title}</h1>
        </header>
    )
}

export default Header;