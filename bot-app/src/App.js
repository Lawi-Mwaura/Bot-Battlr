import React, { useState, useEffect } from 'react';
import BotCollection from './Components/BotCollection';
import YourBotArmy from './Components/YourBotArmy';
import  './App.css';

const App = () => {
  // State variables using the useState hook
  const [bots, setBots] = useState([]); // Holds the list of all bots
  const [enlistedBots, setEnlistedBots] = useState([]); // Holds the list of enlisted bots

  // useEffect hook is used to fetch the bots data when the component mounts
  useEffect(() => {
    fetch('http://localhost:3000/bots') // Fetch the bots data from the server
      .then(response => response.json()) // Parse the response as JSON
      .then(bots => setBots(bots)); // Update the bots state with the fetched data
  }, []);

  // Function to enlist a bot into the "YourBotArmy" section
  const enlistBot = (bot) => {
    if (!enlistedBots.includes(bot)) { // Check if the bot is not already enlisted
      setEnlistedBots([...enlistedBots, bot]); // Add the bot to the enlistedBots array
    }
  }

  // Function to release a bot from the "YourBotArmy" section back to the "BotCollection"
  const releaseBot = (bot) => {
    setEnlistedBots(enlistedBots.filter(b => b !== bot)); // Remove the bot from the enlistedBots array
  }

  // Function to discharge a bot completely from the "BotCollection"
  const dischargeBot = (bot) => {
    fetch(`http://localhost:3000/bots/${bot.id}`, { method: 'DELETE' }) // Send a DELETE request to the server
      .then(() => {
        // After successful deletion, update both bots and enlistedBots arrays
        setBots(bots.filter(b => b !== bot)); // Remove the bot from the bots array
        setEnlistedBots(enlistedBots.filter(b => b !== bot)); // Remove the bot from the enlistedBots array
      });
  }

  // JSX representing the application
  return (
    <div>
      <YourBotArmy
        bots={enlistedBots}
        releaseBot={releaseBot}
        dischargeBot={dischargeBot}
      />
      <BotCollection
        bots={bots}
        enlistBot={enlistBot}
      />
    </div>
  );
}

export default App;
