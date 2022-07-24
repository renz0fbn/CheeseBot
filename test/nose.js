const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
    permissions: ['EXCLUSIVE'],
    userIds: ['531287641283493901'],
    data: new SlashCommandBuilder().setName('nose').setDescription('just another comand, dont mind me')
        .addStringOption(option => option.setName('text').setDescription('zaiker no me paga lo suficiente').setRequired(true))
        .addChannelOption(option => option.setName('channel').setDescription('xd')),
    async run(client, interaction){
      
        const text = interaction.options.getString('text');
        const channel = interaction.options.getChannel('channel');
        channel.send({"content": text});
        return interaction.reply({ "content": "Mensaje enviado", ephemeral: true });

      
    }
}
