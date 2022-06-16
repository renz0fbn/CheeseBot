const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');

module.exports = {
    permissions: ['SEND_MESSAGES'],
    userIds: [],
    data: new SlashCommandBuilder().setName('stk').setDescription('Envia un stiker')
    .addStringOption(option =>
      option.setName('stikers')
        .setDescription('Escoje un stiker')
        .setRequired(true)
        .addChoices(
          { name: 'gaaa', value: './stikers/gaaa.jpg' },
          { name: 'link', value: './stikers/link.jpg' },
          { name: 'cat ?', value: './stikers/pregunta.png' },
          { name: 'dog ?', value: './stikers/pregunta1.jpg' },
          {name : ' :v ' , value : './stikers/papu.png'},
          {name : ' ;v ' , value : './stikers/wink.jpg'},
          {name : 'mute' , value : './stikers/mute.png'},
          {name : 'CALLA' , value : './stikers/CALLA.mp4'},
          )).addBooleanOption(option => option.setName('efimero').setDescription('Mostrar quien lo envia o no')),
    async run(client, interaction){
        const stikerPath = interaction.options.getString('stikers');
        const stiker = new MessageAttachment(stikerPath);
        const efimero = interaction.options.getBoolean('efimero');
        if(efimero){
          interaction.channel.send({files: [stiker]});
          return interaction.reply({ "content": "Stiker enviado", ephemeral: true });
        }
        
        return interaction.reply({files: [stiker]});
    }
}