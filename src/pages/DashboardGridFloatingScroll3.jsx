import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

// Credit to this Stack Overflow:
// https://stackoverflow.com/questions/43352501/css-grid-content-to-use-free-space-but-scroll-when-bigger

const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    // gridTemplateColumns: '1fr 1fr',
    // gridTemplateRows: 'auto 1fr',
    height: '100%',
    '& > div': {
      border: '1px solid blue',
      borderRadius: '5px',
    },

    gridTemplate: `
    "header header" auto
    "left right" 1fr
    / 1fr 1fr
    `,
  },

  header: {
    gridArea: 'header',
    // gridColumn: '1 / span 2',
    // gridRow: 1,
  },

  left: {
    gridArea: 'left',
    // gridColumn: 1,
    // gridRow: 2,
    position: 'relative',
    // '& > div': {
    //   position: 'absolute',
    //   top: 0,
    //   left: 0,
    //   right: 0,
    //   maxHeight: '100%',
    //   overflow: 'auto',
    // },
  },

  problemChild: {
    gridArea: 'right',
    // gridColumn: 2,
    // gridRow: 2,
    position: 'relative',
    // '& > div': {
    //   position: 'absolute',
    //   top: 0,
    //   left: 0,
    //   right: 0,
    //   maxHeight: '100%',
    //   overflow: 'auto',
    // },
  },

  scrollPanel: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    maxHeight: '100%',
    overflow: 'auto',
  },

  footer: {
    gridColumn: 2,
    gridRow: 3,
  },
}))

const DashboardGridFloatingScroll = props => {
  const classes = useStyles(props)

  // return <div className={classes.dashboard}>DASHBOARD</div>
  return (
    <div className={classes.container}>
      <div className={classes.header}>column header</div>
      <div className={classes.left}>
        <div className={classes.scrollPanel}>
          left
          <pre>
            <br />
            scroll if overflowing
            <br />
            scroll if overflowing
            <br />
            scroll if overflowing
            <br />
            scroll if overflowing
            <br />
            scroll if overflowing
            <br />
            scroll if overflowing
            <br />
            scroll if overflowing
            <br />
            scroll if overflowing
            <br />
            scroll if overflowing
            <br />
            scroll if overflowing
            <br />
            scroll if overflowing
            <br />
            scroll if overflowing
            <br />
            scroll if overflowing
            <br />
            scroll if overflowing
            <br />
            scroll if overflowing
            <br />
            scroll if overflowing
            <br />
            scroll if overflowing
            <br />
            scroll if overflowing
            <br />
            scroll if overflowing
            <br />
            scroll if overflowing
            <br />
            scroll if overflowing
            <br />
            scroll if overflowing
            <br />
            scroll if overflowing
            <br />
            scroll if overflowing
            <br />
            scroll if overflowing
            <br />
            scroll if overflowing
            <br />
            scroll if overflowing
            <br />
            scroll if overflowing
            <br />
            scroll if overflowing
            <br />
            scroll if overflowing
            <br />
            scroll if overflowing
            <br />
            scroll if overflowing
            <br />
            scroll if overflowing
            <br />
            scroll if overflowing
            <br />
            scroll if overflowing
            <br />
          </pre>
        </div>
      </div>
      <div className={classes.problemChild}>
        <div className={classes.scrollPanel}>
          problem child:
          <br />I<br />
          want
          <br />
          this
          <br />
          to
          <br />
          scroll
          <br />
          rather
          <br />
          than
          <br />
          making
          <br />
          everything
          <br />
          tall
          <br />
          tall
          <br />
          tall
          <br />
          tall
          <br />
          tall
          <br />
          tall
          <br />
          tall
          <br />
          tall
          <br />
          tall
        </div>
      </div>
    </div>
  )
}

export default DashboardGridFloatingScroll
