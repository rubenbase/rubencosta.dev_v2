import React from 'react'

import { WrapperStyles } from './Wrapper.module.css'

function Wrapper({ children }) {
  return <div className={WrapperStyles}>{children}</div>
}

export default Wrapper
