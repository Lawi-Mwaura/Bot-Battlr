import React from 'react';

const YourBotArmy = ({ bots, releaseBot, dischargeBot }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="YourBotArmy">
        {bots.map(bot => (
          <div key={bot.id}>
            <h3>{bot.name}</h3>
            <img src={bot.avatar_url} alt={bot.name} />
            <button onClick={() => releaseBot(bot)}>Release</button>
            <button onClick={() => dischargeBot(bot)}>Discharge</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
