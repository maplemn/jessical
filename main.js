// JavaScript Document
var html=document.documentElement;
var h_width=html.getBoundingClientRect().width;

function addLoad(func){													//add window.onload
	var oldfunc=window.onload;
	if(typeof window.onload!="function"){
		 window.onload=func;
		}else{
			window.onload=function(){
				func();
				oldfunc();
				};
			}
	}																	//add window.onscroll
function addScroll(func){
	var oldfunc=window.onscroll;
	if(typeof window.onscroll!="function"){
		window.onscroll=func;
		}else{
			window.onscroll=function(){
				func();
				oldfunc();
				};
			}
	}


		    													//get system cookie
function getCookie(c_name){
	var cookie=document.cookie
	if(document.cookie.length>0){
	  c_start=document.cookie.indexOf(c_name+'=')
	  if(c_start!=-1){
		  c_start=c_start+c_name.length+1;
		  c_end=document.cookie.indexOf(';',c_start);
		  if(c_end==-1) c_end=document.cookie.length;
		  var str=cookie.substring(c_start,c_end);
		  return unescape(str);
		  }else{
			  return '';
			  }
	}

}

var cookie=getCookie('search');
function transferCookie(){
	var v=document.getElementById("mid_u1_l1_v1");
	if(cookie){
		v.src="videos/"+cookie+".mp4";
    v.paused=true;
		}
	}
transferCookie();
								                      						//show playtimes
function showList(){
	var get_li=document.getElementById("logined_li");
	 get_li.onmouseover=function (){
		 var get_ul=document.getElementById("show_ul");
			get_ul.style.display="block";
		var get_img=document.getElementById("arrows")
		     get_img.setAttribute("src","images/up.png");
		 }
	 get_li.onmouseout=function (){
		 var get_ul=document.getElementById("show_ul");
			get_ul.style.display="none";
			var get_img=document.getElementById("arrows")
		     get_img.setAttribute("src","images/down.png");
		 }
}

   addLoad(showList);

$(document).ready(function(){
	$('#show_more_li').mouseover(function(){
		$('#show_more').show();
		var get_img=document.getElementById("show_more_img")
				 get_img.setAttribute("src","images/up.png");
	});
	$('#show_more_li').mouseout(function(){
		$('#show_more').hide();
		var get_img=document.getElementById("show_more_img")
				 get_img.setAttribute("src","images/down.png");
	});
}
		);
	

                                                   //login out
function loginOut(){
		var get_qui=document.getElementById("quit");
		get_qui.onclick=function(){
			 document.cookie="login_name='';-1";
			 $.ajax(
			 	{type:"GET",
				 url:"login_out.php?req="+'quit',
				 data:"quit",
				 cacke:false,
			 	success:function(data){
					if(data=="OK"){
						alert('Quit successful');
						window.close();
						window.open('http://localhost/test1/') ;
					}
					}
				 });
		}
	}
addLoad(loginOut);



		       //下一页按钮的处理信息


function rand_num(count){//随机数函数

			return Math.floor(Math.random()*count);

			}
$(document).ready(function(e) {
		$.post({url:"index_btn.php",
					data:'{"random":"gain"}',
				 	dataType:"json",
					success:function(data){
						count_v=data.length;
						switch(count_v){
							  case 1:pho(data,count_v);
							  	break;
							  case 2:pho(data,count_v);
							  	break;
							  case 3:pho(data,count_v);
							  	break;
							  default:break;
							}
						}
			});
    	$("#btn").click(function(){
			$.post({url:"index_btn.php",
					data:'{"random":"gain"}',
				 	dataType:"json",
					success:function(data){
						data_v=data;
						count_v=data.length;
						switch(count_v){
							  case 1:pho(data,count_v);
							  	break;
							  case 2:pho(data,count_v);
							  	break;
							  case 3:pho(data,count_v);
							  	break;
							  default:break;
							}
						}
			});
			});
});


