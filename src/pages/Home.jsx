import React from 'react'
import NavBar from '../components/NavBar'

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-t from-purple-50 via-purple-400 to-purple-600 text-white overflow-hidden font-manrope">
        <NavBar/>
      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.10) 3px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.10) 3px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content of homepage */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-24 mt-0 md:mt-20">
        <h1 className="text-4xl md:text-5xl sm:text-6xl font-bold leading-tight mb-4">
          Build notes that last <br />
          Stay organized,<br />
          Achieve clarity.
        </h1>
        <p className="text-lg font-semibold text-white max-w-2xl mb-6">
          Keep track of your thoughts and tasks effortlessly. Minimal, fast, beautiful.
        </p>
        <button className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold text-xl hover:bg-purple-500 hover:text-white hover:border-1 hover:scale-110 transition">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Home