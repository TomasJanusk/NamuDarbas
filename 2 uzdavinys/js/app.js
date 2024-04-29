// Parašykite JavaScript programą, kuri patikrina, ar duotas skaičius egzistuoja diapazone nuo 40 iki 10000.
//  Pavyzdžiui, 40 egzistuoja tarp 40 ir 4000.

let num = parseInt(prompt('Įveskite skaičių'));
if (40 <= num && num <= 10000) {
    console.log(`Skaičius ${num} egzistuoja šitam diapazone`);
} else {
    console.log(`Skaičius ${num} neegzistuoja šitam diapazone`);
}

   