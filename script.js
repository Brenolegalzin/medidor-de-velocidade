let time = parseInt(prompt("digite o tempo :"));
document.getElementById("tempo").innerText = "tempo restante :"+time;
let medidor = 0;
function loop(){
	setTimeout(function(){
		time = time-1
		medidor = medidor-1;
		document.getElementById("tempo").innerText = "tempo restante :"+time;
		if(medidor<=-1){
			medidor = 0;
		}
		if(time==0){
			if(medidor==5){
				alert("voce é rápido!");
				location.reload();
			}
			else if(medidor==4){
				alert("voce é rapido!");
				location.reload();
			}
			else if(medidor==3){
				alert("voce é mais ou menos...");
				location.reload();
			}
			else if(medidor==2){
			    alert("voce é mais ou menos...");
			    location.reload();
		    }
			else if(medidor==1){
				alert("voce é lento!");
				location.reload();
			}
			else if(medidor==0){
				alert("voce é lento!");
				location.reload();
			}
			
		}
		loop();
	}, 1000);
}
loop();
function clicando(){
	if(medidor>=5){
		medidor = 5;
	}
	medidor = medidor+1;
	document.querySelector("#botao").style.backgroundColor = "blue";
	setTimeout(function(){
		document.querySelector("#botao").style.backgroundColor = "aqua";
	},100);
}
