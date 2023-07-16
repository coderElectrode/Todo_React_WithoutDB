import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewTask from './Components/NewTask'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <NewTask/>
    </div>
  )
}

export default App
