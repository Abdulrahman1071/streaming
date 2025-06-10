const { Client } = require('discord.js-selfbot-v13');
const express = require('express');

const client = new Client({ checkUpdate: false });
const app = express();
const port = process.env.PORT || 3000;

// Express server للحفاظ على البوت شغال
app.get('/', (req, res) => {
  res.send('Bot is running!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Discord selfbot
client.on('ready', async () => {
  console.log(`${client.user.username} is Ready For Working 24/7!`);
  client.user.setActivity('Sleeping', {
    type: 'STREAMING',
    url: 'https://twitch.tv/dl1' 
  });
});

client.login(process.env.token);
