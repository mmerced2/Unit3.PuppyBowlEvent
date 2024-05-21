// Import the React library
import { useSelector } from "react-redux";
import  {useGetAllPlayersQuery } from "../../api/puppyBowlApi";

// Import the generated hook from our RTK Query API slice

// Import the CSS styles for this component

// Define a new React component
const Players = () => {
  // Use the generated hook to fetch data from the API
  // When the component is first rendered, it will start the API fetch
  // It will re-render each time the fetch status changes (e.g., "loading", "data arrived", "error")
  const { data = {}, error, isLoading } = useGetAllPlayersQuery();
  const players = useSelector((state) => state.players);

  // Show a loading message while data is being fetched
  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  // Show an error message if the fetch failed
  if (error) {
    return (
      <>
        <h1>ERROR</h1>
      </>
    );
  }

  // Show the fetched data after it has arrived
  return (
    
    <div className="players">
      {/* Map through the data array and generate a div for each player */}
      {data.data.players.map((player) => (
        // Use the player's ID as the key for this div
        <div key={player.id} className="player-card">
          <img
            src={player.imageUrl}
            alt={player.name}
            className="player-image"
          />

          <div className="player-details">

            <h2> {player.name} </h2>

            <p> {player.breed} </p>

            <p> {player.status} </p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Export the component so it can be imported and used in other files
export default Players;