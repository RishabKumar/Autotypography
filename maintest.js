 function typo(){
var img = document.querySelector("img");

 

window.addEventListener("click", function(e){
	console.log("Page=>"+(e.clientX+", "+e.clientY));
});




	console.log(img.currentSrc);
	var currentImg = new Image();
	
	
	currentImg.onload = function() {
		
		
		var txt = document.querySelector("h1");

		var rect = txt.getClientRects();
		var x = rect[0].x;
		var y = rect[0].y;
		var canvas = document.createElement("canvas");
        canvas.width = this.width;
        canvas.height = this.height;
		
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this,0,0);

        var imageData = ctx.getImageData(x,y,1,1);

		var r = imageData.data[0];
		var g = imageData.data[1];
		var b = imageData.data[2];
		
		if( (r*0.299 + g*0.587 + b*0.114)  > 186 ){
			console.log("font color: black");
			txt.style.color="black";
		}
		else{
			txt.style.color="white";
			console.log("font color: white");
		}
		
		console.log(r + "," + g + "," + b);
		console.log(x + "," + y);

	}

	currentImg.src = img.currentSrc;



	
	
		
		
 }
		
		
