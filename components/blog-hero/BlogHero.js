import React from 'react'

import { motion } from 'framer-motion'

import projectsData from 'constants/projects'

// import { Container } from './styles';

function BlogHero() {
  return (
    <div class="relative h-full w-full bg-dark">
      {/* hero img */}
      <div class="max-w-7xl sm:pt-8 mx-auto sm:px-6 lg:px-8">
        <div class="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
          <div class="absolute inset-0">
            <img
              class="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
              alt="People working on laptops"
            />
            <div
              class="absolute inset-0 bg-indigo-700"
              style={{ mixBlendMode: 'multiply' }}
            ></div>
          </div>
          <div class="text-center relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <div className="container">
              <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="block text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
              >
                {projectsData[0].title}
              </motion.h1>
            </div>
          </div>
        </div>
      </div>
      {/* end hero img */}

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div class="mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
          <div class="flex-1 bg-white px-6 py-8 lg:p-12">
            <h3 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">Hosply.com</h3>
            <p class="mt-6 text-base text-gray-500">
              Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis
              perferendis blanditiis repellendus etur quidem assumenda.
            </p>
            <div class="mt-8">
              <div class="flex items-center">
                <h4 class="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">
                  Summary
                </h4>
                <div class="flex-1 border-t-2 border-gray-200"></div>
              </div>
              <ul class="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                <li class="flex items-start lg:col-span-1">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-5 w-5 text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <p class="ml-3 text-sm text-gray-700">Management</p>
                </li>

                <li class="flex items-start lg:col-span-1">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-5 w-5 text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <p class="ml-3 text-sm text-gray-700">Maintenance</p>
                </li>

                <li class="flex items-start lg:col-span-1">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-5 w-5 text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <p class="ml-3 text-sm text-gray-700">Cleaning</p>
                </li>

                <li class="flex items-start lg:col-span-1">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-5 w-5 text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <p class="ml-3 text-sm text-gray-700">Laundry</p>
                </li>

                <li class="flex items-start lg:col-span-1">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-5 w-5 text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <p class="ml-3 text-sm text-gray-700">Restaurant</p>
                </li>

                <li class="flex items-start lg:col-span-1">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-5 w-5 text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <p class="ml-3 text-sm text-gray-700">Customer attention</p>
                </li>
              </ul>
            </div>
          </div>
          {/* Right Panel */}

          <div>
            {/* Table */}
            <dl>
              <div class="bg-white px-4 pt-9 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Industry:</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Hospitality
                </dd>
              </div>
              <div class="bg-white px-4 py-5 sm:grid sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Technologies:</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <ul>
                    <li class="pr-1 py-2 flex items-center justify-between text-sm">
                      <div class="w-0 flex-1 flex items-center flex-wrap">
                        <span className="mr-2 mb-2 py-1 px-2 rounded bg-gray-800 text-white text-xs font-medium tracking-widest">
                          React
                        </span>
                        <span className=" mr-2 mb-2 py-1 px-2 rounded bg-gray-800 text-white text-xs font-medium tracking-widest">
                          Node.js
                        </span>
                        <span className=" mr-2 mb-2 py-1 px-2 rounded bg-gray-800 text-white text-xs font-medium tracking-widest">
                          GCP
                        </span>
                        <span className=" mr-2 mb-2 py-1 px-2 rounded bg-gray-800 text-white text-xs font-medium tracking-widest">
                          MongoDB
                        </span>
                        <span className=" mr-2 mb-2 py-1 px-2 rounded bg-gray-800 text-white text-xs font-medium tracking-widest">
                          Kubernetes
                        </span>
                        <span className=" mr-2 mb-2 py-1 px-2 rounded bg-gray-800 text-white text-xs font-medium tracking-widest">
                          Docker
                        </span>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
            <div class="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
              {/* Live Button  */}
              <div class="rounded-md shadow">
                <a
                  href="#"
                  class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                >
                  live preview
                </a>
              </div>
              <div class="mt-4 text-sm">
                <a
                  href="#"
                  class="flex align-center justify-center font-medium text-gray-900"
                >
                  <svg
                    class="w-4 h-4 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    ></path>
                  </svg>

                  <span className="mx-1">Check the stats</span>

                  <span class="font-normal text-gray-500"> (coming soon)</span>
                </a>
              </div>
            </div>
          </div>
          {/* End Right Panel */}
        </div>
      </div>
    </div>
  )
}

export default BlogHero
