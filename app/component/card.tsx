
import React from "react";

export const country_data = [
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

  interface Props {
    name: string;
    population: string;
    capital: string;
    important_cities: string[];
  }
  
  const Card: React.FC<Props> = ({ name, population, capital, important_cities }) => {
    return (
      <div>
        <h1>Country Name: {name}</h1>
        <h3>Population: {population}</h3>
        <h4>Capital: {capital}</h4>
        <h5>Important Cities: </h5>
        <ul>
        {important_cities.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>
      </div>
    );
  };
  
  export default Card;