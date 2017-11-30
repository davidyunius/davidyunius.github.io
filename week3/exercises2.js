function balikKata(kata) {
    // you can only write your code here!
    var a = (kata.length);
    var b = "";
    for(a; a>=1; a--){
        b = b + (kata[a-1]);
    }
    return b;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS
