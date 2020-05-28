//Kata 01: add
function add (x, y){
    return x + y
}

console.log(add(9,5))

//Kata 02: multiply

function multiply(a, b){
    let answer = a
    for(let i= 0; i< b -1; i++){
        answer = add (a , answer)
    }
    return answer
}
console.log(multiply(12,12))

//Kata 03: Power/Exponention
function power(x,n){
    let answer = x
    for(let i= 0; i< n -1; i++) {
        answer = multiply(answer,x )
    }
    return answer

}
console.log(power(3, 2))
console.log(power(8,3))

//Kata 04: Factorial

function factorial(fact) {
    if (fact === 0 || fact === 1)
      return 1;
    for (let i = fact - 1; i >= 1; i--) {
      fact = multiply(i , fact);
    }
    return fact;
  }
 

console.log(factorial(10))

//Kata 05: Fibonacci

function fibonacci(n) {
    let a = 0
    let b = 1 
    let f = 1
    for(let i = 2; i <= n; i++) {
        f = add (a,b);
        a = b;
        b = f;
    }
    return a;
}

console.log(fibonacci(8
))