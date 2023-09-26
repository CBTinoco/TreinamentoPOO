class Figura{
    constructor(){
        this.nome = "Figura"
    }
    calculaArea(){
        return 0
    }
    calculaPerimetro(){
        return 0
    }
    calculaDiametro(){
        return 0
    }

}

class Triangulo extends Figura{
    constructor(altura, base, lado){
        super();
        this.nome = "Triângulo";
        this.base = base;
        this.altura = altura;
        this.lado = lado
    }

    calculaArea(){
        return (this.base * this.base) / 2
    }

    calculaPerimetro(){
        return this.lado * this.lado
    }

    calculaDiametro(){
        return "Não é possível calcular o diâmetro"

}

}

class Quadrado extends Figura{
    constructor(lado){
        super();
        this.nome = "Quadrado";
        this.lado = lado
    }

    calculaArea(){
        return this.lado * this.lado
    }

    calculaPerimetro(){
        return 4 * this.lado
    }

    calculaDiametro(){
        return this.lado * Math.sqrt(2)
    }


}

class Retangulo extends Figura{
    constructor(altura, largura){
        super();
        this.nome = "Retângulo";
        this.altura = altura;
        this.largura = largura
    }

    calculaArea(){
        return this.altura * this.largura
    }

    calculaPerimetro(){
        return 2 * (this.altura + this.largura)
    }

    calculaDiametro(){
        return Math.sqrt(this.altura * this.altura * this.largura * this.largura)

}

}


function main() {
    const quadrado = new Quadrado(4);
    const retangulo = new Retangulo(4, 6);
    const triangulo = new Triangulo(3, 4, 3);
  
    exibirResultado(quadrado);
    exibirResultado(retangulo);
    exibirResultado(triangulo);
  }
  
  function exibirResultado(figura) {
    console.log(`Tipo: ${figura.nome}`);
    console.log(`Área: ${figura.calculaArea()}`);
    console.log(`Perímetro: ${figura.calculaPerimetro()}`);
    console.log(`Diâmetro: ${figura.calculaDiametro()}`)
  }

  main();
  
  