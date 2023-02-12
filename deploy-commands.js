//node deploy-commands.js
require('dotenv').config();
const fs = require('node:fs');
const { REST, Routes } = require('discord.js');

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

const commands = [];
const commandFiles = fs
  .readdirSync('./commands')
  .filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
}

(async () => {
  try {
    console.log(
      `Started refreshing ${commands.length} application (/) commands.`
    );

    const data = await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );

    console.log(
      `Successfully reloaded ${data.length} application (/) commands.`
    );
  } catch (error) {
    console.error(error);
  }
})();

/*
// for guild-based commands
rest
  .delete(
    Routes.applicationGuildCommand(
      process.env.CLIENT_ID,
      process.env.GUILD_ID,
      'commandId'
    )
  )
  .then(() => console.log('Successfully deleted guild command'))
  .catch(console.error);

// for global commands
rest
  .delete(Routes.applicationCommand(process.env.CLIENT_ID, 'commandId'))
  .then(() => console.log('Successfully deleted application command'))
  .catch(console.error);
*/
