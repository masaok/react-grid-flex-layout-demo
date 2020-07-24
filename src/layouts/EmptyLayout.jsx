import React from 'react'

const EmptyLayout = props => {
  const { content: Content, ...rest } = props

  console.log('EMPTY LAYOUT > Content:')
  console.log(Content)

  return <Content {...rest} />
}

export default EmptyLayout
