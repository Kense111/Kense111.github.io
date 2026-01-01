const list = document.getElementById("motorList");

motors.forEach(motor => {
  const div = document.createElement("div");
  div.className = "motor";

  div.innerHTML = `
    <h2>${motor.brand} ${motor.model}</h2>
    <div class="spec">
      <b>Motor:</b> ${motor.cc}<br>
      <b>Güç:</b> ${motor.power}<br>
      <b>Tork:</b> ${motor.torque}<br>
      <b>Ağırlık:</b> ${motor.weight}<br>
      <b>Şanzıman:</b> ${motor.gearbox}<br>
      <b>Soğutma:</b> ${motor.cooling}<br>
      <b>Yakıt:</b> ${motor.fuel}<br>
      <b>0–100:</b> ${motor.zeroToHundred}<br>
      <b>Top Speed:</b> ${motor.topSpeed || "Eklenecek"}<br>
      <b>Fren:</b> ${motor.brakes}<br>
      <b>Süspansiyon:</b> ${motor.suspension}<br>
      <b>Yıl:</b> ${motor.year}<br><br>
      ${motor.description}
    </div>
  `;

  list.appendChild(div);
});
