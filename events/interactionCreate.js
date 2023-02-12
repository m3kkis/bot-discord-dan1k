const bcrypt = require('bcrypt');
const axios = require('axios');
const { Events } = require('discord.js');
const url = 'https://checkip.amazonaws.com/';
const CustomEmbed = require('../embeds/custom_embeds.js');

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    if (interaction.channelId !== process.env.CHANNEL_ID)
      interaction.reply({
        embeds: [
          CustomEmbed.getEmbedError('Commands only work in bot chat channel.'),
        ],
      });

    if (!interaction.isChatInputCommand() && !interaction.isModalSubmit())
      return;

    if (interaction.customId === 'modal_ip') {
      const modalIPPwd =
        interaction.fields.getTextInputValue('modal_ip_password');

      bcrypt.compare(modalIPPwd, process.env.SECRET).then(async result => {
        if (!result) {
          interaction.reply({
            embeds: [CustomEmbed.getEmbedError('Incorrect password.')],
          });
        } else {
          const response = await axios(url);
          interaction.user.send({
            content: `Server IP: \`${response.data.trim()}\``,
          });
          interaction.reply({
            embeds: [CustomEmbed.getEmbedSuccess('IP sent to you by DM.')],
          });
        }
      });
      return;
    }

    const command = interaction.client.commands.get(interaction.commandName);
    if (!command) {
      console.error(
        `[CLIENT] No command matching ${interaction.commandName} was found.`
      );
      return;
    }

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(
        `[CLIENT] Error executing ${interaction.commandName} : `,
        error
      );
    }
  },
};
