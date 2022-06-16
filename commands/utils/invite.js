const { SlashCommandBuilder } = require('@discordjs/builders');
const config = require('../../config.json');

module.exports = {
    permissions: ['SEND_MESSAGES'],
    userIds: [],
    data: new SlashCommandBuilder().setName('invite').setDescription('Unete a nuestra comunidad!!!!'),
    async run(client, interaction){
            interaction.reply({"content":"Bienvenido/a a la comunidad oficial de Perú  <:peru:817134653860610048>\nhttps://discord.gg/DYyFa69eCb"});
 
    }
}