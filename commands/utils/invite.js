const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const config = require('../../config.json');

module.exports = {
    permissions: ['SEND_MESSAGES'],
    data: new SlashCommandBuilder().setName('invite').setDescription('Unete a nuestra comunidad!!!!'),
    async run(client, interaction){
            interaction.reply({"content":"Bienvenid@ a la comunidad oficial de Perú<:peru:817134653860610048>\nhttps://discord.gg/DYyFa69eCb"});
 
    }
}