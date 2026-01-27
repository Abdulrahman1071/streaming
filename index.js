const { Client } = require('discord.js-selfbot-v13');
const express = require('express');

const app = express();
const client = new Client({
  checkUpdate: false
});

/* ===== Express Server (Render يحتاج PORT من env) ===== */
app.get('/', (req, res) => {
  res.send('Selfbot is running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Express server is live on port ${PORT}`);
});

/* ===== Discord Selfbot ===== */
client.on('ready', async () => {
  console.log(`${client.user.username} is Ready For Working 24/7!`);

  client.user.setPresence({
    activities: [
      {
        name: 'Ins : xlxwi18',
        type: 'STREAMING',
        url: 'https://twitch.tv/dl1'
      }
    ],
    status: 'online'
  });
});

/* ===== Anti Crash ===== */
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

/* ===== Login (اسم المتغير لازم TOKEN) ===== */
client.login(process.env.TOKEN);
