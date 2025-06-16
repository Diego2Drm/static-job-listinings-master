import { ThemeProvider } from "styled-components"
import { GlobalStyle, Theme } from "./GlobalStyle"
import { Layout } from "./Layout"
import { Card } from "./components/Card"

function App() {

  return (

    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Layout>
        <Card />
      </Layout>
    </ThemeProvider>

  )
}

export default App
