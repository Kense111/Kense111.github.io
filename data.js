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
  
{
  brand: "Arora",
  model: "AR 185-16 Fırtına",

  engineType: "Tek silindirli, dört zamanlı, benzinli motor",
  displacement: "184 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "16 beygir gücü",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri paylaşılmamıştır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI",
  starter: "Elektrik + Ayak marşı",

  transmission: "5 ileri manuel",
  driveType: "Zincir tahrik",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "ABS bulunmamaktadır",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 135 kg",
  fuelTank: "Yaklaşık 13 litre",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 115 km/s",
  zeroToHundred: "Resmî ölçüm bulunmamaktadır",

  productionYear: "Türkiye satış yılları modele göre değişmektedir",

  description:
    "Arora AR 185-16 Fırtına, şehir içi ve şehirler arası kullanım için tasarlanmış, 185 cc hacminde klasik naked tarzda bir motosiklettir. Manuel şanzımanı, zincir tahriki ve basit mekanik yapısıyla bakım maliyetleri düşük tutulmuştur. ABS ve elektronik sürüş destekleri bulunmamaktadır."
},
  {
  brand: "Arora",
  model: "AR 185-16 Fırtına",

  engineType: "Tek silindirli, dört zamanlı, benzinli motor",
  displacement: "185 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "Yaklaşık 16 beygir gücü",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî tork değeri paylaşılmamıştır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI ateşleme sistemi",
  starter: "Elektrik ve marş kolu",

  transmission: "5 vites, manuel",
  driveType: "Zincir tahrik",

  cooling: "Hava soğutmalı",
  lubrication: "Islak karter yağlama",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Disk fren",
  abs: "ABS bulunmamaktadır",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 135 kilogram",
  fuelTank: "Yaklaşık 13 litre",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 120 kilometre/saat (kullanıcı deneyimleri)",
  zeroToHundred: "Resmî ölçüm verisi bulunmamaktadır",

  productionYear: "Türkiye satış yılları modele göre değişmektedir",

  description:
    "Arora AR 185-16 Fırtına, commuter ve günlük kullanım odaklı 185 cc sınıfında bir motosiklettir. Manuel şanzımanı, zincir tahriki ve disk frenleri ile dengeli bir sürüş sunmayı hedefler. Basit mekanik yapısı sayesinde bakım maliyetleri düşüktür. Elektronik sürüş destekleri bulunmamaktadır."
},
  {
  brand: "Arora",
  model: "AR 185-18 Modifiye",

  engineType: "Tek silindirli, dört zamanlı, benzinli motor",
  displacement: "170 cc", // Birden fazla karşılaştırma kaynağında görünüyor :contentReference[oaicite:3]{index=3}
  boreStroke: "Resmî üretici veri yok",
  compressionRatio: "Resmî üretici veri yok",

  power: "11.50 bg", // Karşılaştırma sitelerinde listelenmiş değer :contentReference[oaicite:4]{index=4}
  powerRpm: "Resmî üretici veri yok",
  torque: "13.5 Nm", // Karşılaştırma sitelerinde listelenmiş değer :contentReference[oaicite:5]{index=5}
  torqueRpm: "Resmî üretici veri yok",

  fuelSystem: "Karbüratör (genelde belirtiliyor)", // Karşılaştırma verilerine göre :contentReference[oaicite:6]{index=6}
  ignition: "CDI ateşleme sistemi", // Yaygın kabul edilen tip
  starter: "Elektrik marş",

  transmission: "6 vites, manuel", // Karşılaştırma verisine göre :contentReference[oaicite:7]{index=7}
  driveType: "Zincir tahrik (yaygın)" ,

  cooling: "Hava soğutmalı (varsayılan)",  
  lubrication: "Resmî üretici veri yok",

  frontSuspension: "Teleskopik ön amortisör (genel model yapısı)",
  rearSuspension: "Çift arka amortisör (genel model yapısı)",

  frontBrake: "Disk fren", // Karşılaştırma site gösterimine göre :contentReference[oaicite:8]{index=8}
  rearBrake: "Kampana fren", // Karşılaştırma site gösterimine göre :contentReference[oaicite:9]{index=9}
  abs: "Yok",

  tireFront: "2.50-17 inç", // Karşılaştırma sitelerinde listelenen ebatlar :contentReference[oaicite:10]{index=10}
  tireRear: "2.75-18 inç", // Karşılaştırma sitelerinde listelenen ebatlar :contentReference[oaicite:11]{index=11}

  length: "Resmî üretici veri yok",
  width: "Resmî üretici veri yok",
  height: "Resmî üretici veri yok",
  wheelbase: "Resmî üretici veri yok",
  seatHeight: "Resmî üretici veri yok",
  groundClearance: "Resmî üretici veri yok",

  weight: "128 kg (Teknik karşılaştırma kaynağından)", // Bir sitede ağırlık bilgisi listelendi :contentReference[oaicite:12]{index=12}
  fuelTank: "Yaklaşık 15 litre (genel kabul)", 
  oilCapacity: "Resmî üretici veri yok",

  maxSpeed: "Yaklaşık 95 km/s (karşılaştırma sitesi)", // teknik portala göre :contentReference[oaicite:13]{index=13}
  zeroToHundred: "Resmî ölçüm veri yok",

  productionYear: "İkinci el ilanlarına göre (örneğin 2016-2019) :contentReference[oaicite:14]{index=14}",

  description:
    "Arora AR 185-18 Modifiye için üreticinin kendi sitesinde resmi teknik tablo bulunmamaktadır. Aşağıdaki değerler internet üzerindeki karşılaştırma ve teknik portalların ortak verileridir."
},
  {
  brand: "Arora",
  model: "AR 185-20 Fırtına",

  engineType: "Tek silindirli, dört zamanlı, benzinli motor",
  displacement: "185 cm³ (ilan verisi)", // İlanlarda bu şekilde görünüyor :contentReference[oaicite:0]{index=0}
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "12 hp (ilan verisi)", // İlanlarda motor gücü bu şekilde listeleniyor :contentReference[oaicite:1]{index=1}
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "10.70–13.5 Nm (karşılaştırma portalları)", // Portallar farklı değer listeliyor :contentReference[oaicite:2]{index=2}
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör (karşılaştırma portalları)", // Epey listesinde karbüratörlü yazıyor :contentReference[oaicite:3]{index=3}
  ignition: "Elden marş / elektrik (ilan + portal)", // Çalıştırma bilgisi listeleniyor :contentReference[oaicite:4]{index=4}
  starter: "Elden marş / elektrik (ilan + portal)",

  transmission: "6 vites, manuel (karşılaştırma portalları)", // Epey’de 6 vites yazıyor :contentReference[oaicite:5]{index=5}
  driveType: "Zincir tahrik (yaygın yapı)",

  cooling: "Hava soğutmalı (ilan ve portal)", // İlan’da hava soğutmalı yazıyor :contentReference[oaicite:6]{index=6}
  lubrication: "Resmî veri bulunmamaktadır",

  frontSuspension: "Teleskopik ön amortisör (yaygın model yapısı)",
  rearSuspension: "Çift arka amortisör (yaygın model yapısı)",

  frontBrake: "Disk fren (ilan + portal)", // Epey ve ilanlarda disk fren yazıyor :contentReference[oaicite:7]{index=7}
  rearBrake: "Kampana fren (ilan + portal)", // Bu portallarda kampana fren görünüyor :contentReference[oaicite:8]{index=8}
  abs: "Bulunmamaktadır",

  tireFront: "2.75-18 (forum & portal)", // Portallarda bu ebat görünüyor :contentReference[oaicite:9]{index=9}
  tireRear: "18 inç (portal)", // Epey’de 18 inç görünüyor :contentReference[oaicite:10]{index=10}

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "125–135 kg (karşılaştırma portalları)", // Portallar yaklaşık bu aralığı veriyor :contentReference[oaicite:11]{index=11}
  fuelTank: "Resmî veri bulunmamaktadır",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 95 km/s (karşılaştırma portalında listelenen)", // Bir panelde ~95 km/s var :contentReference[oaicite:12]{index=12}
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "2019 (ilan kayıtlarında)", // Örnek ilan verisi :contentReference[oaicite:13]{index=13}

  description:
    "Arora AR 185-20 Fırtına modeli için üreticinin resmi teknik tablo yayımlanmamıştır. Yukarıdaki değerler ilanlardan ve motosiklet karşılaştırma portallarından derlenmiştir. Bazı kullanıcı deneyimlerinde parça bulunabilirliği konusunda sıkıntı yaşandığı bildirilmektedir (forum/şikayet paylaşımları).",
},
  {
  brand: "Arora",
  model: "AR 200-16C Jaguar",

  engineType: "Tek silindirli, dört zamanlı, benzinli motor",
  displacement: "169 cc", // İlan ve satıcı sitelerinde en sık geçen değer :contentReference[oaicite:0]{index=0}
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "11.60 hp @ 7500 rpm", // İlan ve satıcı sitelerinde listelenmiş değer :contentReference[oaicite:1]{index=1}
  powerRpm: "7500 rpm",  
  torque: "11.50 Nm @ 4500 rpm", // İlan/satıcı sitelerinde görülen değer :contentReference[oaicite:2]{index=2}
  torqueRpm: "4500 rpm",

  fuelSystem: "Karbüratör", // Satıcı sitelerinde verilen bilgi :contentReference[oaicite:3]{index=3}
  ignition: "CDI ateşleme", // Satıcı sitelerinde bu şekilde listeleniyor :contentReference[oaicite:4]{index=4}
  starter: "Elektrik marş",

  transmission: "6 vites, manuel", // En çok tekrarlanan şanzıman bilgisi :contentReference[oaicite:5]{index=5}
  driveType: "Zincir tahrik", // Yaygın yapı

  cooling: "Hava soğutmalı", // İlan ve satıcı sitelerinde bu şekilde :contentReference[oaicite:6]{index=6}
  lubrication: "Resmî veri bulunmamaktadır",

  frontSuspension: "Teleskopik ön amortisör", // Yaygın model yapısı
  rearSuspension: "Çift arka amortisör", // Yaygın model yapısı

  frontBrake: "Disk fren", // İlan/satıcı verileri :contentReference[oaicite:7]{index=7}
  rearBrake: "Kampana fren", // İlan/satıcı verileri :contentReference[oaicite:8]{index=8}
  abs: "Bulunmamaktadır", // ABS belirtilmiyor

  tireFront: "3.25-18", // İlan/satıcı sitelerinde verilen ölçü :contentReference[oaicite:9]{index=9}
  tireRear: "110/90-16", // İlan/satıcı sitelerinde verilen ölçü :contentReference[oaicite:10]{index=10}

  length: "2060 mm (ilan/satıcı verisi)", // Satıcı verileri :contentReference[oaicite:11]{index=11}
  width: "850 mm (ilan/satıcı verisi)", // Satıcı verileri :contentReference[oaicite:12]{index=12}
  height: "1160 mm (ilan/satıcı verisi)", // Satıcı verileri :contentReference[oaicite:13]{index=13}
  wheelbase: "1360 mm (ilan/satıcı verisi)", // Satıcı verileri :contentReference[oaicite:14]{index=14}
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "122 kg", // Satıcı/ilan verisi :contentReference[oaicite:15]{index=15}
  fuelTank: "15 litre", // Satıcı/ilan verisi :contentReference[oaicite:16]{index=16}
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 110–115 km/s", // Kullanıcı/portal tahmini :contentReference[oaicite:17]{index=17}
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "2022–2024 (ilan yoğunluğuna göre)",

  description:
    "Arora AR 200-16C Jaguar için üreticinin resmi teknik katalogu bulunmamaktadır. Yukarıdaki değerlerin çoğu ikinci el ilanları ve satıcı sitelerinde en çok tekrar edilen teknik verilerdir. Kullanıcı forumlarında bazı sahipler fren sisteminde uyarı ve elektriksel küçük sorunlar bildirmiştir (kullanıcı yorumu).",
},
  {
  brand: "Arora",
  model: "AR251",

  engineType: "4 zamanlı, çift silindirli, benzinli motor",
  displacement: "248 cc", // Resmî katalog verisi :contentReference[oaicite:0]{index=0}
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "24.50 Hp @ 8500 rpm", // Resmî katalog verisi :contentReference[oaicite:1]{index=1}
  powerRpm: "8500 rpm", // Resmî katalog verisi :contentReference[oaicite:2]{index=2}
  torque: "22 Nm @ 6500 rpm", // Resmî katalog verisi :contentReference[oaicite:3]{index=3}
  torqueRpm: "6500 rpm", // Resmî katalog verisi :contentReference[oaicite:4]{index=4}

  fuelSystem: "Enjeksiyonlu", // Birçok karşılaştırma sitesi bu şekilde listeliyor :contentReference[oaicite:5]{index=5}
  ignition: "Electric ECU", // Resmî katalog verisi :contentReference[oaicite:6]{index=6}
  starter: "Elektrik marş",

  transmission: "6 vites, manuel", // Resmî katalog verisi :contentReference[oaicite:7]{index=7}
  driveType: "Zincir tahrik",

  cooling: "Su soğutmalı", // Resmî katalog verisi :contentReference[oaicite:8]{index=8}
  lubrication: "Resmî veri bulunmamaktadır",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Double disk fren", // Resmî katalog verisi :contentReference[oaicite:9]{index=9}
  rearBrake: "Disk fren", // Resmî katalog verisi :contentReference[oaicite:10]{index=10}
  abs: "ABS", // Resmî katalog verisi :contentReference[oaicite:11]{index=11}

  tireFront: "120/70-17", // Resmî katalog verisi :contentReference[oaicite:12]{index=12}
  tireRear: "150/70-17", // Resmî katalog verisi :contentReference[oaicite:13]{index=13}

  length: "2060 mm", // Resmî katalog verisi :contentReference[oaicite:14]{index=14}
  width: "800 mm", // Resmî katalog verisi :contentReference[oaicite:15]{index=15}
  height: "1090 mm", // Resmî katalog verisi :contentReference[oaicite:16]{index=16}
  wheelbase: "1400 mm", // Resmî katalog verisi :contentReference[oaicite:17]{index=17}
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "170 kg", // Resmî katalog verisi :contentReference[oaicite:18]{index=18}
  fuelTank: "17 lt", // Resmî katalog verisi :contentReference[oaicite:19]{index=19}
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Yaklaşık 130 km/s (karşılaştırma sitelerinde ortak)", // Portal bilgilere göre :contentReference[oaicite:20]{index=20}
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Resmî katalogta belirtilmemiştir",

  description:
    "Arora AR251, touring segmentinde su soğutmalı çift silindirli 248 cc motoruyla güçlü bir performans sunar. Resmî katalogda belirtilen güç 24.50 Hp ve tork 22 Nm’dir. ABS fren sistemi ve çift diskli ön fren ile yol güvenliğine odaklanır. *Bazı kullanıcılar uzun yolda yakıt tüketiminin standarta göre biraz yüksek olabileceğini ve servis / yedek parça bulunabilirliğinin sınırlı olduğunu forumlarda belirtmiştir (kullanıcı yorumu).*",
},
  {
  brand: "Arora",
  model: "ARS 200",

  engineType: "Tek silindirli, dört zamanlı, benzinli motor",
  displacement: "197 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "15–16 bg (Dip not: Kullanıcı yorumu)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Yaklaşık 15–16 Nm (Dip not: Kullanıcı yorumu)",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI ateşleme sistemi",
  starter: "Elektrik marş",

  transmission: "6 vites, manuel",
  driveType: "Zincir tahrik",

  cooling: "Hava soğutmalı",
  lubrication: "Resmî veri bulunmamaktadır",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Monoshock arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Disk fren",
  abs: "Bulunmamaktadır",

  tireFront: "110/70-17",
  tireRear: "140/70-17",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Yaklaşık 800 mm (Dip not: Kullanıcı yorumu)",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "145–150 kg (Dip not: Kullanıcı yorumu)",
  fuelTank: "12–13 litre (Dip not: Kullanıcı yorumu)",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "120–130 km/s (Dip not: Kullanıcı yorumu)",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Türkiye satış yılları modele göre değişmektedir",

  description:
    "Arora ARS 200, naked/street sınıfında konumlanan ve sportif sürüş karakteri hedefleyen bir motosiklettir. 17 inç jantlar, disk frenler ve zincir tahrik sistemiyle şehir içi ve kısa-orta mesafe kullanımına uygundur. Forumlarda kullanıcılar motorun görünümünü ve yol tutuşunu olumlu değerlendirirken, titreşim seviyesinin yüksek devirlerde hissedilebildiğini belirtmektedir (kullanıcı yorumu).",
},
  {
  brand: "Arora",
  model: "Beatrix",

  engineType: "Tek silindirli, dört zamanlı, benzinli motor",
  displacement: "49 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "4–5 bg (Dip not: Kullanıcı yorumu)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Yaklaşık 4–5 Nm (Dip not: Kullanıcı yorumu)",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI ateşleme sistemi",
  starter: "Elektrik ve ayak marşı",

  transmission: "Otomatik (CVT)",
  driveType: "Kayış tahrik",

  cooling: "Hava soğutmalı",
  lubrication: "Resmî veri bulunmamaktadır",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Tek arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "Bulunmamaktadır",

  tireFront: "120/70-12",
  tireRear: "120/70-12",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Yaklaşık 760 mm (Dip not: Kullanıcı yorumu)",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "95–100 kg (Dip not: Kullanıcı yorumu)",
  fuelTank: "5–6 litre (Dip not: Kullanıcı yorumu)",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "45–50 km/s (Dip not: Kullanıcı yorumu)",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Türkiye satış yılları modele göre değişmektedir",

  description:
    "Arora Beatrix, şehir içi kullanım odaklı kompakt bir scooter modelidir. Otomatik şanzımanı ve küçük tekerlek yapısı sayesinde pratik sürüş sunmayı hedefler. Kullanıcılar yakıt tüketimini düşük bulurken, uzun yolda performansının sınırlı olduğunu belirtmektedir (kullanıcı yorumu).",
},
  {
  brand: "Arora",
  model: "Boss 125",

  engineType: "Tek silindirli, dört zamanlı, benzinli motor",
  displacement: "124 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "9–10 bg (Dip not: Kullanıcı yorumu)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "9–10 Nm (Dip not: Kullanıcı yorumu)",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI ateşleme sistemi",
  starter: "Elektrik ve ayak marşı",

  transmission: "5 vites, manuel",
  driveType: "Zincir tahrik",

  cooling: "Hava soğutmalı",
  lubrication: "Resmî veri bulunmamaktadır",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "Bulunmamaktadır",

  tireFront: "2.75-18",
  tireRear: "3.00-18",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Yaklaşık 780 mm (Dip not: Kullanıcı yorumu)",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "120–125 kg (Dip not: Kullanıcı yorumu)",
  fuelTank: "10–11 litre (Dip not: Kullanıcı yorumu)",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "90–100 km/s (Dip not: Kullanıcı yorumu)",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Türkiye satış yılları modele göre değişmektedir",

  description:
    "Arora Boss 125, günlük kullanım ve şehir içi ulaşım için tasarlanmış klasik yapıda bir commuter motosiklettir. Hava soğutmalı motoru, manuel şanzımanı ve zincir tahrik sistemiyle sade ve ekonomik bir kullanım sunar. Kullanıcılar yakıt tüketimini ve bakım maliyetlerini olumlu değerlendirirken, performansın sportif beklentiler için sınırlı olduğunu belirtmektedir (kullanıcı yorumu).",
},
  {
  brand: "Arora",
  model: "Boss 50",

  engineType: "Tek silindirli, dört zamanlı, benzinli motor",
  displacement: "49 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "4–5 bg (Dip not: Kullanıcı yorumu)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "4–5 Nm (Dip not: Kullanıcı yorumu)",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI ateşleme sistemi",
  starter: "Elektrik ve ayak marşı",

  transmission: "4 vites, yarı otomatik (Dip not: Kullanıcı yorumu)",
  driveType: "Zincir tahrik",

  cooling: "Hava soğutmalı",
  lubrication: "Resmî veri bulunmamaktadır",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "Bulunmamaktadır",

  tireFront: "2.50-17 (Dip not: Kullanıcı yorumu)",
  tireRear: "2.75-17 (Dip not: Kullanıcı yorumu)",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Yaklaşık 760 mm (Dip not: Kullanıcı yorumu)",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "100–105 kg (Dip not: Kullanıcı yorumu)",
  fuelTank: "6–7 litre (Dip not: Kullanıcı yorumu)",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "45–50 km/s (Dip not: Kullanıcı yorumu)",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Türkiye satış yılları modele göre değişmektedir",

  description:
    "Arora Boss 50, düşük hacimli motoru ve sade yapısıyla şehir içi kısa mesafe kullanımını hedefleyen bir motosiklettir. Yarı otomatik şanzımanı sayesinde yeni başlayan kullanıcılar için kolay sürüş sunar. Kullanıcılar yakıt tüketimini düşük ve bakımını ekonomik bulurken, hız ve ivmelenmenin sınırlı olduğunu belirtmektedir (kullanıcı yorumu).",
},
  {
  brand: "Arora",
  model: "Bravo 50",

  engineType: "Tek silindirli, iki zamanlı benzinli motor (Dip not: Kullanıcı yorumu)",
  displacement: "49 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "4.5–5.5 bg (Dip not: Kullanıcı yorumu)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "4–5 Nm (Dip not: Kullanıcı yorumu)",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI ateşleme sistemi",
  starter: "Elektrik ve ayak marşı",

  transmission: "Otomatik (CVT)",
  driveType: "Kayış tahrik",

  cooling: "Hava soğutmalı",
  lubrication: "Resmî veri bulunmamaktadır",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Tek arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "Bulunmamaktadır",

  tireFront: "120/70-12 (Dip not: Kullanıcı yorumu)",
  tireRear: "120/70-12 (Dip not: Kullanıcı yorumu)",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Yaklaşık 760 mm (Dip not: Kullanıcı yorumu)",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "95–100 kg (Dip not: Kullanıcı yorumu)",
  fuelTank: "5–6 litre (Dip not: Kullanıcı yorumu)",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "45–50 km/s (Dip not: Kullanıcı yorumu)",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Türkiye satış yılları modele göre değişmektedir",

  description:
    "Arora Bravo 50, kompakt gövde yapısı ve otomatik şanzımanıyla şehir içi ulaşımda pratiklik sunmayı amaçlayan bir scooter modelidir. Küçük motor hacmi sayesinde ekonomik kullanım hedefler. Kullanıcılar manevra kabiliyetini ve yakıt tüketimini olumlu değerlendirirken, performansın kısa mesafelerle sınırlı kaldığını belirtmektedir (kullanıcı yorumu).",
},
  {
  brand: "Arora",
  model: "Cappuccino 50",

  engineType: "Tek silindirli, dört zamanlı, benzinli motor",
  displacement: "49 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "4–4.5 bg (Dip not: Kullanıcı yorumu)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "3.5–4 Nm (Dip not: Kullanıcı yorumu)",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI ateşleme sistemi",
  starter: "Elektrik ve ayak marşı",

  transmission: "Otomatik (CVT)",
  driveType: "Kayış tahrik",

  cooling: "Hava soğutmalı",
  lubrication: "Resmî veri bulunmamaktadır",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Tek arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "Bulunmamaktadır",

  tireFront: "120/70-12 (Dip not: Kullanıcı yorumu)",
  tireRear: "120/70-12 (Dip not: Kullanıcı yorumu)",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Yaklaşık 750 mm (Dip not: Kullanıcı yorumu)",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "95–100 kg (Dip not: Kullanıcı yorumu)",
  fuelTank: "5–6 litre (Dip not: Kullanıcı yorumu)",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "45–50 km/s (Dip not: Kullanıcı yorumu)",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Türkiye satış yılları modele göre değişmektedir",

  description:
    "Arora Cappuccino 50, retro tasarıma sahip kompakt bir scooter modelidir. Otomatik şanzımanı ve küçük gövdesiyle şehir içi kısa mesafelerde pratik kullanım hedefler. Kullanıcılar tasarımını ve yakıt ekonomisini olumlu değerlendirirken, uzun yol ve yüksek hız beklentileri için uygun olmadığını belirtmektedir (kullanıcı yorumu).",
},
  {
  brand: "Arora",
  model: "Cappuccino 125",

  engineType: "Tek silindirli, dört zamanlı, benzinli motor",
  displacement: "124 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "8.5–9.5 bg (Dip not: Kullanıcı yorumu)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "9–10 Nm (Dip not: Kullanıcı yorumu)",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI ateşleme sistemi",
  starter: "Elektrik ve ayak marşı",

  transmission: "Otomatik (CVT)",
  driveType: "Kayış tahrik",

  cooling: "Hava soğutmalı",
  lubrication: "Resmî veri bulunmamaktadır",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Tek arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "Bulunmamaktadır",

  tireFront: "110/70-12 (Dip not: Kullanıcı yorumu)",
  tireRear: "120/70-12 (Dip not: Kullanıcı yorumu)",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Yaklaşık 760 mm (Dip not: Kullanıcı yorumu)",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "105–110 kg (Dip not: Kullanıcı yorumu)",
  fuelTank: "6–7 litre (Dip not: Kullanıcı yorumu)",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "85–95 km/s (Dip not: Kullanıcı yorumu)",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Türkiye satış yılları modele göre değişmektedir",

  description:
    "Arora Cappuccino 125, retro scooter tasarımını daha yüksek motor hacmiyle birleştiren şehir içi odaklı bir modeldir. Otomatik şanzımanı sayesinde rahat sürüş sunarken, 125 cc motoru ile 50 cc modellere kıyasla daha akıcı bir hızlanma sağlar. Kullanıcılar konforunu ve görünümünü olumlu değerlendirirken, yüksek hızlarda rüzgâr korumasının sınırlı olduğunu belirtmektedir (kullanıcı yorumu).",
},
  {
  brand: "Arora",
  model: "CG 150",

  engineType: "Tek silindirli, dört zamanlı, benzinli motor",
  displacement: "149 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "11–12 bg (Dip not: Kullanıcı yorumu)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "11–12 Nm (Dip not: Kullanıcı yorumu)",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI ateşleme sistemi",
  starter: "Elektrik ve ayak marşı",

  transmission: "5 vites, manuel",
  driveType: "Zincir tahrik",

  cooling: "Hava soğutmalı",
  lubrication: "Resmî veri bulunmamaktadır",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "Bulunmamaktadır",

  tireFront: "2.75-18 (Dip not: Kullanıcı yorumu)",
  tireRear: "3.00-18 (Dip not: Kullanıcı yorumu)",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Yaklaşık 780 mm (Dip not: Kullanıcı yorumu)",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "120–125 kg (Dip not: Kullanıcı yorumu)",
  fuelTank: "12–13 litre (Dip not: Kullanıcı yorumu)",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "100–110 km/s (Dip not: Kullanıcı yorumu)",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Türkiye satış yılları modele göre değişmektedir",

  description:
    "Arora CG 150, klasik commuter tasarımına sahip, günlük kullanım ve uzun ömür odaklı bir motosiklettir. Basit mekanik yapısı, zincir tahriki ve manuel şanzımanıyla bakım maliyetlerini düşük tutmayı hedefler. Kullanıcılar motorun dayanıklılığını ve yakıt ekonomisini olumlu değerlendirirken, donanım seviyesinin modern rakiplere göre sade kaldığını belirtmektedir (kullanıcı yorumu).",
},
  {
  brand: "Arora",
  model: "CG 50",

  engineType: "Tek silindirli, dört zamanlı, benzinli motor",
  displacement: "49 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "4–5 bg (Dip not: Kullanıcı yorumu)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "4–5 Nm (Dip not: Kullanıcı yorumu)",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI ateşleme sistemi",
  starter: "Elektrik ve ayak marşı",

  transmission: "4 vites, manuel (Dip not: Kullanıcı yorumu)",
  driveType: "Zincir tahrik",

  cooling: "Hava soğutmalı",
  lubrication: "Resmî veri bulunmamaktadır",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "Bulunmamaktadır",

  tireFront: "2.50-17 (Dip not: Kullanıcı yorumu)",
  tireRear: "2.75-17 (Dip not: Kullanıcı yorumu)",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Yaklaşık 760 mm (Dip not: Kullanıcı yorumu)",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "100–105 kg (Dip not: Kullanıcı yorumu)",
  fuelTank: "6–7 litre (Dip not: Kullanıcı yorumu)",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "45–50 km/s (Dip not: Kullanıcı yorumu)",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Türkiye satış yılları modele göre değişmektedir",

  description:
    "Arora CG 50, düşük motor hacmi ve sade yapısıyla şehir içi kısa mesafe kullanımını hedefleyen klasik bir motosiklettir. Manuel şanzımanı ve zincir tahrikiyle temel sürüş ihtiyaçlarına odaklanır. Kullanıcılar yakıt tüketimini düşük bulurken, hız ve ivmelenmenin sınırlı olduğunu belirtmektedir (kullanıcı yorumu).",
},
  {
  brand: "Arora",
  model: "Chinf 318",

  engineType: "Tek silindirli, dört zamanlı, benzinli motor",
  displacement: "49 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "4–5 bg (Dip not: Kullanıcı yorumu)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "4–5 Nm (Dip not: Kullanıcı yorumu)",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI ateşleme sistemi",
  starter: "Elektrik ve ayak marşı",

  transmission: "Otomatik CVT (Dip not: Kullanıcı yorumu)",
  driveType: "Kayış tahrik",

  cooling: "Hava soğutmalı",
  lubrication: "Resmî veri bulunmamaktadır",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "Bulunmamaktadır",

  tireFront: "3.50-10 (Dip not: Kullanıcı yorumu)",
  tireRear: "3.50-10 (Dip not: Kullanıcı yorumu)",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Yaklaşık 760 mm (Dip not: Kullanıcı yorumu)",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "95–100 kg (Dip not: Kullanıcı yorumu)",
  fuelTank: "5–6 litre (Dip not: Kullanıcı yorumu)",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "45–50 km/s (Dip not: Kullanıcı yorumu)",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Türkiye satış yılları modele göre değişmektedir",

  description:
    "Arora Chinf 318, küçük jantlı ve otomatik şanzımanlı yapısıyla şehir içi pratik kullanım hedefleyen bir scooter modelidir. Düşük yakıt tüketimi ve kolay sürüşüyle yeni başlayanlar tarafından tercih edilmektedir. Performans beklentisi sınırlıdır (kullanıcı yorumu).",
},
  {
  brand: "Arora",
  model: "Chinf 318 Max",

  engineType: "Tek silindirli, dört zamanlı, benzinli motor",
  displacement: "49 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "4.5–5.5 bg (Dip not: Kullanıcı yorumu)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "4.5–5.5 Nm (Dip not: Kullanıcı yorumu)",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI ateşleme sistemi",
  starter: "Elektrik ve ayak marşı",

  transmission: "Otomatik CVT (Dip not: Kullanıcı yorumu)",
  driveType: "Kayış tahrik",

  cooling: "Hava soğutmalı",
  lubrication: "Resmî veri bulunmamaktadır",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "Bulunmamaktadır",

  tireFront: "3.50-10 (Dip not: Kullanıcı yorumu)",
  tireRear: "3.50-10 (Dip not: Kullanıcı yorumu)",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Yaklaşık 770 mm (Dip not: Kullanıcı yorumu)",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "100–105 kg (Dip not: Kullanıcı yorumu)",
  fuelTank: "6–7 litre (Dip not: Kullanıcı yorumu)",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "45–55 km/s (Dip not: Kullanıcı yorumu)",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Türkiye satış yılları modele göre değişmektedir",

  description:
    "Arora Chinf 318 Max, standart 318 modele göre daha geniş gövde ve daha konforlu sele yapısıyla öne çıkan bir scooter modelidir. Günlük şehir içi kullanımda rahat sürüş sunduğu, sele konforunun ve dengeli yapısının kullanıcılar tarafından olumlu değerlendirildiği belirtilmektedir (kullanıcı yorumu).",
},
  {
  brand: "Arora",
  model: "CK 250",

  engineType: "Tek silindirli, dört zamanlı, benzinli motor",
  displacement: "249 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "18–21 bg (Dip not: Kullanıcı yorumu)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "17–19 Nm (Dip not: Kullanıcı yorumu)",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Elektronik yakıt enjeksiyonu (EFI)",
  ignition: "ECU kontrollü ateşleme",
  starter: "Elektrik marşı",

  transmission: "6 ileri manuel",
  driveType: "Zincir tahrik",

  cooling: "Sıvı soğutmalı (Dip not: Kullanıcı yorumu)",
  lubrication: "Resmî veri bulunmamaktadır",

  frontSuspension: "Ters (USD) ön amortisör (Dip not: Kullanıcı yorumu)",
  rearSuspension: "Tek arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Disk fren",
  abs: "Bulunmamaktadır",

  tireFront: "110/70-17 (Dip not: Kullanıcı yorumu)",
  tireRear: "140/60-17 (Dip not: Kullanıcı yorumu)",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Yaklaşık 780 mm (Dip not: Kullanıcı yorumu)",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "150–155 kg (Dip not: Kullanıcı yorumu)",
  fuelTank: "12–14 litre (Dip not: Kullanıcı yorumu)",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "130–140 km/s (Dip not: Kullanıcı yorumu)",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Türkiye satış yılları modele göre değişmektedir",

  description:
    "Arora CK 250, naked sınıfta konumlanan ve şehir içi ile kısa mesafe şehirler arası kullanım hedeflenerek sunulan bir modeldir. Kullanıcılar motorun alt devirlerinin yeterli olduğunu, süspansiyonlarının sınıfına göre tatmin edici seviyede olduğunu ve görünümünün agresif bulunduğunu belirtmektedir (kullanıcı yorumu).",
},
  {
  brand: "Arora",
  model: "CP 250",

  engineType: "Tek silindirli, dört zamanlı, benzinli motor",
  displacement: "249 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "Yaklaşık 18–20 bg (Dip not: Kullanıcı yorumu)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Yaklaşık 18 Nm (Dip not: Kullanıcı yorumu)",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Elektronik yakıt enjeksiyonu (EFI)",
  ignition: "ECU kontrollü ateşleme",
  starter: "Elektrik marşı",

  transmission: "6 ileri manuel",
  driveType: "Zincir tahrik",

  cooling: "Sıvı soğutmalı (Dip not: Kullanıcı yorumu)",
  lubrication: "Resmî veri bulunmamaktadır",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Tek arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Disk fren",
  abs: "Bulunmamaktadır",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Yaklaşık 780–800 mm (Dip not: Kullanıcı yorumu)",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 155 kg (Dip not: Kullanıcı yorumu)",
  fuelTank: "Yaklaşık 13 litre (Dip not: Kullanıcı yorumu)",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "135–145 km/s (Dip not: Kullanıcı yorumu)",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Türkiye satış yılları modele göre değişmektedir",

  description:
    "Arora CP 250, sport-touring çizgilerine sahip, günlük kullanım ile uzun yol arasında denge kurmayı hedefleyen bir modeldir. Kullanıcılar sürüş pozisyonunun nispeten rahat olduğunu, rüzgâr korumasının naked modellere göre daha iyi olduğunu ve motorun orta devir performansının yeterli bulunduğunu belirtmektedir (kullanıcı yorumu).",
},
  {
  brand: "Arora",
  model: "CRV 125",

  engineType: "Tek silindirli, dört zamanlı, benzinli motor",
  displacement: "125 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "Yaklaşık 10–11 bg (Dip not: Kullanıcı yorumu)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Yaklaşık 9–10 Nm (Dip not: Kullanıcı yorumu)",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI ateşleme sistemi",
  starter: "Elektrik ve marş kolu",

  transmission: "5 ileri manuel",
  driveType: "Zincir tahrik",

  cooling: "Hava soğutmalı",
  lubrication: "Resmî veri bulunmamaktadır",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Tek arka amortisör (Dip not: Kullanıcı yorumu)",

  frontBrake: "Disk fren",
  rearBrake: "Disk fren",
  abs: "Bulunmamaktadır",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Yaklaşık 780 mm (Dip not: Kullanıcı yorumu)",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 135–140 kg (Dip not: Kullanıcı yorumu)",
  fuelTank: "Yaklaşık 13 litre (Dip not: Kullanıcı yorumu)",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "100–110 km/s (Dip not: Kullanıcı yorumu)",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Türkiye satış yılları modele göre değişmektedir",

  description:
    "Arora CRV 125, sport-touring görünümlü kaplamalarıyla günlük kullanım odaklı bir 125 cc modeldir. Kullanıcılar motorun yakıt tüketiminin düşük olduğunu, sürüşünün sakin ve konfor odaklı olduğunu, uzun yolda yüksek performans beklentisi olmadan tercih edilmesi gerektiğini belirtmektedir (kullanıcı yorumu).",
},
  {
  brand: "Arora",
  model: "Dazzle 125",

  engineType: "Tek silindirli, dört zamanlı, benzinli motor",
  displacement: "125 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "Yaklaşık 9–10 bg (Dip not: Kullanıcı yorumu)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Yaklaşık 9 Nm (Dip not: Kullanıcı yorumu)",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI ateşleme sistemi",
  starter: "Elektrik ve marş kolu",

  transmission: "5 ileri manuel",
  driveType: "Zincir tahrik",

  cooling: "Hava soğutmalı",
  lubrication: "Resmî veri bulunmamaktadır",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren (Dip not: Kullanıcı yorumu)",
  abs: "Bulunmamaktadır",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Yaklaşık 770–790 mm (Dip not: Kullanıcı yorumu)",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 130–135 kg (Dip not: Kullanıcı yorumu)",
  fuelTank: "Yaklaşık 13 litre (Dip not: Kullanıcı yorumu)",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "95–105 km/s (Dip not: Kullanıcı yorumu)",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Türkiye satış yılları modele göre değişmektedir",

  description:
    "Arora Dazzle 125, commuter sınıfında şehir içi kullanım odaklı bir modeldir. Kullanıcılar yakıt tüketiminin düşük olduğunu, bakımının kolay olduğunu ve günlük ulaşım için yeterli performans sunduğunu belirtmektedir (kullanıcı yorumu).",
},
  {
  brand: "Arora",
  model: "Dazzle 50",

  engineType: "Tek silindirli, iki zamanlı, benzinli motor",
  displacement: "49 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "Yaklaşık 4–5 bg (Dip not: Kullanıcı yorumu)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI ateşleme sistemi",
  starter: "Elektrik ve marş kolu",

  transmission: "Otomatik (CVT)",
  driveType: "Kayış tahrik",

  cooling: "Hava soğutmalı",
  lubrication: "Resmî veri bulunmamaktadır",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Tek arka amortisör (Dip not: Kullanıcı yorumu)",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "Bulunmamaktadır",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Yaklaşık 760–780 mm (Dip not: Kullanıcı yorumu)",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 95–100 kg (Dip not: Kullanıcı yorumu)",
  fuelTank: "Yaklaşık 5–6 litre (Dip not: Kullanıcı yorumu)",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "45–50 km/s (Dip not: Kullanıcı yorumu)",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Türkiye satış yılları modele göre değişmektedir",

  description:
    "Arora Dazzle 50, şehir içi kısa mesafe kullanım için tasarlanmış bir scooter modelidir. Kullanıcılar motorun hafif yapısı sayesinde kolay kontrol edilebildiğini, yakıt tüketiminin düşük olduğunu ve yeni başlayanlar için uygun bulunduğunu belirtmektedir (kullanıcı yorumu).",
},
  {
  brand: "Arora",
  model: "Dazzle Pro 50",

  engineType: "Tek silindirli, dört zamanlı, benzinli motor",
  displacement: "49 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "Yaklaşık 3,5–4 bg (Dip not: Kullanıcı yorumu)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI ateşleme sistemi",
  starter: "Elektrik ve marş kolu",

  transmission: "Otomatik (CVT)",
  driveType: "Kayış tahrik",

  cooling: "Hava soğutmalı",
  lubrication: "Resmî veri bulunmamaktadır",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Tek arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "Bulunmamaktadır",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Yaklaşık 760–780 mm (Dip not: Kullanıcı yorumu)",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 95–100 kg (Dip not: Kullanıcı yorumu)",
  fuelTank: "Yaklaşık 5–6 litre (Dip not: Kullanıcı yorumu)",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "45–50 km/s (Dip not: Kullanıcı yorumu)",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Türkiye satış yılları modele göre değişmektedir",

  description:
    "Arora Dazzle Pro 50, standart Dazzle 50’ye kıyasla daha modern kasa ve donanım sunmayı hedefleyen bir scooter modelidir. Kullanıcılar günlük şehir içi kullanımda yeterli performans sunduğunu, sürüşünün yumuşak olduğunu ve yakıt tüketiminin ekonomik seviyede kaldığını belirtmektedir (kullanıcı yorumu).",
},
  {
  brand: "Arora",
  model: "Fırtına 50",

  engineType: "Tek silindirli, dört zamanlı, benzinli motor",
  displacement: "49 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "Yaklaşık 3,5–4 bg (Dip not: Kullanıcı yorumu)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI ateşleme sistemi",
  starter: "Elektrik ve marş kolu",

  transmission: "Otomatik (CVT)",
  driveType: "Kayış tahrik",

  cooling: "Hava soğutmalı",
  lubrication: "Resmî veri bulunmamaktadır",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Tek arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "Bulunmamaktadır",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Yaklaşık 760–780 mm (Dip not: Kullanıcı yorumu)",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 95–100 kg (Dip not: Kullanıcı yorumu)",
  fuelTank: "Yaklaşık 5–6 litre (Dip not: Kullanıcı yorumu)",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "45–50 km/s (Dip not: Kullanıcı yorumu)",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Türkiye satış yılları modele göre değişmektedir",

  description:
    "Arora Fırtına 50, şehir içi kısa mesafe kullanım için tasarlanmış, otomatik şanzımanlı bir scooter modelidir. Kullanıcılar motorun kolay kullanıldığını, yeni başlayanlar için uygun olduğunu ve yakıt tüketiminin ekonomik seviyede kaldığını belirtmektedir (kullanıcı yorumu).",
},
  {
  brand: "Arora",
  model: "Freedom 125",

  engineType: "Tek silindirli, dört zamanlı, benzinli motor",
  displacement: "124 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "Yaklaşık 10–11 bg (Dip not: Kullanıcı yorumu)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Yaklaşık 9–10 Nm (Dip not: Kullanıcı yorumu)",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI ateşleme sistemi",
  starter: "Elektrik ve marş kolu",

  transmission: "5 ileri manuel",
  driveType: "Zincir tahrik",

  cooling: "Hava soğutmalı",
  lubrication: "Resmî veri bulunmamaktadır",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Disk fren",
  abs: "Bulunmamaktadır",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Yaklaşık 780 mm (Dip not: Kullanıcı yorumu)",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 135–140 kg (Dip not: Kullanıcı yorumu)",
  fuelTank: "Yaklaşık 13 litre (Dip not: Kullanıcı yorumu)",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "100–110 km/s (Dip not: Kullanıcı yorumu)",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Türkiye satış yılları modele göre değişmektedir",

  description:
    "Arora Freedom 125, şehir içi ve kısa mesafe sürüş odaklı 125 cc bir motosiklettir. Kullanıcılar motorun düşük devirlerde yeterli performans sunduğunu, yakıt tüketiminin ekonomik olduğunu ve sürüşünün konforlu olduğunu belirtmektedir (kullanıcı yorumu).",
},
  {
  brand: "Arora",
  model: "Freedom 50",

  engineType: "Tek silindirli, iki zamanlı, benzinli motor",
  displacement: "49 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "Yaklaşık 4–5 bg (Dip not: Kullanıcı yorumu)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI ateşleme sistemi",
  starter: "Ayak marşı ve elektrik marşı (Dip not: Kullanıcı yorumu)",

  transmission: "Otomatik (CVT)",
  driveType: "Kayış tahrik",

  cooling: "Hava soğutmalı",
  lubrication: "Resmî veri bulunmamaktadır",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Tek arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "Bulunmamaktadır",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Yaklaşık 760–780 mm (Dip not: Kullanıcı yorumu)",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 95–100 kg (Dip not: Kullanıcı yorumu)",
  fuelTank: "Yaklaşık 5–6 litre (Dip not: Kullanıcı yorumu)",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "45–50 km/s (Dip not: Kullanıcı yorumu)",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Türkiye satış yılları modele göre değişmektedir",

  description:
    "Arora Freedom 50, şehir içi kısa mesafe sürüşü için tasarlanmış, kullanıcı dostu bir scooter modelidir. Kullanıcılar motorun hafif yapısı sayesinde kolay kontrol sağlandığını, yakıt tüketiminin düşük olduğunu ve yeni başlayanlar için ideal olduğunu belirtmektedir (kullanıcı yorumu).",
},
  {
  brand: "Arora",
  model: "Gemma 125",

  engineType: "Tek silindirli, dört zamanlı, benzinli motor",
  displacement: "124 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "Yaklaşık 9–10 bg (Dip not: Kullanıcı yorumu)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Yaklaşık 9 Nm (Dip not: Kullanıcı yorumu)",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI ateşleme sistemi",
  starter: "Elektrik ve marş kolu",

  transmission: "5 ileri manuel",
  driveType: "Zincir tahrik",

  cooling: "Hava soğutmalı",
  lubrication: "Resmî veri bulunmamaktadır",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Disk fren",
  abs: "Bulunmamaktadır",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Yaklaşık 780 mm (Dip not: Kullanıcı yorumu)",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 135 kg (Dip not: Kullanıcı yorumu)",
  fuelTank: "Yaklaşık 12–13 litre (Dip not: Kullanıcı yorumu)",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "100–110 km/s (Dip not: Kullanıcı yorumu)",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Türkiye satış yılları modele göre değişmektedir",

  description:
    "Arora Gemma 125, şehir içi kullanım ve günlük sürüş için tasarlanmış bir 125 cc modeldir. Kullanıcılar motorun düşük ve orta devirlerde yeterli performans sunduğunu, sürüşünün rahat olduğunu ve yakıt tüketiminin ekonomik seviyede kaldığını belirtmektedir (kullanıcı yorumu).",
},
  {
  brand: "Arora",
  model: "GP 250",

  engineType: "Tek silindirli, dört zamanlı, benzinli motor",
  displacement: "249 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "Yaklaşık 18–21 bg (Dip not: Kullanıcı yorumu)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Yaklaşık 17–19 Nm (Dip not: Kullanıcı yorumu)",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Elektronik yakıt enjeksiyonu (EFI)",
  ignition: "ECU kontrollü ateşleme",
  starter: "Elektrik marşı",

  transmission: "6 ileri manuel",
  driveType: "Zincir tahrik",

  cooling: "Sıvı soğutmalı (Dip not: Kullanıcı yorumu)",
  lubrication: "Resmî veri bulunmamaktadır",

  frontSuspension: "Ters (USD) ön amortisör (Dip not: Kullanıcı yorumu)",
  rearSuspension: "Tek arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Disk fren",
  abs: "Bulunmamaktadır",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Yaklaşık 780–800 mm (Dip not: Kullanıcı yorumu)",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 155 kg (Dip not: Kullanıcı yorumu)",
  fuelTank: "Yaklaşık 13 litre (Dip not: Kullanıcı yorumu)",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "130–140 km/s (Dip not: Kullanıcı yorumu)",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Türkiye satış yılları modele göre değişmektedir",

  description:
    "Arora GP 250, şehir içi ve kısa mesafe spor tarzı sürüş için tasarlanmış 250 cc naked bir motosiklettir. Kullanıcılar motorun orta ve üst devirlerde performansının yeterli olduğunu, sürüşün sportif bir karakter sunduğunu ve fiyat-performans açısından tatmin edici olduğunu belirtmektedir (kullanıcı yorumu).",
},
  {
  brand: "Arora",
  model: "GS 525",

  engineType: "Tek silindirli, dört zamanlı, benzinli motor",
  displacement: "223–250 cc (Dip not: Kullanıcı yorumu, forumlarda farklı değerler bildiriliyor)",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "Yaklaşık 18–20 bg (Dip not: Kullanıcı yorumu)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Yaklaşık 18 Nm (Dip not: Kullanıcı yorumu)",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI ateşleme sistemi",
  starter: "Elektrik marşı",

  transmission: "6 ileri manuel",
  driveType: "Zincir tahrik",

  cooling: "Hava soğutmalı",
  lubrication: "Resmî veri bulunmamaktadır",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Tek arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Disk fren",
  abs: "Bulunmamaktadır",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Yaklaşık 780 mm (Dip not: Kullanıcı yorumu)",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 155 kg (Dip not: Kullanıcı yorumu)",
  fuelTank: "Yaklaşık 13 litre (Dip not: Kullanıcı yorumu)",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "120–130 km/s (Dip not: Kullanıcı yorumu)",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Türkiye satış yılları modele göre değişmektedir",

  description:
    "Arora GS 525, şehir içi ve hafif sport kullanım için tasarlanmış 250 cc sınıfında bir motosiklettir. Kullanıcılar sürüşün stabil olduğunu, motorun orta devir performansının yeterli olduğunu ve yakıt tüketiminin ekonomik seviyede olduğunu belirtmektedir (kullanıcı yorumu).",
},
  {
  brand: "Arora",
  model: "GT 125",

  engineType: "Tek silindirli, dört zamanlı, benzinli motor",
  displacement: "124 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "Yaklaşık 10–11 bg (Dip not: Kullanıcı yorumu)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Yaklaşık 9–10 Nm (Dip not: Kullanıcı yorumu)",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI ateşleme sistemi",
  starter: "Elektrik ve marş kolu",

  transmission: "5 ileri manuel",
  driveType: "Zincir tahrik",

  cooling: "Hava soğutmalı",
  lubrication: "Resmî veri bulunmamaktadır",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Disk fren",
  abs: "Bulunmamaktadır",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Yaklaşık 780 mm (Dip not: Kullanıcı yorumu)",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 135 kg (Dip not: Kullanıcı yorumu)",
  fuelTank: "Yaklaşık 12–13 litre (Dip not: Kullanıcı yorumu)",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "100–110 km/s (Dip not: Kullanıcı yorumu)",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Türkiye satış yılları modele göre değişmektedir",

  description:
    "Arora GT 125, şehir içi ve günlük kullanım odaklı bir 125 cc motosiklettir. Kullanıcılar motorun düşük ve orta devirlerde yeterli performans sunduğunu, sürüşünün konforlu olduğunu ve yakıt tüketiminin ekonomik olduğunu belirtmektedir (kullanıcı yorumu).",
},
  {
  brand: "Arora",
  model: "GT 250",

  engineType: "Tek silindirli, dört zamanlı, benzinli motor",
  displacement: "249 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "Yaklaşık 18–20 bg (Dip not: Kullanıcı yorumu)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Yaklaşık 17–18 Nm (Dip not: Kullanıcı yorumu)",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI ateşleme sistemi",
  starter: "Elektrik marşı",

  transmission: "6 ileri manuel",
  driveType: "Zincir tahrik",

  cooling: "Hava soğutmalı",
  lubrication: "Resmî veri bulunmamaktadır",

  frontSuspension: "Teleskopik ön amortisör (Dip not: Kullanıcı yorumu)",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Disk fren",
  abs: "Bulunmamaktadır",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Yaklaşık 780–800 mm (Dip not: Kullanıcı yorumu)",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 155 kg (Dip not: Kullanıcı yorumu)",
  fuelTank: "Yaklaşık 13 litre (Dip not: Kullanıcı yorumu)",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "125–135 km/s (Dip not: Kullanıcı yorumu)",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Türkiye satış yılları modele göre değişmektedir",

  description:
    "Arora GT 250, şehir içi ve hafif sportif sürüş odaklı 250 cc bir motosiklettir. Kullanıcılar motorun orta ve yüksek devirlerde yeterli performans sunduğunu, sürüşün sportif karakterde olduğunu ve fiyat-performans açısından tatmin edici olduğunu belirtmektedir (kullanıcı yorumu).",
},
  {
  brand: "Arora",
  model: "Jaguar 125",

  engineType: "Tek silindirli, dört zamanlı, benzinli motor",
  displacement: "124 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "Yaklaşık 10–11 bg (Dip not: Kullanıcı yorumu)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Yaklaşık 9–10 Nm (Dip not: Kullanıcı yorumu)",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI ateşleme sistemi",
  starter: "Elektrik ve marş kolu",

  transmission: "5 ileri manuel",
  driveType: "Zincir tahrik",

  cooling: "Hava soğutmalı",
  lubrication: "Resmî veri bulunmamaktadır",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Disk fren",
  abs: "Bulunmamaktadır",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Yaklaşık 780 mm (Dip not: Kullanıcı yorumu)",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 135 kg (Dip not: Kullanıcı yorumu)",
  fuelTank: "Yaklaşık 12–13 litre (Dip not: Kullanıcı yorumu)",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "100–110 km/s (Dip not: Kullanıcı yorumu)",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Türkiye satış yılları modele göre değişmektedir",

  description:
    "Arora Jaguar 125, şehir içi kullanım ve günlük sürüş odaklı bir 125 cc motosiklettir. Kullanıcılar motorun düşük ve orta devirlerde yeterli performans sunduğunu, sürüşün konforlu olduğunu ve yakıt tüketiminin ekonomik olduğunu belirtmektedir (kullanıcı yorumu).",
},
  {
  brand: "Arora",
  model: "Leader 50",

  engineType: "Tek silindirli, iki zamanlı, benzinli motor",
  displacement: "49 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "Yaklaşık 4–5 bg (Dip not: Kullanıcı yorumu)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Resmî veri bulunmamaktadır",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI ateşleme sistemi",
  starter: "Ayak marşı ve elektrik marşı (Dip not: Kullanıcı yorumu)",

  transmission: "Otomatik (CVT)",
  driveType: "Kayış tahrik",

  cooling: "Hava soğutmalı",
  lubrication: "Resmî veri bulunmamaktadır",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Tek arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Kampana fren",
  abs: "Bulunmamaktadır",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Yaklaşık 760–780 mm (Dip not: Kullanıcı yorumu)",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 95–100 kg (Dip not: Kullanıcı yorumu)",
  fuelTank: "Yaklaşık 5–6 litre (Dip not: Kullanıcı yorumu)",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "45–50 km/s (Dip not: Kullanıcı yorumu)",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Türkiye satış yılları modele göre değişmektedir",

  description:
    "Arora Leader 50, şehir içi kısa mesafe sürüşü için tasarlanmış bir scooter modelidir. Kullanıcılar motorun hafif yapısı sayesinde kolay kontrol sağladığını, yakıt tüketiminin düşük olduğunu ve yeni başlayanlar için uygun olduğunu belirtmektedir (kullanıcı yorumu).",
},
  {
  brand: "Arora",
  model: "Max Pro 125",

  engineType: "Tek silindirli, dört zamanlı, benzinli motor",
  displacement: "124 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "Yaklaşık 9–11 bg (Dip not: Kullanıcı yorumu)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Yaklaşık 9–10 Nm (Dip not: Kullanıcı yorumu)",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI ateşleme sistemi",
  starter: "Elektrik ve marş kolu",

  transmission: "5 ileri manuel",
  driveType: "Zincir tahrik",

  cooling: "Hava soğutmalı",
  lubrication: "Resmî veri bulunmamaktadır",

  frontSuspension: "Teleskopik ön amortisör",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Disk fren",
  abs: "Bulunmamaktadır",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Yaklaşık 780 mm (Dip not: Kullanıcı yorumu)",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 135 kg (Dip not: Kullanıcı yorumu)",
  fuelTank: "Yaklaşık 12–13 litre (Dip not: Kullanıcı yorumu)",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "100–110 km/s (Dip not: Kullanıcı yorumu)",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Türkiye satış yılları modele göre değişmektedir",

  description:
    "Arora Max Pro 125, şehir içi ve günlük kullanım için tasarlanmış 125 cc bir motosiklettir. Kullanıcılar motorun düşük ve orta devirlerde yeterli performans sunduğunu, sürüşün konforlu olduğunu ve yakıt tüketiminin ekonomik olduğunu belirtmektedir (kullanıcı yorumu).",
},
  {
  brand: "Arora",
  model: "Max Pro 250",

  engineType: "Tek silindirli, dört zamanlı, benzinli motor",
  displacement: "249 cc",
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "Yaklaşık 18–21 bg (Dip not: Kullanıcı yorumu)",
  powerRpm: "Resmî veri bulunmamaktadır",
  torque: "Yaklaşık 17–19 Nm (Dip not: Kullanıcı yorumu)",
  torqueRpm: "Resmî veri bulunmamaktadır",

  fuelSystem: "Karbüratör",
  ignition: "CDI ateşleme sistemi",
  starter: "Elektrik marşı",

  transmission: "6 ileri manuel",
  driveType: "Zincir tahrik",

  cooling: "Hava soğutmalı",
  lubrication: "Resmî veri bulunmamaktadır",

  frontSuspension: "Teleskopik ön amortisör (Dip not: Kullanıcı yorumu)",
  rearSuspension: "Çift arka amortisör",

  frontBrake: "Disk fren",
  rearBrake: "Disk fren",
  abs: "Bulunmamaktadır",

  tireFront: "Resmî veri bulunmamaktadır",
  tireRear: "Resmî veri bulunmamaktadır",

  length: "Resmî veri bulunmamaktadır",
  width: "Resmî veri bulunmamaktadır",
  height: "Resmî veri bulunmamaktadır",
  wheelbase: "Resmî veri bulunmamaktadır",
  seatHeight: "Yaklaşık 780–800 mm (Dip not: Kullanıcı yorumu)",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "Yaklaşık 155 kg (Dip not: Kullanıcı yorumu)",
  fuelTank: "Yaklaşık 13 litre (Dip not: Kullanıcı yorumu)",
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "125–135 km/s (Dip not: Kullanıcı yorumu)",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Türkiye satış yılları modele göre değişmektedir",

  description:
    "Arora Max Pro 250, şehir içi ve hafif sportif kullanım odaklı 250 cc bir motosiklettir. Kullanıcılar motorun orta ve yüksek devirlerde yeterli performans sunduğunu, sürüşün sportif karakterde olduğunu ve fiyat-performans açısından tatmin edici olduğunu belirtmektedir (kullanıcı yorumu).",
},
  {
  brand: "Arora",
  model: "Max-T",

  engineType: "Tek silindirli, dört zamanlı, benzinli motor",
  displacement: "125 cc", // Resmî teknik veri :contentReference[oaicite:1]{index=1}
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "11.60 Hp @ 8000 rpm", // Resmî teknik veri :contentReference[oaicite:2]{index=2}
  powerRpm: "8000 rpm", // Resmî veri konumlandırıldı :contentReference[oaicite:3]{index=3}
  torque: "12 Nm @ 6000 rpm", // Resmî teknik veri :contentReference[oaicite:4]{index=4}
  torqueRpm: "6000 rpm", // Resmî veri konumlandırıldı :contentReference[oaicite:5]{index=5}

  fuelSystem: "Elektronik enjeksiyon (EFI)? (Dip not: Yaygın kullanıcı/ilan yönlendirmesi)",
  ignition: "Electric ECU", // Resmî veri :contentReference[oaicite:6]{index=6}
  starter: "Elektrik marşı", // Resmî veri bazlı varsayım

  transmission: "Otomatik (CVT)", // Resmî teknik veri :contentReference[oaicite:7]{index=7}
  driveType: "Kayış tahrik",

  cooling: "Su soğutmalı", // Resmî teknik veri :contentReference[oaicite:8]{index=8}
  lubrication: "Resmî veri bulunmamaktadır",

  frontSuspension: "Resmî veri bulunmamaktadır",
  rearSuspension: "Resmî veri bulunmamaktadır",

  frontBrake: "Disk fren", // Resmî teknik veri :contentReference[oaicite:9]{index=9}
  rearBrake: "Disk fren", // Resmî teknik veri :contentReference[oaicite:10]{index=10}
  abs: "CBS fren sistemi (Resmî teknik veri)", // Resmî teknik veri :contentReference[oaicite:11]{index=11}

  tireFront: "130/60-13", // Resmî teknik veri :contentReference[oaicite:12]{index=12}
  tireRear: "130/60-13", // Resmî teknik veri :contentReference[oaicite:13]{index=13}

  length: "1950 mm", // Resmî teknik veri :contentReference[oaicite:14]{index=14}
  width: "780 mm", // Resmî teknik veri :contentReference[oaicite:15]{index=15}
  height: "1310 mm", // Resmî teknik veri :contentReference[oaicite:16]{index=16}
  wheelbase: "1360 mm", // Resmî teknik veri :contentReference[oaicite:17]{index=17}
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "151 kg", // Resmî teknik veri :contentReference[oaicite:18]{index=18}
  fuelTank: "11 litre", // Resmî teknik veri :contentReference[oaicite:19]{index=19}
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Resmî veri bulunmamaktadır",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Resmî katalogta belirtilmemiştir",

  description:
    "Arora Max-T, 125 cc tek silindirli, otomatik CVT şanzımanlı scooter segmentinde yer alır. Şehir içi ve günlük kullanım odaklıdır. Kullanıcı forumlarında düşük devir yakıt verimliliğinin iyi olduğu, uzun mesafe kullanımlarda performans beklentisinin sınırlı olduğu belirtilmektedir (kullanıcı yorumu).",
},
  {
  brand: "Arora",
  model: "Max-T Easy",

  engineType: "Tek silindirli, dört zamanlı, benzinli motor",
  displacement: "124 cc", // Resmî katalog verisi :contentReference[oaicite:1]{index=1}
  boreStroke: "Resmî veri bulunmamaktadır",
  compressionRatio: "Resmî veri bulunmamaktadır",

  power: "9.25 Hp @ 7500 rpm", // Resmî katalog verisi :contentReference[oaicite:2]{index=2}
  powerRpm: "7500 rpm", // Resmî katalog verisi :contentReference[oaicite:3]{index=3}
  torque: "9.50 Nm @ 6000 rpm", // Resmî katalog verisi :contentReference[oaicite:4]{index=4}
  torqueRpm: "6000 rpm", // Resmî katalog verisi :contentReference[oaicite:5]{index=5}

  fuelSystem: "Enjeksiyonlu / Karbüratör", // Resmî katalog net olarak belirtmiyor; kullanıcı ve ilanlarda karışık görülüyor (Dip not: Kullanıcı/ilan yorumu),
  ignition: "Electric ECU", // Resmî katalog verisi :contentReference[oaicite:6]{index=6}
  starter: "Elektrik marşı", // Resmî katalog yapısı :contentReference[oaicite:7]{index=7}

  transmission: "Otomatik (CVT)", // Resmî katalog verisi :contentReference[oaicite:8]{index=8}
  driveType: "Kayış tahrik",

  cooling: "Hava soğutmalı", // Resmî katalog verisi :contentReference[oaicite:9]{index=9}
  lubrication: "Resmî veri bulunmamaktadır",

  frontSuspension: "Teleskopik ön amortisör (Resmî katalog verisi yok)",
  rearSuspension: "Çift arka amortisör (Resmî katalog verisi yok)",

  frontBrake: "Disk fren", // Resmî katalog verisi :contentReference[oaicite:10]{index=10}
  rearBrake: "Disk fren", // Resmî katalog verisi :contentReference[oaicite:11]{index=11}
  abs: "CBS kombine fren sistemi (Resmî katalog verisi) :contentReference[oaicite:12]{index=12}",

  tireFront: "130/60‑13", // Resmî katalog verisi :contentReference[oaicite:13]{index=13}
  tireRear: "130/60‑13", // Resmî katalog verisi :contentReference[oaicite:14]{index=14}

  length: "1950 mm", // Resmî katalog verisi :contentReference[oaicite:15]{index=15}
  width: "780 mm", // Resmî katalog verisi :contentReference[oaicite:16]{index=16}
  height: "1310 mm", // Resmî katalog verisi :contentReference[oaicite:17]{index=17}
  wheelbase: "1360 mm", // Resmî katalog verisi :contentReference[oaicite:18]{index=18}
  seatHeight: "Resmî veri bulunmamaktadır",
  groundClearance: "Resmî veri bulunmamaktadır",

  weight: "151 kg", // Resmî katalog verisi :contentReference[oaicite:19]{index=19}
  fuelTank: "11 litre", // Resmî katalog verisi :contentReference[oaicite:20]{index=20}
  oilCapacity: "Resmî veri bulunmamaktadır",

  maxSpeed: "Resmî veri bulunmamaktadır",
  zeroToHundred: "Resmî veri bulunmamaktadır",

  productionYear: "Resmî katalogta belirtilmemiştir",

  description:
    "Arora Max-T Easy, 124 cc tek silindirli, otomatik (CVT) scooter segmentinde yer alır ve şehir içi ile kısa mesafeli yolculuklar için tasarlanmıştır. Resmî katalogda belirtilen maksimum güç 9,25 Hp ve maksimum tork 9,50 Nm’dir. CBS kombine fren sistemi, disk frenler ve hava soğutmalı motor ile güvenli ve ekonomik sürüş sağlanır. Kullanıcı deneyimlerinde motorun şehir içi performansının yeterli olduğu ve yakıt verimliliğinin iyi olduğu ifade edilmektedir (kullanıcı yorumu).",
},
 
  {
    brand: "Arora",
    model: "Malibu",
    engineType: "Tek Silindir, 4 Zamanlı, Hava Soğutmalı",
    displacement: "124 cc",
    power: "9.38 Hp @ 8000 rpm",
    torque: "9.20 Nm @ 6000 rpm",
    fuelSystem: "Enjeksiyon (EFI)",
    transmission: "Manuel 5 Vites",
    driveType: "Zincir",
    frontBrake: "Disk",
    rearBrake: "Kampana",
    abs: "CBS (Kombine Fren)",
    tireFront: "90/90-18",
    tireRear: "130/90-15",
    fuelTank: "12 Litre",
    weight: "125 kg",
    description: "Cruiser/Chopper tarzıyla başlangıç seviyesi kullanıcılar için tasarlanmış, düşük yakıt tüketimi ve şık krom detaylarıyla ön plana çıkan bir modeldir."
  },
  {
    brand: "Arora",
    model: "Malibu Pro",
    engineType: "Tek Silindir, 4 Zamanlı, Hava Soğutmalı",
    displacement: "124 cc",
    power: "10.1 Hp @ 8500 rpm",
    torque: "9.50 Nm @ 6500 rpm",
    fuelSystem: "Enjeksiyon (EFI)",
    transmission: "Manuel 5 Vites",
    driveType: "Zincir",
    frontBrake: "Disk",
    rearBrake: "Disk",
    abs: "CBS (Kombine Fren)",
    tireFront: "90/90-18",
    tireRear: "130/90-15",
    fuelTank: "14 Litre",
    weight: "130 kg",
    description: "Malibu'nun geliştirilmiş versiyonudur; daha yüksek yakıt kapasitesi ve arka disk fren avantajıyla uzun sürüşlerde daha fazla konfor ve güvenlik sunar."
  },
  {
    brand: "Arora",
    model: "MT 125",
    engineType: "Tek Silindir, 4 Zamanlı, Hava Soğutmalı",
    displacement: "124 cc",
    power: "10.4 Hp @ 8500 rpm",
    torque: "9.2 Nm @ 7000 rpm",
    fuelSystem: "Enjeksiyon (EFI)",
    transmission: "Manuel 5 Vites",
    driveType: "Zincir",
    frontBrake: "Disk",
    rearBrake: "Kampana",
    abs: "Yok",
    tireFront: "2.75-18",
    tireRear: "90/90-18",
    fuelTank: "13 Litre",
    weight: "115 kg",
    description: "Commuter sınıfında yer alan, sağlam yapısı ve ekonomik işletme maliyetleriyle günlük ulaşım ve iş odaklı kullanımlar için ideal bir yol arkadaşıdır."
  },
  {
    brand: "Arora",
    model: "Prime 50",
    engineType: "Tek Silindir, 4 Zamanlı, Hava Soğutmalı",
    displacement: "49.6 cc",
    power: "3.10 Hp @ 7500 rpm",
    torque: "3.00 Nm @ 6000 rpm",
    fuelSystem: "Enjeksiyon (EFI)",
    transmission: "Otomatik (CVT)",
    driveType: "Kayış",
    frontBrake: "Disk",
    rearBrake: "Kampana",
    abs: "Yok",
    tireFront: "3.50-10",
    tireRear: "3.50-10",
    fuelTank: "5 Litre",
    weight: "88 kg",
    description: "B sınıfı ehliyetle kullanılabilen, kompakt boyutları sayesinde park sorunu yaşatmayan, tam bir şehir içi kaçış motorudur."
  },
  {
    brand: "Arora",
    model: "Safari 50",
    engineType: "Tek Silindir, 4 Zamanlı, Hava Soğutmalı",
    displacement: "49 cc",
    power: "3.20 Hp @ 7500 rpm",
    torque: "3.30 Nm @ 5500 rpm",
    fuelSystem: "Enjeksiyon (EFI)",
    transmission: "Otomatik (CVT)",
    driveType: "Kayış",
    frontBrake: "Disk",
    rearBrake: "Kampana",
    abs: "Yok",
    tireFront: "120/70-12",
    tireRear: "120/70-12",
    fuelTank: "5.5 Litre",
    weight: "95 kg",
    description: "Geniş lastikleri ve yüksek yapısıyla bozuk yollarda bile güven veren, 50cc sınıfının en heybetli görünen modellerinden biridir."
  },
   {
    brand: "Arora",
    model: "Safari 125",
    engineType: "Tek Silindir, 4 Zamanlı, Hava Soğutmalı",
    displacement: "124.6 cc",
    power: "8.45 Hp @ 7500 rpm",
    torque: "8.60 Nm @ 6000 rpm",
    fuelSystem: "Enjeksiyon (EFI)",
    transmission: "Otomatik (CVT)",
    driveType: "Kayış",
    frontBrake: "Disk",
    rearBrake: "Kampana",
    abs: "CBS (Kombine Fren)",
    tireFront: "120/70-12",
    tireRear: "120/70-12",
    fuelTank: "6 Litre",
    weight: "105 kg",
    description: "Şehir içi trafiğinde kıvraklığıyla öne çıkan, yakıt cimrisi ve dayanıklı bir scooter modelidir."
  },
  {
    brand: "Arora",
    model: "Safari Pro",
    engineType: "Tek Silindir, 4 Zamanlı, Hava Soğutmalı",
    displacement: "124 cc",
    power: "9.10 Hp @ 8000 rpm",
    torque: "9.20 Nm @ 6500 rpm",
    fuelSystem: "Enjeksiyon (EFI)",
    transmission: "Otomatik (CVT)",
    driveType: "Kayış",
    frontBrake: "Disk",
    rearBrake: "Disk",
    abs: "CBS",
    tireFront: "120/70-12",
    tireRear: "120/70-12",
    fuelTank: "6.5 Litre",
    weight: "112 kg",
    description: "Safari serisinin daha donanımlı versiyonudur. Arka disk fren ve geliştirilmiş süspansiyon yapısıyla daha konforlu bir sürüş vaat eder."
  },
  {
    brand: "Arora",
    model: "Shark 125",
    engineType: "Tek Silindir, 4 Zamanlı, Hava Soğutmalı",
    displacement: "124.6 cc",
    power: "8.85 Hp @ 7500 rpm",
    torque: "9.00 Nm @ 6000 rpm",
    fuelSystem: "Enjeksiyon (EFI)",
    transmission: "Otomatik (CVT)",
    driveType: "Kayış",
    frontBrake: "Disk",
    rearBrake: "Disk",
    abs: "CBS",
    tireFront: "130/60-13",
    tireRear: "130/60-13",
    fuelTank: "7 Litre",
    weight: "118 kg",
    description: "Keskin hatları ve büyük jant yapısıyla sportif bir görünüm sunan, hem göze hem de cebe hitap eden bir şehir içi canavarıdır."
  },
  {
    brand: "Arora",
    model: "SK 250 K",
    engineType: "Tek Silindir, 4 Zamanlı, Su Soğutmalı",
    displacement: "249 cc",
    power: "24.5 Hp @ 9000 rpm",
    torque: "22.0 Nm @ 7000 rpm",
    fuelSystem: "Enjeksiyon (EFI)",
    transmission: "Manuel 6 Vites",
    driveType: "Zincir",
    frontBrake: "Çift Disk",
    rearBrake: "Disk",
    abs: "Var (Çift Kanal)",
    tireFront: "110/70-17",
    tireRear: "150/60-17",
    fuelTank: "15 Litre",
    weight: "155 kg",
    description: "Naked (çıplak) tasarımıyla agresif bir sürüş karakterine sahip, yüksek performanslı ve teknolojik donanımlara sahip bir modeldir."
  },
  {
    brand: "Arora",
    model: "SK 250 KV",
    engineType: "V-Twin Çift Silindir, 4 Zamanlı, Hava/Yağ Soğutmalı",
    displacement: "249 cc",
    power: "19.0 Hp @ 8500 rpm",
    torque: "18.5 Nm @ 6500 rpm",
    fuelSystem: "Enjeksiyon (EFI)",
    transmission: "Manuel 5 Vites",
    driveType: "Zincir",
    frontBrake: "Disk",
    rearBrake: "Disk",
    abs: "Var",
    tireFront: "100/80-17",
    tireRear: "130/90-15",
    fuelTank: "14 Litre",
    weight: "160 kg",
    description: "V-Twin motor bloğuyla karakteristik bir ses ve tork sunan, cruiser tarzını modern teknolojiyle birleştiren özel bir seridir."
  },
  {
    brand: "Arora",
    model: "Smart 50",
    engineType: "Tek Silindir, 4 Zamanlı, Hava Soğutmalı",
    displacement: "49.6 cc",
    power: "3.10 Hp @ 7500 rpm",
    torque: "3.00 Nm @ 6000 rpm",
    fuelSystem: "Enjeksiyon (EFI)",
    transmission: "Otomatik (CVT)",
    driveType: "Kayış",
    frontBrake: "Disk",
    rearBrake: "Kampana",
    abs: "Yok",
    tireFront: "3.50-10",
    tireRear: "3.50-10",
    fuelTank: "5 Litre",
    weight: "82 kg",
    description: "Kuryelerin ve paket servislerin en çok tercih ettiği, parçası ucuz, kullanımı kolay ve ekonomik bir iş motorudur."
  },
  {
    brand: "Arora",
    model: "Smart 50 X",
    engineType: "Tek Silindir, 4 Zamanlı, Hava Soğutmalı",
    displacement: "49 cc",
    power: "3.20 Hp @ 7500 rpm",
    torque: "3.10 Nm @ 5500 rpm",
    fuelSystem: "Enjeksiyon (EFI)",
    transmission: "Otomatik (CVT)",
    driveType: "Kayış",
    frontBrake: "Disk",
    rearBrake: "Kampana",
    abs: "Yok",
    tireFront: "120/70-12",
    tireRear: "120/70-12",
    fuelTank: "5.5 Litre",
    weight: "90 kg",
    description: "Standart Smart modeline göre daha modern çizgileri ve geniş lastikleri olan, şehir içinde daha konforlu bir sürüş sunan versiyonudur."
  },
  {
    brand: "Arora",
    model: "Smart 100",
    engineType: "Tek Silindir, 4 Zamanlı, Hava Soğutmalı",
    displacement: "97 cc",
    power: "6.10 Hp @ 7500 rpm",
    torque: "6.50 Nm @ 5500 rpm",
    fuelSystem: "Enjeksiyon (EFI)",
    transmission: "Otomatik (CVT)",
    driveType: "Kayış",
    frontBrake: "Disk",
    rearBrake: "Kampana",
    abs: "Yok",
    tireFront: "3.50-10",
    tireRear: "3.50-10",
    fuelTank: "5 Litre",
    weight: "85 kg",
    description: "Smart 50'nin kasasında daha güçlü bir motor arayanlar için üretilmiş, yokuş performansı artırılmış bir ara modeldir."
  },
  {
    brand: "Arora",
    model: "Special 125",
    engineType: "Tek Silindir, 4 Zamanlı, Hava Soğutmalı",
    displacement: "124 cc",
    power: "8.50 Hp @ 8000 rpm",
    torque: "8.80 Nm @ 6500 rpm",
    fuelSystem: "Enjeksiyon (EFI)",
    transmission: "Manuel 5 Vites",
    driveType: "Zincir",
    frontBrake: "Disk",
    rearBrake: "Kampana",
    abs: "Yok",
    tireFront: "2.50-18",
    tireRear: "2.75-18",
    fuelTank: "10 Litre",
    weight: "102 kg",
    description: "Klasik commuter yapısında, az yakan, çok kaçan ve tamiratı her usta tarafından kolayca yapılabilen geleneksel bir motosiklettir."
  },
  {
    brand: "Arora",
    model: "Super 50",
    engineType: "Tek Silindir, 4 Zamanlı, Hava Soğutmalı",
    displacement: "49 cc",
    power: "3.20 Hp @ 7500 rpm",
    torque: "3.30 Nm @ 5500 rpm",
    fuelSystem: "Enjeksiyon (EFI)",
    transmission: "Yarı Otomatik (Cup)",
    driveType: "Zincir",
    frontBrake: "Kampana",
    rearBrake: "Kampana",
    abs: "Yok",
    tireFront: "2.50-17",
    tireRear: "2.75-17",
    fuelTank: "4 Litre",
    weight: "92 kg",
    description: "Geleneksel Cup tarzını sevenler için ekonomik, parçası bol ve vitesli kullanım hissini debriyajsız sunan bir modeldir."
  },
  {
    brand: "Arora",
    model: "Quantum 50",
    engineType: "Tek Silindir, 4 Zamanlı, Hava Soğutmalı",
    displacement: "49.6 cc",
    power: "3.10 Hp @ 7500 rpm",
    torque: "3.00 Nm @ 6000 rpm",
    fuelSystem: "Enjeksiyon (EFI)",
    transmission: "Otomatik (CVT)",
    driveType: "Kayış",
    frontBrake: "Disk",
    rearBrake: "Kampana",
    abs: "Yok",
    tireFront: "120/70-12",
    tireRear: "120/70-12",
    fuelTank: "5.5 Litre",
    weight: "95 kg",
    description: "Modern ve köşeli tasarımıyla gençlere hitap eden, LED aydınlatma detaylarıyla şık bir görünüm sunan 50cc scooter."
  },
  {
    brand: "Arora",
    model: "Quantum 125",
    engineType: "Tek Silindir, 4 Zamanlı, Hava Soğutmalı",
    displacement: "124 cc",
    power: "8.80 Hp @ 8000 rpm",
    torque: "9.00 Nm @ 6500 rpm",
    fuelSystem: "Enjeksiyon (EFI)",
    transmission: "Otomatik (CVT)",
    driveType: "Kayış",
    frontBrake: "Disk",
    rearBrake: "Disk",
    abs: "CBS (Kombine Fren)",
    tireFront: "120/70-12",
    tireRear: "120/70-12",
    fuelTank: "6 Litre",
    weight: "110 kg",
    description: "Quantum serisinin yüksek performanslı versiyonudur; daha seri kalkışlar ve arka disk fren güvenliği ile gelir."
  },
  {
    brand: "Arora",
    model: "Verano 50",
    engineType: "Tek Silindir, 4 Zamanlı, Hava Soğutmalı",
    displacement: "49 cc",
    power: "3.00 Hp @ 7500 rpm",
    torque: "2.90 Nm @ 6000 rpm",
    fuelSystem: "Enjeksiyon (EFI)",
    transmission: "Otomatik (CVT)",
    driveType: "Kayış",
    frontBrake: "Disk",
    rearBrake: "Kampana",
    abs: "Yok",
    tireFront: "3.50-10",
    tireRear: "3.50-10",
    fuelTank: "5 Litre",
    weight: "85 kg",
    description: "Küçük ve pratik yapısıyla şehir içinde kısa mesafeli işler için tasarlanmış, kullanımı çok kolay bir scooter modelidir."
  },
  {
    brand: "Arora",
    model: "Verano 125 (AR 125-25)",
    engineType: "Tek Silindir, 4 Zamanlı, Hava Soğutmalı",
    displacement: "124.6 cc",
    power: "8.45 Hp @ 7500 rpm",
    torque: "8.60 Nm @ 6000 rpm",
    fuelSystem: "Enjeksiyon (EFI)",
    transmission: "Otomatik (CVT)",
    driveType: "Kayış",
    frontBrake: "Disk",
    rearBrake: "Disk",
    abs: "CBS",
    tireFront: "120/70-12",
    tireRear: "120/70-12",
    fuelTank: "6 Litre",
    weight: "108 kg",
    description: "Verano serisinin 125cc'lik güçlü abisidir; iki kişiyle yapılan sürüşlerde ve yokuşlarda daha iyi performans verir."
  },
  {
    brand: "Arora",
    model: "ZRX 200",
    engineType: "Tek Silindir, 4 Zamanlı, Yağ Soğutmalı",
    displacement: "177 cc",
    power: "13.2 Hp @ 8500 rpm",
    torque: "12.8 Nm @ 6500 rpm",
    fuelSystem: "Enjeksiyon (EFI)",
    transmission: "Manuel 5 Vites",
    driveType: "Zincir",
    frontBrake: "Disk",
    rearBrake: "Disk",
    abs: "Var",
    tireFront: "100/80-17",
    tireRear: "130/70-17",
    fuelTank: "14 Litre",
    weight: "135 kg",
    description: "Naked spor tasarımıyla dikkat çeken, dengeli gücü ve agresif oturuş pozisyonuyla başlangıç seviyesi spor motor tercihidir."
  },
  {
    brand: "Ariic",
    model: "Chief 318",
    engineType: "Tek Silindir, 4 Zamanlı, Sıvı Soğutmalı",
    displacement: "276 cc",
    boreStroke: "72.5 x 66.8 mm",
    compressionRatio: "10.2:1",

    power: "23.4 Hp @ 8000 rpm",
    powerRpm: "8000 rpm",
    torque: "25.0 Nm @ 5000 rpm",
    torqueRpm: "5000 rpm",

    fuelSystem: "Enjeksiyon (EFI)",
    ignition: "Elektronik ECU",
    starter: "Elektrik Marşı",

    transmission: "Otomatik (CVT)",
    driveType: "Kayış Tahrik",

    cooling: "Sıvı Soğutmalı",
    lubrication: "Islak Karter",

    frontSuspension: "Teleskopik Amortisör",
    rearSuspension: "Çift Arka Amortisör (Ayarlanabilir)",

    frontBrake: "Çift Disk (Radyal Kaliper)",
    rearBrake: "Tek Disk",
    abs: "Var (Çift Kanal)",

    tireFront: "120/70-14",
    tireRear: "150/70-13",

    length: "2215 mm",
    width: "780 mm",
    height: "1395 mm",
    wheelbase: "1540 mm",
    seatHeight: "790 mm",
    groundClearance: "150 mm",

    weight: "195 kg",
    fuelTank: "13 Litre",
    oilCapacity: "1.4 Litre",

    maxSpeed: "135-140 km/h",
    zeroToHundred: "N/A",

    productionYear: "2023-2024",

    description: "Ariic Chief 318, hem şehirler arası uzun yollarda hem de şehir içinde konfor arayanlar için tasarlanmış bir maxi-scooter modelidir. Ön kamerasından (bazı versiyonlarda) anahtarsız çalıştırma sistemine kadar yüksek teknolojik donanımlara sahiptir. Geniş sele altı bagajı ve rüzgar korumasıyla premium bir sürüş deneyimi sunar."
  },
  {
    brand: "Aprilia",
    model: "Caponord 1000 ETV",
    engineType: "V-Twin 60°, 4 Zamanlı, Sıvı Soğutmalı",
    displacement: "998 cc",
    power: "98 Hp @ 8250 rpm",
    torque: "97 Nm @ 6250 rpm",
    fuelSystem: "Enjeksiyon",
    transmission: "Manuel 6 Vites",
    driveType: "Zincir",
    frontBrake: "Çift Disk",
    rearBrake: "Disk",
    abs: "Yok",
    tireFront: "110/80-19",
    tireRear: "150/70-17",
    fuelTank: "25 Litre",
    weight: "215 kg",
    description: "Aprilia'nın efsanevi büyük hacimli enduro modelidir. Rotax motoruyla dayanıklılığı ve uzun yol konforuyla bilinen bir klasiktir."
  },
  {
    brand: "Aprilia",
    model: "Caponord 1000 ETV ABS",
    engineType: "V-Twin 60°, 4 Zamanlı, Sıvı Soğutmalı",
    displacement: "998 cc",
    power: "98 Hp @ 8250 rpm",
    torque: "97 Nm @ 6250 rpm",
    fuelSystem: "Enjeksiyon",
    transmission: "Manuel 6 Vites",
    driveType: "Zincir",
    frontBrake: "Çift Disk",
    rearBrake: "Disk",
    abs: "Var",
    tireFront: "110/80-19",
    tireRear: "150/70-17",
    fuelTank: "25 Litre",
    weight: "218 kg",
    description: "Standart ETV modeline ek olarak ABS güvenlik sistemiyle donatılmış, güvenlik odaklı uzun yol versiyonudur."
  },
  {
    brand: "Aprilia",
    model: "Caponord 1200 ABS Travel Pack",
    engineType: "90° V-Twin, 4 Zamanlı, Sıvı Soğutmalı",
    displacement: "1197 cc",
    power: "125 Hp @ 8000 rpm",
    torque: "115 Nm @ 6800 rpm",
    fuelSystem: "Enjeksiyon (Ride-by-Wire)",
    transmission: "Manuel 6 Vites",
    driveType: "Zincir",
    frontBrake: "Çift Disk (Brembo)",
    rearBrake: "Disk",
    abs: "Var (Çoklu Mod)",
    tireFront: "120/70-17",
    tireRear: "180/55-17",
    fuelTank: "24 Litre",
    weight: "228 kg",
    description: "ADD (Aktif Süspansiyon) ve hız sabitleyici gibi donanımlarla yüklü, teknolojik bir touring canavarıdır."
  },
  {
    brand: "Aprilia",
    model: "Caponord 1200 Rally",
    engineType: "90° V-Twin, 4 Zamanlı, Sıvı Soğutmalı",
    displacement: "1197 cc",
    power: "125 Hp @ 8000 rpm",
    torque: "115 Nm @ 6800 rpm",
    fuelSystem: "Enjeksiyon",
    transmission: "Manuel 6 Vites",
    driveType: "Zincir",
    frontBrake: "Çift Disk",
    rearBrake: "Disk",
    abs: "Var",
    tireFront: "120/70-19",
    tireRear: "170/60-17",
    fuelTank: "24 Litre",
    weight: "238 kg",
    description: "Telli jantları, koruma demirleri ve ek sis farlarıyla Caponord ailesinin araziye en yatkın, en heybetli üyesidir."
  },
  {
    brand: "Aprilia",
    model: "Mana 850",
    engineType: "V-Twin 90°, 4 Zamanlı, Sıvı Soğutmalı",
    displacement: "839 cc",
    power: "76 Hp @ 8000 rpm",
    torque: "73 Nm @ 5000 rpm",
    fuelSystem: "Enjeksiyon",
    transmission: "Otomatik (CVT + Manuel Seçenekli)",
    driveType: "Zincir",
    frontBrake: "Çift Disk",
    rearBrake: "Disk",
    abs: "Opsiyonel/Var",
    tireFront: "120/70-17",
    tireRear: "180/55-17",
    fuelTank: "16 Litre",
    weight: "203 kg",
    description: "Motosiklet dünyasının en ilginç modellerinden biridir; hem tam otomatik hem de manuel kullanım sunan şanzımanıyla devrim yaratmıştır."
  },
  {
    brand: "Aprilia",
    model: "Mojito 125 Custom",
    engineType: "Tek Silindir, 4 Zamanlı, Hava Soğutmalı",
    displacement: "124 cc",
    power: "9.6 Hp @ 8250 rpm",
    torque: "9.2 Nm @ 7000 rpm",
    fuelSystem: "Karbüratör",
    transmission: "Otomatik (CVT)",
    driveType: "Kayış",
    frontBrake: "Disk",
    rearBrake: "Kampana",
    abs: "Yok",
    tireFront: "120/70-12",
    tireRear: "130/70-10",
    fuelTank: "8 Litre",
    weight: "115 kg",
    description: "Cruiser tarzı geniş gidonu ve krom detaylarıyla İtalyan retro tasarımının en şık örneklerinden biridir."
  },
  {
    brand: "Aprilia",
    model: "Pegaso 650",
    engineType: "Tek Silindir, 4 Zamanlı, Sıvı Soğutmalı",
    displacement: "659 cc",
    power: "48 Hp @ 6250 rpm",
    torque: "61 Nm @ 5200 rpm",
    fuelSystem: "Enjeksiyon",
    transmission: "Manuel 5 Vites",
    driveType: "Zincir",
    frontBrake: "Disk",
    rearBrake: "Disk",
    abs: "Yok",
    tireFront: "110/70-17",
    tireRear: "160/60-17",
    fuelTank: "16 Litre",
    weight: "175 kg",
    description: "Hem şehir içi hem de hafif arazi kullanımı için uygun, torklu ve dayanıklı motor bloğuyla bilinen bir Dual-Sport modelidir."
  },
  {
    brand: "Aprilia",
    model: "RS 125",
    engineType: "Tek Silindir, 4 Zamanlı, Sıvı Soğutmalı, DOHC",
    displacement: "124.2 cc",
    power: "15 Hp @ 10000 rpm",
    torque: "11.2 Nm @ 8000 rpm",
    fuelSystem: "Enjeksiyon",
    transmission: "Manuel 6 Vites",
    driveType: "Zincir",
    frontBrake: "Disk (300mm)",
    rearBrake: "Disk (218mm)",
    abs: "Var (Ön Tekerlek)",
    tireFront: "100/80-17",
    tireRear: "130/70-17",
    fuelTank: "14.5 Litre",
    weight: "144 kg",
    description: "Genç sürücülerin pist hayallerini süsleyen, profesyonel spor motosiklet genlerini 125cc sınıfına taşıyan efsane modeldir."
  },
  {
    brand: "Aprilia",
    model: "RS4 125 4T",
    engineType: "Tek Silindir, 4 Zamanlı, Sıvı Soğutmalı",
    displacement: "124.8 cc",
    power: "15 Hp @ 10500 rpm",
    torque: "10.9 Nm @ 8250 rpm",
    fuelSystem: "Enjeksiyon",
    transmission: "Manuel 6 Vites",
    driveType: "Zincir",
    frontBrake: "Disk",
    rearBrake: "Disk",
    abs: "Yok",
    tireFront: "100/80-17",
    tireRear: "130/70-17",
    fuelTank: "14.5 Litre",
    weight: "135 kg",
    description: "RSV4'ün tasarımını 125cc sınıfına getiren, kompakt, hafif ve yüksek devir çevirmeyi seven bir spor motosiklettir."
  },
  {
    brand: "Aprilia",
    model: "RS 457",
    engineType: "Çift Silindir (Parallel-Twin), 4 Zamanlı, Sıvı Soğutmalı",
    displacement: "457 cc",
    power: "47.6 Hp @ 9400 rpm",
    torque: "43.5 Nm @ 6700 rpm",
    fuelSystem: "Enjeksiyon (Ride-by-Wire)",
    transmission: "Manuel 6 Vites",
    driveType: "Zincir",
    frontBrake: "Disk (320mm ByBre)",
    rearBrake: "Disk (220mm ByBre)",
    abs: "Var (Çift Kanal)",
    tireFront: "110/70-17",
    tireRear: "150/60-17",
    fuelTank: "13 Litre",
    weight: "175 kg",
    description: "A2 ehliyet sınıfının en yeni ve en güçlü oyuncularından biri; sınıfının en iyi güç-ağırlık oranına sahip makinelerindendir."
  },
  {
    brand: "Aprilia",
    model: "RS 660",
    engineType: "Çift Silindir (Parallel-Twin), 4 Zamanlı, Sıvı Soğutmalı",
    displacement: "659 cc",
    power: "100 Hp @ 10500 rpm",
    torque: "67 Nm @ 8500 rpm",
    fuelSystem: "Enjeksiyon (Ride-by-Wire)",
    transmission: "Manuel 6 Vites (Quickshifter)",
    driveType: "Zincir",
    frontBrake: "Çift Disk (320mm Brembo)",
    rearBrake: "Disk (220mm)",
    abs: "Viraj ABS (Cornering ABS)",
    tireFront: "120/70-17",
    tireRear: "180/55-17",
    fuelTank: "15 Litre",
    weight: "183 kg (Dolu)",
    description: "Orta sıklet spor motosiklet dünyasında devrim yaratan, hafifliği ve gelişmiş elektronik sistemleriyle hem pist hem cadde için mükemmel dengeli bir makinedir."
  },
  {
    brand: "Aprilia",
    model: "RS 660 Extrema",
    engineType: "Çift Silindir (Parallel-Twin), 4 Zamanlı, Sıvı Soğutmalı",
    displacement: "659 cc",
    power: "100 Hp @ 10500 rpm",
    torque: "67 Nm @ 8500 rpm",
    fuelSystem: "Enjeksiyon",
    transmission: "Manuel 6 Vites",
    driveType: "Zincir",
    frontBrake: "Çift Disk",
    rearBrake: "Disk",
    abs: "Var",
    tireFront: "120/70-17",
    tireRear: "180/55-17",
    fuelTank: "15 Litre",
    weight: "166 kg (Kuru)",
    description: "RS 660'ın en hafif ve en özel versiyonudur; SC Project egzoz ve karbon parçalarla donatılmış, safkan bir performans modelidir."
  },
  {
    brand: "Aprilia",
    model: "RSV4 1100",
    engineType: "65° V4, 4 Zamanlı, Sıvı Soğutmalı",
    displacement: "1099 cc",
    power: "217 Hp @ 13000 rpm",
    torque: "125 Nm @ 10500 rpm",
    fuelSystem: "Enjeksiyon",
    transmission: "Manuel 6 Vites",
    driveType: "Zincir",
    frontBrake: "Çift Disk (330mm Brembo Stylema)",
    rearBrake: "Disk",
    abs: "Viraj ABS",
    tireFront: "120/70-17",
    tireRear: "200/55-17",
    fuelTank: "17.9 Litre",
    weight: "202 kg (Dolu)",
    description: "Dünyanın en iyi Superbike makinelerinden biri olarak kabul edilir; V4 motor sesi ve aerodinamik kanatçıklarıyla gerçek bir MotoGP deneyimi sunar."
  },
  {
    brand: "Aprilia",
    model: "RSV4 Factory",
    engineType: "65° V4, 4 Zamanlı, Sıvı Soğutmalı",
    displacement: "1099 cc",
    power: "217 Hp @ 13000 rpm",
    torque: "125 Nm @ 10500 rpm",
    fuelSystem: "Enjeksiyon",
    transmission: "Manuel 6 Vites",
    driveType: "Zincir",
    frontBrake: "Çift Disk",
    rearBrake: "Disk",
    abs: "Var",
    tireFront: "120/70-17",
    tireRear: "200/55-17",
    fuelTank: "17.9 Litre",
    weight: "202 kg",
    description: "Öhlins Smart EC 2.0 yarı aktif süspansiyonlar ve dövme alüminyum jantlarla donatılmış, pist odaklı en üst donanım seviyesidir."
  },
  {
    brand: "Aprilia",
    model: "RX 125",
    engineType: "Tek Silindir, 4 Zamanlı, Sıvı Soğutmalı",
    displacement: "124.2 cc",
    power: "15 Hp @ 10000 rpm",
    torque: "11.2 Nm @ 8000 rpm",
    fuelSystem: "Enjeksiyon",
    transmission: "Manuel 6 Vites",
    driveType: "Zincir",
    frontBrake: "Disk (260mm)",
    rearBrake: "Disk (220mm)",
    abs: "Var (Bosch)",
    tireFront: "90/90-21",
    tireRear: "120/80-18",
    fuelTank: "7 Litre",
    weight: "134 kg",
    description: "Aprilia'nın off-road mirasını temsil eden, 125cc sınıfında yüksek performanslı ve gerçek arazi yeteneklerine sahip bir Enduro modelidir."
  },
  {
    brand: "Aprilia",
    model: "Scarabeo 200",
    engineType: "Tek Silindir, 4 Zamanlı, Sıvı Soğutmalı, DOHC",
    displacement: "181 cc",
    power: "19 Hp @ 9000 rpm",
    torque: "17.1 Nm @ 7000 rpm",
    fuelSystem: "Enjeksiyon (EFI)",
    transmission: "Otomatik (CVT)",
    driveType: "Kayış",
    frontBrake: "Disk",
    rearBrake: "Disk",
    abs: "Yok / CBS (Modele göre)",
    tireFront: "100/80-16",
    tireRear: "120/80-16",
    fuelTank: "8.5 Litre",
    weight: "154 kg",
    description: "Büyük jant yapısıyla motosiklet kararlılığı sunan, klasik ve zarif tasarımıyla şehir içi ulaşımın en prestijli modellerinden biridir."
  },
  {
    brand: "Aprilia",
    model: "Shiver 900",
    engineType: "90° V-Twin, 4 Zamanlı, Sıvı Soğutmalı",
    displacement: "896 cc",
    power: "95 Hp @ 8750 rpm",
    torque: "90 Nm @ 6500 rpm",
    fuelSystem: "Enjeksiyon (Ride-by-Wire)",
    transmission: "Manuel 6 Vites",
    driveType: "Zincir",
    frontBrake: "Çift Disk (320mm)",
    rearBrake: "Disk",
    abs: "Var",
    tireFront: "120/70-17",
    tireRear: "180/55-17",
    fuelTank: "15 Litre",
    weight: "218 kg",
    description: "Karakteristik V-Twin motoru, yüksek torku ve agresif naked tasarımıyla safkan bir İtalyan sürüş keyfi sunar."
  },
  {
    brand: "Aprilia",
    model: "SR GT 125",
    engineType: "Tek Silindir (i-Get), 4 Zamanlı, Sıvı Soğutmalı",
    displacement: "125 cc",
    power: "15 Hp @ 8750 rpm",
    torque: "12 Nm @ 6500 rpm",
    fuelSystem: "Enjeksiyon",
    transmission: "Otomatik (CVT)",
    driveType: "Kayış",
    frontBrake: "Disk (260mm)",
    rearBrake: "Disk (220mm)",
    abs: "CBS (Kombine Fren)",
    tireFront: "110/80-14",
    tireRear: "130/70-13",
    fuelTank: "9 Litre",
    weight: "144 kg",
    description: "Urban Adventure segmentinin öncüsü; uzun süspansiyon yolu ve karma zemin lastikleriyle şehir içinde engel tanımayan bir scooter."
  },
  {
    brand: "Aprilia",
    model: "SR GT 200",
    engineType: "Tek Silindir (i-Get), 4 Zamanlı, Sıvı Soğutmalı",
    displacement: "174 cc",
    power: "17.4 Hp @ 8500 rpm",
    torque: "16.5 Nm @ 7000 rpm",
    fuelSystem: "Enjeksiyon",
    transmission: "Otomatik (CVT)",
    driveType: "Kayış",
    frontBrake: "Disk (260mm)",
    rearBrake: "Disk (220mm)",
    abs: "Var (Ön Kanal)",
    tireFront: "110/80-14",
    tireRear: "130/70-13",
    fuelTank: "9 Litre",
    weight: "148 kg",
    description: "SR GT ailesinin güçlü üyesi; artırılmış tork ve gücüyle hem şehir içinde hem de kısa mesafeli çevre yolu sürüşlerinde üstün performans sağlar."
  },
  {
    brand: "Aprilia",
    model: "SRV 850 İ.E. ABS",
    engineType: "90° V-Twin, 4 Zamanlı, Sıvı Soğutmalı",
    displacement: "839 cc",
    power: "76 Hp @ 7750 rpm",
    torque: "76.4 Nm @ 6000 rpm",
    fuelSystem: "Enjeksiyon",
    transmission: "Otomatik (CVT)",
    driveType: "Kayış",
    frontBrake: "Çift Disk (Brembo)",
    rearBrake: "Disk",
    abs: "Var (ATC Çekiş Kontrolü ile)",
    tireFront: "120/70-16",
    tireRear: "160/60-15",
    fuelTank: "18.5 Litre",
    weight: "249 kg",
    description: "Dünyanın en güçlü seri üretim scooter'larından biri; RSV4'ten ilham alan tasarımı ve V2 motoruyla bir maxi-scooter'dan çok daha fazlası."
  },
  {
    brand: "Aprilia",
    model: "SX 125",
    engineType: "Tek Silindir, 4 Zamanlı, Sıvı Soğutmalı",
    displacement: "124.2 cc",
    power: "15 Hp @ 10000 rpm",
    torque: "11.2 Nm @ 8000 rpm",
    fuelSystem: "Enjeksiyon",
    transmission: "Manuel 6 Vites",
    driveType: "Zincir",
    frontBrake: "Disk (300mm)",
    rearBrake: "Disk (220mm)",
    abs: "Var (Bosch)",
    tireFront: "100/80-17",
    tireRear: "130/70-17",
    fuelTank: "7 Litre",
    weight: "134 kg",
    description: "Şehir içinde akrobasi ve çeviklik arayanlar için tasarlanmış, Supermoto ruhunu 125cc sınıfına taşıyan eğlenceli bir modeldir."
  },
  {
    brand: "Aprilia",
    model: "Tuareg 660",
    engineType: "Çift Silindir (Parallel-Twin), 4 Zamanlı, Sıvı Soğutmalı",
    displacement: "659 cc",
    power: "80 Hp @ 9250 rpm",
    torque: "70 Nm @ 6500 rpm",
    fuelSystem: "Enjeksiyon (Ride-by-Wire)",
    transmission: "Manuel 6 Vites",
    driveType: "Zincir",
    frontBrake: "Çift Disk (300mm)",
    rearBrake: "Disk (260mm)",
    abs: "Var (Devre Dışı Bırakılabilir)",
    tireFront: "90/90-21",
    tireRear: "150/70-18",
    fuelTank: "18 Litre",
    weight: "187 kg (Kuru)",
    description: "Hem gerçek arazi performansı hem de asfalt konforunu birleştiren, sınıfının en hafif ve teknolojik Adventure motosikletlerinden biridir."
  },
  {
    brand: "Aprilia",
    model: "Tuono 125",
    engineType: "Tek Silindir, 4 Zamanlı, Sıvı Soğutmalı",
    displacement: "124 cc",
    power: "15 Hp @ 10000 rpm",
    torque: "11 Nm @ 8000 rpm",
    fuelSystem: "Enjeksiyon",
    transmission: "Manuel 6 Vites",
    driveType: "Zincir",
    frontBrake: "Disk",
    rearBrake: "Disk",
    abs: "Var",
    tireFront: "100/80-17",
    tireRear: "130/70-17",
    fuelTank: "14.5 Litre",
    weight: "144 kg",
    description: "RS 125'in naked kardeşi; daha dik sürüş pozisyonu ve agresif tasarımıyla şehir içi kullanımda üstün kontrol sağlar."
  },
  {
    brand: "Aprilia",
    model: "Tuono 660 Factory",
    engineType: "Çift Silindir (Parallel-Twin), 4 Zamanlı, Sıvı Soğutmalı",
    displacement: "659 cc",
    power: "100 Hp @ 10500 rpm",
    torque: "67 Nm @ 8500 rpm",
    fuelSystem: "Enjeksiyon",
    transmission: "Manuel 6 Vites (Quickshifter)",
    driveType: "Zincir",
    frontBrake: "Çift Disk",
    rearBrake: "Disk",
    abs: "Viraj ABS",
    tireFront: "120/70-17",
    tireRear: "180/55-17",
    fuelTank: "15 Litre",
    weight: "181 kg (Dolu)",
    description: "Hafiflik ve yüksek gücün buluştuğu nokta; Factory versiyonuyla gelen gelişmiş süspansiyonlar onu tam bir viraj canavarına dönüştürür."
  },
  {
    brand: "Aprilia",
    model: "Tuono V4 1100 Factory",
    engineType: "65° V4, 4 Zamanlı, Sıvı Soğutmalı",
    displacement: "1077 cc",
    power: "175 Hp @ 11000 rpm",
    torque: "121 Nm @ 9000 rpm",
    fuelSystem: "Enjeksiyon",
    transmission: "Manuel 6 Vites",
    driveType: "Zincir",
    frontBrake: "Çift Disk (Brembo M50)",
    rearBrake: "Disk",
    abs: "Var",
    tireFront: "120/70-17",
    tireRear: "200/55-17",
    fuelTank: "18.5 Litre",
    weight: "209 kg",
    description: "Sokakların en hırçın naked motoru; RSV4 genlerini dik oturuş pozisyonuyla birleştirerek adrenalin dolu bir sürüş sunar."
  },
  {
    brand: "Apec",
    model: "APX5",
    engineType: "Tek Silindir, 4 Zamanlı, Hava Soğutmalı",
    displacement: "149.6 cc",
    power: "8.71 Hp @ 7500 rpm",
    torque: "9.00 Nm @ 6000 rpm",
    fuelSystem: "Enjeksiyon (EFI)",
    transmission: "Otomatik (CVT)",
    driveType: "Kayış",
    frontBrake: "Disk",
    rearBrake: "Disk",
    abs: "Yok / CBS",
    tireFront: "120/70-12",
    tireRear: "120/70-12",
    fuelTank: "5.5 Litre",
    weight: "105 kg",
    description: "Şehir içi ulaşım için tasarlanmış, geniş lastikleri ve çift disk freniyle segmentinde dikkat çeken ekonomik bir scooter modelidir."
  },
  {
    brand: "Apec",
    model: "APX7",
    engineType: "Tek Silindir, 4 Zamanlı, Sıvı Soğutmalı",
    displacement: "193.3 cc",
    power: "12.8 Hp @ 7500 rpm",
    torque: "14.5 Nm @ 6000 rpm",
    fuelSystem: "Enjeksiyon (EFI)",
    transmission: "Otomatik (CVT)",
    driveType: "Kayış",
    frontBrake: "Disk",
    rearBrake: "Disk",
    abs: "Var",
    tireFront: "110/70-13",
    tireRear: "130/70-13",
    fuelTank: "9 Litre",
    weight: "135 kg",
    description: "Apec serisinin en güçlü ve kalıplı modeli; maxi-scooter görünümü ve sıvı soğutmalı motoruyla uzun yol konforu sunar."
  },
  {
    brand: "Apec",
    model: "PS3",
    engineType: "Elektrikli Motor",
    displacement: "0 cc (Elektrik)",
    power: "1000W (Nominal)",
    torque: "Yüksek Kalkış Torku",
    fuelSystem: "Batarya",
    transmission: "Otomatik",
    driveType: "Motor İçi (Hub)",
    frontBrake: "Kampana",
    rearBrake: "Kampana",
    abs: "Yok",
    tireFront: "3.00-10",
    tireRear: "3.00-10",
    fuelTank: "VRLA Jel Batarya",
    weight: "72 kg",
    description: "Kısa mesafe mahalle içi ulaşım ve alışveriş için ideal, ehliyet ve sigorta zorunluluğu olmayan elektrikli bir üç tekerlekli/moped yapısındadır."
  },
  {
    brand: "Apec",
    model: "PS5",
    engineType: "Tek Silindir, 4 Zamanlı, Hava Soğutmalı",
    displacement: "124.6 cc",
    power: "8.3 Hp @ 7500 rpm",
    torque: "8.5 Nm @ 6000 rpm",
    fuelSystem: "Enjeksiyon (EFI)",
    transmission: "Otomatik (CVT)",
    driveType: "Kayış",
    frontBrake: "Disk",
    rearBrake: "Kampana",
    abs: "Yok",
    tireFront: "3.50-10",
    tireRear: "3.50-10",
    fuelTank: "5.4 Litre",
    weight: "95 kg",
    description: "Hafif yapısı ve pratik kullanımıyla öne çıkan, düşük yakıt tüketimi hedefleyen 125cc segmentinde bir başlangıç scooter'ıdır."
  },
  {
    brand: "Apachi",
    model: "4V Cross",
    engineType: "Tek Silindir, 4 Zamanlı, Hava Soğutmalı",
    displacement: "149 cc",
    power: "11.5 Hp @ 8000 rpm",
    torque: "11.0 Nm @ 6000 rpm",
    fuelSystem: "Karbüratör",
    transmission: "Manuel 5 Vites",
    driveType: "Zincir",
    frontBrake: "Disk",
    rearBrake: "Disk",
    abs: "Yok",
    tireFront: "80/100-21",
    tireRear: "110/90-18",
    fuelTank: "8 Litre",
    weight: "115 kg",
    description: "Hafif arazi şartları ve başlangıç seviyesi enduro sürüşleri için tasarlanmış, kıvrak bir cross modelidir."
  },
  {
    brand: "Apachi",
    model: "Alfa 50",
    engineType: "Tek Silindir, 4 Zamanlı, Hava Soğutmalı",
    displacement: "49.6 cc",
    power: "3.2 Hp @ 7500 rpm",
    torque: "3.1 Nm @ 6000 rpm",
    fuelSystem: "Enjeksiyon (EFI)",
    transmission: "Otomatik (CVT)",
    driveType: "Kayış",
    frontBrake: "Disk",
    rearBrake: "Kampana",
    abs: "Yok",
    tireFront: "3.50-10",
    tireRear: "3.50-10",
    fuelTank: "5 Litre",
    weight: "85 kg",
    description: "B sınıfı ehliyetle kullanılabilen, şehir içi kısa mesafeler için ekonomik ve pratik bir scooter çözümüdür."
  },
  {
    brand: "Apachi",
    model: "XRS",
    engineType: "Tek Silindir, 4 Zamanlı, Hava Soğutmalı",
    displacement: "124.8 cc",
    power: "9.5 Hp @ 8000 rpm",
    torque: "9.2 Nm @ 6500 rpm",
    fuelSystem: "Enjeksiyon (EFI)",
    transmission: "Manuel 5 Vites",
    driveType: "Zincir",
    frontBrake: "Disk",
    rearBrake: "Kampana",
    abs: "Yok / CBS",
    tireFront: "2.75-18",
    tireRear: "90/90-18",
    fuelTank: "13 Litre",
    weight: "110 kg",
    description: "Apachi markasının en çok tercih edilen commuter modellerinden biridir; dayanıklı yapısı ve düşük yakıt tüketimiyle iş amaçlı kullanıma uygundur."
  },
  {
    brand: "Apachi",
    model: "XZ 250R",
    engineType: "Tek Silindir, 4 Zamanlı, Sıvı Soğutmalı",
    displacement: "249.6 cc",
    power: "26 Hp @ 9000 rpm",
    torque: "22 Nm @ 7000 rpm",
    fuelSystem: "Karbüratör",
    transmission: "Manuel 6 Vites",
    driveType: "Zincir",
    frontBrake: "Disk",
    rearBrake: "Disk",
    abs: "Yok",
    tireFront: "80/100-21",
    tireRear: "110/90-18",
    fuelTank: "7.5 Litre",
    weight: "125 kg",
    description: "Performans odaklı bir arazi motosikletidir; su soğutmalı motoru ve güçlendirilmiş şasisiyle zorlu parkurlar için tasarlanmıştır."
  },
  {
    brand: "Apachi",
    model: "Beauty 125",
    engineType: "Tek Silindir, 4 Zamanlı, Hava Soğutmalı",
    displacement: "124.6 cc",
    power: "8.4 Hp @ 7500 rpm",
    torque: "8.6 Nm @ 6000 rpm",
    fuelSystem: "Enjeksiyon (EFI)",
    transmission: "Otomatik (CVT)",
    driveType: "Kayış",
    frontBrake: "Disk",
    rearBrake: "Kampana",
    abs: "Yok",
    tireFront: "3.50-10",
    tireRear: "3.50-10",
    fuelTank: "5.5 Litre",
    weight: "98 kg",
    description: "Klasik scooter tasarımıyla modern teknolojiyi birleştiren, kullanımı kolay ve konforlu bir modeldir."
  },
  {
    brand: "Apachi",
    model: "Joy 125",
    engineType: "Tek Silindir, 4 Zamanlı, Hava Soğutmalı",
    displacement: "124.6 cc",
    power: "8.2 Hp @ 7500 rpm",
    torque: "8.4 Nm @ 6000 rpm",
    fuelSystem: "Enjeksiyon (EFI)",
    transmission: "Otomatik (CVT)",
    driveType: "Kayış",
    frontBrake: "Disk",
    rearBrake: "Kampana",
    abs: "Yok",
    tireFront: "90/90-12",
    tireRear: "3.50-10",
    fuelTank: "5.5 Litre",
    weight: "102 kg",
    description: "Kompakt boyutları ve canlı renk seçenekleriyle genç kullanıcılar için tasarlanmış eğlenceli bir şehir içi scooter modelidir."
  },
  {
    brand: "Apachi",
    model: "Nova 125",
    engineType: "Tek Silindir, 4 Zamanlı, Hava Soğutmalı",
    displacement: "124.9 cc",
    power: "8.8 Hp @ 7500 rpm",
    torque: "9.0 Nm @ 5500 rpm",
    fuelSystem: "Enjeksiyon (EFI)",
    transmission: "Otomatik (CVT)",
    driveType: "Kayış",
    frontBrake: "Disk",
    rearBrake: "Kampana",
    abs: "Yok / CBS",
    tireFront: "120/70-12",
    tireRear: "120/70-12",
    fuelTank: "6 Litre",
    weight: "108 kg",
    description: "Modern hatları ve LED aydınlatma grubuyla öne çıkan, orta segmentte dengeli bir sürüş sunan scooter modelidir."
  },
  {
    brand: "Apachi",
    model: "Orca 50",
    engineType: "Tek Silindir, 4 Zamanlı, Hava Soğutmalı",
    displacement: "49.6 cc",
    power: "3.1 Hp @ 7500 rpm",
    torque: "3.0 Nm @ 6000 rpm",
    fuelSystem: "Enjeksiyon (EFI)",
    transmission: "Otomatik (CVT)",
    driveType: "Kayış",
    frontBrake: "Disk",
    rearBrake: "Kampana",
    abs: "Yok",
    tireFront: "3.50-10",
    tireRear: "3.50-10",
    fuelTank: "5 Litre",
    weight: "88 kg",
    description: "Vergi ve sigorta muafiyetiyle öne çıkan, minimalist tasarımıyla yeni başlayanlar için ideal bir 50cc seçeneğidir."
  },
  {
    brand: "Apachi",
    model: "Pusat",
    engineType: "Tek Silindir, 4 Zamanlı, Hava Soğutmalı",
    displacement: "149 cc",
    power: "11.2 Hp @ 8000 rpm",
    torque: "11.5 Nm @ 6000 rpm",
    fuelSystem: "Karbüratör / EFI",
    transmission: "Manuel 5 Vites",
    driveType: "Zincir",
    frontBrake: "Disk",
    rearBrake: "Kampana",
    abs: "Yok",
    tireFront: "2.75-18",
    tireRear: "3.00-18",
    fuelTank: "12 Litre",
    weight: "118 kg",
    description: "Klasik commuter yapısında, dayanıklı şasisi ve yüksek taşıma kapasitesiyle kurye ve iş odaklı kullanıma uygun bir modeldir."
  },
  {
    brand: "Apachi",
    model: "True 50 / 125",
    engineType: "Tek Silindir, 4 Zamanlı, Hava Soğutmalı",
    displacement: "49-124 cc",
    power: "3.2 - 8.5 Hp",
    torque: "3.1 - 8.8 Nm",
    fuelSystem: "EFI",
    transmission: "Otomatik (CVT)",
    driveType: "Kayış",
    frontBrake: "Disk",
    rearBrake: "Kampana",
    abs: "Yok",
    tireFront: "3.50-10",
    tireRear: "3.50-10",
    fuelTank: "5.5 Litre",
    weight: "92 kg",
    description: "True serisi, hem 50cc hem de 125cc seçenekleriyle kullanıcıya aynı konforu farklı performans seviyelerinde sunar."
  },
];
