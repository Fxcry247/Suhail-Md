const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348100843739";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_26_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTksXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzYsXG4gICAgICAgIDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI4LFxuICAgICAgICA5MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTcxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTY2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDcyLFxuICAgICAgICA2OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDk3LFxuICAgICAgICA4NixcbiAgICAgICAgMjUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDY4LFxuICAgICAgICAxODcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAwLFxuICAgICAgICA5NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDk3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODIsXG4gICAgICAgIDExMixcbiAgICAgICAgMzEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDcxLFxuICAgICAgICA1OSxcbiAgICAgICAgODAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDMzLFxuICAgICAgICAzMixcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDU0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQzLFxuICAgICAgICA4LFxuICAgICAgICAzMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYzLFxuICAgICAgICA0NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1MixcbiAgICAgICAgODUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMCxcbiAgICAgICAgOTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNixcbiAgICAgICAgMTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTYxLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJWclR1Q2tqbzJnYkNkMlZ2NWVYb0I5c3hNbkxWT0V3RGtYTGV1UzJMeEdnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxMDA4NDM3MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ1MjU2QUJERkU5QUU2QzBBMkFCNDU3REI3QzBGRkI5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTk4NTk4M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJVTFB6SjctaVFaQzFaQmlZYkR2SmJBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI3OWNhZTFjLWFmNTMtNDFjMS05ZmI0LTk3YTU2ODU1ZmYzMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODcsXG4gICAgICAxMjEsXG4gICAgICAyMDIsXG4gICAgICAyMDgsXG4gICAgICAxMzksXG4gICAgICA3MSxcbiAgICAgIDIyLFxuICAgICAgMTI2LFxuICAgICAgMzIsXG4gICAgICAxMDQsXG4gICAgICAxMjksXG4gICAgICAxMzUsXG4gICAgICAyMTAsXG4gICAgICAyMTYsXG4gICAgICAxLFxuICAgICAgMzEsXG4gICAgICAyMjYsXG4gICAgICAyMDcsXG4gICAgICAyMzYsXG4gICAgICAyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDEsXG4gICAgICAyMjksXG4gICAgICA2MCxcbiAgICAgIDIxNyxcbiAgICAgIDE4LFxuICAgICAgMTU3LFxuICAgICAgMTI2LFxuICAgICAgMTg4LFxuICAgICAgMjQ0LFxuICAgICAgOTksXG4gICAgICA1LFxuICAgICAgMTcwLFxuICAgICAgMjMyLFxuICAgICAgMjMyLFxuICAgICAgMjE0LFxuICAgICAgOTQsXG4gICAgICAyNTQsXG4gICAgICA2OCxcbiAgICAgIDIzOCxcbiAgICAgIDIxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaRzFFU1pOQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwMDg0MzczOToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1OTc3Nzc0MDc1NTEwNzoxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkZYQ1JZXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlgycUlrSEVMZlhqYlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJOM0ZKa1FGREdOZjJmME4rRmx5ZnEzT1o1ZE5ld1c0QURPYUV5bm03bkRrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImF4VDQvdk1ycG9PWnZvYjZNcVhqYkRBM2V6V3g5TmVIVXEyS0wyZ3kvVm1DZnI4N2NBR1dxaFRFN1dvOTNTT1M0SlZ3SnZyUGwvUTFKbDYzYithMERnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIi9Ga0FJTGhoYlJMY0JUM1NvV2p2cU0yMm9naDQ4YzI3b0o2c3lJNU1mckp4NGNkcXIvWGg4QmFUNnhNTHllcDFZbzhTYWdjUEUyNW5BWDM0R0RoMkNnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDA4NDM3Mzk6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE5ODU5NzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPMEpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU8wSi5qc29uIjogIntcImtleURhdGFcIjpcIjUrUXdxclovbFhBZm1TbXhLVzJMT2M2aUhYSFEyd1FQMHJSd0ViWXlHUTg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg5ODU5MzA0NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxOTg1OTgzNDEzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
