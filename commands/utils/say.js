const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
    permissions: ['SEND_MESSAGES'],
    userIds: [],
    data: new SlashCommandBuilder().setName('say').setDescription('Di lo que quieras')
        .addStringOption(option => option.setName('text').setDescription('Lo que quieras decir').setRequired(true)).addBooleanOption(option => option.setName('efimero').setDescription('Mostrar quien lo envia o no')),
    async run(client, interaction){
        const text = interaction.options.getString('text');
        const efimero = interaction.options.getBoolean('efimero');
        if(efimero){
            interaction.channel.send({"content": text});
            return interaction.reply({ "content": "Mensaje enviado", ephemeral: true });
        
        }
        else{    
            interaction.reply({"content": text});
        }
    }
}