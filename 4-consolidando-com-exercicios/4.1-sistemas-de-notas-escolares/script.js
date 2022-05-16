let nota = 90;

if (nota >= 90) {
    nota = "A";
} else if (nota >= 80 && nota < 89) {
    nota = "B";
} else if (nota >= 70 && nota < 79) {
    nota = "C";
} else if (nota >= 60 && nota < 69) {
    nota = "D";
} else {
    nota = "F";
}

console.log(nota);