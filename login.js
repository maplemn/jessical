// JavaScript Document

function newgdcode(obj,url) { //refresh function
obj.src = url+ '?nowtime=' + new Date().getTime(); 
//后面传递一个随机参数，否则在IE7和火狐下，不刷新图片 
} 


//add window.onload Node

function addLoad(func){
	var oldfunc=window.onload;
	if(typeof window.onload!="function"){
		window.onload=func;
	}else{
		
		window.onload=function(){
			oldfunc();
			func();
		}
	}
}

//change background-image function
var rot=1
var get_img=document.getElementsByClassName("rot_img");
var get_li=document.getElementsByClassName("rot_li");

function autoRot(){
	if(rot>=get_li.length)
	{rot=0;}

	for(var i=0;i<get_li.length;i++){
		get_img[i].style.display="none";
		get_li[i].style.color="white";
		}
	get_img[rot].style.display="block";
	get_li[rot].style.color="black";
	rot++;
	
	t=setTimeout("autoRot()",2000);
}





function rotateImg(){
		get_img[0].style.display="block";
		get_li[0].style.color="black";
		var tmp=0;
         for(var i=0;i<get_li.length;i++){
			 (function(i){
				 get_li[i].onclick=function(){
					 var j=0;
					 for(j;j<get_li.length;j++){
						get_img[j].style.display="none";
						get_li[j].style.color="white";
					 }
					 get_img[i].style.display="block";
					 get_li[i].style.color="black";
					}
			}
			)(i);
		}
 	
}
addLoad(rotateImg);
addLoad(autoRot);