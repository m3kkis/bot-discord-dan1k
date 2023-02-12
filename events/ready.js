const { Events, ActivityType } = require('discord.js');

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    client.user.setActivity('cleaning', { type: ActivityType.Competing });
    console.log(`[BOT] Ready! Logged in as ${client.user.tag}`);
  },
};
