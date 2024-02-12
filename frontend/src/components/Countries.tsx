import { useQuery, gql } from "@apollo/client";

const QUERY = gql`
  query {
    countries {
      name
      code
      emoji
    }
  }
`;

export default function Countries() {
  const { data, loading, error } = useQuery(QUERY);
  const countries = data?.countries.slice(0, 4);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div className="grid">
      {countries?.map((country) => (
        <div
          key={country.code}
          className="flex items-center justify-center gap-4"
        >
          <p>{country.name}</p>
          <p>
            {country.code} - {country.emoji}
          </p>
        </div>
      ))}
    </div>
  );
}
