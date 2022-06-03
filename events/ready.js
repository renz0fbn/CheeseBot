module.exports = {
    name: 'ready',
    execute(client) {
        console.log('Bot is ready and runnig!');
        client.user.setActivity(`/help`, { type: 'PLAYING' });
    }
}