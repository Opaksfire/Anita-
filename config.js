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
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "+27 78 347 6122";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkJ4ZGZXMWFiRW1XQjhEcTdFYlladWlDYXBTbXI2SHJFM3FwWW5DNmczMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTFh5RnR2MXBSc1dnYWlja0dxU2lnWktHMXRhczd6Yisra1ZIT24raEZ5WT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4TGN5SmdFeUtMMklmQ2dlSGZLVFExQStTTUZNOFpVMU9aWGw3NWh5QmtVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwZ0o4Y3NscGx3UXg0bkNWRDdEQkIvd2xnTW45WWYwRENSdkdONlRud2o4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndEWE9NNDY1WUJXMUFzQzdNWEV5RkRjUUhzWGtzRk1JMHBpQThtQXZnVnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhrVnJiMEpFL0VNdTVwM3BwWVMrbW5td0kzMHlhS1RMNmdZZ1o3SE40UUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid09NWGRqVXdsRDJkZnFBQUNBRmJwZVViNjZlc2I4SkEzY3NHNGtCeGRFTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT2hMY3JyczVrc1owYktkWVEwazJHKy9ESFZDY1l6NitQVGRSMENNOHhCTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndJZ0hpL0U5cVFHVkM5RWlEV2sxcW5HWm0vWURiZzZwWXZ0UWxZQm1YbDVpRFRkVzVPOHBMa3lnSWpWdTR3QUNJeGRiNVlXNExWRU1hQzNNT0JnT0RRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUwLCJhZHZTZWNyZXRLZXkiOiJsWG12WnkzMHdoZks2aW9ZRnh2SEtCeGVUaFZrWFdqYkZ0OHlwaDlVODFnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJZdGFKOFh3eVREVzM3OGNKNFFCM0R3IiwicGhvbmVJZCI6IjUyNTgwOTllLTUyOGEtNGQxOS1iMmIzLWM1NWRhMmZiNWYyZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXblViZ1BWaVlJVHoyWXU5cHI0a1lEc3BCRlk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRDNWWkF4SEwxWHNJcjhSYkZmekVoUnMvYmRrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ijg4MUZXUVBWIiwibWUiOnsiaWQiOiIyNzc4MzQ3NjEyMjozMkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJSaWRkbGVyIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOL0J6bndRNWRuZXRRWVlEQ0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ2WnhqZkVOS1pYWHZaYnhmb1BTV3VFbG4wTmlZVWxMYURZV1cxeFNrQWtJPSIsImFjY291bnRTaWduYXR1cmUiOiJFNzUvbnhnOFRDemxYb25GNm55dk1PR2YwanFUNFFOV0RUQ1liQ3Y4MW53M3dGWnVlL3BUbm1Gd1BnN0pTSU4zOUI4aHp5UXRsWHk0WHpSblc0RXNCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSC9DS0VyQVpRTGhYUU5STVQzSUVmcXJJcnFmMzF1Z0MycWx6SHZnOVE4azJJVHVPeW1SRVI4ZWRLRytuQk5aVHBNdUlWUlloQlhsTlRtTEpVaFJLRFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzc4MzQ3NjEyMjozMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiMmNZM3hEU21WMTcyVzhYNkQwbHJoSlo5RFltRkpTMmcyRmx0Y1VwQUpDIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzMzEzMzk0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJhViJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "QUEEN_ANITA-V2",
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
