//rafc type to create functional component

import React from 'react'
import Todo from './components/Todo'

const App = () => {
  return (
    <div className='bg-stone-900 grid py-4 h-screen'>
      {/* <h1 className='bg-gray-600 text-white'>GreatStack</h1> */}
      <Todo />
    </div>
  )
}

export default App
