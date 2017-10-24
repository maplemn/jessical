// JavaScript Document

            //添加window.onload事件
// function addLoad(func){
// 	var oldfunc=window.onload;
// 	if(typeof window.onload!="function"){
// 		 window.onload=func;
// 		}else{
// 			window.onload=function(){
// 				func();
// 				oldfunc();
// 				};
// 			}
// 	}
	
// 			//移动元素（元素id，移动终点坐标，移动间距）
// function moveElement(id,xpos,ypos,interval){
// 	var get_id=document.getElementById(id);
// 	var get_left=parseInt(get_id.style.left);
// 	var get_top=parseInt(get_id.style.top);
	
// 	if(get_left==xpos&&get_top==ypos){
// 		return true;
// 		}
// 	if(get_left<xpos){
// 		get_left++;
// 		}
		
// 	if(get_left>xpos){
// 		get_left--;
// 		}
		
// 	if(get_top<ypos){
// 		get_top++;
// 		}
// 	if(get_top>ypos){
// 		get_top--;
// 		}
		
// 	get_id.style.left=get_left+"px";
// 	get_id.style.top=get_top+"px";
	
// 	var repeat="moveElement('"+id+"',"+xpos+","+ypos+","+interval+")";
// 	movement=setTimeout(repeat,interval);
// 	}
	         
// 			 //packaging base document.get...
// var $=function(){
// 	return new Base();
// 	}
// function Base(){
// 		this.elements=[];
// 		this.getId=function(id){
// 			this.elements.push(document.getElementById(id));			return this;
// 		}
// 		this.getTags=function(tag){
// 			var tags=document.getElementsByTagName(tag);
			
// 			for(var i=0;i<tags.length;i++){
// 					this.elements[i]=tags[i];
					
// 			}
// 			return this;
// 			}
// 		this.getClasses=function(name){
// 			var tags=document.getElementsByClassName(name);
			
// 			for(var i=0;i<tags.length;i++){
// 					this.elements[i]=tags[i];
					
// 			}
// 			return this;
// 			}
		
// 	}
// Base.prototype.arr=function(num){
// 	return this.elements[num];
	
// 	}
// 	//css样式变更
// Base.prototype.css=function(attr,value){
// 	for(var i=0;i<this.elements.length;i++){
// 		this.elements[i].style[attr]=value;
// 	}
// 	return this;
// 	}
	
// Base.prototype.html=function(str){
	
// 	for(var i=0;i<this.elements.length;i++){
		
// 		this.elements[i].innerHTML=str;
// 	}
// 	return this;
// 	}
// Base.prototype.index=function(){
	
// 	}
// Base.prototype.click=function(func){
// 	for(var i=0;i<this.elements.length;i++){
		
// 		this.elements[i].onclick=func;
// 	}
// 	return this;
// 	}
(function(){
		var html=document.documentElement;
		var width=html.getBoundingClientRect().width;
		html.style.fontSize=width/16+'px';
	  })();
	  var html=document.documentElement;
	  var width=html.getBoundingClientRect().width;
	  function refreshPage(){
			html.style.fontSize=width/16+'px';
			var width_new=html.getBoundingClientRect().width;
			var sub=Math.abs(width-width_new);
	
			if(sub>20){
			  window.location.reload();
			}
	  }
	  setInterval(refreshPage,10);