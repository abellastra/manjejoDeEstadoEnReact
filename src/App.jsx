import { useState } from 'react'
import './App.css'
import {UseState} from './UseState.jsx'
import {ClassState} from './ClassState.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <UseState/>
      <ClassState name="Class stat"/>
    </div>
    </>
  )
}

export default App
