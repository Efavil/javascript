let num = [5, 8, 2, 9]
num.push(1)
num.sort()
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro elemento do vetor é ${num[0]}`)
console.log(`O ultimo elemento do vetor é ${num[4]}`)

/* for(let pos = 0;pos<num.length;pos++) {
    console.log(`Os elemntos dos array são ${num[pos]}`)
}

console.log(pos) 

for(let pos in num) {
    console.log(num[pos])
} */

console.log(num.indexOf(9))