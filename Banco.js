/**
 * @access  private
 */ 
 /** 
  * @autor Francisco Silvério <franciscogsilverio@gmail.com>
 */
function banco(){
var clientes = [
  [nome = "Higor",
   código = "123", 
   senha = "123", 
   saldo = 500], 
  [nome = "José",
   código = "456", 
   senha = "456", 
   saldo = 100],
]

var codigo = window.prompt("Digite o seu código")
var senha = window.prompt("Digite sua senha")

function procura_cliente(clientes){
return clientes[1] == codigo && clientes[2] == senha
}

var cliente_localizado = (clientes.find(procura_cliente))

if(cliente_localizado == null){
alert("Cliente não localizado")
}

else{

do {
    
var operacao = Number(window.prompt("Qual operação você gostaria de fazer? 1-Saque, 2-Deposito, 3-Transferencia"))
var saldo = cliente_localizado[3]

//Saque
if (operacao == 1){
  var valor = Number(window.prompt("Qual o valor da operação?"))
    
  if(saldo >= valor){
    cliente_localizado[3] = cliente_localizado[3] - valor
    alert("Você fez um saque de "+valor+" R$. Seu saldo atual é "+cliente_localizado[3]+" R$.")}
  
  else {
    alert("Saldo insuficiente.")
  }
}

//Depósito :
else if(operacao == 2){
  var valor = Number(window.prompt("Qual o valor da operação?"))
  var codigoDestino = Number(window.prompt("Digite código da conta de destino:"))
   
  if(codigoDestino == (clientes[0][1] )){

    clientes[0][3] = clientes[0][3] + valor
    alert("Operação realizada.\nSaldo de "+clientes[0][0]+" atualizado para "+clientes[0][3]+" R$.")}
  
  else if (codigoDestino == (clientes[1][1])){
      clientes[1][3] = clientes[1][3] + valor
     alert("Operação realizada.\nSaldo de "+clientes[1][0]+" atualizado para "+clientes[1][3]+" R$.")
    }
  else{
    alert("Código desconhecido.")
  }
    }
  
//Transferência : 
else if(operacao == 3){
  var valor = Number(window.prompt("Qual o valor da operação?"))
  var codigoDestino = Number(window.prompt("Digite código da conta de destino:"))
  
   if(codigoDestino == clientes[1][1] &&  codigoDestino != cliente_localizado[1] ){
     
     if(clientes[0][3] >= valor ){   
        clientes[0][3] = clientes[0][3] - valor 
       clientes[1][3] = clientes[1][3] + valor
        alert("Operação realizada.\nSaldo de "+clientes[0][0]+" atualizado para "+clientes[0][3]+" R$.\nSaldo de "+clientes[1][0]+" atualizado para "+clientes[1][3]+" R$.")
             
     }
     
     else {
       alert("Saldo insuficiente.")
     }
   }
    
    
   else if (codigoDestino == clientes[0][1] && codigoDestino != cliente_localizado[1]){
     
     if(clientes[1][3] >= valor){
         clientes[1][3] = clientes[1][3] - valor
       clientes[0][3] = clientes[0][3] + valor
         alert("Operação realizada.\nSaldo de "+clientes[1][0]+" atualizado para "+clientes[1][3]+" R$.\nSaldo de "+clientes[0][0]+" atualizado para "+clientes[0][3]+" R$.")
        }
      else {
       alert("Saldo insuficiente.")
     }
     }
  else{
    alert("Conta não identificada.")
  }

//Retorno :
}
else{
  alert("Operação não identificada.")
}
//Definição do loop :
  var continuar = window.prompt("Deseja fazer mais alguma operação?\n1 = sim 2 = não")
  if(continuar == 2){
    alert("Obrigado por usar nosso banco <3")
  }}
  

  while(continuar == 1);
}}