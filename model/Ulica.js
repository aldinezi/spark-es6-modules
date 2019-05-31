import GradskiElement from './GradskiElement';

class Ulica extends GradskiElement {

  constructor(naziv, godina, duzina, klasifikacija = 3) {
    super(naziv, godina);
    this.duzina = duzina;
    this.klasifikacija = klasifikacija;
  }
  info() {
    console.log(this.naziv, this.godina, this.duzina, this.klasifikacija);
  }
  osamdesete() {

    if (this.godina > 1979 && this.godina < 1990) {
      console.log("OSAMDESETE:");
      this.info();
      console.log("***");
    }
  }
}

export default Ulica;