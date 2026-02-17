import { useState } from 'react'
import './App.css'
import {UseState} from './UseState.jsx'
import {ClassState} from './ClassState.jsx'
import { UseReducer } from './useReduce.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <UseState/>
      <ClassState name="Class stat"/>
      <UseReducer></UseReducer>
    </div>
    </>
  )
}

export default App
