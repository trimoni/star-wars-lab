import { useEffect, useState } from "react";
import { getDetails } from "../../services/sw-api";
import { useLocation, Link } from "react-router-dom";

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState([]);
  const location = useLocation();
  console.log(location.state.starship);

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getDetails(location.state.starship.url);
      setStarshipDetails(starshipData);
    };
    fetchDetails();
  }, [location.state.starship.url]);

  console.log(starshipDetails);
  return (
    <>
      <main className="details">
        <div className="card">
          {starshipDetails.name ? (
            <>
              <table>
                <thead>
                  <tr></tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Name:</th>
                    <td>
                      <p>{starshipDetails.name}</p>
                    </td>
                  </tr>
                  <tr>
                    <th>Model:</th>
                    <td>
                      <p>{starshipDetails.model}</p>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <Link to="/">Return</Link>
                    </th>
                  </tr>
                </tbody>
              </table>
            </>
          ) : (
            <>
              <p>Loading...</p>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default StarshipDetails;
