export default class Episode {
    constructor(serverName, serverData) {
      this.serverName = serverName;
      this.serverData = serverData.map(data => ({
        name: data.name,
        slug: data.slug,
        filename: data.filename,
        linkEmbed: data.link_embed,
        linkM3u8: data.link_m3u8
      }));
    }
  }
  