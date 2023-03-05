export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/icons/895991621487824926/bc7234d56b900f12c609080b7b565978.png",
      name: "Mozzarella",
      description: "Mozzarella, Create Forever çatısı altında açılan bir sunucudur. Sosyalleşebileceğiniz ve sohbet edebileceğiniz, ilgi alanınıza göre roller alıp bunları paylaşarak üyelerimizden görüşler alabileceğiniz, yeni arkadaşlar edinip oyun oynayabileceğiniz; En önemlisi yeteneklerinizi sergileyebileceğiniz bir sunucudur.",
      link: "https://discord.gg/mozzarella",
    },
    {
      id: 2,
      image: "https://cdn.discordapp.com/icons/793161701205737493/a_d45e5201d54477d9f441665c0ff19fef.gif",
      name: "xMGStarz",
      description: "Roblox Türkiye'nin en kaliteli ve özgün içeriklerini paylaşan YouTube kanalı. Discord sunucusunda kaliteli sohbet, mizah ve çekilişler bulunmakta. Girersen birdaha çıkamazısın. :)",
      link: "https://youtube.com/xMGStarz",
    }
  ];
  res.status(200).json(data);
};
