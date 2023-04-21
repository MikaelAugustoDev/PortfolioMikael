import { createGlobalStyle } from "styled-components"
import { ThemeProvider } from "./contexts"
import { AppRoutes } from "./pages/routes"


function App() {

  return (
    <>

      <ThemeProvider>

        <GlobalStyle/>

        <AppRoutes/>

      </ThemeProvider>

    </>
  )
}

export default App

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 2px;
    background-color: #fff;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #000;
  }
`