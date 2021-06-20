import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Layout from "./components/layout"
import Create from './pages/Create';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { purple } from '@material-ui/core/colors';

// Creating the custom material UI theme!
const theme1 = createMuiTheme({
  typography: {
    fontFamily: "poppins",
  },
})

function App() {

  return (
  <ThemeProvider theme={theme1}>
    <Router>
      <Layout>
       <Switch>
         <Route exact path="/">
           <Notes />
         </Route>
         <Route path="/create">
           <Create />
         </Route>
       </Switch>
      </Layout>
    </Router>
  </ThemeProvider>
  );
}

export default App;
