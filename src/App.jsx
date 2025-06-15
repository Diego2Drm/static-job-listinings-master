import { ThemeProvider } from "styled-components"
import { GlobalStyle, Text, Theme } from "./GlobalStyle"

function App() {

  return (

    <ThemeProvider theme={Theme}>
      <GlobalStyle />
        <div>
          <Text>Static Job Listings</Text>
        </div>
    </ThemeProvider>

  )
}

export default App
