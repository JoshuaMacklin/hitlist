import axios from 'axios'

const Company = (props) => {
    const name = "No Company Name Provided"
    const salary = "No Salary provided"
    const location = "No Location provided"

    const deleteHit = (event) => {
        // event.preventDefault()
        console.log('button clicked', event)
        axios
          .delete(`http://localhost:3000/companies/${event.target.id}`, event.target.id)
      }

    return(
       <li>
            <h2>{props.name || name} | {props.salary || salary} | {props.location || location}  <button onClick={deleteHit}>x</button></h2>
            {/* <span>{props.salary || salary}</span>
            <span>{props.location || location}</span> */}
           
       </li>
    )
}
export default Company