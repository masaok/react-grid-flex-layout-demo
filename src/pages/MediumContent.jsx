import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  mediumContent: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'lavender',
    padding: theme.spacing(2),
  },
}))

const MediumContent = props => {
  const classes = useStyles(props)

  return (
    <div className={classes.mediumContent}>
      <div>BEGIN CONTENT BEGIN</div>
      <div>MEDIUM CONTENT</div>
      <div>MEDIUM CONTENT</div>
      <div>MEDIUM CONTENT</div>
      <div>MEDIUM CONTENT</div>
      <div>MEDIUM CONTENT</div>
      <div>MEDIUM CONTENT</div>
      <div>MEDIUM CONTENT</div>
      <div>MEDIUM CONTENT</div>
      <div>MEDIUM CONTENT</div>
      <div>MEDIUM CONTENT</div>
      <div>MEDIUM CONTENT</div>
      <div>MEDIUM CONTENT</div>
      <div>MEDIUM CONTENT</div>
      <div>MEDIUM CONTENT</div>
      <div>MEDIUM CONTENT</div>
      <div>MEDIUM CONTENT</div>
      <div>MEDIUM CONTENT</div>
      <div>MEDIUM CONTENT</div>
      <div>MEDIUM CONTENT</div>
      <div>END CONTENT END</div>
    </div>
  )
}

export default MediumContent
