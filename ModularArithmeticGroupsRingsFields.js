function modAdd(a, b, m) {
    return (a + b) % m;
}

function modSub(a, b, m) {
    return ((a - b) % m + m) % m;
}

function modMul(a, b, m) {
    return (a * b) % m;
}

function modExp(base, exp, mod) {
    let result = 1;
    base = base % mod;

    while (exp > 0) {
        if (exp % 2 === 1) result = (result * base) % mod;
        base = (base * base) % mod;
        exp = Math.floor(exp / 2);
    }

    return result;
}

function isGroup(n) {
  
    return n > 0;
}


function isRing(n) {

    return n > 1;
}


function isField(n) {
    return isPrime(n);
}

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log("Mod Add:", modAdd(7, 5, 12));
console.log("Mod Exp:", modExp(5, 3, 13));
console.log("Is Field Z_7:", isField(7));
console.log("Is Field Z_8:", isField(8));