function pho(obj,num){                                                                      //url处理转化
		if(num==1){
		document.getElementById("img1").src="images/videoImage/"+obj[0]["videoname"]+".png";
		document.getElementById("tag1").innerHTML="《"+obj[0]["videoname"]+"》";
		document.getElementById("count1").innerHTML="此视频播放量："+obj[0]["playtimes"]+" 万次";
		document.getElementById("img2").src="images/videoImage/"+obj[0]["videoname"]+".png";
		document.getElementById("tag2").innerHTML="《"+obj[0]["videoname"]+"》";
		document.getElementById("count2").innerHTML="此视频播放量："+obj[0]["playtimes"]+" 万次";
		document.getElementById("img3").src="images/videoImage/"+obj[0]["videoname"]+".png";
		document.getElementById("tag3").innerHTML="《"+obj[0]["videoname"]+"》";
		document.getElementById("count3").innerHTML="此视频播放量："+obj[0]["playtimes"]+" 万次";
		}
		if(num==2){
		document.getElementById("img1").src="images/videoImage/"+obj[0]["videoname"]+".png";
		document.getElementById("tag1").innerHTML="《"+obj[0]["videoname"]+"》";
		document.getElementById("count1").innerHTML="此视频播放量："+obj[0]["playtimes"]+" 万次";
		document.getElementById("img2").src="images/videoImage/"+obj[1]["videoname"]+".png";
		document.getElementById("tag2").innerHTML="《"+obj[1]["videoname"]+"》";
		document.getElementById("count2").innerHTML="此视频播放量："+obj[1]["playtimes"]+" 万次";
		document.getElementById("img3").src="images/videoImage/"+obj[0]["videoname"]+".png";
		document.getElementById("tag3").innerHTML="《"+obj[0]["videoname"]+"》";
		document.getElementById("count3").innerHTML="此视频播放量："+obj[0]["playtimes"]+" 万次";
			}
		if(num==3){
		document.getElementById("img1").src="images/videoImage/"+obj[0]["videoname"]+".png";
		document.getElementById("tag1").innerHTML="《"+obj[0]["videoname"]+"》";
		document.getElementById("count1").innerHTML="此视频播放量："+obj[0]["playtimes"]+" 万次";
		document.getElementById("img2").src="images/videoImage/"+obj[1]["videoname"]+".png";
		document.getElementById("tag2").innerHTML="《"+obj[1]["videoname"]+"》";
		document.getElementById("count2").innerHTML="此视频播放量："+obj[1]["playtimes"]+" 万次";
		document.getElementById("img3").src="images/videoImage/"+obj[2]["videoname"]+".png";
		document.getElementById("tag3").innerHTML="《"+obj[2]["videoname"]+"》";
		document.getElementById("count3").innerHTML="此视频播放量："+obj[2]["playtimes"]+" 万次";
			}
		}


function Transfer(image){

		var str=document.getElementById(image)                                            //转化名称处理
		var str1=str.src;
		var str_parent=str.parentNode;
		var str_parent_child=str_parent.childNodes;
		var child_name=str_parent_child[5].innerText;
			child_name=child_name.replace('《','');
			child_name=child_name.replace('》','')
		var child_str=str_parent_child[3].innerText
		var count_child=child_str.replace(/[^0-9]/ig,'');
		str1=str1.replace('images/videoImage/','videos/');
		str1=str1.replace('png','mp4');
		document.getElementById("mid_u1_l1_v1").src=str1;
		var xml=createXMLHttp();
		xml.onreadystatechange=function(){
			if(xml.readyState==4){
						}
			}
		count_child++;
		xml.open("get","includes/update_click.php?"+"name="+child_name+"&count="+count_child,true);
		xml.send("name="+child_name+"&count="+child_str);
		judgePause();
	}
																						//视频信息标签显示与隐藏
function vsDisplay(idcount,idtag){ //标签显示与隐藏
			document.getElementById(idcount).style.display="block";
			document.getElementById(idtag).style.display="block";
	}
function Unvsdisplay(idcount,idtag){
		document.getElementById(idcount).style.display="none";
		document.getElementById(idtag).style.display="none";
}
if(h_width>980){     //移动端按钮控制
	addLoad(pho);
	function Display(){																	//下一页按钮显示与隐藏
	
				document.getElementById("btn").style.display="block"
	
			}
	function Undisplay(){
	
				document.getElementById("btn").style.display="none"
			}
	addLoad(controlVideo);
}	                                                                           //video控件
function controlVideo(){
		judgePause()
		var get_pause=document.getElementById("video_pause");
		var get_v=document.getElementById("mid_u1_l1_v1");
		var get_li=document.getElementById("mid_u1_l1");
		get_li.onmouseover=function(){
			      get_pause.style.display="block";
			}
		get_li.onmouseout=function(){

			      get_pause.style.display="none";
			}
		get_pause.onclick=function(){

			 if(get_v.paused){
				 get_v.play();
				 get_pause.setAttribute("src","images/played.png")
				 }else{
					 get_v.pause();
					 get_pause.setAttribute("src","images/paused.png")
					 }
			}
	}


function judgePause(){
	var get_pause=document.getElementById("video_pause");
	var get_v=document.getElementById("mid_u1_l1_v1");
	 if(get_v.paused){
				 get_pause.setAttribute("src","images/paused.png")
				 }else{
					 get_pause.setAttribute("src","images/played.png")
					 }
	}
