import { useState, useEffect } from 'react'
import axios from 'axios'
import Company from './components/Company'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [companies, setCompanies] = useState([])
  const [newHitData, setNewHitData] = useState({
    name: "",
    location: "",
    salary: ""
  })
  // const [showAll, setShowAll] = useState(true)

  const addHit = (event) => {
    // event.preventDefault()
    console.log('button clicked', event.target)
    axios
      .post("http://localhost:3000/companies", {
        "name": newHitData.name,
        "location": newHitData.location,
        "salary": newHitData.salary
      })
  }

  const handleHitChange = (e) => {
    const { name, value } = e.target;
    setNewHitData((prevState) => ({ ...prevState, [name]: value }));
  }

  const formShower = () => {
    var x = document.getElementById("Form");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
  }

  useEffect(() => {
    axios
      .get('http://localhost:3000/companies') 
      .catch(function (error) {
        console.log(error.toJSON());
        alert('is the json server running?')
      })
      .then(response => {
        setCompanies(response.data)
      })
  }, [])

  return (
    <>
      <h1>Hitlist</h1>
      <button onClick={formShower}>
        Add a New Company
      </button>
      <form onSubmit={addHit} id='Form' style={{display: "none"}}>
        <div>
          <label htmlFor="companyName">Name:</label>
          <input
            id='companyName'
            name="name"
            required
            onChange={handleHitChange}
          />
        </div>
        <div>
          <label htmlFor="companyLocation">Location:</label>
          <input
            id='companyLocation'
            name="location"
            onChange={handleHitChange}
          />
        </div>
        <div>
          <label htmlFor="jobSalary">Salary:</label>
          <input
            id='jobSalary'
            name="salary"
            onChange={handleHitChange}
          />
        </div>
        <button type="submit">save</button>
      </form>   
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
      <div>
          <ul>
            {companies.map((job, index) => 
              <Company className="card" name={job.name} salary={job.salary} location={job.location} id={job.id} key={index}/>
            )}
          </ul>
      </div>
    </>
  )
}

export default App
