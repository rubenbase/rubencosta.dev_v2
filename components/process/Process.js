import React from 'react'
import clsx from 'clsx'

import StickyTitle from 'components/sticky-title'
import Content from 'components/content'

import { processSectionPadding, processText } from './Process.module.css'

function Process() {
  return (
    <section className="flex h-full flex-shrink-0 box-border">
      <article className="flex-shrink-0 relative flex">
        <StickyTitle number={3} title="Process" />
        <Content>
          <ol className="flex flex-col justify-between w-full">
            <li
              className={clsx(
                'text-white relative flex flex-shrink-0 align-baseline',
                processSectionPadding
              )}
            >
              <h3>
                <span>(I) 1. Art Direction</span>
              </h3>
              <div className={processText}>
                <p>
                  Our process starts by predicting a visual narrative for the project,
                  making it memorable, striking, and beautiful. A strong emphasis on
                  Typography, Color, and Motion is a foundation for designing with clear
                  intent. Each project—whether branding, website, mobile app or digital
                  experience carries an intrinsic relationship of functionality and
                  connectivity.
                </p>
              </div>
            </li>
          </ol>
        </Content>
      </article>
    </section>
  )
}

export default Process
