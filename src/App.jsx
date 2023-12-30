import { useState } from 'react'
import reactLogo from '../public/assets/react.svg'
import viteLogo from '../public/assets/vite.svg'
import './App.css'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Footer />
    </>
  )
}

export default App
