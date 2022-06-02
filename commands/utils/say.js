const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const config = require('../../config.json');

module.exports = {
    data: new SlashCommandBuilder().setName('say').setDescription('Di lo que quieras')
        .addStringOption(option => option.setName('text').setDescription('Lo que quieras decir').setRequired(true)),
    async run(client, interaction){
        const text = interaction.options.getString('text');
        if (text){
            interaction.reply({"content": text});
        }
        else{
            const embed = new MessageEmbed().setColor(config.defaultErrorColor).setDescription("Usa `/say [texto]`");
            return interaction.reply({embeds: [embed]});
        }
    }
}