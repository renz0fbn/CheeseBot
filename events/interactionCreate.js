module.exports = {
    name: 'interactionCreate',
    async execute(client, interaction){
        if(!interaction.isCommand()) return;
        const command = client.commands.get(interaction.commandName);

        if(!command) return;

        let perms;
        try{
            perms = interaction.memberPermissions.has(command.permissions);
        }
        catch(e){
            perms = false;
        }

        if(perms || command.userIds.includes(interaction.user.id)){
            try{
            await command.run(client, interaction);
        }
        catch(e){
            console.error(e);
            return interaction.reply({content: 'Algo salio mal contacte con @Dayron#1900'});
        }
        }
        else{
            return interaction.reply({content: 'No tienes permiso para ejecutar esto maldito <a:Mono:982435400939348099> '});
        }
        
        
    }
}