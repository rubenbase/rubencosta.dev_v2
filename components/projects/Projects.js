import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'

import StickyTitle from 'components/sticky-title'
import Wrapper from 'components/wrapper'

import projectsData from './projects-data'
import { ProjectsGrid, CoverImage, CoverTrigger } from './Projects.module.css'

function Projects() {
  return (
    <section className="flex h-full flex-shrink-0 box-border">
      <StickyTitle bg="transparent" number={8} title="Work" />
      <Wrapper>
        <section className="text-gray-400 body-font overflow-hidden">
          <div className="container mx-auto">
            <div className={clsx('flex flex-wrap', ProjectsGrid)}>
              {projectsData.map((project, i) => (
                <div className="p-9 flex flex-col items-start bg-dark w-full">
                  <div className="flex flex-row w-full">
                    {project.tags.map((tag) => (
                      <span className=" mr-2 py-1 px-2 rounded bg-gray-800 text-gray-200 text-opacity-75 text-xs font-medium tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href="project">
                    <div className={clsx('w-full h-full flex flex-col my-5', CoverImage)}>
                      <a
                        href="/project"
                        className={clsx('w-full h-full flex flex-col', CoverTrigger)}
                      >
                        <h2 className="sm:text-4xl text-2xl title-font font-bold text-white mt-8 m-4">
                          {project.title}
                        </h2>
                        <div className="flex items-center flex-wrap pb-4 border-b-2 border-gray-800 mt-auto w-full">
                          <a className="text-pink-200 inline-flex items-center mx-4">
                            Learn More
                            <svg
                              className="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M5 12h14"></path>
                              <path d="M12 5l7 7-7 7"></path>
                            </svg>
                          </a>
                          <span className="text-gray-500 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                            <svg
                              className="w-4 h-4 mr-1"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                            1.2K
                          </span>
                          <span className="text-gray-500 inline-flex items-center leading-none text-sm mr-4">
                            <svg
                              className="w-4 h-4 mr-1"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                            6
                          </span>
                        </div>
                      </a>
                    </div>
                  </Link>

                  <a className="inline-flex items-center">
                    <img
                      alt="blog"
                      src="https://dummyimage.com/104x104"
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-white">
                        {project.name}
                      </span>
                      <span className="text-gray-500 text-xs tracking-widest mt-0.5">
                        {project.sector}
                      </span>
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Wrapper>
    </section>
  )
}

export default Projects
