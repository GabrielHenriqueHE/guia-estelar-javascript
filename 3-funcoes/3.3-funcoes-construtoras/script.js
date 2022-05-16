function Person(nome, idade, andar) {
    this.nome = nome;
    this.idade = idade;

    this.andar = andar;
}

const pessoa1 = new Person("Gabriel", 18, () => {
    return "Andando..."
})

console.log(pessoa1.andar());