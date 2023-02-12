const { EmbedBuilder } = require('discord.js');

function getEmbedSuccess(message) {
  return new EmbedBuilder()
    .setColor('#42f563')
    .setTitle('Success!')
    .setDescription(`✅ ${message}`);
}

function getEmbedError(message) {
  return new EmbedBuilder()
    .setColor('#f54242')
    .setTitle('Failed!')
    .setDescription(`🚫 ${message}`);
}

module.exports = {
  getEmbedSuccess,
  getEmbedError,
};
