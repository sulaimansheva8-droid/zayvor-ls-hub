module.exports = (req, res) => {
  const ua = req.headers['user-agent'] || '';
  
  if (ua.includes("Roblox") || ua.includes("RobloxGameCloud") || ua.includes("WinInet")) {
    res.setHeader('Content-Type', 'text/plain');
    // Vercel menyuruh Roblox mengambil script dari link Pastebin Anda
    res.status(200).send(`loadstring(game:HttpGet("https://pastebin.com/raw/svvJgea6"))()`);
  } else {
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
};
