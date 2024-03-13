const fs = require('fs')
const categories = fs.readdirSync('./commands')

// Load all the commands in the commands folder
module.exports = (client) => {
  categories.forEach(async category => {
    fs.readdir(`./commands/${category}`, (err) => {
      if (err) console.log(err)
      const commands = fs.readdirSync(`./commands/${category}`).filter(file => file.endsWith('.js'))
      for (const file of commands) {
        const command = require(`../commands/${category}/${file}`)
        client.commands.set(command.data.name, command)
      }
    })
  })
}
