import React from "react";
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { renderToString } from 'react-dom/server'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage
    
        try {
          ctx.renderPage = () =>
            originalRenderPage({
              enhanceApp: App => (
                props => {
                  const styledComponentsData = sheet.collectStyles(<App {...props} />)
                  
    
                  return styledComponentsData
                }
              )
            })
    
          const initialProps = await Document.getInitialProps(ctx)
    
          return {
            ...initialProps,
            styles: (
              <React.Fragment>
                {initialProps.styles}
                {sheet.getStyleElement()}
              </React.Fragment>
            )
          }
        } finally {
          sheet.seal()
        }
      }
  
}