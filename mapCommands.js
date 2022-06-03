const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
const { clientId, token } = require('./config.json');

const rest = new REST({version: '10'}).setToken(token);

createSlash();

async function createSlash(){
    try{
        const commands = [];
        fs.readdirSync('./commands').forEach(async (category) => {
            const comandFiles = fs.readdirSync(`./commands/${category}`).filter((archivo) => archivo.endsWith('.js'));
            for (const file of comandFiles){
                const command = require(`./commands/${category}/${file}`);
                commands.push(command.data.toJSON());
                console.log(`./commands/${category}/${file} added successfully`);
            }
        })
        await rest.put(
            Routes.applicationCommands(clientId),
            {body: commands}
        )
        console.log("Commands updated");
    }
    catch(e){
        console.error(e);
    }
}
