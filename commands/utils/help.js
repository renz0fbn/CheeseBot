const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const config = require('../../config.json');

module.exports = {
    permissions: ['SEND_MESSAGES'],
    data: new SlashCommandBuilder().setName('help').setDescription('Mira lo que puedo hacer'),
    async run(client, interaction){

            return interaction.reply({
                "content": null,
                "embeds": [
                  {
                    "title": "<a:verificado1:758077925663703072>     Soporte : El bot oficial de Discord Perú",
                    "description": "Hola!! Soy el bot de soporte de la comunidad oficial de [Perú](https://discord.gg/DYyFa69eCb).\n\nLISTA DE COMANDOS\n\n``/help`` : Imprime este mensaje\n``/avatar``: Muestra el avatar de alguien en especifico\n``/create_embed``: Envia embeds a un canal en especifico desde un archivo .json\n``/invite``: Unete a nuestra comunidad !!!\n``/status``: Muestra el estado actual del bot\n\n**Bugs?**\nComunicate con el programador @Dayron#1900 , ten en cuenta que este bot se encuentra desarrollo (version actual: 0.9.1). Estamos trabajando arduamente para enriquecer mas este bot, tu ayuda es importante.\n\nNo encuentras lo que buscas? ingresa a [nuestro servidor](https://discord.gg/DYyFa69eCb).",
                    "color": 15794273,
                    "footer": {
                      "text": "Soporte v 0.9.1",
                      "icon_url": "https://images-ext-2.discordapp.net/external/hPW2DXFfIDiVKRWtaIw9IBlKgKnxFG__v7KqDKc7HUM/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/980932528061943838/35c2a8bf1f8660b371be1532a338d28b.png?width=683&height=683"
                    },
                    "thumbnail": {
                      "url": "https://images-ext-2.discordapp.net/external/hPW2DXFfIDiVKRWtaIw9IBlKgKnxFG__v7KqDKc7HUM/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/980932528061943838/35c2a8bf1f8660b371be1532a338d28b.png?width=683&height=683"
                    }
                  }
                ],
                "attachments": []
              });
    }
}