judgePause();														//video float
function videoFloat(){
	var get_v=document.getElementById("mid_u1_l1_v1");
	var c_height=get_v.clientHeight;
	var scr_top=document.body.scrollTop||document.documentElement.scrollTop;
	var offset_top=getY(get_v);
	var tmp=c_height+offset_top-scr_top;
	if(tmp<0&&!get_v.paused){

		get_v.style.position="fixed";
		get_v.style.cssFloat="right";
		get_v.style.left="70%";
		get_v.style.top="60%";
		get_v.style.width="300px";
		get_v.style.height="200px";
		get_v.style.zIndex=999;
	}else{
		get_v.style.position="relative";
		get_v.style.width="100%";
		get_v.style.left="";
		get_v.style.top="";
		get_v.style.height="100%";
		get_v.style.zIndex=999;
		}

	judgePause();
	}
addScroll(videoFloat);


		var get_del=document.getElementsByClassName("delay");                             //获取延迟元素
function delayLoad(){
		var scrollpos=document.documentElement.scrollTop||document.body.scrollTop;

		if(scrollpos>64){
		for(var i=0;i<get_del.length;i++){
		 	var xsrc=get_del[i].getAttribute("xsrc")
			get_del[i].setAttribute("src",xsrc);
			get_del[i].setAttribute("opacity","0.3");

			}

		}

	}
function getY(e){//get coordinate
	  var offy=e.offsetTop;
	  if(e.offsetParent!=null)offy+=getY(e.offsetParent);
	  return offy;
	}
function getX(e){
	  var offy=e.offsetLeft;
	  if(e.offsetParent!=null)offy+=getY(e.offsetParent);
	  return offy;
	}

addScroll(delayLoad);
							                                                      // lock screen
function lockScreen(){
		var get_screen=document.getElementById("screen");
			get_screen.style.display="block";
			get_screen.style.width=window.innerWidth+"px";
			get_screen.style.height=document.body.scrollHeight+"px"
}
function unlockScreen(){

		var get_screen=document.getElementById("screen");
			get_screen.style.display="none";
}
																					//show images
function showImg(){
		var get_img=document.getElementsByClassName("delay");
		var get_show_img=document.getElementById("show_img");
		var get_show_close=document.getElementById("show_close");
		var get_show_img_img=document.getElementById("show_img_img");
		for(var i=0;i<get_img.length;i++){

			(function(i){
			      get_img[i].onclick=function(){
						var get_src=get_img[i].getAttribute("src");
						var offset=getY(get_img[i])+get_img[i].height-window.innerHeight;
						get_show_img.style.top=offset+50+"px";
						get_show_img_img.setAttribute("src",get_src);
						get_show_img.style.display="block";
						lockScreen();
					};
				})(i);
			}
			get_show_close.onclick=function(){
				unlockScreen();
				get_show_img.style.display="none";
			}
	}
addLoad(showImg);


function moveElement(){																	//move Window
		var get_id=document.getElementById("show_img");
		get_id.onmousedown=function(e){
				  var e=e||window.event;
				  var subtop=document.documentElement.scrollTop+e.clientY-getY(get_id);
				  var subleft=e.clientX-getX(get_id);

				 document.onmousemove=function(e){
						var t1=document.body.scrollHeight
						var t4=get_id.clientHeight;
						var t5=getY(get_id)
						var con=t1-t4-t5;
						console.log(con," ",t4+t5);
						if(con<50){

							return false;
							}else{
					 var e=e||window.event;
					 var inter=document.body.scrollHeigh-$("#show_img").height();

					 get_id.style.top=document.documentElement.scrollTop+e.clientY-subtop+"px";
					 get_id.style.left=e.clientX-subleft+"px";
					 }
				 }
			}
		get_id.onmouseup=function(){

			document.onmousemove=null;
			document.onmouseup=null;
			}
	}
addLoad(moveElement);
																//original ajax test
function createXMLHttp(){
	var xml=new XMLHttpRequest();
	if(!xml){
			xml=new ActiveXObject("microsoft.XMLHTTP");
		}
	return xml;
	}

/*
window.onclick=function(){

 var pattren=/^《(.+)》/g;
 var s='《jessical》'
 var re=s.replace('《','');
 	 re=re.replace('》','')
 alert(re)
}*/
/*r.open("get","test.php?name="+Math.random(),true)

r.open("post","test.php",true);
r.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
r.send("name=Liu&age=24");
}*/
/*function createS(src){

		var script=document.createElement("scirpt");
		  script.src=src;
		  document.body.appendChild(script);
		  alert(1)
	}
window.onclick=function(){

	 var xml=new XMLHttpRequest();
	 xml.onreadystatechange=function(){
		 if(xml.readyState==4){
			 console.log(xml.responseText);
			 }
		 }
	xml.open("get","http://localhost:2020/test2/attacke.txt",true)
	xml.send(null);*/
	$(document).ready(function(){
		$(".delay").mouseover(function(){});
	});
