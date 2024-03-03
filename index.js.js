// Criação da classe herói
class Heroi {
    // Construtor da classe herói que recebe nome, idade e tipo como parâmetros
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }

    // Método atacar que imprime uma mensagem de ataque com base no tipo de herói
    atacar() {
      let ataque;
  
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque desconhecido';
      }

        // Imprime a mensagem de ataque
      console.log(`O ${this.tipo} ${ataque}`);
    }
  }

// Criação dos objetos de cada tipo de herói
  const mago = new Heroi('Merlin', 60, 'mago');
  const guerreiro = new Heroi('Barbáro', 35, 'guerreiro');
  const monge = new Heroi('Rock Lee', 45, 'monge');
  const ninja = new Heroi('Naruto', 30, 'ninja');

// Chamadas dos métodos de ataque para cada herói
  mago.atacar();
  guerreiro.atacar();
  monge.atacar();
  ninja.atacar();
