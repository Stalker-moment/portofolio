const express = require('express');
const path = require('path');

const app = express();
const port = 2030;

// Menggunakan middleware express.static untuk menyajikan file statis seperti CSS atau gambar
app.use(express.static(__dirname));

// Menyajikan file index.html saat permintaan root dilakukan
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
