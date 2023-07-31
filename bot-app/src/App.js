import React, { useState, useEffect} from 'react';// Importing hooks from react library
import YourBotArmy from './Components/YourBotArmy';// Importing the YourBotArmy component
import SortBar from './SortBar';// Importing the SortBar component
import FilterBar from './FilterBar';// Importing the FilterBar component
import BotCollection from './BotCollection';// Importing the BotCollection component
import './App.css';//Importing the default styles

function App() {
  const [bots, setBots] = useState([]);
  const [enlistBots, setEnlistedBots] = useState([]);
  const [releaseBot, setReleaseBot] = useState([]);
  const [dischargeBot, setDischargeBot] = useState([]);

  useEffect(() => {
    fetchBots();
  }, []);
  
  const fetchBots = async () => {
    const response = await fetch('https://localhost:8001/bots');
    const data = await response.json();
    setBots(data);
  }
  };

  const enlistBot = (bot) => {
    setEnlistedBots((prevBots) => [...prevBots, bot]);
  };
 
  
  const releaseBot = (bot) => {
    setEnlistedBots((prevBots) => [...prevBots.filter, bot.id]);//copying the array and filtering the bot according to the id
  };

  const dischargeBot = async (bot) => {
    try {
      await fetch(`https://localhost:8001/${bot.id}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.log(error);
    };
  };
  
  const BotArmy = () => {
  return (
    <div>
      <h1>Bot Army</h1>
      <SortBar />
      <FilterBar />
      <BotCollection bots={bots} enlistBot={enlistBot} />
      <YourBotArmy bots={enlistBots} release={releaseBot} dischargeBot={dischargeBot} />
    </div>
  );
  }

export default BotArmy;
