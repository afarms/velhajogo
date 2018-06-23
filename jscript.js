window.onload = inicio;
var posicao1, posicao2, posicao3, posicao4, posicao5, posicao6, posicao7, posicao8, posicao9,ou,antibug, posicaopc; 
var cont1=0, cont2=0, acertocont2;
var vet= new Array(0,0,0,0,0,0,0,0,0);
var pc, oupc;
var i;
var verificarvitoria =0;
var espacos=0;
var vitoria= false;

// cliando a função da jogada do pc que será iniciada ao clicar em um elemento após a jogado do usuário.
function jogadapc(){ 
		

		
	
	pc= Math.floor(Math.random()*9);// gera o número aleatório
	console.log("primeira jogada do pc : "+pc+" a sua foi: " + oupc);
	while(vet[pc]!=0){ console.log("PC jogou de novo, porque a posição: "+pc+" já estava ocupada "); pc=Math.floor(Math.random()*9); console.log("NOVA JOGADA DO PC: "+pc);}
		posicaopc= document.getElementById("x"+pc);
		posicaopc.innerHTML ="<img src='zero.png'>";
		vet[pc]=2;
		console.log("Posições do vetor já ocupadas: "+vet);
		vencedor();
		switch (verificarvitoria) { case 1: alert("VOCÊ GANHOU"); break; case 2: alert("O PC GANHOU!"); break; case 0: break; }
}
function inicio (){ 


				

	
	//clicando na primeira linha

	posicao1= document.getElementById("x"+0);
	posicao1.addEventListener("click",function(){colocarimagem0(0,posicao1)});

	posicao2= document.getElementById("x"+1);
	posicao2.addEventListener("click",function(){colocarimagem0(1,posicao2)});

	posicao3= document.getElementById("x"+2);
	posicao3.addEventListener("click",function(){colocarimagem0(2,posicao3)});

	// clicando na segunda linha

	posicao4= document.getElementById("x"+3);
	posicao4.addEventListener("click",function(){colocarimagem0(3,posicao4)});

	posicao5= document.getElementById("x"+4);
	posicao5.addEventListener("click",function(){colocarimagem0(4,posicao5)});

	posicao6= document.getElementById("x"+5);
	posicao6.addEventListener("click",function(){colocarimagem0(5,posicao6)});

	// clicando na terceira linha

	posicao7= document.getElementById("x"+6);
	posicao7.addEventListener("click",function(){colocarimagem0(6,posicao7)});

	posicao8= document.getElementById("x"+7);
	posicao8.addEventListener("click",function(){colocarimagem0(7,posicao8)});

	posicao9= document.getElementById("x"+8);
	posicao9.addEventListener("click",function(){colocarimagem0(8,posicao9)});

	antibug = document.getElementById("caixa3");
	
}

