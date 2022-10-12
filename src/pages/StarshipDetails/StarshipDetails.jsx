import { useEffect, useState } from "react";
import { getDetails } from "../../services/sw-api";
import { useLocation, Link } from "react-router-dom";

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState([])
  const location = useLocation()
  console.log(location.state.starship)

  useEffect(()=> {
    const fetchDetails = async () => {
      const starshipData = await getDetails(location.state.starship.url)
      setStarshipDetails(starshipData)
    }
    fetchDetails()
  }, [location.state.starship.url])


  console.log(starshipDetails)
  return ( 
  <>    
    <div>
      {starshipDetails.name ?
      <>
        <h2>NAME: {starshipDetails.name}</h2>
        <h2>MODEL: {starshipDetails.model}</h2>
        <Link to='/'>Return</Link>
        </>
        :
        <>
          <p>Loading...</p>
        </>
      }
    </div>
  </>
  );
}

export default StarshipDetails;