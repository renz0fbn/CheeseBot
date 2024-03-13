const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder().setName('say').setDescription('Di lo que quieras')
    .addStringOption(option => option.setName('text').setDescription('Lo que quieras decir').setRequired(true)),
  async run (client, interaction) {
    const text = interaction.options.getString('text')
    if (text) {
      interaction.reply({ content: text })
      console.log(interaction)
    } else {
      const embed = new MessageEmbed().setColor(process.env.DEFAULT_ERROR_COLOR ?? '#9b9b9b').setDescription(client.language.__('say.noText'))
      return interaction.reply({ embeds: [embed] })
    }
  }
}
