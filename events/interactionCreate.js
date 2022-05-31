module.exports = {
    name: 'interactionCreate',
    async execute(client, interaction){
        if(!interaction.isCommand()) return;
        const command = client.commands.get(interaction.commandName);

        if(!command) return;

        try{
            await command.run(client, interaction);
        }
        catch(e){
            console.error(e);
            return interaction.reply({content: 'Somenthing went wrong, please contact the bot owner.'});
        }
    }
}