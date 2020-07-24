import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  headerLayout: {
    display: 'flex',
    flexDirection: 'column',
  },
}))

const HeaderContentLayout = props => {
  const classes = useStyles(props)

  const { header: Header, content: Content, ...rest } = props

  return (
    <div className={classes.headerLayout}>
      <Header {...rest} />
      <Content {...rest} />
    </div>
  )
}

export default HeaderContentLayout
