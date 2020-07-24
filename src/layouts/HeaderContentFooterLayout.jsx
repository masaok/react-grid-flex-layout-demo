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

    display: 'grid',
    gridTemplateRows: '100px auto 100px',

    width: '100vw',
    height: '100vh',
    margin: 0,
    padding: 0,
  },

  header: {
    display: 'flex',
    flex: 1,
  },

  content: {
    // TODO: If content does not fill the content area; it hovers in the vertical middle weird
    display: 'flex',
    flex: 1,
    overflowY: 'scroll', // required to scroll content area *only*

    backgroundColor: 'lightgreen',
  },

  footer: {
    display: 'flex',
    flex: 1,
    // height: 100,
    // width: '100vw',
  },
}))

const HeaderContentFooterLayout = props => {
  const classes = useStyles(props)

  const { header: Header, content: Content, footer: Footer, ...rest } = props

  console.log('HEADER CONTENT FOOTER LAYOUT > Header:')
  console.log(Header)

  return (
    <main className={classes.headerContentFooterLayout}>
      <header className={classes.header}>{Header ? <Header {...rest} /> : 'HEADER MISSING'}</header>
      <section className={classes.content}>{Content ? <Content {...rest} /> : 'CONTENT MISSING'}</section>
      <footer className={classes.footer}>{Footer ? <Footer {...rest} /> : 'FOOTER MISSING'}</footer>
    </main>
  )
}

HeaderContentFooterLayout.propTypes = {
  header: PropTypes.func,
  content: PropTypes.func,
  footer: PropTypes.func,
}

export default HeaderContentFooterLayout
