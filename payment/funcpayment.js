const random = require('random');
const randomString = require('randomstring')

function getPaymentData(){
    const kode = random.int((min = 100),(max = 999));
    const nama = randomString.generate(7);
    const alamat = "Semarang";
    const notelepon = "081226855647";
    const total = random.int((min = 100),(max = 999));
    return {
        kode,nama,alamat,notelepon,total
    };
}

module.exports = getPaymentData;