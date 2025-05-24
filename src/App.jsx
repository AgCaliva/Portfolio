import { useState } from 'react'
import MainRouter from './MainRouter'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
		<MainRouter/>
    </>
  )
}

export default App
