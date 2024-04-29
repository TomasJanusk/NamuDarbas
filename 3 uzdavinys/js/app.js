// Parašykite JavaScript programą, kuri įvertina studento bendrus taškus įvairiuose egzaminuose ir nustato jo pažymį. Vertinimo kriterijai yra šie:
 
// Jei bendri taškai yra tarp 89 ir 100 (įskaitant), studentas gauna A+ pažymį.
// Jei egzaminas pažymimas kaip 'Baigiamasis egzaminas', studentas gaus A+ pažymį tik jei jo bendri taškai yra 90 ar daugiau. Tarkime, kad baigiamasis egzaminas yra pažymimas 'true' kaip antrasis parametras, kitu atveju - tuščias.
// Jei studentas pasiekia A+ pažymį, programa turėtų grąžinti 'true', kitu atveju - 'false'.





function pazymiai(taskai, egzaminas = false) {
    if (egzaminas && taskai >= 90) {
        return true; 
    } else if (taskai >= 89 && taskai <= 100) {
        return true; 
    } else {
        return false;
    }
}
console.log(pazymiai(89));
