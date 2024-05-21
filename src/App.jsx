import './App.css'
import Players from "./features/players/players";
import  Form  from "./components/form";



function App() {
  const handleAddPlayer = async (newPlayerData) => {
    await addPlayer(newPlayerData)
    refetch()
  }


  return (
    <>
    <div>
      <h1>Welcome to the Puppy Bowl Event!</h1>

      <Form addPlayer={handleAddPlayer} />
      <Players/>
    </div>
     
    </>
  )
}

export default App