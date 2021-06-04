import { Layout } from "./components/Layout"
import {ThemeProvider} from 'styled-components'
import GlobalStyles from "./styles/GlobalStyles"
import dark from "./styles/themes/dark"

export const App: React.FC = () =>{
  return(
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  )
}