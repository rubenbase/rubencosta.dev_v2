import React, { useRef, useState, useCallback } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import { motion, useViewportScroll, useTransform, useSpring } from 'framer-motion'

import Navbar from 'components/header'
import useIsomorphicLayoutEffect from 'hooks/useIsomorphicLayoutEffect'

import styled from '@emotion/styled'

export default function Home() {
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
      <header className="bg-gray-900 flex items-center h-14 fixed top-0 left-0 w-full border-b border-white">
        <div className="px-6 flex items-center justify-center max-w-screen-2xl relative h-full w-screen my-0 mx-auto">
          <a>
            <span className="text-gray-100 font-bold">RC</span>
          </a>
        </div>
      </header>
      <main className="flex h-screen fixed top-0 left-0 pt-24 md:pt-14">
        <motion.section
          ref={scrollRef}
          style={{ x: spring }}
          className="thumbnails-container"
        >
          <div className="flex h-full flex-shrink-0">
            {/* home */}
            <section className="bg-gray-900 text-gray-100 flex-shrink-0 flex relative w-screen h-full">
              <div className="box-border h-full my-0 mx-auto max-w-screen-2xl px-6 relative w-screen">
                <div className="absolute flex items-end bottom-0 mb-16 text-7xl">
                  <div id="text">
                    <h1 className="font-thin">
                      <span className="font-light">Ruben Costa</span>
                      <br />
                      Cloud {'&'} Software Developer at Vodafone.
                    </h1>

                    <span className="m-1 text-blue-800 bg-pink-200 hover:bg-pink-300 rounded-full px-2 py-1 font-bold text-sm leading-loose cursor-pointer">
                      #remote
                    </span>
                    <span className="m-1 text-red-800 bg-yellow-200 hover:bg-yellow-300 rounded-full px-2 py-1 font-bold text-sm leading-loose cursor-pointer">
                      #worldwide
                    </span>
                  </div>
                </div>
              </div>
            </section>
            {/* menu */}
            <section className="bg-gray-900 text-gray-100 flex-shrink-0 flex relative w-screen h-full">
              <div className="box-border h-full my-0 mx-auto max-w-screen-2xl px-6 relative w-screen">
                <div className="absolute flex items-end bottom-0 mb-16 text-7xl">
                  <div id="text">
                    <h1 className="font-thin">
                      <span className="font-light">Second page</span> mate
                    </h1>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </motion.section>
      </main>
      <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />
    </>
  )
}
