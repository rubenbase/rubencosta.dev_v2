import React from 'react'

function Home() {
  return (
    <section className="bg-dark text-gray-100 flex-shrink-0 flex relative w-screen h-full max-w-huge">
      <div className="box-border h-full my-0 mx-auto max-w-screen-2xl px-6 relative w-screen">
        <div className="absolute flex items-end bottom-0 mb-16 text-7xl">
          <div id="text">
            <h1 className="font-thin mr-6 ">
              <span className="font-light sm:text-6xl md:text-7xl 2xl:text-8xl xl:text-8xl lg:text-8xl">
                Ruben Costa
              </span>
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
  )
}

export default Home
