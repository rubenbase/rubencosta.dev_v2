import React from 'react'

function Summary() {
  return (
    <section className="bg-dark text-gray-100 flex-shrink-0 flex justify-between relative w-screen h-full max-w-huge">
      {/* <div className=" flex bg-dark border-l h-full relative w-2/3 2xl:w-2/3 3xl:w-1/3 "> */}
      <div className=" flex bg-dark border-l h-full relative w-full 2xl:w-full 3xl:w-2/3 ">
        <h2 className="absolute top-5 sm:text-6xl md:text-7xl 2xl:text-10xl xl:text-9xl lg:text-8xl ml-10 tracking-widest">
          MENU
        </h2>
        <nav className=" w-full flex flex-col-reverse">
          <ul className="w-full list-none">
            <li className="box-border border-t text-4xl px-4 py-1">
              <button className="flex justify-between uppercase w-full">
                <span>Foreword</span>
                <span>3</span>
              </button>
            </li>
            <li className="box-border border-t text-4xl px-4 py-1">
              <button className="flex justify-between uppercase w-full">
                <span>Approach</span>
                <span>5</span>
              </button>
            </li>
            <li className="box-border border-t text-4xl px-4 py-1">
              <button className="flex justify-between uppercase w-full">
                <span>Process</span>
                <span>6</span>
              </button>
            </li>
            <li className="box-border border-t text-4xl px-4 py-1">
              <button className="flex justify-between uppercase w-full">
                <span>Selected Projects</span>
                <span>12</span>
              </button>
            </li>
            <li className="box-border border-t text-4xl px-4 py-1">
              <button className="flex justify-between uppercase w-full">
                <span>Awards</span>
                <span>22</span>
              </button>
            </li>
            <li className="box-border border-t text-4xl px-4 py-1">
              <button className="flex justify-between uppercase w-full">
                <span>Contact us</span>
                <span>24</span>
              </button>
            </li>
            <li className="box-border border-t border-b text-4xl px-4 py-1">
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
      <div className="flex flex-row-reverse flex-shrink-0 bg-dark h-full border-l relative">
        <img
          className="object-cover"
          style={{ height: '120%', transform: 'translateY(-50px)' }}
          // src="https://images.prismic.io/studio-ba/651f0e73-3083-4df7-aed7-c3ff45e0635b__SMALLAvatar.png?ixlib=js-2.3.2&auto=format&w=100%20100w,%20https://images.prismic.io/studio-ba/651f0e73-3083-4df7-aed7-c3ff45e0635b__SMALLAvatar.png?ixlib=js-2.3.2&auto=format&w=200%20200w,%20https://images.prismic.io/studio-ba/651f0e73-3083-4df7-aed7-c3ff45e0635b__SMALLAvatar.png?ixlib=js-2.3.2&auto=format&w=400%20400w,%20https://images.prismic.io/studio-ba/651f0e73-3083-4df7-aed7-c3ff45e0635b__SMALLAvatar.png?ixlib=js-2.3.2&auto=format&w=800%20800w,%20https://images.prismic.io/studio-ba/651f0e73-3083-4df7-aed7-c3ff45e0635b__SMALLAvatar.png?ixlib=js-2.3.2&auto=format&w=1600%201600w,%20https://images.prismic.io/studio-ba/651f0e73-3083-4df7-aed7-c3ff45e0635b__SMALLAvatar.png?ixlib=js-2.3.2&auto=format&w=2200%202200w"
          src="https://i.pinimg.com/originals/31/49/bc/3149bc3a4a2e28762c79175c7a895217.jpg"
        />
      </div>
    </section>
  )
}

export default Summary
