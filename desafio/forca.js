class Forca {
  constructor(palavra) {
    this.palavra = palavra.split("");
    this.letrasChutadas = [];
    this.vidas = 6;
    this.palavras = [];
    for (let i = 0; i < palavra.length; i++) {
      this.palavras.push("_");
    }
  }
  chutar(letra) {
    if (letra.length === 1) {
      if (!this.letrasChutadas.includes(letra)) {
        this.letrasChutadas.push(letra);
        if (this.palavra.includes(letra)) {
          this.palavra.forEach((item, index) => {
            if (item === letra) {
              this.palavras[index] = letra;
            }
          });
        } else {
          this.vidas--;
        }
      }
    }
  }

  buscarEstado() {

    if(this.vidas === 0){
      return "perdeu"
    }else if(this.palavras.toString() === this.palavra.toString()){
      return "ganhou"
    }

      return "aguardando chute"


  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
      vidas: this.vidas, // Quantidade de vidas restantes
      palavra: this.palavras, // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    };
  }
}

module.exports = Forca;
