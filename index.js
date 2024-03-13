const { Client, Intents, Collection } = require('discord.js')
// Load environment variables
require('dotenv').config()

// import global variables and data
const { join } = require('path')
const { setInterval } = require('timers')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

client.commands = new Collection()
client.language = require('i18n')

// Set the language configuration
client.language.configure({
  locales: ['en', 'es'],
  directory: join(__dirname, 'locales'),
  defaultLocale: 'es',
  retryInDefaultLocale: true,
  objectNotation: true,
  register: global,

  logWarnFn: function (message) {
    console.warn(message)
  },

  logErrorFn: function (message) {
    console.error(message)
  },

  missingKeyFn: function (locale, value) {
    return value
  },

  mustacheConfig: {
    tags: ['{{', '}}'],
    disable: false
  }

})

// Every 60 seconds update the bot status
setInterval(updateStatus, 60000)

async function updateStatus () {
  const guildNum = client.guilds.cache.size
  const memberNum = client.users.cache.size

  client.user.setActivity(`Servers: ${guildNum} and ${memberNum} members.`, { type: 'LISTENING' })
}

// Set the default language to Spanish
client.language.setLocale('es')

// Load Events and Commands
require('./handlers/events.js')(client)
require('./handlers/commands.js')(client)

console.log('Logging in...')
client.login(process.env.TOKEN)
