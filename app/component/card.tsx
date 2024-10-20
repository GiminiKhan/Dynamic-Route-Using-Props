


export default function Card (props:any) {
    console.log(props)


 
    return (
        <div>
       <h1>Name: {props.name}</h1>
   <h2>Capital: {props.capital}</h2>
   <h3>Population: {props.population} </h3>   
   <h4>Important Cities:{props.important_cities}</h4>

        </div>
    )
}