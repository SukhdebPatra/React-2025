import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './hooks/counter'
import UseRef from './hooks/useRef'
import HookTimer from './hooks/HookTimer'
import CurdOpration from './pages/CurdOpratio'
import CurdOprationTwo from './pages/CurdOprationTwo'
import UserForm from './pages/UserForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Counter/>
     <UseRef/>
     <HookTimer/> */}
{/* <CurdOpration/> */}
{/* <CurdOprationTwo/> */}
<UserForm/>
    </>
  )
}

export default App
