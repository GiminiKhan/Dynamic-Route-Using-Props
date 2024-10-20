
 import Card from "@/app/component/card"

// export default function Home() {
//   const name = "Pakistan"
//   const population = 251269164
//   const capital = "Islamabad"
//   const important_cities = ["Karachi", "Lahore", "Sialkot"]
  
//   return (
//    <Country name={name} population={population } capital={capital} important_cities={important_cities}/>

   
//   );
// }
// export function Home1(){
// const name = "China"
//   const population = 1419321278
//   const capital = "Beijing"
//   const important_cities = ["Shanghai", "Beijing", "Guangzhou"]

//   return (
//     <Country name={name} population={population } capital={capital} important_cities={important_cities}/>
//   )
// }



function CountryName({ props }: { props: { names: string } }) {
  const country_data = [
    {
      name: "Pakistan",
      population: "251269164",
      capital: "Islamabad",
      important_cities: ["Karachi", "Lahore", "Sialkot"],
    },
    {
      name: "China",
      population: "1419321278",
      capital: "Beijing",
      important_cities: ["Shanghai", "Beijing", "Guangzhou"],
    },
    {
      name: "Iran",
      population: "91780985",
      capital: "Tehran",
      important_cities: ["Isfahan", "Tabriz", "Qom"],
    },
    {
      name: "Turkey",
      population: "87527081",
      capital: "Ankara",
      important_cities: ["Istanbul", "Bursa", "Izmir"],
    },
    {
      name: "India",
      population: "1450935791",
      capital: "New Delhi",
      important_cities: ["Mumbai", "Kolkata", "Chennai"],
    },
  ];

 

  const selectedCountry = country_data.find(
    (country) => country.name === props.names
  );

  if (!selectedCountry) {
    return <div>Country not found!</div>;
  }

  return (

    <Card name={selectedCountry.name} population={selectedCountry.population} capital={selectedCountry.capital} important_cities={selectedCountry.important_cities}/>
    // <div>
      
    //   <h1>Country Name : {selectedCountry.name}</h1>
    //   <h3>Population: {selectedCountry.population}</h3>
    //   <h4>Capital: {selectedCountry.capital}</h4>
    //   <h5>Important Cities: {selectedCountry.important_cities.join(", ")}</h5>
    // </div>
  );
}

export default CountryName;

