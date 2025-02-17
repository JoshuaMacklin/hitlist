import { useState, useEffect } from 'react'
import axios from 'axios'
import Company from './components/Company'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [companies, setCompanies] = useState([])
  const [newHit, setNewHit] = useState('')
  // const [showAll, setShowAll] = useState(true)

  const addHit = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
  }

  const handleHitChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3000/companies')
      .then(response => {
        console.log('promise fulfilled')
        setCompanies(response.data)
      })
  }, [])

  return (
    <>
      <h1>Hitlist</h1>
      <button>
        Add a New Company
      </button>
      <form onSubmit={addHit}>
        <input
          value={newHit}
          onChange={handleHitChange}
        />
        <button type="submit">save</button>
      </form>   
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
      <div>
          <ul>
            {companies.map(element => 
              <Company className="card" name={element.name} motto={element.motto} location={element.location}/>
            )}
          </ul>
      </div>
    </>
  )
}

export default App
