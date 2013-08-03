var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var dots = [];

var initInterv;

var mouseX,mouseY;
var mouseMove = 0;

startInitLoad();

function startInitLoad(){
	initInterv = setInterval(initLoad,10);
}
var num = 0;


function initLoad(){
	//console.log(num);
	context.fillStyle='black';
	context.fillRect(0,0,600,600);
	var genNow = 1+ Math.floor(Math.random()*3	);
	//console.log(dots.length);
	//var genNow = 1;
	if(num == 0){
	for(var i=0;i<genNow/2;i++){
		//console.log("adasD");
		
		var radius = 3+Math.floor(Math.random()*3);
		console.log(radius);
		var angle = 210;
		angleRad = (Math.PI*angle)/180;
		var speed = 1+Math.floor(Math.random()*4);
		var startLoc = Math.floor(Math.random()*600);
		dots[dots.length] = [604,startLoc,radius,speed];
		//console.log(startLoc+" "+radius);
		//console.log(dots[i][0]+" "+dots[i][1]);
		var distanceToTravel = ((600+dots[dots.length-1][2]-dots[dots.length-1][0])/Math.cos(angleRad));
		dots[dots.length-1][4] = distanceToTravel/dots[dots.length-1][3];
		//console.log(dots[dots.length-1][4]);
		//console.log(dots[dots.length-1][0]+" "+dots[dots.length-1][1]+" "+dots[dots.length-1][2]+" "+dots[dots.length-1][3]+" "+dots[dots.length-1][4]);
		context.fillStyle= 'red';
		context.beginPath();
		context.arc(600,startLoc,radius,0,2*Math.PI);
		context.closePath();
		context.fill();
		
		}
		
	}
	num++;
		if(num==10)
			num=0;
	
	/*for(var i=0;i<genNow/2;i++){
		var radius = 2+Math.floor(Math.random()*4);
		var angle = 240;
		angleRad = (Math.PI*angle)/180;
		var speed = 1+Math.floor(Math.random()*4);
		var startYLoc = Math.floor(Math.random()*600);
		dots[dots.length] = [startYLoc,0,radius,speed];
		//console.log(startLoc+" "+radius);
		console.log(dots[i][0]+" dsfsd "+dots[i][1]);
		var distanceToTravel = (600-(startYLoc+dots[i][2])/Math.cos(angleRad));
		dots[i][4] = distanceToTravel/dots[i][3];
		console.log(dots[i][0]+" "+dots[i][1]+" "+dots[i][2]+" "+dots[i][3]+" "+dots[i][4]);
		context.fillStyle= 'red';
		context.beginPath();
		context.arc(600,startLoc,radius,0,2*Math.PI);
		context.closePath();
		context.fill();
	}*/
	//num++;
//}
	//alert(dots.length);
	for(var j=0;j<dots.length;j++){
		if(typeof(dots[j]) != 'undefined'){
		if(dots[j][0] <= 0 || dots[j][1] >= 600){
			//console.log("asdasDSA");
			dots.splice(j,1);
		}
		// Deciding Position
		
		
		//console.log(dots[j][4]);
		if(typeof(dots[j][4] != 'undefined')){
		var moveXBy = dots[j][4]*Math.cos(angleRad);
		var moveYBy = dots[j][4]*Math.sin(angleRad);
		//console.log(distanceToTravel);
		dots[j][0] -= moveXBy;
		dots[j][1] += moveYBy;

		//End

		context.fillStyle='red';
		context.beginPath();
		context.arc(dots[j][0],dots[j][1],dots[j][2],0,2*Math.PI);
		context.closePath();
		context.fill();
	}
	}
}
	if(mouseMove == 1){
		context.fillStyle = '#438ad0';
		context.beginPath();
		context.arc(mouseX,mouseY,2,0,2*Math.PI);
		context.closePath();
		context.fill();
	}
}

function generateThread(e){
	mouseX = e.pageX;
	mouseY = e.pageY;

	mouseMove = 1;

}