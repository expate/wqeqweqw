const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "yardım",
  aliases: ["yardım"],
  description: "Botun yardım menüsünü atar.",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle(`Ewing Music Komutları`)
      .setColor("RANDOM")
      .setImage("https://cdn.discordapp.com/attachments/484384838468501515/806242947129147432/ewingyardmmenusubywisky.png");
    
    commands.forEach(cmd => {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name}  ${
          cmd.aliases ? `(${cmd.aliases})` : ""
        }**`,
        `${cmd.description}`,
        true
      );
    });

    helpEmbed.addField("Botun Sitesi",`http://ewingbot.cf`);

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
