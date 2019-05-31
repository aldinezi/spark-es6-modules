import { fetchData } from './apiService';
import parseData from './dataParse';

fetchData()
  .then(data => {
    const podaci = parseData(data);
    console.log(podaci);

    // prebaciti metode za ispis izvještaja u dataInfo modul i iz ove metode proslijeđivati podatke
  });


/*
console.log("====PARKOVI====");
for (let i = 0; i < parkovi.length; i++) {
  parkovi[i].info();
  parkovi[i].getDrveca();
  parkovi[i].getPovrsina();
}
console.log("====ULICE====");
let ukDuz = 0,
  prosjecnaDuz;
for (let i = 0; i < ulice.length; i++) {
  ulice[i].info();
  ulice[i].osamdesete();
  ukDuz += ulice[i].duzina;
}
let avg = 0,
  len = parkovi.length;
for (let i = 0; i < len; i++) {
  avg += parkovi[i].godina;
}
console.log("Prosjecna starost svih parkova -> " + (2019 - Math.floor(avg / len)) + "godina");
console.log("Ukupna duzina ulica: " + ukDuz.toFixed(2) + "m. A prosjecna: " + (ukDuz / ulice.length) + "m"); */