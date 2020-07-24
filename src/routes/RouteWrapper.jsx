import React from 'react'
import { Route } from 'react-router-dom'

const RouteWrapper = props => {
  const { header: Header, content: Content, footer: Footer, layout: Layout, ...rest } = props

  console.log('ROUTE WRAPPER > Component:')
  console.log(Content)

  console.log('ROUTE WRAPPER > rest:')
  console.log(rest)

  return <Route {...rest} render={props => <Layout header={Header} content={Content} footer={Footer} {...props} />} />
}

export default RouteWrapper
