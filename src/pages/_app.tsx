import React from 'react'
import type { AppProps } from "next/app"
import styled, { ThemeProvider } from 'styled-components'
import theme from 'video-games-app/theme'
import GlobalStyle from 'video-games-app/components/global-style'
import Sidebar from 'video-games-app/components/sidebar'
import Box from 'video-games-app/components/box'
import TopBar from 'video-games-app/components/top-bar'

interface AppPropsWithSession extends AppProps {
  Component: React.ComponentType<any>
  pageProps: any
}

const App: React.FC<AppPropsWithSession> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TopBar />
      <Sidebar />
      <MainComponent>
        <Component {...pageProps} />
      </MainComponent>
    </ThemeProvider>
  )
}

export default App

const MainComponent = styled(Box)`
  margin-left: 250px;
  margin-top: 50px;
`
