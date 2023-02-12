const {
  SlashCommandBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ActionRowBuilder,
} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ip')
    .setDescription('Sends you server ip')
    .setDMPermission(false),
  async execute(interaction) {
    const modal = new ModalBuilder()
      .setCustomId('modal_ip')
      .setTitle('Server IP Password');

    const passwordInput = new TextInputBuilder()
      .setCustomId('modal_ip_password')
      .setLabel('Enter password')
      .setRequired(true)
      .setStyle(TextInputStyle.Short);

    const firstRow = new ActionRowBuilder().addComponents(passwordInput);

    modal.addComponents(firstRow);

    await interaction.showModal(modal);
  },
};
