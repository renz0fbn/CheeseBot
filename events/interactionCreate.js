// Function: This event is triggered when a user uses a slash command.
module.exports = {
  name: 'interactionCreate',
  async execute (client, interaction) {
    if (!interaction.isCommand()) return
    const command = client.commands.get(interaction.commandName)

    if (!command) return

    try {
      await command.run(client, interaction)
    } catch (e) {
      console.error(e)
      return interaction.reply({ content: 'Something went wrong, please contact the bot owner.', ephemeral: true })
    }
  }
}
