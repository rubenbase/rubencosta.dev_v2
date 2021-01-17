import React, { useRef, useState, useCallback } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import { motion, useViewportScroll, useTransform, useSpring } from 'framer-motion'

// components
import Home from 'components/home'
import Header from 'components/header'
import Summary from 'components/summary'

// hooks
import useIsomorphicLayoutEffect from 'hooks/useIsomorphicLayoutEffect'
import StickyTitle from 'components/sticky-title'

export default function App() {
  const scrollRef = useRef(null)
  const ghostRef = useRef(null)
  const [scrollRange, setScrollRange] = useState(0)
  const [viewportW, setViewportW] = useState(0)

  useIsomorphicLayoutEffect(() => {
    scrollRef && setScrollRange(scrollRef.current.scrollWidth)
  }, [scrollRef])

  const onResize = useCallback((entries) => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width)
    }
  }, [])

  useIsomorphicLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => onResize(entries))
    resizeObserver.observe(ghostRef.current)
    return () => resizeObserver.disconnect()
  }, [onResize])

  const { scrollYProgress } = useViewportScroll()
  const transform = useTransform(scrollYProgress, [0, 1], [0, -scrollRange + viewportW])
  const physics = { damping: 15, mass: 0.27, stiffness: 55 }
  const spring = useSpring(transform, physics)

  return (
    <>
      <Header />
      <main className="flex h-screen fixed top-0 left-0 pt-24 md:pt-14">
        <motion.section
          ref={scrollRef}
          style={{ x: spring }}
          className="thumbnails-container"
        >
          <div className="flex h-full flex-shrink-0">
            {/* home */}
            <Home />
            {/* menu */}
            <Summary />
            {/* tercera */}
            <section className="flex h-full flex-shrink-0 box-border">
              <article className="flex-shrink-0 relative flex">
                <StickyTitle />
              </article>
            </section>
          </div>
        </motion.section>
      </main>
      <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />
    </>
  )
}
