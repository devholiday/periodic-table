import * as React from "react"
import Header from "./header"

import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
  } from '../styles/layout.module.css'


type ComponentProps = React.PropsWithChildren<{pageTitle: string}>

const Layout:React.FC<ComponentProps> = ({ pageTitle, children }) => {
    return (
        <div className={container}>
        <Header />
        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
      </div>
  
    )
}

export default Layout
