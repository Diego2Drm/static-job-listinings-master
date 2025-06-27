import { ThemeProvider } from "styled-components"
import { GlobalStyle, Theme } from "./GlobalStyle"
import { Layout } from "./Layout"
import { Card } from "./components/Card"
import { useEffect } from "react"
import dataJson from "./data.json"
import { setData } from "./features/filter/filterSlice"
import { useDispatch } from "react-redux"

function App() {
  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(setData(dataJson));
  }, [])

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
