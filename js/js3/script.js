
function counter(num){
    let n = num;
    return function(){
        n = n+1;
        return n; 
    };
}



let incrementar = counter(1);

console.log('Primeira chamada ' + incrementar());
console.log('Segunda chamada ' + incrementar());
console.log('Terceira chamada ' + incrementar());
