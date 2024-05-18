import "video-games-app/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from 'styled-components'
import theme from 'video-games-app/theme'
import GlobalStyle from 'video-games-app/components/global-style'

interface AppPropsWithSession extends AppProps {
  Component: React.ComponentType<any>
  pageProps: any
}

const App: React.FC<AppPropsWithSession> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
