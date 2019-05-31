import GradskiElement from './GradskiElement';

class Park extends GradskiElement {

  constructor(naziv, godina, povrsina, drvece) {
    super(naziv, godina);
    this.povrsina = povrsina;
    this.drvece = drvece;
    this.gustoca = this.drvece / this.povrsina;

  }
  info() {
    console.log(this.naziv, this.godina, this.povrsina, this.drvece, this.gustoca);
  }
  getDrveca() {
    console.log(this.naziv + ": " + this.drvece + "drveca");
  }
  getPovrsina() {
    console.log(this.naziv + ": " + this.povrsina + "km2");
  }
}

export default Park;