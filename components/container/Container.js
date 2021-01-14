import React from 'react'
import { StyledContainer } from './container-elements'

function Container({ children, ...rest }) {
  return <StyledContainer {...rest}>{children}</StyledContainer>
}

export default Container
