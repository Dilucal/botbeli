const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
let hitbot = JSON.parse(fs.readFileSync('./database/dashboard/userhit.json'));
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))

exports.menuall = (sender, prefix, pushname, ucapanWaktu, tanggal, jam, isOwner) => {}
  exports.othersmenu = (prefix, l) => {
return ` *OTHERS MENU*
 ❏ miaw
 ❏ ${prefix}getpp
 ❏ ${prefix}listsewa
 ❏ ${prefix}cekprem
 ❏ ${prefix}listprem
 ❏ ${prefix}buyprem
 ❏ ${prefix}daftarprem
 `}
exports.mainmenu = (prefix, l) => { 
return`
 *MAIN MENU*
 ❏ ${prefix}id
 ❏ ${prefix}hit
 ❏ ${prefix}limit
 ❏ ${prefix}report
 ❏ ${prefix}rules
 ❏ ${prefix}stats
 ❏ ${prefix}listgc
 ❏ ${prefix}listpc
 ❏ ${prefix}owner
 ❏ ${prefix}script
 ❏ ${prefix}server
 ❏ ${prefix}buylimit
 ❏ ${prefix}cekuser
 ❏ ${prefix}runtime
 ❏ ${prefix}dashboard
`}
exports.premiummenu = (prefix, l) => {
  return`
 *PREMIUM MENU*
 ❏ ${prefix}q
 ❏ ${prefix}join
 ❏ ${prefix}pentol
 ❏ ${prefix}brainly
 ❏ ${prefix}quoted
 ❏ ${prefix}getquoted
 ❏ ${prefix}react
 ❏ ${prefix}swm
 ❏ ${prefix}towame
 ❏ ${prefix}menfes
 ❏ ${prefix}menfess
 ❏ ${prefix}tiktoknowm
 *NSFW / 18+*
 ❏ ${prefix}hentai
 ❏ ${prefix}loli2
 ❏ ${prefix}anal
 ❏ ${prefix}yaoi 🌈
 ❏ ${prefix}rika
 ❏ ${prefix}bocil
 ❏ ${prefix}ghea
 ❏ ${prefix}hijab
 ❏ ${prefix}asupan
 ❏ ${prefix}santuy
`}
exports.storemenu = (prefix, l) => {
  return`
 *STORE MENU*
 ❏ ${prefix}list
 ❏ ${prefix}addlist
 ❏ ${prefix}dellist
 ❏ ${prefix}update
 ❏ ${prefix}tambah
 ❏ ${prefix}kurang
 ❏ ${prefix}kali
 ❏ ${prefix}bagi
`}
exports.topupmenu = (prefix, l) => {
  return`
*TOPUP OTOMATIS*
 ❏ ${prefix}gopay
 ❏ ${prefix}topupff
`}
exports.prosesdone = (prefix, l) => {
 return `
 *PROSES/DONE*
 ❏ proses < reply chat >
 ❏ done < reply chat >
 ❏ ${prefix}setproses
 ❏ ${prefix}changeproses
 ❏ ${prefix}delsetproses
 ❏ ${prefix}setdone
 ❏ ${prefix}changedone
 ❏ ${prefix}delsetdone
`}
exports.responmessage = (prefix, l) => {
 return `
 *RESPON/MESSAGE*
 ❏ ${prefix}delrespon
 ❏ ${prefix}addrespon
 ❏ ${prefix}setrespon
 ❏ ${prefix}listrespon
`}
exports.cekusername = (prefix, l) => {
 return `
 *CEK USERNAME*
 ❏ ${prefix}nickff
 ❏ ${prefix}nickml
 ❏ ${prefix}nicksupersus
`}
exports.anonymousmenu = (prefix, l) => {
return`
 *ANONYMOUS CHAT*
 ❏ ${prefix}start
 ❏ ${prefix}stop
 ❏ ${prefix}next
 ❏ ${prefix}sendprofil
 ❏ ${prefix}anonymous
`}
exports.grupmenu = (prefix, l) => {
return`
 *GROUP MENU*
 ❏ ${prefix}afk (alasan)
 ❏ ${prefix}add
 ❏ ${prefix}kick
 ❏ ${prefix}simi on / off
 ❏ ${prefix}linkgc
 ❏ ${prefix}infogc
 ❏ ${prefix}infogrup
 ❏ ${prefix}promote
 ❏ ${prefix}demote
 ❏ ${prefix}hidetag
 ❏ ${prefix}tagall
 ❏ ${prefix}open
 ❏ ${prefix}close
 ❏ ${prefix}ceksewa
 ❏ ${prefix}setppgc
 ❏ ${prefix}setppgc 'panjang'
 ❏ ${prefix}setnamegc
 ❏ ${prefix}setdesc
 ❏ ${prefix}revoke
 ❏ ${prefix}setclose
 ❏ ${prefix}setopen
 ❏ ${prefix}delclose
 ❏ ${prefix}delopen
 ❏ ${prefix}getopen
 ❏ ${prefix}getclose
 *SET WELCOME/LEFT*
 ❏ ${prefix}getleft
 ❏ ${prefix}setleft
 ❏ ${prefix}delleft
 ❏ ${prefix}changeleft
 ❏ ${prefix}setwelcome
 ❏ ${prefix}delwelcome
 ❏ ${prefix}getwelcome
 ❏ ${prefix}changewelcome
 *GROUP SETTING*
 ❏ ${prefix}left on
 ❏ ${prefix}left off
 ❏ ${prefix}antilink on
 ❏ ${prefix}antilink off
 ❏ ${prefix}antiwame on
 ❏ ${prefix}antiwame off
 ❏ ${prefix}welcome on
 ❏ ${prefix}welcome off
`}
exports.ownermenu = (prefix, l) => {
return`
 *OWNER MENU*
 > evalcode
 x evalcode-2
 $ executor
 ❏ ${prefix}bc
 ❏ ${prefix}bcgc
 ❏ ${prefix}bcgroup
 ❏ ${prefix}ban
 ❏ ${prefix}unban
 ❏ ${prefix}join
 ❏ ${prefix}left
 ❏ ${prefix}self
 ❏ ${prefix}public
 ❏ ${prefix}sendsesi
 ❏ ${prefix}creategc
 ❏ ${prefix}setppbot
 ❏ ${prefix}setthumb
 ❏ ${prefix}broadcast
 ❏ ${prefix}listwaktu
 ❏ ${prefix}block 628xxx
 ❏ ${prefix}unblock 628xxx
 ❏ ${prefix}setppbot 'panjang'
 ❏ ${prefix}setsewa del <waktu>
 ❏ ${prefix}setsewa add <waktu>
 ❏ ${prefix}delprem @tag
 ❏ ${prefix}addprem @tag <waktu>
`}
exports.databasemenu = (prefix, l) => {
return`
 *RESTART DATABASE*
 ❏ ${prefix}resetlist
 ❏ ${prefix}resetall
 ❏ ${prefix}resethit
 ❏ ${prefix}resetkey
 ❏ ${prefix}resetuser
 ❏ ${prefix}resetbalance
`}
exports.convertmenu = (prefix, l) => {
return`
 *CONVERT/TOOLS*
 ❏ ${prefix}say
 ❏ ${prefix}tts
 ❏ ${prefix}ttp
 ❏ ${prefix}ttp2
 ❏ ${prefix}attp
 ❏ ${prefix}font
 ❏ ${prefix}font2
 ❏ ${prefix}isgd
 ❏ ${prefix}tourl
 ❏ ${prefix}cuttly
 ❏ ${prefix}tinyurl
 ❏ ${prefix}ssweb
 ❏ ${prefix}shorturl
`}
exports.generatemenu = (prefix, l) => {
return`
 *GENERATE TEXT*
 ❏ ${prefix}hilih
 ❏ ${prefix}halah
 ❏ ${prefix}huluh
 ❏ ${prefix}heleh
 ❏ ${prefix}holoh
`}
exports.encodemenu = (prefix, l) => {
return`
 *ENCODE/DECODE*
 ❏ ${prefix}base32
 ❏ ${prefix}base64
 ❏ ${prefix}debase32
 ❏ ${prefix}debase64
`}
exports.primbonmenu = (prefix, l) => {
return`
 *PRIMBON MENU*
 ❏ ${prefix}artinama
 ❏ ${prefix}nomorhoki
 ❏ ${prefix}ramaljodoh
 ❏ ${prefix}suamiistri
 ❏ ${prefix}ramalcinta
 ❏ ${prefix}artimimpi
 ❏ ${prefix}sifatusaha
 ❏ ${prefix}cocoknama
 ❏ ${prefix}tafsirmimpi
 ❏ ${prefix}ramaljodohbali
 ❏ ${prefix}cocokpasangan
`}
exports.animemenu = (prefix, l) => {
return`
 *RANDOM ANIME*
 ❏ ${prefix}ass
 ❏ ${prefix}ana
 ❏ ${prefix}akira
 ❏ ${prefix}asuna
 ❏ ${prefix}ahegao
 ❏ ${prefix}akiyama
 ❏ ${prefix}aesthetic
 ❏ ${prefix}deidara
 ❏ ${prefix}ayuzawa
 ❏ ${prefix}elaina
 ❏ ${prefix}emilia
 ❏ ${prefix}hinata
 ❏ ${prefix}isuzu
`}
exports.randommenu = (prefix, l) => {
return`
 *RANDOM MENU*
 ❏ ${prefix}fitnah
 ❏ ${prefix}loli
 ❏ ${prefix}dare
 ❏ ${prefix}bucin
 ❏ ${prefix}truth
 ❏ ${prefix}meme
 ❏ ${prefix}couple
 ❏ ${prefix}jokes
 ❏ ${prefix}quotes
 ❏ ${prefix}cecan
 ❏ ${prefix}cogan
 ❏ ${prefix}anime
 ❏ ${prefix}randomtikok
`}
exports.cosplaymenu = (prefix, l) => {
return`
 *COSPLAY RANDOM*
 ❏ ${prefix}cosplay
 ❏ ${prefix}cosplayloli
 ❏ ${prefix}cosplaysagiri
`}
exports.downloadmenu = (prefix, l) => {
return`
 *DOWNLOAD MENU*
 ❏ ${prefix}play
 ❏ ${prefix}musik
 ❏ ${prefix}tiktok
 ❏ ${prefix}tiktoknowm
 ❏ ${prefix}ytmp3
 ❏ ${prefix}ytmp4
 ❏ ${prefix}gitclone
 ❏ ${prefix}mediafire
 ❏ ${prefix}sosmed
 ❏ ${prefix}facebook
`}
exports.stickermenu = (prefix, l) => {
return`
 *CONVERT STICKER*
 ❏ ${prefix}sticker <reply image>
 ❏ ${prefix}toimg <reply sticker>
 ❏ ${prefix}toimage <reply sticker>
 ❏ ${prefix}tovid <reply sticker gif>
 ❏ ${prefix}tovideo <reply sticker gif>
 `}
 exports.islamicmenu = (prefix, l) => {
 return`
 *ISLAMIC MENU*
 ❏ ${prefix}ayatkursi
 ❏ ${prefix}doaharian
 ❏ ${prefix}asmaulhusna
 ❏ ${prefix}jadwalsholat
 ❏ ${prefix}bacaansholat
`}
exports.gamemenu = (prefix, l) => {
return`
 *GAMES MENU*
 ❏ ${prefix}suit
 ❏ ${prefix}tekateki
 ❏ ${prefix}tebaklirik
 ❏ ${prefix}tebakkata
 ❏ ${prefix}susunkata
 ❏ ${prefix}tebakgame
 ❏ ${prefix}caklontong
 ❏ ${prefix}siapakahaku
 ❏ ${prefix}tebakkalimat
 ❏ ${prefix}tebakgambar
 ❏ ${prefix}tebaktebakan
 ❏ ${prefix}fitnah
`}
exports.makermenu = (prefix, l) => {
return`
 *MAKER MENU*
 ❏ ${prefix}nulis
 ❏ ${prefix}logo1
 ❏ ${prefix}logo2
 ❏ ${prefix}logo3
 ❏ ${prefix}emojimix
 ❏ ${prefix}emojimix2
`}
exports.imageeditor = (prefix, l) => {
return`
 *IMAGE EDITOR*
 ❏ ${prefix}hitler
 ❏ ${prefix}putin
 ❏ ${prefix}resize
 ❏ ${prefix}police
 ❏ ${prefix}petimati
 ❏ ${prefix}smeme
 ❏ ${prefix}discordblue
 ❏ ${prefix}discordblack
`}
exports.searchingmenu = (prefix, l) => {
return`
 *SEARCHING MENU*
 ❏ ${prefix}lirik
 ❏ ${prefix}grupwa
 ❏ ${prefix}corona
 ❏ ${prefix}covid
 ❏ ${prefix}cerpen
 ❏ ${prefix}jadwaltv
 ❏ ${prefix}salurantv
 ❏ ${prefix}stalkgithub
 ❏ ${prefix}stalkig
 ❏ ${prefix}pinterest
 ❏ ${prefix}styletext
 ❏ ${prefix}infogempa
 ❏ ${prefix}wikimedia
 ❏ ${prefix}gimage
 ❏ ${prefix}google
 ❏ ${prefix}ringtone
 ❏ ${prefix}gsmarena
 ❏ ${prefix}quotesanime
 `
}
exports.textprem  = (sender, prefix) => {
return `Jika kamu ingin menjadi Member Premium, kamu cukup membayar 
Rp5.000 untuk 1 Minggu
Rp10.000 untuk 1 Bulan 
dan jika ingin menjadi Member Premium Permanen kamu hanya membayar Rp15.000. Jika berminat silahkan chat Owner Bot, ketik ${prefix}owner

*Payment :* 
Dana/Gopay/Ovo/Pulsa`
}

exports.textdonasi = (sender, prefix) => {
return `*DONASI BOT*

*E-walet Monay :*
➭ Dana : 0856-5337-357
➭ Ovo : 0856-5337-357
➭ Gopay : 0956-5337-357
➭ Pulsa : 08575-1337-466
    
*Qris All Payment :*
Minta Ke Owner`
}