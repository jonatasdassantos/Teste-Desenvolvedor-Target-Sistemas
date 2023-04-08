
function GerarFibonacci(n){

let fibonacci = [];
fibonacci[0] = 0 ;
fibonacci[1] = 1;

if(n == -1){
for (let i = 2; i < n; i++){
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  return `O Número informado pertence a Sequencia: ${fibonacci}`
}else{
    return `O Número informado não pertence a seuquencia: ${fibonacci}`;
}
  
}

let fibo = GerarFibonacci(4);

console.log(fibo);




