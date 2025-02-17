const Company = (props) => {
    const name = "Default Company Name"
    const motto = "No Motto provided"
    return(
       <li className="card" key={props.id}>
            <h2>{props.name || name}</h2>
            <span>{props.motto || motto}</span>
            <p>{props.location}</p>
       </li>
    )
}
export default Company