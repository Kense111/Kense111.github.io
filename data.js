const motors = [
  {
    brand: "Asya",
    model: "Armada 250",

    engineType: "Tek silindirli, dört zamanlı, benzinli motor",
    displacement: "249 cc",
    boreStroke: "Resmî veri bulunmamaktadır",
    compressionRatio: "Resmî veri bulunmamaktadır",

    power: "14 beygir gücü",
    powerRpm: "Resmî veri bulunmamaktadır",
    torque: "Resmî tork değeri paylaşılmamıştır",
    torqueRpm: "Resmî veri bulunmamaktadır",

    fuelSystem: "Karbüratör",
    ignition: "CDI ateşleme sistemi",
    starter: "Elektrik marş",

    transmission: "Otomatik şanzıman (CVT)",
    driveType: "Kayış tahrik",

    cooling: "Hava soğutmalı",
    lubrication: "Islak karter yağlama",

    frontSuspension: "Teleskopik ön amortisör",
    rearSuspension: "Çift arka amortisör",

    frontBrake: "Disk fren",
    rearBrake: "Disk fren",
    abs: "ABS sistemi bulunmamaktadır",

    tireFront: "Resmî veri bulunmamaktadır",
    tireRear: "Resmî veri bulunmamaktadır",

    length: "Resmî veri bulunmamaktadır",
    width: "Resmî veri bulunmamaktadır",
    height: "Resmî veri bulunmamaktadır",
    wheelbase: "Resmî veri bulunmamaktadır",
    seatHeight: "Resmî veri bulunmamaktadır",
    groundClearance: "Resmî veri bulunmamaktadır",

    weight: "Yaklaşık 120 kilogram (kuru ağırlık)",
    fuelTank: "Yaklaşık 12.5 litre",
    oilCapacity: "Resmî veri bulunmamaktadır",

    maxSpeed: "Yaklaşık 100–110 kilometre/saat (kullanıcı deneyimlerine göre)",
    zeroToHundred: "Resmî ölçüm verisi bulunmamaktadır",

    productionYear: "Türkiye satış yılları modele göre değişmektedir",

    description:
      "Asya Armada 250, şehir içi ve günlük kullanım odaklı tasarlanmış 250 cc sınıfında bir scooter modelidir. Otomatik CVT şanzımanı sayesinde vites gerektirmeden sürüş sunar. Hava soğutmalı yapısı, basit mekanik sistemi ve disk frenleri ile ekonomik ve pratik bir kullanım hedeflenmiştir. ABS ve modern elektronik sürüş destekleri bulunmamaktadır."
  },

  {
  brand: "Asya",
  model: "AS 100-7 Turkcub",

  engineType: "Tek silindirli, dört zamanlı, benzinli motor",
  displacement: "97 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "6.5 – 7 beygir gücü (tahmini)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI ateşleme sistemi",
  starter: "Elektrik marş + Ayak marşı",

  transmission: "Manuel şanzıman",
  driveType: "Zincir tahrik",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Kampana fren",
  rearBrake: "Kampana fren",
  abs: "ABS sistemi bulunmamaktadır",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 95–100 kilogram",
  fuelTank: "Yaklaşık 4 – 5 litre",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 80–90 kilometre/saat",
  zeroToHundred: "Resmî ölçüm verisi bulunmamaktadır",

  productionYear: "2000'li yıllar (Türkiye)",

  description:
    "Asya AS 100-7 Turkcub, Türkiye’de yaygın olarak kullanılan, cub sınıfında 100 cc hacimli ekonomik bir motosiklettir. Düşük yakıt tüketimi, basit mekanik yapısı ve kolay bakım avantajlarıyla özellikle şehir içi ve günlük ulaşım için tercih edilmiştir. Kampana fren sistemi ve manuel vites yapısına sahiptir."
},
  
 {
  brand: "Asya",
  model: "AS 100-8",

  engineType: "Tek silindirli, 4 zamanlı, hava soğutmalı motor",
  displacement: "97–99 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "Yaklaşık 6.8–7 hp",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Elektrik + marş pedalı",

  transmission: "4–5 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Resmî veri bulunmamaktadır",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "2.50-17",
  tireRear: "2.75-17",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 98 kg",
  fuelTank: "Yaklaşık 4.0 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 77 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Asya AS 100‑8, 97–99 cc aralığında hava soğutmalı, tek silindirli motora sahip klasik motosiklet modelidir. Genellikle manuel şanzıman ve zincir tahrik kullanır. Fren sistemi ön disk, arka kampanadır ve ABS bulunmamaktadır."
},
  
  {
  brand: "Asya",
  model: "AS 125",

  engineType: "Tek silindirli, 4 zamanlı, hava soğutmalı motor",
  displacement: "124 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "9–10 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Elektrik + kick starter",

  transmission: "5 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 105 kg",
  fuelTank: "Yaklaşık 10 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 90 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Asya AS 125, 124 cc sınıfında tek silindirli, 4 zamanlı bir motosiklettir. Manuel 5 ileri şanzıman ve zincir tahrik ile kısa ve şehir içi sürüşler için uygundur. Hava soğutmalı motoru ve klasik fren/süspansiyon sistemiyle ekonomik ve basit kullanım sunar."
},
  {
  brand: "Asya",
  model: "AS 125 T",

  engineType: "Tek silindirli, 4 zamanlı, hava soğutmalı motor",
  displacement: "124 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "9–10 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Elektrik + kick starter",

  transmission: "5 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 105 kg",
  fuelTank: "Yaklaşık 10 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 90 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Asya AS 125 T, 124 cc sınıfında, tek silindirli ve 4 zamanlı motor yapısına sahip bir motosiklettir. Manuel 5 ileri şanzıman ve zincir tahrik ile kısa ve şehir içi sürüşler için uygundur. Hava soğutmalı motoru, klasik fren/süspansiyon sistemi ile ekonomik ve basit kullanım sunar."
},
  
  {
  brand: "Asya",
  model: "AS 125 T-15",

  engineType: "Tek silindirli, 4 zamanlı, hava soğutmalı motor",
  displacement: "124 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "9–10 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Elektrik + kick starter",

  transmission: "5 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 105 kg",
  fuelTank: "Yaklaşık 10 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 90 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Asya AS 125 T-15, 124 cc tek silindirli motor yapısına sahip bir motosiklettir. 5 ileri manuel şanzıman ve zincir tahrik ile şehir içi kullanım için uygundur. Hava soğutmalı motoru ve klasik fren/süspansiyon sistemi ile ekonomik ve basit kullanım sunar."
},

  {
  brand: "Asya",
  model: "AS 125 T-2G",

  engineType: "Tek silindirli, 4 zamanlı, hava soğutmalı motor",
  displacement: "124 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "9–10 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Elektrik + kick starter",

  transmission: "5 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 105 kg",
  fuelTank: "Yaklaşık 10 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 90 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Asya AS 125 T-2G, 124 cc tek silindirli motor yapısına sahip, manuel 5 ileri şanzımanlı motosiklettir. Zincir tahrik ve hava soğutmalı motor sistemi ile şehir içi kullanım için uygundur. Fren ve süspansiyon sistemi klasik tiptir, ABS yoktur."
},

  {
  brand: "Asya",
  model: "AS 150-12",

  engineType: "Tek silindirli, 4 zamanlı, hava soğutmalı motor",
  displacement: "150 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "12–13 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Elektrik + kick starter",

  transmission: "5 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 115 kg",
  fuelTank: "Yaklaşık 12 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 95 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Asya AS 150-12, 150 cc tek silindirli ve 4 zamanlı motor yapısına sahip bir motosiklettir. 5 ileri manuel şanzıman ve zincir tahrik ile şehir içi kullanım için uygundur. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ekonomik kullanım sunar, ABS yoktur."
},

  {
  brand: "Asya",
  model: "AS 150 T",

  engineType: "Tek silindirli, 4 zamanlı, hava soğutmalı motor",
  displacement: "150 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "12–13 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Elektrik + kick starter",

  transmission: "5 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 115 kg",
  fuelTank: "Yaklaşık 12 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 95 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Asya AS 150 T, 150 cc tek silindirli motor yapısına sahip, 4 zamanlı ve hava soğutmalı bir motosiklettir. 5 ileri manuel şanzıman ve zincir tahrik ile şehir içi kullanım için uygundur. Klasik fren ve süspansiyon sistemi ile ekonomik kullanım sunar, ABS yoktur."
},

  {
  brand: "Asya",
  model: "AS 150 T1",

  engineType: "Tek silindirli, 4 zamanlı, hava soğutmalı motor",
  displacement: "150 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "12–13 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Elektrik + kick starter",

  transmission: "5 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 115 kg",
  fuelTank: "Yaklaşık 12 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 95 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Asya AS 150 T1, 150 cc tek silindirli ve 4 zamanlı motor yapısına sahip bir motosiklettir. Manuel 5 ileri şanzıman ve zincir tahrik ile şehir içi kullanım için uygundur. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ekonomik kullanım sunar, ABS bulunmamaktadır."
},

  {
  brand: "Asya",
  model: "AS 150 T 5A",

  engineType: "Tek silindirli, 4 zamanlı, hava soğutmalı motor",
  displacement: "150 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "12–13 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Elektrik + kick starter",

  transmission: "5 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 115 kg",
  fuelTank: "Yaklaşık 12 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 95 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Asya AS 150 T 5A, 150 cc tek silindirli ve 4 zamanlı motor yapısına sahip bir motosiklettir. Manuel 5 ileri şanzıman ve zincir tahrik ile şehir içi kullanım için uygundur. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ekonomik kullanım sunar, ABS yoktur."
},

  {
  brand: "Asya",
  model: "AS 150 T 6A",

  engineType: "Tek silindirli, 4 zamanlı, hava soğutmalı motor",
  displacement: "150 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "12–13 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Elektrik + kick starter",

  transmission: "5 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 115 kg",
  fuelTank: "Yaklaşık 12 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 95 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Asya AS 150 T 6A, 150 cc tek silindirli ve 4 zamanlı motor yapısına sahip bir motosiklettir. Manuel 5 ileri şanzıman ve zincir tahrik ile şehir içi kullanım için uygundur. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ekonomik kullanım sunar, ABS yoktur."
},

  {
  brand: "Asya",
  model: "AS 200 GY 2",

  engineType: "Tek silindirli, 4 zamanlı, hava soğutmalı motor",
  displacement: "200 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "16–17 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Elektrik + kick starter",

  transmission: "5 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 125 kg",
  fuelTank: "Yaklaşık 13 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 110 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Asya AS 200 GY 2, 200 cc tek silindirli ve 4 zamanlı motor yapısına sahip bir motosiklettir. 5 ileri manuel şanzıman ve zincir tahrik ile şehir içi ve kısa mesafe sürüşler için uygundur. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ekonomik kullanım sunar, ABS yoktur."
},

  {
  brand: "Asya",
  model: "Efsane Eco 100",

  engineType: "Tek silindirli, 4 zamanlı, hava soğutmalı motor",
  displacement: "100 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "7–8 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Kick starter",

  transmission: "4 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Kampana fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 95 kg",
  fuelTank: "Yaklaşık 9 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 80 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Asya Efsane Eco 100, 100 cc tek silindirli ve 4 zamanlı motor yapısına sahip, şehir içi kullanım için ekonomik bir motosiklettir. 4 ileri manuel şanzıman ve zincir tahrik ile basit ve ekonomik sürüş sağlar. Hava soğutmalı motor, klasik fren/süspansiyon sistemi ile güvenli kullanım sunar, ABS yoktur."
},

  {
  brand: "Asya",
  model: "Elegant 150",

  engineType: "Tek silindirli, 4 zamanlı, hava soğutmalı motor",
  displacement: "150 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "12–13 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Elektrik + kick starter",

  transmission: "5 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 115 kg",
  fuelTank: "Yaklaşık 12 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 95 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Asya Elegant 150, 150 cc tek silindirli ve 4 zamanlı motor yapısına sahip bir motosiklettir. 5 ileri manuel şanzıman ve zincir tahrik ile şehir içi kullanım için uygundur. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ekonomik kullanım sunar, ABS bulunmamaktadır."
},

  {
  brand: "Asya",
  model: "Ghost 350",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "350 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "25–27 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Enjeksiyon / Karbüratör ilanlara göre değişebilir",
  ignition: "CDI",
  starter: "Elektrik + kick starter",

  transmission: "5 veya 6 ileri manuel (ilanlara göre)",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Disk fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 160 kg",
  fuelTank: "Yaklaşık 15 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 130–140 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Asya Ghost 350, 350 cc tek silindirli ve 4 zamanlı motor yapısına sahip bir motosiklettir. 5 veya 6 ileri manuel şanzıman ve zincir tahrik ile orta segment sürüş sağlar. Hava soğutmalı motor ve disk frenler ile ekonomik ve güvenli kullanım sunar, ABS bulunmamaktadır."
},

  {
  brand: "Asya",
  model: "Hero 125",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "124 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "9–10 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Elektrik + kick starter",

  transmission: "5 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 105 kg",
  fuelTank: "Yaklaşık 10 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 90 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Asya Hero 125, 124 cc tek silindirli ve 4 zamanlı motor yapısına sahip, şehir içi kullanım için uygun bir motosiklettir. 5 ileri manuel şanzıman ve zincir tahrik ile ekonomik ve basit sürüş sunar. Hava soğutmalı motor, klasik fren/süspansiyon sistemi ve ABS yoktur."
},

  {
  brand: "Asya",
  model: "Nostalji 125",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "124 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "9–10 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Elektrik + kick starter",

  transmission: "5 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 105 kg",
  fuelTank: "Yaklaşık 10 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 90 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Asya Nostalji 125, 124 cc tek silindirli ve 4 zamanlı motor yapısına sahip klasik tasarımlı bir motosiklettir. 5 ileri manuel şanzıman ve zincir tahrik ile şehir içi sürüş için uygundur. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ekonomik kullanım sunar, ABS yoktur."
},

  {
  brand: "Asya",
  model: "RX 250 Cross",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "250 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "18–20 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör / Enjeksiyon ilanlara göre değişebilir",
  ignition: "CDI",
  starter: "Elektrik + kick starter",

  transmission: "5 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Monoshock arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Disk fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 140 kg",
  fuelTank: "Yaklaşık 12 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 115–120 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Asya RX 250 Cross, 250 cc tek silindirli ve 4 zamanlı motor yapısına sahip bir cross motosiklettir. 5 ileri manuel şanzıman ve zincir tahrik ile arazi ve şehir içi kullanım için uygundur. Hava soğutmalı motor ve disk frenler ile ekonomik ve güvenli sürüş sunar, ABS yoktur."
},

  {
  brand: "Asya",
  model: "Scooturk-100",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "100 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "7–8 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Kick starter",

  transmission: "4 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Kampana fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 95 kg",
  fuelTank: "Yaklaşık 9 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 80 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Asya Scooturk-100, 100 cc tek silindirli ve 4 zamanlı motor yapısına sahip, şehir içi kullanım için ekonomik bir scooter modelidir. 4 ileri manuel şanzıman ve zincir tahrik ile basit ve ekonomik sürüş sağlar. Hava soğutmalı motor, klasik fren/süspansiyon sistemi ve ABS yoktur."
},

  {
  brand: "Asya",
  model: "Shark 150",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "150 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "12–13 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Elektrik + kick starter",

  transmission: "5 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 115 kg",
  fuelTank: "Yaklaşık 12 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 95 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Asya Shark 150, 150 cc tek silindirli ve 4 zamanlı motor yapısına sahip bir motosiklettir. 5 ileri manuel şanzıman ve zincir tahrik ile şehir içi kullanım için uygundur. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ekonomik kullanım sunar, ABS bulunmamaktadır."
},

  {
  brand: "Asya",
  model: "Swift 150",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "150 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "12–13 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Elektrik + kick starter",

  transmission: "5 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 115 kg",
  fuelTank: "Yaklaşık 12 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 95 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Asya Swift 150, 150 cc tek silindirli ve 4 zamanlı motor yapısına sahip bir motosiklettir. 5 ileri manuel şanzıman ve zincir tahrik ile şehir içi kullanım için uygundur. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ekonomik kullanım sunar, ABS bulunmamaktadır."
},

  {
  brand: "Asya",
  model: "Ultra 150",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "150 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "12–13 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Elektrik + kick starter",

  transmission: "5 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 115 kg",
  fuelTank: "Yaklaşık 12 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 95 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Asya Ultra 150, 150 cc tek silindirli ve 4 zamanlı motor yapısına sahip bir motosiklettir. 5 ileri manuel şanzıman ve zincir tahrik ile şehir içi kullanım için uygundur. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ekonomik kullanım sunar, ABS bulunmamaktadır."
},
  {
  brand: "Arora",
  model: "Alfa 110",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "110 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "7–8 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Kick starter",

  transmission: "4 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Kampana fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 95 kg",
  fuelTank: "Yaklaşık 8 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 75 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Arora Alfa 110, 110 cc tek silindirli ve 4 zamanlı motor yapısına sahip şehir içi kullanım için uygun bir motosiklettir. 4 ileri manuel şanzıman ve zincir tahrik ile ekonomik sürüş sağlar. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ABS yoktur."
},
  {
  brand: "Arora",
  model: "Alfa 50",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "50 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "3–4 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Kick starter",

  transmission: "4 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Kampana fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 75 kg",
  fuelTank: "Yaklaşık 5 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 50–55 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Arora Alfa 50, 50 cc tek silindirli ve 4 zamanlı motor yapısına sahip, şehir içi kullanım için ideal küçük bir motosiklettir. 4 ileri manuel şanzıman ve zincir tahrik ile ekonomik sürüş sunar. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ABS yoktur."
},
  {
  brand: "Arora",
  model: "AR 03Z 250",

  engineType: "Tek silindirli, 4 zamanlı, benzinli motor",
  displacement: "249 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "18–20 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör / Enjeksiyon ilanlara göre değişebilir",
  ignition: "CDI",
  starter: "Elektrik + kick starter",

  transmission: "5 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Monoshock arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Disk fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 135 kg",
  fuelTank: "Yaklaşık 12 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 115–120 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Arora AR 03Z 250, 250 cc tek silindirli ve 4 zamanlı motor yapısına sahip bir motosiklettir. 5 ileri manuel şanzıman ve zincir tahrik ile şehir içi ve hafif arazi kullanımı için uygundur. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ABS yoktur."
},
  {
  brand: "Arora",
  model: "AR 06",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "49–50 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "3–4 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Kick starter",

  transmission: "4 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Kampana fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 72 kg",
  fuelTank: "Yaklaşık 5 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 50–55 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Arora AR 06, 50 cc tek silindirli ve 4 zamanlı motor yapısına sahip ekonomik bir motosiklettir. 4 ileri manuel şanzıman ve zincir tahrik ile şehir içi kullanım için uygundur. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ABS bulunmamaktadır."
},
  {
  brand: "Arora",
  model: "AR 06Z 250",

  engineType: "Tek silindirli, 4 zamanlı, benzinli motor",
  displacement: "249 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "18–20 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör / Enjeksiyon ilanlara göre değişebilir",
  ignition: "CDI",
  starter: "Elektrik + kick starter",

  transmission: "5 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Monoshock arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Disk fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 135 kg",
  fuelTank: "Yaklaşık 12 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 115–120 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Arora AR 06Z 250, 250 cc tek silindirli ve 4 zamanlı motor yapısına sahip bir motosiklettir. 5 ileri manuel şanzıman ve zincir tahrik ile şehir içi ve hafif arazi kullanımı için uygundur. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ABS yoktur."
},
  {
  brand: "Arora",
  model: "AR 50-10 Toros",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "49–50 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "3–4 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Kick starter",

  transmission: "4 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Kampana fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 72 kg",
  fuelTank: "Yaklaşık 5 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 50–55 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Arora AR 50-10 Toros, 50 cc tek silindirli ve 4 zamanlı motor yapısına sahip şehir içi kullanım için ekonomik bir motosiklettir. 4 ileri manuel şanzıman ve zincir tahrik ile sürüş sağlar. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ABS bulunmamaktadır."
},
  {
  brand: "Arora",
  model: "AR 50-11 Ares",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "49–50 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "3–4 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Kick starter",

  transmission: "4 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Kampana fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 72 kg",
  fuelTank: "Yaklaşık 5 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 50–55 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Arora AR 50-11 Ares, 50 cc tek silindirli ve 4 zamanlı motor yapısına sahip ekonomik bir şehir içi motosiklettir. 4 ileri manuel şanzıman ve zincir tahrik ile sürüş sağlar. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ABS bulunmamaktadır."
},
  {
  brand: "Arora",
  model: "AR 50-20 Today",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "49–50 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "3–4 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Kick starter",

  transmission: "4 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Kampana fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 72 kg",
  fuelTank: "Yaklaşık 5 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 50–55 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Arora AR 50-20 Today, 50 cc tek silindirli ve 4 zamanlı motor yapısına sahip şehir içi kullanım için ekonomik bir motosiklettir. 4 ileri manuel şanzıman ve zincir tahrik ile sürüş sağlar. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ABS yoktur."
},
  {
  brand: "Arora",
  model: "AR 50-30",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "49–50 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "3–4 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Kick starter",

  transmission: "4 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Kampana fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 72 kg",
  fuelTank: "Yaklaşık 5 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 50–55 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Arora AR 50-30, 50 cc tek silindirli ve 4 zamanlı motor yapısına sahip şehir içi kullanım için ekonomik bir motosiklettir. 4 ileri manuel şanzıman ve zincir tahrik ile sürüş sağlar. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ABS yoktur."
},
  {
  brand: "Arora",
  model: "AR 50-50 Kasırga",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "49–50 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "3–4 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Kick starter",

  transmission: "4 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Kampana fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 72 kg",
  fuelTank: "Yaklaşık 5 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 50–55 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Arora AR 50-50 Kasırga, 50 cc tek silindirli ve 4 zamanlı motor yapısına sahip şehir içi kullanım için ekonomik ve dayanıklı bir motosiklettir. 4 ileri manuel şanzıman ve zincir tahrik ile sürüş sağlar. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ABS bulunmamaktadır."
},
  {
  brand: "Arora",
  model: "AR 50-6 Capirossi",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "49–50 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "3–4 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Kick starter",

  transmission: "4 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Kampana fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 72 kg",
  fuelTank: "Yaklaşık 5 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 50–55 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Arora AR 50-6 Capirossi, 50 cc tek silindirli ve 4 zamanlı motor yapısına sahip, şehir içi kullanım için ekonomik bir motosiklettir. 4 ileri manuel şanzıman ve zincir tahrik ile sürüş sağlar. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ABS yoktur."
},
  {
  brand: "Arora",
  model: "AR 50-8 Espresso",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "49–50 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "3–4 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Kick starter",

  transmission: "4 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Kampana fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 72 kg",
  fuelTank: "Yaklaşık 5 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 50–55 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Arora AR 50-8 Espresso, 50 cc tek silindirli ve 4 zamanlı motor yapısına sahip şehir içi kullanım için ekonomik bir motosiklettir. 4 ileri manuel şanzıman ve zincir tahrik ile sürüş sağlar. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ABS bulunmamaktadır."
},
  {
  brand: "Arora",
  model: "AR 50 Special",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "49–50 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "3–4 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Kick starter",

  transmission: "4 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Kampana fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 72 kg",
  fuelTank: "Yaklaşık 5 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 50–55 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Arora AR 50 Special, 50 cc tek silindirli ve 4 zamanlı motor yapısına sahip şehir içi kullanım için ekonomik bir motosiklettir. 4 ileri manuel şanzıman ve zincir tahrik ile sürüş sağlar. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ABS yoktur."
},
  {
  brand: "Arora",
  model: "AR 100-19 Elegant",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "97–100 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "7–8 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Kick starter / Elektrik marş",

  transmission: "4 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 90–95 kg",
  fuelTank: "Yaklaşık 8 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 80–85 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Arora AR 100-19 Elegant, 100 cc tek silindirli ve 4 zamanlı motor yapısına sahip şehir içi kullanım için ekonomik ve şık tasarımlı bir motosiklettir. 4 ileri manuel şanzıman ve zincir tahrik ile sürüş sağlar. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ABS bulunmamaktadır."
},
  {
  brand: "Arora",
  model: "AR 100-62 Kartal",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "97–100 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "7–8 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Kick starter / Elektrik marş",

  transmission: "4 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 90–95 kg",
  fuelTank: "Yaklaşık 8 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 80–85 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Arora AR 100-62 Kartal, 100 cc tek silindirli ve 4 zamanlı motor yapısına sahip şehir içi kullanım için ekonomik ve dayanıklı bir motosiklettir. 4 ileri manuel şanzıman ve zincir tahrik ile sürüş sağlar. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ABS yoktur."
},
  {
  brand: "Arora",
  model: "AR 100-7",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "97–100 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "7–8 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Kick starter / Elektrik marş",

  transmission: "4 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 90–95 kg",
  fuelTank: "Yaklaşık 8 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 80–85 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Arora AR 100-7, 100 cc tek silindirli ve 4 zamanlı motor yapısına sahip şehir içi kullanım için ekonomik ve dayanıklı bir motosiklettir. 4 ileri manuel şanzıman ve zincir tahrik ile sürüş sağlar. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ABS yoktur."
},
  {
  brand: "Arora",
  model: "AR 100-7 Special Alfa",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "97–100 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "7–8 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Kick starter / Elektrik marş",

  transmission: "4 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 90–95 kg",
  fuelTank: "Yaklaşık 8 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 80–85 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Arora AR 100-7 Special Alfa, 100 cc tek silindirli ve 4 zamanlı motor yapısına sahip şehir içi kullanım için tasarlanmış özel bir modeldir. 4 ileri manuel şanzıman ve zincir tahrik ile sürüş sağlar. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ABS yoktur."
},
  {
  brand: "Arora",
  model: "AR 100-8 A Modifiye",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "97–100 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "7–8 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Kick starter / Elektrik marş",

  transmission: "4 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 90–95 kg",
  fuelTank: "Yaklaşık 8 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 80–85 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Arora AR 100-8 A Modifiye, 100 cc tek silindirli ve 4 zamanlı motor yapısına sahip şehir içi kullanım için geliştirilmiş modifiye bir motosiklettir. 4 ileri manuel şanzıman ve zincir tahrik ile sürüş sağlar. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ABS yoktur."
},
  {
  brand: "Arora",
  model: "AR 100-8 Klasik Çelik",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "97–100 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "7–8 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Kick starter / Elektrik marş",

  transmission: "4 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 90–95 kg",
  fuelTank: "Yaklaşık 8 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 80–85 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Arora AR 100-8 Klasik Çelik, 100 cc tek silindirli ve 4 zamanlı motor yapısına sahip, klasik tasarımlı şehir içi motosiklettir. 4 ileri manuel şanzıman ve zincir tahrik ile sürüş sağlar. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ABS yoktur."
},
  {
  brand: "Arora",
  model: "AR 100-8 Klasik Tel",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "97–100 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "7–8 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Kick starter / Elektrik marş",

  transmission: "4 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 90–95 kg",
  fuelTank: "Yaklaşık 8 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 80–85 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Arora AR 100-8 Klasik Tel, 100 cc tek silindirli ve 4 zamanlı motor yapısına sahip klasik tasarımlı şehir içi motosiklettir. 4 ileri manuel şanzıman ve zincir tahrik ile sürüş sağlar. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ABS bulunmamaktadır."
},
  {
  brand: "Arora",
  model: "AR 100-B",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "97–100 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "7–8 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Kick starter / Elektrik marş",

  transmission: "4 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 90–95 kg",
  fuelTank: "Yaklaşık 8 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 80–85 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Arora AR 100-B, 100 cc tek silindirli ve 4 zamanlı motor yapısına sahip şehir içi kullanım için klasik ve ekonomik bir motosiklettir. 4 ileri manuel şanzıman ve zincir tahrik ile sürüş sağlar. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ABS bulunmamaktadır."
},
  {
  brand: "Arora",
  model: "AR 100T 2A Special",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "97–100 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "7–8 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Kick starter / Elektrik marş",

  transmission: "4 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 90–95 kg",
  fuelTank: "Yaklaşık 8 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 80–85 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Arora AR 100T 2A Special, 100 cc tek silindirli ve 4 zamanlı motor yapısına sahip, şehir içi kullanım için tasarlanmış özel bir modeldir. 4 ileri manuel şanzıman ve zincir tahrik ile sürüş sağlar. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ABS yoktur."
},
  {
  brand: "Arora",
  model: "AR 100T-2B İnci",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "97–100 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "7–8 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Kick starter / Elektrik marş",

  transmission: "4 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 90–95 kg",
  fuelTank: "Yaklaşık 8 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 80–85 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Arora AR 100T-2B İnci, 100 cc tek silindirli ve 4 zamanlı motor yapısına sahip, şehir içi kullanım için tasarlanmış özel bir motosiklettir. 4 ileri manuel şanzıman ve zincir tahrik ile sürüş sağlar. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ABS yoktur."
},
  {
  brand: "Arora",
  model: "AR 125",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "124–125 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "9–10 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Kick starter / Elektrik marş",

  transmission: "4 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 95–100 kg",
  fuelTank: "Yaklaşık 9–10 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 90–100 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Arora AR 125, 125 cc tek silindirli ve 4 zamanlı motor yapısına sahip şehir içi ve günlük kullanım için tasarlanmış ekonomik bir motosiklettir. 4 ileri manuel şanzıman ve zincir tahrik ile sürüş sağlar. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ABS bulunmamaktadır."
},
  {
  brand: "Arora",
  model: "AR 125-43 Yebere",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "124–125 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "9–10 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Kick starter / Elektrik marş",

  transmission: "4 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 95–100 kg",
  fuelTank: "Yaklaşık 9–10 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 90–100 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Arora AR 125-43 Yebere, 125 cc tek silindirli ve 4 zamanlı motor yapısına sahip, şehir içi ve günlük kullanım için ekonomik bir motosiklettir. 4 ileri manuel şanzıman ve zincir tahrik ile sürüş sağlar. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ABS yoktur."
},
  {
  brand: "Arora",
  model: "AR 125-48 Yebere",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "124–125 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "9–10 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Kick starter / Elektrik marş",

  transmission: "4 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 95–100 kg",
  fuelTank: "Yaklaşık 9–10 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 90–100 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Arora AR 125-48 Yebere, 125 cc tek silindirli ve 4 zamanlı motor yapısına sahip şehir içi kullanım için tasarlanmış ekonomik bir motosiklettir. 4 ileri manuel şanzıman ve zincir tahrik ile sürüş sağlar. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ABS yoktur."
},
  {
  brand: "Arora",
  model: "AR 150-5 Kargo",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "149–150 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "11–12 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Kick starter / Elektrik marş",

  transmission: "4 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 100–110 kg",
  fuelTank: "Yaklaşık 9–10 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 95–105 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Arora AR 150-5 Kargo, 150 cc tek silindirli ve 4 zamanlı motor yapısına sahip şehir içi ve hafif yük taşımaya uygun ekonomik bir motosiklettir. 4 ileri manuel şanzıman ve zincir tahrik ile sürüş sağlar. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ABS bulunmamaktadır."
},
  {
  brand: "Arora",
  model: "AR 150-A",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "149–150 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "11–12 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Kick starter / Elektrik marş",

  transmission: "4 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 100–110 kg",
  fuelTank: "Yaklaşık 9–10 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 95–105 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Arora AR 150-A, 150 cc tek silindirli ve 4 zamanlı motor yapısına sahip şehir içi kullanım için tasarlanmış ekonomik bir motosiklettir. 4 ileri manuel şanzıman ve zincir tahrik ile sürüş sağlar. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ABS bulunmamaktadır."
},
  {
  brand: "Arora",
  model: "AR 150-A Jaguar",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "149–150 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "11–12 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Kick starter / Elektrik marş",

  transmission: "4 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 100–110 kg",
  fuelTank: "Yaklaşık 9–10 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 95–105 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Arora AR 150-A Jaguar, 150 cc tek silindirli ve 4 zamanlı motor yapısına sahip, şehir içi ve hafif kullanım için tasarlanmış özel bir motosiklettir. 4 ileri manuel şanzıman ve zincir tahrik ile sürüş sağlar. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ABS yoktur."
},
  {
  brand: "Arora",
  model: "AR 150-T",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "149–150 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "11–12 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Kick starter / Elektrik marş",

  transmission: "4 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 100–110 kg",
  fuelTank: "Yaklaşık 9–10 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 95–105 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Arora AR 150-T, 150 cc tek silindirli ve 4 zamanlı motor yapısına sahip, şehir içi kullanım için tasarlanmış ekonomik bir motosiklettir. 4 ileri manuel şanzıman ve zincir tahrik ile sürüş sağlar. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ABS yoktur."
},
  {
  brand: "Arora",
  model: "AR 150 T8-H Joker",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "149–150 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "11–12 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Kick starter / Elektrik marş",

  transmission: "4 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 100–110 kg",
  fuelTank: "Yaklaşık 9–10 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 95–105 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Arora AR 150 T8-H Joker, 150 cc tek silindirli ve 4 zamanlı motor yapısına sahip, şehir içi kullanım için tasarlanmış özel bir motosiklettir. 4 ileri manuel şanzıman ve zincir tahrik ile sürüş sağlar. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ABS yoktur."
},
  {
  brand: "Arora",
  model: "AR 150T-N2 Nostalji",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "149–150 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "11–12 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Kick starter / Elektrik marş",

  transmission: "4 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 100–110 kg",
  fuelTank: "Yaklaşık 9–10 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 95–105 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Arora AR 150T-N2 Nostalji, 150 cc tek silindirli ve 4 zamanlı motor yapısına sahip, retro tarzıyla şehir içi kullanım için tasarlanmış özel bir motosiklettir. 4 ileri manuel şanzıman ve zincir tahrik ile sürüş sağlar. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ABS bulunmamaktadır."
},
  {
  brand: "Arora",
  model: "AR 170-20 Elegant",

  engineType: "Tek silindirli, 4 zamanlı, hava-soğutmalı motor",
  displacement: "169–170 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "12–13 hp (ilanlara göre)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Kick starter / Elektrik marş",

  transmission: "4 ileri manuel",
  driveType: "Zincir",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "ABS yok",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 110–115 kg",
  fuelTank: "Yaklaşık 11 L",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 100–110 km/s",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Model yılı ilanlara göre değişmektedir",

  description:
    "Arora AR 170-20 Elegant, 170 cc tek silindirli ve 4 zamanlı motor yapısına sahip, şehir içi ve günlük kullanım için tasarlanmış ekonomik ve şık bir motosiklettir. 4 ileri manuel şanzıman ve zincir tahrik ile sürüş sağlar. Hava soğutmalı motor ve klasik fren/süspansiyon sistemi ile ABS bulunmamaktadır."
},

];
