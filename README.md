# Aplikasi Kas Kecil 

## Deskripsi 👩‍💻
Aplikasi Kas Kecil adalah server berbasis Node.js yang menangani HTTP request dengan metode GET dan POST. Server ini menampilkan informasi keuangan berupa uang awal, jumlah uang yang digunakan untuk jajan, serta sisa uang dalam format mata uang Rupiah. Data sisa uang juga disimpan ke dalam file `sisauang.txt`.

## 🔗 Fitur
- Menggunakan HTTP server dari `http` module.
- Menggunakan `rupiah-format` untuk mengonversi angka ke format mata uang Rupiah.
- Menyimpan data sisa uang ke dalam file `sisauang.txt` menggunakan `fs` module.
- Menampilkan hasil dalam format HTML dengan tampilan estetis.

## ❤️ Persyaratan
Pastikan Anda telah menginstal Node.js di sistem Anda sebelum menjalankan aplikasi ini.

### 👷 Dependensi
Aplikasi ini memerlukan pustaka berikut:
- `http` (bawaan Node.js, tidak perlu instalasi tambahan)
- `rupiah-format` (harus diinstal)
- `fs` (bawaan Node.js, tidak perlu instalasi tambahan)
- `nodemon` (opsional, untuk auto-restart server saat pengembangan)

Untuk menginstal `rupiah-format` dan `nodemon`, jalankan perintah berikut:
```sh
npm install rupiah-format
npm install -g nodemon
```

## 🏢 Cara Menjalankan
1. Pastikan Node.js sudah terinstal di komputer Anda.
2. Simpan kode ke dalam file, misalnya `server.js`.
3. Jalankan perintah berikut di terminal:
   ```sh
   nodemon server.js
   ```
4. Server akan berjalan di `http://localhost:3002/`.
5. Buka browser dan akses `http://localhost:3002/` untuk melihat hasilnya.

## 🐧 Struktur Kode
- **Hostname:** `localhost` → Domain awal dari URL server.
- **Port:** `3002` → Port yang digunakan oleh server.
- **Callback:** Fungsi yang menangani request dan response.
- **Request:** Data yang masuk dari luar.
- **Response:** Data yang keluar dari sistem dalam bentuk HTML.

## ✌️ Contoh Output
Ketika server diakses, output di browser akan menampilkan:

```
Halo nama saya Sabrina Natasya Bilbina, saya jajan sebanyak Rp150.000, uang saya tadinya Rp500.000 sekarang menjadi Rp350.000.
```

Selain itu, teks `350.000` akan disimpan di dalam file `sisauang.txt`.

## Logging
Setelah server dijalankan, terminal akan menampilkan pesan berikut:
```
Server running on localhost:3002 🐧
Data tersimpan ke file sisauang.txt
```

## Catatan
- Pastikan `rupiah-format` sudah terinstal sebelum menjalankan skrip.
- Gunakan `nodemon` agar server otomatis restart saat ada perubahan kode.
- File `sisauang.txt` akan diperbarui setiap kali server dijalankan.

## Lisensi
Proyek ini bebas digunakan untuk keperluan belajar dan pengembangan lebih lanjut.

