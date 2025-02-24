/* eslint-disable react/prop-types */
import axios from 'axios'

const Company = (props) => {
    const name = "No Company Name Provided"
    const salary = "No Salary provided"
    const location = "No Location provided"

    const deleteHit = () => {
        console.log('button clicked', props)
        if(window.confirm("Delete this job?")) {
          axios
          .delete(`http://localhost:3000/companies/${props.id}`).then(window.location.reload())
        }
      }

    return(
       <li key={props.name}>
            <h2>{props.name || name} | {props.salary || salary} | {props.location || location}  <button onClick={deleteHit}>x</button></h2>
            {/* <span>{props.salary || salary}</span>
            <span>{props.location || location}</span> */}
           
       </li>
    )
}
export default Company