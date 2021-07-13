import { AppProps } from 'next/dist/next-server/lib/router/router'
import { ReactElement } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #2da;
  }
`

const theme = {
    colors: {
        primary: 'red',
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
