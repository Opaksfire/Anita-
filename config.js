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
global.owner = process.env.OWNER_NUMBER || "";
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
  "{"noiseKey":{"private":{"type":"Buffer","data":"mHvQSu16AFDn1sdY2GpGffEkLoKpshz1RExalaUzpl8="},"public":{"type":"Buffer","data":"dOz5bRoBUKzgt/p78gYfHmIqvUq96nKVVKc2x0endx4="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"EFvv00XPCar5SJGOf1ks6caJ4LrRzkx26Ssg0MDxbV8="},"public":{"type":"Buffer","data":"HOMYg/rv9M6lbRkFocFBThbcK8DMWkMttgXmzpgSolQ="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"2Lg5karTISTRGnSjs1fYdasDKq1W/AHOyxgW62YnHks="},"public":{"type":"Buffer","data":"uIaUigXmTKi7ll+KFHxjD5Lw6s0O1LFXDv3kVvFUam4="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"iLq9pyAXIcwS8uPBIrilJ4b5kNKMzjM3Y9KtTfJB234="},"public":{"type":"Buffer","data":"fz3CHsdq/eX/YGDGxD0p7pSX+PHfNwTUt7mDgvP28X8="}},"signature":{"type":"Buffer","data":"Y8Ah8DrICJ+c5nu17mNeDuqs09HtW2qnIWBODn2w5AoYMWiKnCBRDw4touajzyXiiLrccevBNFzsz6be1UQwDQ=="},"keyId":1},"registrationId":142,"advSecretKey":"l2oGHFYil9EMQzy79stF4S/vC+7/b1d25FWZkTKsr3w=","processedHistoryMessages":[{"key":{"remoteJid":"2347040956547@s.whatsapp.net","fromMe":true,"id":"B90CAF1386FBE6D2A857BE38681916A5"},"messageTimestamp":1724764230},{"key":{"remoteJid":"2347040956547@s.whatsapp.net","fromMe":true,"id":"097C561A8E44B55C6FF268D25CBE4070"},"messageTimestamp":1724764233}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"6dyaUioAT0yxb4C5wIGtnw","phoneId":"8fcda238-9167-4b48-8c0a-408661cb0339","identityId":{"type":"Buffer","data":"BqZkH9vYS7mJhSXnzSlncHZyz1w="},"registered":true,"backupToken":{"type":"Buffer","data":"Frv8bX86zoNibxHQziU0LDi0q64="},"registration":{},"pairingCode":"JYWNBJ5Z","me":{"id":"2347040956547:9@s.whatsapp.net","lid":"95378573684790:9@lid","name":"Henry✓"},"account":{"details":"CKny0swEEL6gt7YGGAMgACgA","accountSignatureKey":"kdXS4VRVu6WgMcO9fc24y3r1GXhCniv8Mp+4ewMKZBI=","accountSignature":"Z59TmF0CuVj/R3ZCIu460YWsh3HTZtLCGs0sBgQ005KoXRHEM0Az3zX9gEZWe0yEpVww5dcdKLKI4asuCMDKBA==","deviceSignature":"n/SOZy5OsYLgdLKzScEitC7A1L5zL11K/2VAjRfCSinoupH40WSaLnN/L9i1yOZcZEGo3IU8wfLgMozSH4qbCw=="},"signalIdentities":[{"identifier":{"name":"2347040956547:9@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BZHV0uFUVbuloDHDvX3NuMt69Rl4Qp4r/DKfuHsDCmQS"}}],"platform":"android","lastAccountSyncTimestamp":1724764225,"myAppStateKeyId":"AAAAAFNP"}"
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
