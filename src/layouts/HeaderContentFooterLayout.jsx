import React from 'react'

import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  headerContentFooterLayout: {
    // display: 'flex',
    // flexDirection: 'column',
    // flex: 1,
    // height: '100vh', // required to fill screen vertically
    // justifyContent: 'center',
    // maxHeight: '100vh',
  },

  grid: {
    display: 'grid',
    // gridTemplateColumns: '1fr',
    // width: '100vw',
    height: '100vh',
  },

  header: {
    display: 'flex',
    flex: 1,
    height: 100,
  },

  content: {
    // TODO: If content does not fill the content area; it hovers in the vertical middle weird
    display: 'flex',
    flex: 1,
    overflowX: 'hidden', // required to scroll content area *only*
  },

  footer: {
    display: 'flex',
    flex: 1,
    height: 100,
    width: '100vw',
  },
}))

const HeaderContentFooterLayout = props => {
  const classes = useStyles(props)

  const { header: Header, content: Content, footer: Footer, ...rest } = props

  console.log('HEADER CONTENT FOOTER LAYOUT > Header:')
  console.log(Header)

  return (
    <div className={classes.headerContentFooterLayout}>
      <div className={classes.grid}>
        <div className={classes.header}>{Header ? <Header {...rest} /> : 'HEADER MISSING'}</div>
        <div className={classes.content}>{Content ? <Content {...rest} /> : 'CONTENT MISSING'}</div>
        <div className={classes.footer}>{Footer ? <Footer {...rest} /> : 'FOOTER MISSING'}</div>
      </div>
    </div>
  )
}

HeaderContentFooterLayout.propTypes = {
  header: PropTypes.func,
  content: PropTypes.func,
  footer: PropTypes.func,
}

export default HeaderContentFooterLayout
