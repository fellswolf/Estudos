function soma(){
    let n1 = parseInt(document.getElementById('idN1').value);
    let n2 = parseInt(document.getElementById('idN2').value);
    let soma=0;
    soma = n1 + n2;
    document.getElementById('idRes').value = soma;

}

function limpar(){
    document.getElementById('idN1').value = "";
    document.getElementById('idN2').value = "";
    document.getElementById('idRes').value = "";
}