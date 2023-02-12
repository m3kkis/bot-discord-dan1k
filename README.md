# Dashboard Minilab
Bot created to manage my discord server.

### Environment settings
Can be found in the file `.env_sample`
```
DISCORD_TOKEN=  <bot_token>
CLIENT_ID=      <client_token>
GUILD_ID=       <discord_server_id>
CHANNEL_ID=     <discord_bot_channel_id>
SECRET=         <your_password>
```
### Commands
`/ip` - Sends public IP. (Requires password)


### Notes:
1. For variable `SECRET=` this is your password that you want to use. I personally ran my password through bcrypt first before storing it into `.env`.
2. To update slash commands use `node deploy-commands.js`
3. To delete a specific command, you will need its id. Head to Server Settings -> Integrations -> Bots and Apps and choose your bot. Then, right click a command and click Copy ID. Then update `node deploy-commands.js` and run it.