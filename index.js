const { Client } = require('discord.js-selfbot-v13');
const express = require('express');

const app = express();
const client = new Client({ checkUpdate: false });

// ===== Express Server =====
app.get('/', (req, res) => {
  res.send('Bot is running 🚀');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🌐 Web server running on port ${PORT}`);
});

// ===== Discord Selfbot =====
client.on('ready', async () => {
  console.log(`${client.user.username} is Ready For Working 24/7!`);

  client.user.setActivity('x20?', {
    type: 'STREAMING',
    url: 'https://twitch.tv/x20'
  });
});

client.login(process.env.token);
