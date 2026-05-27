// 1

for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// 2 

for (let i = 2; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// 3

let i = 10;

while (i > 0) {
    console.log(i);
    i--;
}

console.log("Start!");


//  4

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log(sum); 


//  5

let number = parseInt(prompt("შეიყვანეთ სასურველი რიცხვი:"));

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}


//  6

let secretWord;

do {
    secretWord = prompt("შეიყვანეთ საიდუმლო სიტყვა:");
} while (secretWord !== "javascript");

alert("წვდომა დაშვებულია! სწორია.");


//  7

let number7 = parseInt(prompt("შეიყვანეთ რიცხვი ფაქტორიალის გამოსათვლელად:"));
let factorial = 1;

for (let i = 1; i <= number7; i++) {
    factorial *= i;
}

console.log(`${number7}-ის ფაქტორიალი არის: ${factorial}`);








