const searchInput = document.getElementById("searchInput");
const motorList = document.getElementById("motorList");

/**
 * Motorları ekrana basan fonksiyon
 */
function renderMotors(list) {
  motorList.innerHTML = "";

  if (list.length === 0) {
    motorList.innerHTML = `<p style="color: white; text-align: center; grid-column: 1/-1;">Aradığınız kriterlere uygun motor bulunamadı.</p>`;
    return;
  }

  list.forEach(motor => {
    const div = document.createElement("div");
    div.className = "motor";

    div.innerHTML = `
      <h2>${motor.brand} ${motor.model}</h2>
      <div class="spec">
        <b>Motor Tipi:</b> ${motor.engineType || "Belirtilmemiş"}<br>
        <b>Hacim:</b> ${motor.displacement || "-"}<br>
        <b>Güç:</b> ${motor.power || "-"}<br>
        <b>Tork:</b> ${motor.torque || "-"}<br>
        <b>Şanzıman:</b> ${motor.transmission || "-"}<br>
        <b>Fren (Ön/Arka):</b> ${motor.frontBrake || "-"} / ${motor.rearBrake || "-"}<br>
        <b>ABS:</b> ${motor.abs || "Yok"}<br>
        <b>Yakıt Tankı:</b> ${motor.fuelTank || "-"}<br><br>
        <i>${motor.description || ""}</i>
      </div>
    `;

    motorList.appendChild(div);
  });
}

// Sayfa ilk açıldığında tüm motorları getir (data.js'deki 'motors' değişkenini kullanır)
renderMotors(motors);

/**
 * Gelişmiş Arama Fonksiyonu
 * "Aprilia Mana" veya "125 Arora" gibi çoklu kelimeleri destekler.
 */
searchInput.addEventListener("keyup", function () {
  // Aranan metni temizle ve Türkçe küçük harfe çevir
  const value = searchInput.value.toLocaleLowerCase('tr-TR').trim();
  
  if (!value) {
    renderMotors(motors);
    return;
  }

  // Aramayı boşluklardan bölerek kelime dizisi yapıyoruz (Örn: ["aprilia", "mana"])
  const searchTerms = value.split(/\s+/);

  const filtered = motors.filter(motor => {
    // Motorun tüm bilgilerini tek bir metin kutusuna topluyoruz
    const motorData = `
      ${motor.brand} 
      ${motor.model} 
      ${motor.displacement} 
      ${motor.engineType} 
      ${motor.description}
    `.toLocaleLowerCase('tr-TR');

    // Yazılan HER kelimenin motor bilgilerinde geçip geçmediğini kontrol ediyoruz
    return searchTerms.every(term => motorData.includes(term));
  });

  renderMotors(filtered);
});
