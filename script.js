const searchInput = document.getElementById("searchInput");
const motorList = document.getElementById("motorList");

function renderMotors(list) {
  motorList.innerHTML = "";

  list.forEach(motor => {
    const div = document.createElement("div");
    div.className = "motor";

    div.innerHTML = `
      <h2>${motor.brand} ${motor.model}</h2>
      <div class="spec">
        <b>Motor Tipi:</b> ${motor.engineType}<br>
        <b>Hacim:</b> ${motor.displacement}<br>
        <b>Güç:</b> ${motor.power}<br>
        <b>Tork:</b> ${motor.torque}<br>
        <b>Soğutma:</b> ${motor.cooling}<br>
        <b>Şanzıman:</b> ${motor.transmission}<br>
        <b>Maks. Hız:</b> ${motor.maxSpeed || "Eklenecek"}<br><br>
        ${motor.description}
      </div>
    `;

    motorList.appendChild(div);
  });
}

// ilk yüklemede hepsini göster
renderMotors(motors);

// ARAMA ÇALIŞAN KISIM
searchInput.addEventListener("keyup", function () {
  const value = searchInput.value.toLowerCase();

  const filtered = motors.filter(motor =>
    motor.brand.toLowerCase().includes(value) ||
    motor.model.toLowerCase().includes(value) ||
    (motor.displacement && motor.displacement.toLowerCase().includes(value))
  );

  renderMotors(filtered);
});
