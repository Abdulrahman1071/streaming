const { Client } = require('discord.js-selfbot-v13');
const express = require('express'); // <-- احذف هاذا السطر لو ما تحتاج اكسبرس
const app = express();


const client = new Client({
  checkUpdate: false 
});

//  سيرفر اكسبرس لو ما تحتاجه احذف من سطر 11 الى 17
app.get('/', (req, res) => {
  res.send('Selfbot is running!');
});

app.listen(3000, () => {
  console.log('Express server is live on port 3000');
});


client.on('ready', async () => {
  console.log(`${client.user.username} is Ready For Working 24/7!`);

  client.user.setPresence({
    activities: [{
      name: '  ', // <-- الكلام الي بيطلع جمب اسمك
      type: 'STREAMING',
      url: 'https://twitch.tv/dl1', // <-- رابط تويتش عشان يصير بنفسجي ما يفرق وهمي او حقيقي
      assets: {
        largeImage: 'nagi_shinshiro', // <-- اسم الصورة 
        largeText: '' // <-- كلام جمب الصورة
      }
    }]
  });
});

// دخول باستخدام التوكن من المتغير البيئي
client.login(process.env.token);
