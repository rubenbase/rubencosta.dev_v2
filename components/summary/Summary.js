import React from 'react'

function Summary() {
  return (
    <section className="bg-dark text-gray-100 flex-shrink-0 flex relative w-screen h-full">
      <div className="bg-dark border-l h-full relative w-2/3 2xl:w-2/3 3xl:w-1/3">
        <h2 className="absolute bottom-5 sm:text-6xl md:text-7xl 2xl:text-9xl xl:text-9xl lg:text-8xl ml-10 tracking-widest">
          SUMMARY
        </h2>
        <nav className="order-2 w-full">
          <ul className="w-full list-none">
            <li className="box-border border-b text-4xl px-4 py-1">
              <button className="flex justify-between uppercase w-full">
                <span>Foreword</span>
                <span>3</span>
              </button>
            </li>
            <li className="box-border border-b text-4xl px-4 py-1">
              <button className="flex justify-between uppercase w-full">
                <span>Approach</span>
                <span>5</span>
              </button>
            </li>
            <li className="box-border border-b text-4xl px-4 py-1">
              <button className="flex justify-between uppercase w-full">
                <span>Process</span>
                <span>6</span>
              </button>
            </li>
            <li className="box-border border-b text-4xl px-4 py-1">
              <button className="flex justify-between uppercase w-full">
                <span>Selected Projects</span>
                <span>12</span>
              </button>
            </li>
            <li className="box-border border-b text-4xl px-4 py-1">
              <button className="flex justify-between uppercase w-full">
                <span>Awards & Recognitions</span>
                <span>22</span>
              </button>
            </li>
            <li className="box-border border-b text-4xl px-4 py-1">
              <button className="flex justify-between uppercase w-full">
                <span>Contact us</span>
                <span>24</span>
              </button>
            </li>
            <li className="box-border border-b text-4xl px-4 py-1">
              <button className="flex justify-between uppercase w-full">
                <span>Colophon</span>
                <span>25</span>
              </button>
            </li>
          </ul>
        </nav>
        {/* <div>
          <article>
            <img />
            <div>
              <span></span>
              <span></span>
            </div>
            <div>
              <span></span>
              <span></span>
            </div>
          </article>
        </div> */}
      </div>
      <div className="flex flex-shrink-0 bg-dark h-full border-l relative w-1/3 2xl:w-1/3 3xl:w-2/3">
        <img
          className="object-cover"
          src="https://images.prismic.io/studio-ba/651f0e73-3083-4df7-aed7-c3ff45e0635b__SMALLAvatar.png?ixlib=js-2.3.2&auto=format&w=100%20100w,%20https://images.prismic.io/studio-ba/651f0e73-3083-4df7-aed7-c3ff45e0635b__SMALLAvatar.png?ixlib=js-2.3.2&auto=format&w=200%20200w,%20https://images.prismic.io/studio-ba/651f0e73-3083-4df7-aed7-c3ff45e0635b__SMALLAvatar.png?ixlib=js-2.3.2&auto=format&w=400%20400w,%20https://images.prismic.io/studio-ba/651f0e73-3083-4df7-aed7-c3ff45e0635b__SMALLAvatar.png?ixlib=js-2.3.2&auto=format&w=800%20800w,%20https://images.prismic.io/studio-ba/651f0e73-3083-4df7-aed7-c3ff45e0635b__SMALLAvatar.png?ixlib=js-2.3.2&auto=format&w=1600%201600w,%20https://images.prismic.io/studio-ba/651f0e73-3083-4df7-aed7-c3ff45e0635b__SMALLAvatar.png?ixlib=js-2.3.2&auto=format&w=2200%202200w"
        />
      </div>
    </section>
  )
}

export default Summary
