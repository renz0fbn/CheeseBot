const fs = require('fs')
const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v10')
require('dotenv').config()
const rest = new REST({ version: '10' }).setToken(process.env.TOKEN)

createSlash()

async function createSlash () {
  try {
    const commands = []
    fs.readdirSync('./commands').forEach(async (category) => {
      const comandFiles = fs.readdirSync(`./commands/${category}`).filter((archivo) => archivo.endsWith('.js'))
      for (const file of comandFiles) {
        const command = require(`./commands/${category}/${file}`)
        commands.push(command.data.toJSON())
      }
    })
    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID),
      { body: commands }
    )
    console.log(`Slash commands for bot: ${process.env.CLIENT_ID} have been registered`)
  } catch (e) {
    console.error(e)
  }
}
