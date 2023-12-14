class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }

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
  
      console.log(`O ${this.tipo} ${ataque}`);
    }
  }
  
  const mago = new Heroi('Merlin', 60, 'mago');
  const guerreiro = new Heroi('Barbáro', 35, 'guerreiro');
  const monge = new Heroi('Rock Lee', 45, 'monge');
  const ninja = new Heroi('Naruto', 30, 'ninja');
  
  mago.atacar();
  guerreiro.atacar();
  monge.atacar();
  ninja.atacar();