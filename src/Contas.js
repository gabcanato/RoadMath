export default class Conta {
  constructor(max, min, controle) {
    this.random1 = this.generateRandom(max, min);
    this.random2 = this.generateRandom(max, min);
    this.controle = controle;
    this.answer = this.random1 + this.random2;
    this.answerM = this.random1 * this.random2;
    this.answerMMC = this.calculateMMC(this.random1, this.random2);
  }

  generateRandom(max, min) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num === 0 ? 1 : num; 
  }

  set answerSoma(qtdPergun) {
    if (qtdPergun > this.controle) {
      this.answer = this.random1 + this.random2;
    } else {
      this.answer = this.random1 - this.random2;
    }
  }

  set answerMult(qtdPergun) {
    if (qtdPergun > this.controle) {
      this.answerM = this.random1 * this.random2;
    } else {
      this.answerM = Math.floor(this.random1 / this.random2);
    }
  }

  calculateMMC(a, b) {
    let mdcValue = this.calculateMDC(a, b);
    if (mdcValue === 0) return 0; 
    return Math.abs(a * b) / mdcValue;
  }

  // Cálculo do MDC
  calculateMDC(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
}

