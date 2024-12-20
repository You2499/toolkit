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
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      )
    },
    {
      title: 'GrocerySplitter',
      description: 'Manage shared grocery expenses seamlessly',
      url: 'https://grocerysplitter.netlify.app/',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? (
          <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>

      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:py-24">
          <header className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              ToolKit
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
              A collection of useful tools to simplify your life
            </p>
          </header>

          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
            {apps.map((app) => (
              <a
                key={app.title}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 sm:p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
                    {app.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {app.title}
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {app.description}
                </p>
                <div className="flex items-center text-blue-600 dark:text-blue-400">
                  <span className="text-sm font-medium">Try it now</span>
                  <svg
                    className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>

      <footer className="mt-auto py-8 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <p>© 2024 ToolKit. All rights reserved.</p>
            <div className="mt-2 flex justify-center space-x-4">
              <a href="https://toolkit.netlify.app" className="hover:text-gray-700 dark:hover:text-gray-300">ToolKit</a>
              <span>•</span>
              <a href="https://foodsplitter.netlify.app" className="hover:text-gray-700 dark:hover:text-gray-300">FoodSplitter</a>
              <span>•</span>
              <a href="https://grocerysplitter.netlify.app" className="hover:text-gray-700 dark:hover:text-gray-300">GrocerySplitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
