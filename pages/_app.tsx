import { AppProps } from 'next/dist/next-server/lib/router/router'
import { ReactElement } from 'react'
import {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider,
} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /** Reset CSS */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-color: #D9E6F6;
  }

  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
`

const theme: DefaultTheme = {
  colors: {
    main: 'red',
  },
  sizes: {
    mobile: '860px',
  },
}

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
