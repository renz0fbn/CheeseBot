const {createWriteStream} = require('fs');
const {pipeline}= require('node:stream');
const {promisify} = require('node:util');

const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const { MessageAttachment } = require('discord.js');





module.exports = {
    permissions: ['ADMINISTRATOR'],
    data: new SlashCommandBuilder().setName('create_embed').setDescription('Envia un embed mediante un archivo json a un canal especifico')
        .addAttachmentOption(option => option.setName('file').setDescription('Archivo json con los datos del embed').setRequired(true))
        .addAttachmentOption(option => option.setName('img').setDescription('Agregar una img al principio del embed (opcional)'))
        .addChannelOption(option => option.setName('channel').setDescription('Canal al que se enviara el embed (vacio para enviarlo en este)')),
    async run(client, interaction){


        const file = interaction.options.getAttachment('file')?.url;;
        const channel = interaction.options.getChannel('channel');
        const get_img = interaction.options.getAttachment('img')?.url;
        const get_embed = await fetch(file);
        let foto = null;

        if (!get_embed.ok)
              return interaction.reply({ content: `There was an error with fetching the file: ${embed.statusText}`, ephemeral: true });
              
        const prueba = promisify(pipeline);
        await prueba(get_embed.body, createWriteStream('./tmp/embed.json'));
        const embed = require('../../tmp/embed.json');
        if(get_img){
            const img = await fetch(get_img);
            if (!img.ok) throw new Error(`unexpected response ${img.statusText}`);
            const streamPipeline = promisify(pipeline);
            await streamPipeline(img.body, createWriteStream('./tmp/cover.png'));
            foto = new MessageAttachment('./tmp/cover.png');
        }
  
        if (channel){
            channel.send({embeds: embed.embeds, files: foto ? [foto] : []});
            return interaction.reply({ content: 'Embed enviado!', ephemeral: true });
        }
        else{
            interaction.channel.send({embeds: embed.embeds, files: foto ? [foto] : []});
            return interaction.reply({ content: 'Embed enviado!', ephemeral: true });
        }
    }
}