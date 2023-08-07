import React from 'react';

const BotCollection = ({ bots, enlistBot }) => {
  return (
    <div>
      <h2>Bot Collection</h2>
      <div className="BotCollection">
        {bots.map(bot => (
          <div key={bot.id} onClick={() => enlistBot(bot)}>
            <h3>{bot.name}</h3>
            <img src={bot.avatar_url} alt={bot.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
