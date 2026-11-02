export default function handler(req, res) {
  const ua = req.headers['user-agent'] || '';

  if (ua.includes("Roblox") || ua.includes("RobloxGameCloud") || ua.includes("WinInet")) {
    res.setHeader('Content-Type', 'text/plain');
    
    // LINK GIST KAMU (Otomatis ambil versi terbaru)
    const scriptUrl = "https://gist.githubusercontent.com/sulaimansheva8-droid/bc146e3e60c3ef923eb99424242511b6/raw/ujangkarbu.lua";
    
    const luaCode = 'loadstring(game:HttpGet("' + scriptUrl + '"))()';
    
    res.status(200).send(luaCode);
  } else {
    // Tampilan JSON polos untuk browser biasa (seperti FlowAuth)
    res.setHeader('Content-Type', 'application/json');
    res.status(404).send('{"error":"not_found"}');
  }
}
