
//1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)

const a = 4;
const b = 2;
if (a > b) {
  console.log(a + " yra daugiau už " + b);
} else if (a < b) {
  console.log(b + " yra daugiau už " + a);
} else {
  console.log(a + " ir " + b + " yra lygūs");
}

//2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  
//3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
  }
  
//4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
for (let i = 0; i < 5; i++) {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    console.log(randomNum);
  }
  
//5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
let randomNum = 0;
while (randomNum !== 5) {
  randomNum = Math.floor(Math.random() * 10) + 1;
  console.log(randomNum);
}

//6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
const arrLength = Math.floor(Math.random() * 11) + 20; 
const arr = [];
for (let i = 0; i < arrLength; i++) {
    const randomNum = Math.floor(Math.random() * 21) + 10; 
    arr.push(randomNum);
}
let maxNum = arr[0]; 
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > maxNum) {
    maxNum = arr[i];
  }
}
console.log(arr); 
console.log('Didžiausia reikšmė:' + maxNum);

//7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
/*8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
     Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)*/
/*9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
     skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)*/
     function pirminisSkaicius(skaicius) {

        if (typeof skaicius !== 'number' || skaicius < 2 || !Number.isInteger(skaicius)) {
            return false; 
        }
          for (let i = 2; i <= Math.sqrt(skaicius); i++) { 
          if (skaicius % i === 0) {
            return false; 
          }
        }
            return true; 
      }
      
/*10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
     "(XXX) XXX-XXXX". (10 taškų)*/
     function telefonoNumeris(masyvas) {
        if (!Array.isArray(masyvas) || masyvas.length !== 10) {
          return false;
        }
        const numeris = masyvas.join(''); 
        const pirmiTrys = numeris.slice(0, 3);
        const vidurys = numeris.slice(3, 6);
        const paskutiniaiKeturi = numeris.slice(6);
          return `(${pirmiTrys}) ${vidurys}-${paskutiniaiKeturi}`; 
      }
      

