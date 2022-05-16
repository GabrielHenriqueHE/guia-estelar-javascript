class Conversor {
    CelsiusToFahrenheit(Celsius) {
        let Fahrenheit = Celsius * (9/5) + 32
        console.log(Fahrenheit)
    }

    FahrenheitToCelsius(Fahrentheit) {
        let Celsius = (Fahrentheit - 32) * (5/9)
        console.log(Celsius)
    }
}

const conversor = new Conversor() 

conversor.CelsiusToFahrenheit(0)
conversor.FahrenheitToCelsius(23)