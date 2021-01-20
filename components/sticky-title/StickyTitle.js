import React from 'react'

import styles from './styles.module.css'

function StickyTitle({ number, title }) {
  return (
    <div className="border-l border-r w-sticky-title h-full fixed flex-shrink-0 z-10">
      <ul className={styles.rotateText}>
        <li className={styles.list}>
          <div className="flex items-center">{title}</div>
          <div className="flex items-center">{number}</div>
        </li>
      </ul>
    </div>
  )
}

export default StickyTitle
