const http = require('http');
const rupiah = require('rupiah-format');
const fs = require('fs');
const host = 'localhost';
const port = 3002;

const server = http.createServer(function (request, response) {
    const nama = "Sabrina Natasya Bilbina";
    let uang = 500000;
    let jajan = 150000;
    let sisa = uang - jajan;

    uang = rupiah.convert(uang)
    jajan = rupiah.convert(jajan)
    sisa = rupiah.convert(sisa)

    fs.appendFile('sisauang.txt', sisa, () => {
        console.log('Data tersimpan ke file sisauang.txt');
    });

    const hasil = `
    <head>
    <title>Aplikasi Kas Kecil</title>
    </head>
    <body>
    <h1 style= "background: pink;color: white;padding: 20px; text-align: center">Aplikasi Kas Kecil</h1>
    <p> 
    Halo nama saya ${nama}, saya jajan sebanyak ${jajan}, uang saya tadinya ${uang} sekarang menjadi ${sisa}.
    </p>
    </body>
    `
    
    response.statusCode = 200;
    response.end(hasil);
});

server.listen(port, host, function () {
    console.log(`server running on ${host}:${port}🐧`);
});
