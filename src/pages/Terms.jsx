import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  terms: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'greenyellow',
    padding: theme.spacing(2),
    // height: '100%',
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
  },
}))

const Terms = props => {
  const classes = useStyles(props)

  return (
    <div className={classes.terms}>
      TERMS
      <div>MORE TERMS</div>
      <div>MORE TERMS</div>
      <div>MORE TERMS</div>
      <div>MORE TERMS</div>
      <div>MORE TERMS</div>
      <div>MORE TERMS</div>
      <div>MORE TERMS</div>
      <div>MORE TERMS</div>
      <div>MORE TERMS</div>
      <div>MORE TERMS</div>
    </div>
  )
}

export default Terms
