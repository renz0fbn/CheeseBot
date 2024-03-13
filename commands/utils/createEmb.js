const { SlashCommandBuilder } = require('@discordjs/builders')
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))

module.exports = {
  data: new SlashCommandBuilder().setName('create_embed').setDescription('Envia un embed mediante un archivo json a un canal especifico')
    .addAttachmentOption(option => option.setName('file').setDescription('Archivo json con los datos del embed').setRequired(true))
    .addChannelOption(option => option.setName('channel').setDescription('Canal al que se enviara el embed (vacio para enviarlo en este)')),
  async run (client, interaction) {
    const file = interaction.options.getAttachment('file')?.url
    const channel = interaction.options.getChannel('channel')
    const embed = await fetch(file)
    if (!embed.ok) { return interaction.reply({ content: `There was an error with fetching the file: ${embed.statusText}`, ephemeral: true }) }

    const text = await embed.text()
    if (channel) {
      channel.send(JSON.parse(text))
      return interaction.reply({ content: 'Embed enviado!', ephemeral: true })
    } else {
      interaction.channel.send(JSON.parse(text))
      return interaction.reply({ content: 'Embed enviado!', ephemeral: true })
    }
  }
}
