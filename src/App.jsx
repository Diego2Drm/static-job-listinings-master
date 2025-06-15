import { ThemeProvider } from "styled-components"
import { GlobalStyle, Theme } from "./GlobalStyle"
import { Layout } from "./Layout"

function App() {

  return (

    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Layout>
        <h1>Static Job Listings</h1>
      </Layout>
    </ThemeProvider>

  )
}

export default App
