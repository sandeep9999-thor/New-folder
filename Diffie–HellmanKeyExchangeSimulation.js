function modExp(base, exp, mod) {
    let result = 1;
    base %= mod;

    while (exp > 0) {
        if (exp % 2 === 1)
            result = (result * base) % mod;

        base = (base * base) % mod;
        exp = Math.floor(exp / 2);
    }
    return result;
}


function diffieHellman(p, g, a, b) {


    let A = modExp(g, a, p);

 
    let B = modExp(g, b, p);


    let secretAlice = modExp(B, a, p);
    let secretBob = modExp(A, b, p);

    return {
        publicAlice: A,
        publicBob: B,
        sharedSecretAlice: secretAlice,
        sharedSecretBob: secretBob
    };
}

let result = diffieHellman(23, 5, 6, 15);

console.log("Alice public:", result.publicAlice);
console.log("Bob public:", result.publicBob);
console.log("Shared secret (Alice):", result.sharedSecretAlice);
console.log("Shared secret (Bob):", result.sharedSecretBob);