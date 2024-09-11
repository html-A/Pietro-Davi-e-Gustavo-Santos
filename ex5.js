var n = Array();
var x=0
var soma=0;

do{
    n[x] = parseFloat(prompt("Digite um número"));
    let resp = prompt("Deseja continuar?").toLowerCase();
    x++
}while(n[x-1] !==0);

for(let y=0;y<n.lenght;y++){
soma+=n[y]
}
alert(soma)



