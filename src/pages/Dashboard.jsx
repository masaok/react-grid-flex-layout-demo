import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  dashboard: {
    display: 'flex',
    flexDirection: 'column',
  },
}))

const Dashboard = props => {
  const classes = useStyles(props)

  return <div className={classes.dashboard}>DASHBOARD</div>
}

export default Dashboard
