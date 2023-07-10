import * as React from "react"
import type { GatsbySSR } from "gatsby"

export const onRenderBody: GatsbySSR[`onRenderBody`] = ({
  setHeadComponents,
}): void => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/inter/Inter-Light.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="inter-light"
    />,
    <link
      rel="preload"
      href="/fonts/inter/Inter-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="inter-regular"
    />,
    <link
      rel="preload"
      href="/fonts/inter/Inter-Medium.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="inter-medium"
    />,
  ])
}