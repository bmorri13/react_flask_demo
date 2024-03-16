import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])

  const fetchApi = async () => {
    const response = await axios.get('http://localhost:5000/api/users')
    console.log(response.data.users)
    setUsers(response.data.users)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <>
      <h1>React & Flack Backend Test</h1>
      <div className="card">

          {
          users.map((user, index) => (
            <div key={index}> 
            <span>{user}</span><br />
            </div>
          ))
          }

      </div>
    </>
  )
}

export default App
