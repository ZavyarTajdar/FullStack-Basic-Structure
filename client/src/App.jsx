import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [message, setmessage] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/api/message")
    .then((res) => res.json())
    .then((data) => setmessage(data.message))
    .catch((error) => console.log("Error fatching messgae", error));
  }, [])

  return (
    <>
      <h1> Welcome To Zavyar Frontend</h1>
      <h2>{message}</h2>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
