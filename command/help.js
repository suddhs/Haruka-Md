const fs = require("fs");
const petik = '```'
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")


function toCommas(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
       x = x.replace(pattern, "$1,$2");
    return x;
}

exports.allMenu = (role, ucapanWaktu, pushname, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`┌┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈▷
│👋WELCOME  ${name}

│🔮 Uptime : ${uptime}
│🔮 𝗢𝘄𝗻𝗲𝗿 𝗡𝗮𝗺𝗲 : ${author}
│🔮 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botname}
│🔮 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 - Dinuwa   
│   Official²⁰²³
│
│🔮 𝙽𝚄𝙼𝙱𝙴𝚁 - 94740804536
│
└─┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈▷

┌┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈▷
🇱🇰 : Queen Hentai 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙱𝙾𝚃 ɴᴏᴡ ᴀᴠᴀɪʟᴀʙʟᴇ ᴏɴ COOLIFY ᴅᴇᴩʟᴏY ɴᴏᴡ.
└┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈▷
┌┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈▷
This wa bot created by 💝 Dinuwa Official²⁰²³ 💝
└┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈▷
◊╳╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╳◊
🔮ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ🔮
◊╳╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╳◊
╭╌═══════════════╌◈
│┃🩸.instagram 
│┃🩸.mediafire 
│┃🩸.gdrive
│┃🩸.tiktok  
│┃🩸.fb
│┃🩸.gimage
│┃🩸.ytmp3 
│┃🩸.ytmp4doc
│┃🩸.ytmp3doc
│┃🩸.pinterest
│┃🩸.hentaiapk
╰╌═══════════════╌◈
◊╳╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╳◊
🔮ꜱᴇᴀʀᴄʜ ᴄᴏᴍᴍᴀɴᴅꜱ🔮
◊╳╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╳◊
╭╌═══════════════╌◈
│┃💭.play 
│┃💭.play2 
│┃💭.play3
│┃💭.spotify
│┃💭.yts 
│┃💭.ytsearch
│┃💭.dinuapk
╰╌═══════════════╌◈
◊╳╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╳◊
🔮ᴄᴏɴᴠᴇʀᴛ ᴄᴏᴍᴍᴀɴᴅꜱ🔮
◊╳╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╳◊
╭╌═══════════════╌◈
│┃🇱🇰.sticker 
│┃🇱🇰.sticker2
│┃🇱🇰.s
│┃🇱🇰.ss
│┃🇱🇰.sfull
│┃🇱🇰.url
│┃🇱🇰.tourl
│┃🇱🇰.translate
│┃🇱🇰.toimg
│┃🇱🇰.tovid
╰╌══════════                                                           ◊╳╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╳◊                                                       🔮maker commands🔮
◊╳╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╳◊                        ╭╌═══════════════╌◈       
│┃✔.attp 
│┃✔.attp2
│┃✔.attp3
│┃✔.ttp
│┃✔.ttp2
│┃✔.ttp3                                                                                                           ╰╌══════════ 
◊╳╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╳◊
🔮owner commands🔮                                                                      ◊╳╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╳◊
╭╌═══════════════╌◈
│┃💰.kick 
│┃💰.add
│┃💰.promote 
│┃💰.demote
│┃💰.setwelcome
│┃💰.setbye
│┃💰.ban
│┃💰.unban
│┃💰.enable 
│┃💰.disable 
│┃💰.link
│┃💰.tagall
│┃💰.hentairestart
│┃💰.update                                                                                                                        ╰╌══════════ 
◊╳╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╳◊
🔮other commands🔮                                                                           ◊╳╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╳◊
╭╌═══════════════╌◈
│┃🔞.xnxxsearch 
│┃🔞.xnxx 
│┃🔞.xnxxdl 
│┃🔞.xvideosdl
│┃🔊.ping 
│┃🔊.runtime
│┃🔊.hentaiinfo
│┃🔊.script 
│┃🔊.sc
│┃🔊.qhw
│┃🔊.dinuserial
│┃🔊.unhentai                                                                                                                                                                    ╰╌══════════
`
}

exports.donate = (pushname, ownerNumber) => {
    return`Contact  Owner:
wa.me/${ownerNumber} (Owner)`
}

exports.sewanya = `Untuk List Sewa ubah sendiri di folder command, file help.js 👌 baris ke 521`
