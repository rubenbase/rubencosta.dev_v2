import React from 'react'

function Navbar() {
  return (
    <header className="bg-dark flex items-center h-14 fixed top-0 left-0 w-full border-b border-white">
      <div className="px-6 flex items-center justify-between max-w-screen-2xl relative h-full w-screen my-0 mx-auto">
        <a>
          <span className="text-gray-100 font-medium text-2xl">RC — DEV</span>
        </a>
        <a>
          <span className="text-gray-100 font-medium text-2xl">Summary</span>
        </a>
      </div>
    </header>
  )
}

export default Navbar
