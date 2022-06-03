const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const config = require('../../config.json');

module.exports = {
    permissions: ['VIEW_AUDIT_LOG'],
    data: new SlashCommandBuilder().setName('say').setDescription('Di lo que quieras')
        .addStringOption(option => option.setName('text').setDescription('No usar').setRequired(true)),
    async run(client, interaction){
        const text = interaction.options.getString('text');
            interaction.reply({"content": text});
 
    }
}