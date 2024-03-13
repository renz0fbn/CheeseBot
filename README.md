<div align='center'>
    <img src="https://img.shields.io/github/stars/renzofbn/cheesebot?color=3E3E3E&labelColor=302D41&style=for-the-badge">
    <img src="https://img.shields.io/github/last-commit/renzofbn/cheesebot?color=2F2F2F&labelColor=302D41&style=for-the-badge">
        <img src="https://img.shields.io/github/license/renzofbn/cheesebot?color=1F1F1F&labelColor=302D41&style=for-the-badge">
</div>
<br/>

# CheeseBot 🧀

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)


A discord bot that provides a variety of commands for fun and moderation. No intended to use as a professional bot, just for fun. 

Ideal for small servers and to know the basics of discord.js.

## Usage 🐢

To use the bot, you need to have a discord bot token. You can get one by creating a new application in the [Discord Developer Portal](https://discord.com/developers/applications) and then creating a bot in bot settings and copying the token.

Once you have the token, download the repository and install the dependencies with your package manager of choice.

> Must have Node.js installed in your system.

Example with npm:

```bash
# Run this command in the root of the project
npm install
```

Then, create a `.env` file in the root of the project and add the following lines:
```
TOKEN=your_discord_bot_token
PREFIX=your_custom_prefix
```

Replace `your_discord_bot_token` with your bot token and `your_custom_prefix` with the prefix you want to use for the bot commands.

Finally, run the bot with the following command:

```bash
# Run this command in the root of the project
node index.js
```

Every time you make a change in the code, you need to restart the bot to see the changes. And to update the bot's commands, you need to run the following command:

```bash
# Run this command in the root of the project
node mapCommands.js
```

## Development 🛠️
This bot is developed with the following technologies:

<div align='center'>
<img align="center" alt="Html5" height="40" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
<img align="center" alt="Html5" height="40" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
<img align="center" alt="Html5" height="40" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" />
<img align="center" alt="Html5" height="40" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/discordjs/discordjs-original.svg" />
</div>
<br/>

All the code is well documented and follows the [Standard](https://standardjs.com/) style guide. So you can easily understand and modify the code for your own purposes. Also, the code is divided into different files to make it more organized and easy to maintain. You can start by looking at the `index.js` file, which is the entry point of the bot.

## Contributing 🤝
If you want to contribute to the project, you can fork the repository and make a pull request with your changes. I will be happy to review them and merge them if they are good.

## License 📜
CheeseBot is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.