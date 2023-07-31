import React, { useState, useEffect } from 'react';
import YourBotArmy from './Components/YourBotArmy';
import SortBar from './Components/SortBar';
import FilterBar from './Components/FilterBar';
import BotCollection from './Components/BotCollection';
import './App.css';

const BotArmy = ({ bots, enlistBot, releaseBot, dischargeBot }) => {
  return (
    <div>
      <FilterBar />
      <BotCollection bots={bots} enlistBot={enlistBot} />
      <YourBotArmy bots={bots} release={releaseBot} dischargeBot={dischargeBot} />
    </div>
  );
};

function App() {
  const [bots, setBots] = useState([]);
  const [enlistBots, setEnlistedBots] = useState([]);
  const [releasedBot, setReleasedBot] = useState([]);
  const [dischargedBot, setDischargedBot] = useState([]);

  useEffect(() => {
    // Call fetchBots function here
    fetchBots();
  }, []);

  const fetchBots = async () => {
    const response = await fetch('http://localhost:3000/bots');
    const data = await response.json();
    setBots(data);
  };

  const enlistBot = (bot) => {
    setEnlistedBots((prevBots) => [...prevBots, bot]);
  };

 
  const releaseBot = (bot) => {
    setReleasedBot((prevBots) => prevBots.filter((b) => b.id !== bot.id));
  };
  
  const dischargeBot = async (bot) => {
    try {
      await fetch(`http://localhost:3000`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BotArmy bots={bots} enlistBot={enlistBot} releaseBot={releaseBot} dischargeBot={dischargeBot} />
  );
}

export default App;
