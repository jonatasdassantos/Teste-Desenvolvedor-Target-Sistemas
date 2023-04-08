let sp = 67836.43
let rj = 36678.66
let mg = 29229.88
let es = 27165.48
let outros = 19849.53

const total = sp + rj + mg + es + outros;



let SaoP = (sp * 100) / total
let RioJ = (rj * 100) / total
let MinG = (mg * 100) / total
let Esp = (es * 100) / total
let Outros = (outros * 100) / total

console.log(`O Percentual do estado de São Paulo é: ${SaoP} %.`);
console.log(`O Percentual do estado de Rio de Janeiro é: ${RioJ} %.`);
console.log(`O Percentual do estado de Minas Gerais é: ${MinG} %.`);
console.log(`O Percentual de Espirito Santo  é: ${Esp} %.`);
console.log(`O Percentual de outros estados São: ${Outros} %.`);