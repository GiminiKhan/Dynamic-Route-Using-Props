
import Card from "@/app/component/card";
import { country_data } from "@/app/component/card";

interface PageParams {
  params: {
    names: string;
  };
}

export default function CountryName({ params }: PageParams) {
  console.log("Received params:", params);

  if (!params || !params.names) {
    console.log("No country name provided in params");
    return <div>Invalid country name</div>;
  }

  const countryName = params.names.toLowerCase();
  console.log("Looking for country:", countryName);

  const selectedCountry = country_data.find(
    (country) => country.name.toLowerCase() === countryName
  );

  if (!selectedCountry) {
    console.log("Country not found in data");
    return <div>Country not found!</div>;
  }

  console.log("Found country:", selectedCountry);

  return (
    <Card
      name={selectedCountry.name}
      population={selectedCountry.population}
      capital={selectedCountry.capital}
      important_cities={selectedCountry.important_cities}
    />
  );
}