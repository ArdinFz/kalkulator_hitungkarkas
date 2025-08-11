const beratDombaInput = document.getElementById("input-kg");
const sampilInput = document.getElementById("input-sampil");
const tulangInput = document.getElementById("input-tulang");
const explanation = document.getElementById("penjelasan");

//menghitung karkas
function hitungKarkas() {
  //ganti koma jadi titik
  const beratDomba = parseFloat(beratDombaInput.value.replace(",", "."));
  const sampil = parseFloat(sampilInput.value.replace(",", "."));
  const tulang = parseFloat(tulangInput.value.replace(",", "."));

  if (isNaN(beratDomba) || isNaN(sampil) || isNaN(tulang)) {
    // ====== ALERT ANIMASI SHAKE ======
    const msg = document.createElement("div");
    msg.textContent = "Isi semua kolom terlebih dahulu!";
    msg.className = "custom-alert";
    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 1500);
    // ====== END ALERT ======
    return;
  }

  if (beratDomba <= 0) {
    alert("Berat domba harus lebih dari 0!");
    return;
  }

  const karkas = ((sampil + tulang) / beratDomba) * 100;

  //ganti titik jadi koma untuk output, biar familiar di penulisan orang Indonesia
  const hasilFormatted = karkas.toFixed(2).replace(".", ",");

  explanation.value = `Karkas = (${sampil} + ${tulang}) / ${beratDomba} × 100% = ${hasilFormatted}%`;
}

//hapus semua input
function hapus() {
  beratDombaInput.value = "";
  sampilInput.value = "";
  tulangInput.value = "";
  explanation.value = "";
}
