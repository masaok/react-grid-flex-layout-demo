import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  footer: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'lightblue',
    padding: theme.spacing(2),
  },

  button: {
    margin: theme.spacing(2),
  },
}))

const Footer = props => {
  const classes = useStyles(props)

  return (
    <div className={classes.footer}>
      FOOTER
      <Button className={classes.button} variant="contained" href="/dashboard-grid-floating-scroll">
        Dash Grid Floating Scroll
      </Button>
      <Button className={classes.button} variant="contained" href="/dashboard-grid-floating-scroll2">
        Dash Grid Floating Scroll 2
      </Button>
      <Button className={classes.button} variant="contained" href="/dashboard-grid-floating-scroll3">
        Dash Grid Floating Scroll 3
      </Button>
    </div>
  )
}

export default Footer
