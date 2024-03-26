module.exports = {
  bot: {
    token: 'MTIwOTE1NzkxMjkzNzg4OTgxMg.Ge0xeB.1tVu3xMU7NAISTbDDjpq5wFiA1U7RzqQkrUwYQ',

    presence: {
      enabled: true,
      activity: 'Playing', 
      text: {
        online: 'SERVER STATUS {playeronline}/{playermax} PLAYERS', 
        offline: 'SERVER STATUS OFFLINE', 
      },
      status: {
        online: 'online', 
        offline: 'idle', 
      },
    },
  },
  mcserver: {
    ip: 'pvfebryanaxoiz11.octavstore.id', // IP of  MC server.
    port: 25565, // Port number of MC server. Default Port - Java: 25565, Bedrock: 19132.
    type: 'java', 
    name: 'BRYZEN SMP', 
    version: 'Gunakan Versi 1.8 - 1.20.72', 
    icon: 'https://imgur.com/DvhPxWh.png', 
    vote: 'https://discord.gg/AuATTQP5jF', 
  },

  settings: {
    logging: {
      inviteLink: true, 
      debug: false, 
      error: true, 
      serverInfo: true, 
    },
  },

  autoChangeStatus: {
    enabled: true,
    updateInterval: 60, 
    isOnlineCheck: true, 
  },

  playerCountCH: {
    enabled: true,
    guildID: '1219674767808790579', // COY TOLONG BACA Playcountstats kalau ga ada buat manual ya ke /src/ lalu buka data.json
    channelId: '1219674767808790581',  // bagian PlayerCountStats kasih channel id VOICE ya bukan text
    onlineText: ' {playeronline}/{playermax} Players playing',
    offlineText: ' Offline', 
  },

  autoReply: {
    enabled: true,
    version: {
      enabled: true,
      triggerWords: ['versi berapa?', 'versi'],
      replyText: "Gunakan versi: **`{version}`**",
    },
    ip: {
      enabled: true,
      triggerWords: ['ipnya apa', 'ip'],
      replyText: '**IP: `{ip}`\nPort: `{port}`**',
    },
    vote: {
      enabled: true,
      triggerWords: ['website link', 'website', 'url', 'site', 'link vote'],
      replyText: "Website link: **<{vote}>**",
    },
    status: {
      enabled: true,
      triggerWords: ['server on ga', 'is server offline', 'status of the server'],
      onlineReply: 'Servernya sedang on **`ONLINE`** with **`{playerOnline}/{playerMax}`** yang lagi main',
      offlineReply: 'servernya lagi **`OFFLINE`**.',
    },
    pesan: { 
    enabled: true,
    triggerWords: ['syng','sayang','bubub', 'sayangku'],
    replyText: "Iya sayang ada perlu apa?",
    replyImages: [
      "https://telegra.ph/file/fd1676a2f55df8958620a.jpg",
      "https://telegra.ph/file/0fc93c18abb0d9c08004f.jpg",
      "https://telegra.ph/file/031df868aa732ebb9b77a.jpg",
    ],
  },
},

  commands: {
    slashCommands: true,
    prefixCommands: {
      enabled: false,
      prefix: '!', 
    },
    language: 'id', 
    ip: {
      enabled: true, 
      alias: ['ip-address'], 
    },
    vote: {
      enabled: true, 
      alias: ['vote', 'link'], 
    },
    version: {
      enabled: true, 
      alias: [], 
    },
    players: {
      enabled: true, 
      alias: ['plist'], 
    },
    status: {
      enabled: true, 
      alias: ['info'], 
    },
    motd: {
      enabled: true, 
      alias: [], 
    },
    help: {
      enabled: true, 
      alias: ['commands'],
    },
  },
}
