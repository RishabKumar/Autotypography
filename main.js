var img = document.querySelector("img");



	
	img.addEventListener("click",function(e){
		
		var x = e.offsetX;
		var y = e.offsetY;
		console.log(x + "," + y);
		
		
		
		
		
		var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(img,0,0);

        var imageData = ctx.getImageData(x,y,1,1);

		var r = imageData.data[0];
		var g = imageData.data[1];
		var b = imageData.data[2];
		
		if( (r*0.299 + g*0.587 + b*0.114)  > 186 ){
			console.log("font color: black");
		}
		else{
			console.log("font color: white");
		}
		
		console.log(imageData.data[0] + "," + (imageData.data[1]) + "," + imageData.data[2]);
	});


		
		
