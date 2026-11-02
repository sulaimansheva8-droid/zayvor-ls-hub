export default function handler(req, res) {
  const ua = req.headers['user-agent'] || '';

  if (ua.includes("Roblox") || ua.includes("RobloxGameCloud") || ua.includes("WinInet")) {
    res.setHeader('Content-Type', 'text/plain');
    
    const pastebinUrl = "https://pastebin.com/raw/uJnrp1D2";
    const luaCode = 'loadstring(game:HttpGet("' + pastebinUrl + '"))()';
    
    res.status(200).send(luaCode);
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.status(404).json({ error: "not_found" });
  }
}
