import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { makeStyles, createMuiTheme } from '@material-ui/core/styles'

import CssBaseline from '@material-ui/core/CssBaseline'
import ThemeProvider from '@material-ui/styles/ThemeProvider'

import Header from './components/Header'
import Footer from './components/Footer'

import Dashboard from './pages/Dashboard'
import Homepage from './pages/Homepage'
import MediumContent from './pages/MediumContent'
import SmallContent from './pages/SmallContent'
import Team from './pages/Team'
import Terms from './pages/Terms'

// import EmptyLayout from './layouts/EmptyLayout'
import HeaderContentFooterLayout from './layouts/HeaderContentFooterLayout'

import RouteWrapper from './routes/RouteWrapper'

// NOT allowed because html is undefined
// document.html.style.width = '100vw'
// document.html.style.height = '100vh'

// document.body.style.width = '100vw'
// document.body.style.height = '100vh'
// document.body.style.margin = 0
// document.body.style.padding = 0

// Does NOT work
// document.body.style = {
//   width: '100vw',
//   height: '100vh',
// }

// Override the default MUI theme:
// https://material-ui.com/customization/default-theme/
const theme = createMuiTheme({
  palette: {
    primary: {
      // main: '#0087be', // dull blue
      main: '#555555', // dark gray
      dark: '#282c34', // React default dark background
      red: '#FF0000', // React default dark background
    },
  },
})

const useStyles = makeStyles(theme => ({
  app: {
    width: '100vw',
    height: '100vh',
    padding: 0,
    margin: 0,
  },

  content: {
    display: 'grid',
    gridTemplateRows: '70px auto 70px',
  },
}))

const App = props => {
  const classes = useStyles(props)
  console.log(classes)

  return (
    <div className={classes.app}>
      {/* Globally reset styling  */}
      {/* https://material-ui.com/components/css-baseline/ */}
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <RouteWrapper
              exact
              path="/"
              header={Header}
              content={Homepage}
              footer={Footer}
              layout={HeaderContentFooterLayout}
            />
            <RouteWrapper
              exact
              path="/medium-content"
              header={Header}
              content={MediumContent}
              footer={Footer}
              layout={HeaderContentFooterLayout}
            />
            <RouteWrapper
              exact
              path="/small-content"
              header={Header}
              content={SmallContent}
              footer={Footer}
              layout={HeaderContentFooterLayout}
            />
            <RouteWrapper
              exact
              path="/dashboard"
              header={Header}
              content={Dashboard}
              footer={Footer}
              layout={HeaderContentFooterLayout}
            />
            <RouteWrapper
              exact
              path="/team"
              header={Header}
              content={Team}
              footer={Footer}
              layout={HeaderContentFooterLayout}
            />
            {/* <RouteWrapper exact path="/dashboard" content={Dashboard} layout={EmptyLayout} />
            <RouteWrapper exact path="/team" content={Team} layout={EmptyLayout} /> */}
            <RouteWrapper
              exact
              path="/terms"
              header={Header}
              content={Terms}
              footer={Footer}
              layout={HeaderContentFooterLayout}
            />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  )
}

export default App
