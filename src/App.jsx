import { useState} from 'react'
import { useEffect } from 'react';
import reactLogo from './assets/react.svg'
import getData from './hooks/getData'
import LoadingScreen from './components/LoadingScreen'
import './App.css'
import Quote from './components/Quote';
import Watch from './components/Watch';

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className="App">
      <Quote/>
      <Watch/>
    </div>
  )
}

export default App
