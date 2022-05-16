class Conta {
    saidas = []
    entradas = []

    novaEntrada(valor) {
        if (typeof valor == "number") {
            this.entradas.push(valor)
        } else {
            try {
                valor = Number(valor);
                this.entradas.push(valor)
            } catch (error) {
                console.log("Um erro inesperado ocorreu");
            }
        }
    }

    novaSaida(valor) {
        if (typeof valor == "number") {
            this.saidas.push(valor)
        } else {
            try {
                valor = Number(valor);
                this.saidas.push(valor)
            } catch (error) {
                console.log("Um erro inesperado ocorreu");
            }
        }
    }

    calcularSaldo() {
        try {
            let saldo = (this.entradas - this.saidas);
            if (saldo <= 0) {
                console.log(`O saldo está negativo: R$ ${saldo}`)
            } else {
                console.log(`O saldo está positivo: R$ ${saldo}`);
            }
        } catch (error) {
            console.log("Um erro inesperado ocorreu")
        }
        
    }
}

const conta1 = new Conta()

conta1.novaEntrada(132)
conta1.novaSaida(502)
conta1.calcularSaldo()
