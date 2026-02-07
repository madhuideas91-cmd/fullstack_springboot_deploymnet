import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("http://77.37.47.79:4000/api/message")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching data:", "error"));
  }, []);


  return (
    <>

      <h1>Welcome to Frontend</h1>
      <h2>data {message}</h2>
    </>
  )
}

export default App
