import * as React from "react"

import {
    container,
    heading,
  } from '../styles/layout.module.css'


type ComponentProps = React.PropsWithChildren<{pageTitle: string}>

const Layout:React.FC<ComponentProps> = ({ pageTitle, children }) => {
    return (
        <div className={container}>
        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
      </div>
  
    )
}

export default Layout
