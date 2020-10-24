import React from 'react'

// import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  header: {
    display: 'flex',
    flex: 1,
    // margin: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: 'lightpink',
  },

  button: {
    margin: theme.spacing(2),
    whiteSpace: 'nowrap',
  },
}))

const Header = props => {
  const classes = useStyles(props)

  return (
    <div className={classes.header}>
      <div>HEADER</div>
      <Button className={classes.button} variant="contained" href="/">
        Homepage
      </Button>
      <Button className={classes.button} variant="contained" href="/medium-content">
        Medium Content
      </Button>
      <Button className={classes.button} variant="contained" href="/small-content">
        Small Content
      </Button>
      <Button className={classes.button} variant="contained" href="/dashboard">
        Dashboard
      </Button>
      <Button className={classes.button} variant="contained" href="/dashboard-grid-floating-scroll">
        Dash Grid Floating Scroll
      </Button>
      <Button className={classes.button} variant="contained" href="/dashboard-grid-floating-scroll2">
        Dash Grid Floating Scroll 2
      </Button>
      <Button className={classes.button} variant="contained" href="/team">
        Team
      </Button>
      <Button className={classes.button} variant="contained" href="/terms">
        Terms
      </Button>
    </div>
  )
}

Header.propTypes = {}

export default Header
