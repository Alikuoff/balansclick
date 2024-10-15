let balans = 2000000;
document.getElementById('balans').textContent = balans;

function withdraw() {
    let mablag = parseInt(document.getElementById('mablag').value);
    if (mablag <= balans) {
        balans -= mablag;
        document.getElementById('balans').textContent = balans;
        document.getElementById('natija').textContent = `${mablag} so'm muvaffaqiyatli yechildi. Qolgan balans: ${balans} so'm`;
    } else {
        document.getElementById('natija').textContent = "Kechirasiz, hisobingizda yetarli mablag' mavjud emas.";
    }
}
