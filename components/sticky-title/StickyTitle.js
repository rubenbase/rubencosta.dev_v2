import React from 'react'

import styles from './styles.module.css'
import clsx from 'clsx'

function StickyTitle({ number, title, bg }) {
  return (
    <div
      className={clsx(
        'border-l border-r w-sticky-title h-full fixed flex-shrink-0 z-10',
        styles[bg]
      )}
    >
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
