import { useState } from 'react'

import reactLogo from './assets/react.svg'
import tailwindLogo from './assets/tailwind.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='max-w-full mx-auto p-4 text-center flex flex-col items-center'>
      <div className='flex'>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src='/vite.svg' className='h-24 p-6' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='h-24 p-6' alt='React logo' />
        </a>
        <a href='https://tailwindcss.com' target='_blank' rel='noreferrer'>
          <img src={tailwindLogo} className='h-24 p-6' alt='Tailwind logo' />
        </a>
      </div>
      <h1>Vite + React + Tailwind Dashboard Template</h1>
      <div className='p-8'>
        <button
          type='button'
          className='px-4 py-2 mb-4 bg-gray-200 rounded-md'
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='text-gray-400'>Click on each logo to learn more!</p>
    </div>
  )
}

export default App
