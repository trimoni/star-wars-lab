import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllStarships } from "../../services/sw-api";

const StarshipList = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starship = await getAllStarships();
      setStarships(starship.results);
    };
    fetchStarshipList();
  }, []);

  return (
    <>
      {starships.map(starship => 
        <Link to="/starships" state={{ starship }} key={starship.name}>
          {starship.name}
        </Link>
      )}
    </>
  );
};

export default StarshipList;
