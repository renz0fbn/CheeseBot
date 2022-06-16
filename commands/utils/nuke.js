const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    permissions: ['EXCLUSIVE'],
    userIds: ['531287641283493901', '532026509561692161', '294589761019052032'],
    data: new SlashCommandBuilder().setName('nuke').setDescription('Usame en caso de emergencia')
    .addBooleanOption(option => option.setName('confirmar').setDescription('Confirma la acción').setRequired(true)),
    async run(client, interaction){
        const confirmar = interaction.options.getBoolean('confirmar');
        if(confirmar){
            interaction.reply({ "content": "<a:trapeando:817138530568241172>"});
            return client.destroy();
        
        }
        else{    
            interaction.reply({"content": "Falsa alarma"});
        }
    }
}