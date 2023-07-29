import React, {UseState, useEffect} from 'react';// Importing hooks from react library
import YourBotArmy from './YourBotArmy';// Importing the YourBotArmy component
import SortBar from './SortBar';// Importing the SortBar component
import FilterBar from './FilterBar';// Importing the FilterBar component
import BotCollection from './BotCollection';// Importing the BotCollection component
import './App.css';//Importing the default styles

function App() {
  const [bots, setBots] = useState([]);// Initial state of the bots
  const [enlistBots, setEnlistBots] = useState([]);// Initial state of the enlistBots
  const [releaseBot, setReleaseBot] = useState([]);// Initial state of the releaseBot
  const [dischargeBot, setDischargeBot] = useState([]);// Initial state of the dischargeBot

  useEffect(() => {
    fetch('db.json')
    .then(res => res.json())// Fetching the db.json
    .then(data => setBots(data))// Setting the bots
  }, []);

  const fetchBots = async () => {
    const response =await fetch ("https://localhost:8001");
    const data = await response.json();
    setBots(data);
  } catch (error) {
    console.log(error);
  }
};

  



  
  return (
    <div>
      <h1>Bot Army</h1>
      <SortBar />
      <FilterBar />
      <BotCollection bots={bots} enlistBot={enlistBot} />
      <YourBotArmy bots={enlistBots} release={releaseBot} dischargeBot={dischargeBot} />
    </div>
  );


export default App;
