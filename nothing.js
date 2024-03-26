const Discord = require('discord.js');
const client = new Discord.Client();
const { autoReply } = require('./config');

client.on('message', async message => {
  if (!message.author.bot) {
    if (autoReply.pesan.enabled && autoReply.pesan.triggerWords.some(word => message.content.toLowerCase().includes(word.toLowerCase()))) {
      await message.channel.send(autoReply.pesan.replyText);
      if (autoReply.pesan.replyImages && autoReply.pesan.replyImages.length > 0) {
        autoReply.pesan.replyImages.forEach(async imageUrl => {
          await message.channel.send(imageUrl);
        });
      }
    }
  }
});

client.login('MTIwOTE1NzkxMjkzNzg4OTgxMg.Ge0xeB.1tVu3xMU7NAISTbDDjpq5wFiA1U7RzqQkrUwYQ');
