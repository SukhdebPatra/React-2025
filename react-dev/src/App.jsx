import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './hooks/counter'
import UseRef from './hooks/useRef'
import HookTimer from './hooks/HookTimer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Counter/>
     <UseRef/>
     <HookTimer/>
    </>
  )
}

export default App
