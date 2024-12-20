import { useState, useEffect } from 'react'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    if (darkMode) {
      setDarkMode(false)
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    } else {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    }
  }

  const apps = [
    {
      title: 'FoodSplitter',
      description: 'Split restaurant bills effortlessly with friends',
      url: 'https://foodsplitter.netlify.app/',
      gradient: 'from-orange-400 to-pink-500'
    },
    {
      title: 'GrocerySplitter',
      description: 'Manage shared grocery expenses seamlessly',
      url: 'https://grocerysplitter.netlify.app/',
      gradient: 'from-emerald-400 to-cyan-500'
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 p-2 rounded-lg bg-gray-200 dark:bg-dark-card hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? (
          <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>

      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
            ToolKit
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            A collection of useful tools to simplify your life
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {apps.map((app) => (
            <a
              key={app.title}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02] bg-white dark:bg-dark-card shadow-lg hover:shadow-xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${app.gradient} opacity-90`} />
              <div className="relative">
                <h2 className="text-2xl font-semibold text-white mb-3">
                  {app.title}
                </h2>
                <p className="text-white/90">
                  {app.description}
                </p>
                <div className="mt-4 inline-flex items-center text-white">
                  <span>Try it now</span>
                  <svg
                    className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        <footer className="mt-20 text-center text-gray-600 dark:text-gray-400">
          <p>© 2024 ToolKit. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default App
