import React from 'react';

// The BotCollection component displays a collection of bots
function BotCollection({ bots, enlistBot }) {
  return (
    <div>
      <h2>Bot Collection</h2>
      {/* Map over the bots array and display each bot */}
      {bots.map((bot) => (
        <div key={bot.id}>
          <h3>{bot.name}</h3>
          {/* Display the bot's image */}
          <img src={bot.avatar} alt={bot.name} />
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          {/* Button to enlist the bot */}
          <button onClick={() => enlistBot(bot)}>Enlist</button>
        </div>
      ))}
    </div>
  );
}

export default BotCollection;