function vencedor(){

		
		//vencendo na horizontal


		if((vet[0]==1)&(vet[1]==1)&(vet[2]==1)) { 
				 vitoria= true; verificarvitoria = 1; cont1++; 
				 document.getElementById("placar-jogador").value= cont1; //placar do jogador
				posicao1.style.backgroundColor = 'green'; posicao2.style.backgroundColor = 'green'; posicao3.style.backgroundColor = 'green';
					
			}else if((vet[3]==1)&(vet[4]==1)&(vet[5]==1)) {
				vitoria= true; verificarvitoria = 1; cont1++; 
				document.getElementById("placar-jogador").value= cont1; //placar do jogador
				posicao4.style.backgroundColor = 'green'; posicao5.style.backgroundColor = 'green'; posicao6.style.backgroundColor = 'green';
			
			}else if((vet[6]==1)&(vet[7]==1)&(vet[8]==1)) {
				vitoria= true; verificarvitoria = 1; cont1++; 
				document.getElementById("placar-jogador").value= cont1; // placar do jogador
				posicao7.style.backgroundColor = 'green'; posicao8.style.backgroundColor = 'green'; posicao9.style.backgroundColor = 'green';
			}

		 // vencendo na vertical	
		 if((vet[0]==1)&(vet[3]==1)&(vet[6]==1)) { 
				vitoria = true; verificarvitoria = 1; cont1++; 
				document.getElementById("placar-jogador").value= cont1; // placar do jogador
				document.getElementById("x0").style.backgroundColor='green'; document.getElementById("x3").style.backgroundColor='green'; document.getElementById("x6").style.backgroundColor='green';
					
			}else if((vet[1]==1)&(vet[4]==1)&(vet[7]==1)) { 
				vitoria = true; verificarvitoria = 1; cont1++; 
				document.getElementById("placar-jogador").value= cont1;// placar do jogador
				document.getElementById("x1").style.backgroundColor='green'; document.getElementById("x4").style.backgroundColor='green'; document.getElementById("x7").style.backgroundColor='green';
			
			}else if((vet[2]==1)&(vet[5]==1)&(vet[8]==1)) { 
				vitoria = true; verificarvitoria = 1; cont1++; 
				document.getElementById("placar-jogador").value= cont1;// placar do jogador
				posicao3.style.backgroundColor='green'; posicao6.style.backgroundColor='green'; posicao9.style.backgroundColor='green';
			}
			//vencendo na diagonal
		if((vet[0]==1)&(vet[4]==1)&(vet[8]==1)){
				vitoria = true; verificarvitoria = 1; cont1++;
				document.getElementById("placar-jogador").value= cont1;// placar do jogador
				posicao1.style.backgroundColor='green'; posicao5.style.backgroundColor='green'; posicao9.style.backgroundColor='green'; 
			
			}else if ((vet[2]==1)&(vet[4]==1)&(vet[6]==1)){
				vitoria = true; verificarvitoria = 1; cont1++;
				document.getElementById("placar-jogador").value= cont1;// placar do jogador
				posicao3.style.backgroundColor='green'; posicao5.style.backgroundColor='green'; posicao7.style.backgroundColor='green';
			}


		//VITORIA DO PC
		if(vitoria == false){
			if((vet[0]==2)&(vet[1]==2)&(vet[2]==2)) { 
				 vitoria= false; verificarvitoria = 2; cont2++; 
				 document.getElementById("placar-computador").value= cont2; //placar do PC
				posicao1.style.backgroundColor = 'red'; posicao2.style.backgroundColor = 'red'; posicao3.style.backgroundColor = 'red';
					
			}else if((vet[3]==2)&(vet[4]==2)&(vet[5]==2)) {
				vitoria= false; verificarvitoria = 2; cont2++; 
				document.getElementById("placar-computador").value= cont2; //placar do PC
				posicao4.style.backgroundColor = 'red'; posicao5.style.backgroundColor = 'red'; posicao6.style.backgroundColor = 'red';
			
			}else if((vet[6]==2)&(vet[7]==2)&(vet[8]==2)) {
				vitoria= false; verificarvitoria = 2; cont2++; 
				document.getElementById("placar-computador").value= cont2; // placar do PC
				posicao7.style.backgroundColor = 'red'; posicao8.style.backgroundColor = 'red'; posicao9.style.backgroundColor = 'red';
			}

		 // vencendo na vertical	
		 if((vet[0]==2)&(vet[3]==2)&(vet[6]==2)) { 
				vitoria = false; verificarvitoria = 2; cont2++; 
				document.getElementById("placar-computador").value= cont2; // placar do PC
				document.getElementById("x0").style.backgroundColor='red'; document.getElementById("x3").style.backgroundColor='red'; document.getElementById("x6").style.backgroundColor='red';
					
			}else if((vet[1]==2)&(vet[4]==2)&(vet[7]==2)) { 
				vitoria = false; verificarvitoria = 2; cont2++; 
				document.getElementById("placar-computador").value= cont2;// placar do PC
				document.getElementById("x1").style.backgroundColor='red'; document.getElementById("x4").style.backgroundColor='red'; document.getElementById("x7").style.backgroundColor='red';
			
			}else if((vet[2]==2)&(vet[5]==2)&(vet[8]==2)) { 
				vitoria = false; verificarvitoria = 2; cont2++; 
				document.getElementById("placar-computador").value= cont2;// placar do PC
				posicao3.style.backgroundColor='red'; posicao6.style.backgroundColor='red'; posicao9.style.backgroundColor='red';
			}
			//vencendo na diagonal
		if((vet[0]==2)&(vet[4]==2)&(vet[8]==2)){
				vitoria = false; verificarvitoria = 2; cont2++;
				document.getElementById("placar-computador").value= cont2;// placar do PC
				posicao1.style.backgroundColor='red'; posicao5.style.backgroundColor='red'; posicao9.style.backgroundColor='red'; 
			
			}else if ((vet[2]==2)&(vet[4]==2)&(vet[6]==2)){
				vitoria = false; verificarvitoria = 2; cont2++;
				document.getElementById("placar-computador").value= cont2;// placar do PC
				posicao3.style.backgroundColor='red'; posicao5.style.backgroundColor='red'; posicao7.style.backgroundColor='red';
			}
			
		}
	}
	

	



// colocar imagem nas loginhas 1 
function colocarimagem0(ou,t){
		oupc = ou;
		console.log("JOGADOR jogou: "+ou);
		

		if(vet[oupc]!=0){ console.log("Você não pode jogar ai"); oupc=10 /*ele recebe 10 porque essa posição não existe*/}else{//nessa linha eu evito que jogue em um lugar que já foi jogado;
			t.innerHTML= "<img src='x.png'>";
			vet[ou]=1;
			

			for(i=0; i< vet.length; i++){ 
				if(vet[i]==0){
					jogadapc();
					i=9;
				}
				
			}
		
		}
		if ((vet[0]>0)&(vet[1]>0)&(vet[2]>0)&(vet[3]>0)&(vet[4]>0)&(vet[5]>0)&(vet[6]>0)&(vet[7]>0)&(vet[8]>0)){
					vencedor();
					switch (verificarvitoria) { case 1: alert("VOCÊ GANHOU"); break; case 2: alert("O PC GANHOU!"); break; case 0: break; }
				}

		
	}
	function resetar(){
			cont1=0; cont2=0;
			document.getElementById("placar-computador").value= cont2;
			document.getElementById("placar-jogador").value= cont1;

	}
	function limpar(){
		espacos =0;
		 for(i=0; i< vet.length; i++){ 
		 	document.getElementById('x'+i).innerHTML= "<img src=''>"; document.getElementById("x"+i).style.backgroundColor='white';
		 	vet[i]=0; verificarvitoria=0; vitoria=false;

		 }
	}