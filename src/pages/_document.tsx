import Document, { DocumentContext, DocumentInitialProps } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { AppType, RenderPage } from 'next/dist/shared/lib/utils'
import { AppProps } from 'next/app'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet: ServerStyleSheet = new ServerStyleSheet()
    const originalRenderPage: RenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: AppType) => (props: AppProps) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps: DocumentInitialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}
