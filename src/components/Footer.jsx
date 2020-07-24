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
      <Button className={classes.button} variant="contained" href="/">
        Homepage
      </Button>
      <Button className={classes.button} variant="contained" href="/dashboard">
        Dashboard
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

export default Footer
