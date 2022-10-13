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
    <main className="align">
      <div className="icon-container">
      {starships.map(starship => 
        <Link to="/starships" state={{ starship }} key={starship.name}>
          <div className="class-div">
          {starship.name}
          </div>
        </Link>
      )}
      </div>
      </main>
    </>
  );
};

export default StarshipList;
