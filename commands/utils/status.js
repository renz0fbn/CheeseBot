const { SlashCommandBuilder } = require('@discordjs/builders')
const config = require('../../config.json')
const Discord = require("discord.js");
const moment = require("moment");
const osu = require("node-os-utils");
const os = require("os");
require("moment-duration-format");
const diagramMaker = require('../../functions/diagramMaker.js')

module.exports = {
    permissions: ['VIEW_AUDIT_LOG'],
    userIds: [],
    data: new SlashCommandBuilder()
        .setName('status')
        .setDescription('Consulta el estado del bot'),
    async run(client, interaction, language) {
        await interaction.reply({ content: 'Obteniendo estado...' })
        let cpuUsage
        const cpu = osu.cpu

        const promises = [
            cpu.usage().then(cpuPercentage => {
                cpuUsage = cpuPercentage
            })
        ]

        Promise.all(promises).then(async results => {

            var mem = osu.mem
            let freeRAM, usedRAM
    
            await mem.info().then(info => {
                freeRAM = info['freeMemMb']
                usedRAM = info['totalMemMb'] - freeRAM
            })
    
            const statusEmbed = new Discord.MessageEmbed()
                .setColor(config.defaultSuccessColor)
                .setTitle(`Estado de:  ${client.user.username}`)
                .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 4096 }))
                .addField('Rendimiento', "```" + `RAM: ${diagramMaker(usedRAM, freeRAM)} [${Math.round((100 * usedRAM / (usedRAM + freeRAM)))}%]\nCPU: ${diagramMaker(cpuUsage, 100 - cpuUsage)} [${Math.round(cpuUsage)}%]` + "```", false)
                .addField('Sistema', "```" + `Procesador\nIntel ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB` + "```", false)
                .addField('Sistema Operativo', "```" + `${os.type} ${os.release} ${os.arch}` + "```", false)
                .addField('Tiempo de actividad del host', "```" + `${moment.duration(os.uptime * 1000).format(`D [Días], H [Horas], m [Minutos], s [Segundos]`)}` + "```", false)
                .addField('Tiempo de actividad del bot', "```" + `${moment.duration(client.uptime).format(`D [Días], H [Horas], m [Minutos], s [Segundos]`)}` + "```", true)
                .addField('Último Inicio', "```" + `${moment(client.readyAt).format("DD [de] MMM YYYY HH:mm")}` + "```", true)
            interaction.editReply({ content: ' ', embeds: [statusEmbed] })
        })



    }
}