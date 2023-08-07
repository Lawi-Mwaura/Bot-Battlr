import React, { useState, useEffect } from 'react';
import BotCollection from './Components/BotCollection';
import YourBotArmy from './Components/YourBotArmy';

const App = () => {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then(response => response.json())
      .then(bots => setBots(bots));
  }, []);

  const enlistBot = (bot) => {
    if (!enlistedBots.includes(bot)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  }

  const releaseBot = (bot) => {
    setEnlistedBots(enlistedBots.filter(b => b !== bot));
  }

  const dischargeBot = (bot) => {
    fetch(`http://localhost:3000/bots/${bot.id}`, { method: 'DELETE' })
      .then(() => {
        setBots(bots.filter(b => b !== bot));
        setEnlistedBots(enlistedBots.filter(b => b !== bot));
      });
  }

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
