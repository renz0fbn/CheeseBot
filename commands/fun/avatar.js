const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const config = require('../../config.json');

module.exports = {
    data: new SlashCommandBuilder().setName('avatar').setDescription('Muestra el avatar de un usuario o el tuyo')
        .addUserOption(option => option.setName('user').setDescription('Usuario cuyo avatar quieres ver')),
    async run(client, interaction){
        const user = interaction.options.getUser('user');
        if (user){
            const embed = new MessageEmbed().setColor(config.defaultSuccessColor)
            .setDescription(client.language.__mf('avatar.objective', {username: `${user.username}#${user.discriminator}`})).setImage(user.displayAvatarURL({format: 'png', dynamic: true, size: 1024}));
            return interaction.reply({embeds: [embed]});
        }
        else{
            const embed = new MessageEmbed().setColor(config.defaultSuccessColor)
            .setDescription(client.language.__('avatar.self')).setImage(interaction.user.displayAvatarURL({format: 'png', dynamic: true, size: 1024}));
            return interaction.reply({embeds: [embed]});
        }
    }
}