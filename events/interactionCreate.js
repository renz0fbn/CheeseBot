module.exports = {
    name: 'interactionCreate',
    async execute(client, interaction){
        if(!interaction.isCommand()) return;
        const command = client.commands.get(interaction.commandName);

        if(!command) return;

        if(!interaction.memberPermissions.has(command.permissions)){
            return interaction.reply({content: 'No tienes permiso para ejecutar esto maldito :monkey: '});
        }

        try{
            await command.run(client, interaction);
        }
        catch(e){
            console.error(e);
            return interaction.reply({content: 'Algo salio mal contacte con @Dayron#1900'});
        }
    }
}