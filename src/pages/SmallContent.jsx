import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  smallContent: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'orchid',
    padding: theme.spacing(2),
  },
}))

const SmallContent = props => {
  const classes = useStyles(props)

  return (
    <div className={classes.smallContent}>
      <div>BEGIN SMALL CONTENT BEGIN</div>
      <div>SMALL CONTENT</div>
      <div>SMALL CONTENT</div>
      <div>SMALL CONTENT</div>
      <div>SMALL CONTENT</div>
      <div>SMALL CONTENT</div>
      <div>END SMALL CONTENT END</div>
    </div>
  )
}

export default SmallContent
