var index =0;
SetNewImage = (function() {
	var imgs = ["images/pic02.jpg","images/pic03.jpg","images/pic04.jpg"];
	document.getElementById("img1").src =imgs[index];
	index++;
	if(index==3)
	{
		index=0;
	}
	// document.getElementById("img1").src ="images/pic02.jpg";
});
SetOldImage = (function() {
    document.getElementById("img1").src ="images/pic01.jpg";
});
