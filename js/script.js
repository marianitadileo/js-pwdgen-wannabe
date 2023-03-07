let nameUser = prompt ("Inserisci il tuo nome");
console.log(nameUser);

let lastNameUser = prompt ("Inserisci il tuo cognome");
console.log(lastNameUser);

let colorUser = prompt ("Inserisci il tuo colore preferito");
console.log(colorUser);

const userPassword = nameUser + lastNameUser + colorUser + 21;

document.getElementById('result-name').innerHTML = "Il mio nome è" + " " + nameUser;
document.getElementById('result-lastname').innerHTML = "Il mio cognome è" + " " + lastNameUser;
document.getElementById('result-color').innerHTML = "Il mio colore preferito è" + " " + colorUser;
document.getElementById('result-password').innerHTML = "La mia password è" + " " + userPassword;