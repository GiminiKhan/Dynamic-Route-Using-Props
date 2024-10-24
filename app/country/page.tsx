
import Link from "next/link";

export default function CountryList() {
  const countries = ["Pakistan", "China", "Iran", "Turkey", "India"];

  return (
    <div>
      <h1>Country List</h1>
      <div>
        <ol>
          {countries.map((country, index) => (
            <li key={index}>
              <Link href={`/country/${country}`}>{country}</Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}