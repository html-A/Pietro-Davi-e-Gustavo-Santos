let palavras = ["saci", "curupira", "caipora", "boitata", "mula", 
"saci", "curupira", "caipora", "boitata", "mula",
"saci", "curupira", "caipora", "boitata", "mula",
"saci", "curupira", "caipora", "boitata", "mula",
"saci", "curupira", "caipora", "boitata", "mula",
"saci", "curupira", "caipora", "boitata", "mula",
"saci", "curupira", "caipora", "boitata", "mula","saci","saci","saci","saci","saci","saci","saci","saci","saci",
"saci", "curupira", "caipora", "boitata", "mula","mula","mula","mula","mula","mula","mula","mula","mula","mula","mula","mula","mula","mula",
"saci", "curupira", "caipora", "boitata", "mula","mula","mula","mula","mula","mula","mula","mula","mula","mula","mula","mula","mula","mula",
"saci", "curupira", "caipora", "boitata", "mula","mula","mula","mula","mula","mula","mula","mula","mula","mula","mula","mula","mula","mula",
"saci", "curupira", "caipora", "boitata", "mula","mula","mula","mula","mula","mula","mula","mula","mula","mula","mula","mula","mula","mula",
"saci", "curupira", "caipora", "boitata", "mula","mula","mula","mula","mula","mula","mula","mula","mula","mula","mula","mula","mula","mula",
"saci", "curupira", "caipora", "boitata", "mula","mula","mula","mula","mula","mula","mula","mula","mula","mula","mula","mula","mula","mula",
"saci", "curupira", "caipora", "boitata", "mula","mula","mula","mula","mula","mula","mula","mula","mula","mula","mula","mula","mula","mula",
"saci", "curupira", "caipora", "boitata", "mula","mula","mula","mula","mula","mula","mula","mula","mula","mula","mula","mula","mula","mula",
"saci", "curupira", "caipora", "boitata", "mula","mula","mula","mula","mula","mula","mula","mula","mula","mula","mula","mula","mula","mula",
"saci", "curupira", "caipora", "boitata", "mula",
"saci", "curupira", "caipora", "boitata", "mula",
"saci", "curupira", "caipora", "boitata", "mula","caipora","caipora",
"saci", "curupira", "caipora", "boitata", "mula",
"saci", "curupira", "caipora", "boitata", "mula",
"saci", "curupira", "caipora", "boitata", "mula",
"saci", "curupira", "caipora", "boitata", "mula",
"saci", "curupira", "caipora", "boitata", "mula",
"saci", "curupira", "caipora", "boitata", "mula"];
let palavraespecifica = prompt("Escolha uma das palavras: saci, curupira, caipora, boitata ou mula.");
let contagem = 0;

for (let i=0; i<palavras.length; i++){
  if (palavras[i] === palavraespecifica){
    contagem++;
  }
}

alert("a palavra aparece:"+contagem+" vezes")