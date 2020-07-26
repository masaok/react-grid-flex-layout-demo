import React from 'react'

import clsx from 'clsx'

// import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  dashboardLayout: {
    display: 'grid',

    // width: '100vw',
    height: '100vh',
    // margin: 0,
    // padding: 0,

    gridTemplate: `
      "logo search" 64px
      "left-menu breadcrumb" 47px
      "left-menu filelist" auto
      / 256px auto
    `,
  },

  gridItem: {
    backgroundColor: '#ccc',
    border: '1px solid #ff652f',
    padding: theme.spacing(1),
  },

  logoItem: {
    gridArea: 'logo',
  },

  searchItem: {
    gridArea: 'search',
  },

  leftMenuItem: {
    gridArea: 'left-menu',
  },

  breadcrumbItem: {
    gridArea: 'breadcrumb',
  },

  fileListItem: {
    gridArea: 'filelist',
  },
}))

const HeaderContentFooterLayout = props => {
  const classes = useStyles(props)

  // const { header: Header, content: Content, footer: Footer, ...rest } = props

  // console.log('HEADER CONTENT FOOTER LAYOUT > Header:')
  // console.log(Header)

  return (
    <main className={classes.dashboardLayout}>
      <div className={clsx(classes.gridItem, classes.logoItem)}>LOGO</div>
      <div className={clsx(classes.gridItem, classes.searchItem)}>SEARCH</div>
      <div className={clsx(classes.gridItem, classes.leftMenuItem)}>LEFT MENU</div>
      <div className={clsx(classes.gridItem, classes.breadcrumbItem)}>BREADCRUMB PATH</div>
      <div className={clsx(classes.gridItem, classes.fileListItem)}>FILE LIST</div>
    </main>
  )
}

export default HeaderContentFooterLayout
