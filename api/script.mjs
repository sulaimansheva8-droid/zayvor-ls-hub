export default function handler(req, res) {
  const ua = req.headers['user-agent'] || '';

  // Cek apakah yang mengakses adalah Roblox
  if (ua.includes("Roblox") || ua.includes("RobloxGameCloud") || ua.includes("WinInet")) {
    res.setHeader('Content-Type', 'text/plain');
    
    // Link Pastebin Anda
    const pastebinUrl = "https://pastebin.com/raw/Hng969WC";
    
    // Perintah untuk menyuruh Roblox mengambil script dari Pastebin
    const luaCode = 'loadstring(game:HttpGet("' + pastebinUrl + '"))()';
    
    res.status(200).send(luaCode);
  } else {
    // Tampilan 404 untuk browser biasa (Chrome/Safari)
    res.setHeader('Content-Type', 'text/html');
    res.status(404).send(`
      <html>
        <body style="background-color: #111; color: white; text-align: center; padding-top: 20%; font-family: sans-serif;">
          <h1>404 Not Found</h1>
          <p>Halaman yang Anda cari tidak ditemukan atau telah dihapus.</p>
        </body>
      </html>
    `);
  }
}
