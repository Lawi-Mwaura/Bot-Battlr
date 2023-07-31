import React from 'react';

function YourBotArmy({bots, releaseBot, dischargeBot})
{
return (
    <div>
        <h2>Your Bot Army</h2>
        {bots.map(bot => (
            <div key={bot.id}>
                <h3>{bot.name}</h3>
                <p>Health: {bot.health}</p>
                <p>Damage: {bot.damage}</p>
                <p>Armor: {bot.armor}</p>
                <button onClick={() => dischargeBot(bot)}>Discharge</button>
                <button onClick={() => releaseBot(bot)}>Release</button>
            </div>

        ))}
    </div>
);
        }
export default YourBotArmy;