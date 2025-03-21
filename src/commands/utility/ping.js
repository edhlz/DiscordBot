const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Te responde com PONG'),
	async execute(interaction) {
		await interaction.reply('pong');
	},
};