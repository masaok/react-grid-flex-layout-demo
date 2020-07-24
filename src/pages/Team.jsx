import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  team: {
    display: 'flex',
    flexDirection: 'column',
  },
}))

const Team = props => {
  const classes = useStyles(props)

  return <div className={classes.team}>TEAM</div>
}

export default Team
