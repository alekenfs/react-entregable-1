import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import users from "./App.json"

function App() {
  
  const ramdomUser = Math.floor(Math.random() * users.length - 1)
  
  
  const [index, setIndex] = useState(ramdomUser)
  
  const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "lightcoral"]
  const ramdomColor = Math.floor(Math.random() * colors.length - 1)
  
  const [background, setBackground] = useState(ramdomColor)
  
  const userChange = () => {

    const anotherramdomUser = Math.floor(Math.random() * users.length)
    
    setIndex(anotherramdomUser)
    
    const anotherramdomColor = Math.floor(Math.random() * colors.length)
    
    setBackground(anotherramdomColor)
  }
  
  
  


  return (
    <>
    <div className="App" style={{background: `${colors[background]}`} }>
      <img src={users[index]?.picture.large} alt="" />

      <h1> {users[index]?.name.title} {users[index]?.name.first} {users[index]?.name.last}  </h1>
      <button onClick={userChange}> <i class="fa-solid fa-shuffle"></i> </button>

      <ul>
        <li>
        <i className="fa-solid fa-envelope"></i> {users[index]?.email}</li>
        <li><i className="fa-solid fa-phone"></i> {users[index]?.phone}</li>
        <li><i className="fa-solid fa-location-dot"></i> {users[index]?.location.city}. {users[index]?.location.state}, {users[index]?.location.country}</li>


      </ul>

    </div>
    </>
  )
}

export default App
