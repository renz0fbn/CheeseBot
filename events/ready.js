// Function: This event is triggered when the bot is ready to start working.
module.exports = {
  name: 'ready',
  execute (client) {
    console.log('Bot is ready! at ' + new Date())
  }
}
