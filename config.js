//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "946358336";
global.owner = process.env.OWNER_NUMBER || "94726358336";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/a22200a780671e0e32383.jpg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkZjUUM4MFpmREp1UzlUNFNWdXNZMVFYeUs3S3R6TzhaT1BpQnhvOE9tbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMVdxb25pY3Fuamo0aEVsOVc5WUFTNklGdC82bkIrR0dBU0EvK083bFVHYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvSkR6MEwvS0Q0b3crYWhHS0VjOXZ4QmZvbVd0L1krRXd0bWk2bUtlREVNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLaHhZR2dyczZTRTRreGVrME94b3c5cFM3dUNBRDRiZlZSM3ZKbUhPWEZJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdETTBmV3drTFJqTnRPSHNTaS9JV2VYbGsyajlSOU1vVStUeVA3L0RKa289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikt0TjhQcElPOERDN3VvZzNid1R0LzBuQmVBdUsrQXJhSVZ4czlhUjMvQVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0hMSEttckhVbHZLSC9sMVIwSWM0NElTenBrVmt5eXFTL3paaEJhU0ZrRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRXRrd0hPenBSRG1mcXlDcFlINStIN3ZWMGNOS082SU9QVk9hdXE0UCtGWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpYdUR2Ryt4bU1RbWExMGIwRnJqM3NjZ1loLzdZQW1CaFV1amRBZUlHZmNXMk5IOVNJNE5VUnJLTEZoMDF4Z3MxbS82RkhNa3VLZVlwck9PQlNwK2pnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ2LCJhZHZTZWNyZXRLZXkiOiJzTUJRcjVudHFuK0tzOFRpMExpb0ZvWFM3S21XKzdubzBlTEpVUEFxZXM4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ4b083bEsyV1FXYVlDbFJ2VEtvUUlBIiwicGhvbmVJZCI6IjhkNDMzMWVlLTcwMzUtNDk0Ni1iMDg1LTVhNzRkNmU3ZmY0MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVbnZaTG50enZPbkorNGhYQmozWFNodTFYUVE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUFd5VjNLK05BZlFrVHg4RXFHdWFnTmRkVFpzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjgyU0dQUEw4IiwibWUiOnsiaWQiOiI5NDcyNjM1ODMzNjoxM0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLqp4HwnZemLvCdl6MuIPCdl5fwnZec8J2XofCdl5jwnZen8J2XmyDwnZeb8J2XnPCdl6DwnZeU8J2XpvCdl5TwnZefKPCdl7HwnZe88J2XvPCdl7og8J2XuvCdmILwnZiA8J2XtvCdl7ApIOqngiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSVAvazVnQkVMN1g3TFVHR0FnZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMDNRUDN0L25Yeld6UjJKb3RWalZoQkdDTTAwUVJMb1ViZHRYT2VUMGMxOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoicTVIdE5aMnhYYXdObHdXbjBpU0FuNTQyeEpoYThjejI2UGRkaE5UNHRmWnZVdXA1U3ZRekZJazNiWGorcTZRZnZoWmZzRmlPQ3RMSGxrMm5heERJQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6IkM2V21uclJ0OHA5SDN6aC9saHBTT2dIc2w0aEVibXJhWU5oVVlwbGxMY1lQZEIwbFpPQzJSRnhzNktWOXBaSk9Nc0ZTYzlNTm1kb3k5S2p2M1NNSWhnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MjYzNTgzMzY6MTNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZE4wRDk3ZjUxODFzMGRpYUxWWTFZUVJnak5ORUVTNkZHM2JWem5rOUhOZiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzU0MjQ3NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFRjUifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
