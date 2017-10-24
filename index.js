
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
	}
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
$(document).ready(function(){
  $.post({url:"index_confirm.php",
        data:{res:'music'},
        dataType:"json",
        success:function(data){
          var get_img=document.getElementsByClassName("delay");
          for(let i=0;i<get_img.length;i++){
            get_img[i].src="images/videoImage/"+data[i]['videoname']+".png";
          }
            }
          }
    );

  });

function setCookie(c_name,value,expire){
	var oDate=new Date();
			oDate.setMinutes(oDate.getMinutes()+expire);
			document.cookie=c_name+'='+value+((expire==null)? '':';expires='+oDate.toGMTString());
}
  function indexImg(){
      var get_img=document.getElementsByClassName("delay");
      var get_tag=document.getElementById("tag");
      for(let i=0;i<get_img.length;i++){

        (function(i){


          get_img[i].onmouseover=function(){
            get_tag.style.display="block";

						var str=get_img[i].src;
						str=str.match(/Image\/(\S*)/)[0];
						str=str.split('/')[1];
						str=str.split('.')[0];
						str=decodeURIComponent(str);
						var bottom=get_img[i].offsetTop;
						var left=get_img[i].offsetLeft;

						get_tag.style.top=bottom+'px';
						get_tag.style.left=left+'px';
						get_tag.innerText=str;
            get_img[i].style.transition='1s';
            get_img[i].style.width='31.5%';

          }
          get_img[i].onmouseout=function(){
						get_tag.style.display='none'
            get_img[i].style.width='31%';
          }
					get_img[i].onclick=function(){

						var str=get_img[i].src;
						str=str.match(/Image\/(\S*)/)[0];
						str=str.split('/')[1];
						str=str.split('.')[0];
						str=decodeURIComponent(str);
						setCookie('search',str,1);
						window.location.assign('http://localhost/test1/index_jump.php');
					}

        })(i);
      }
  }
  addLoad(indexImg);
// function resMusic(){
//  var xml= new XMLHttpRequest();
//  var res={res:'music'};
//  if(!window.XMLHttpRequest){
//    xml=new ActiveXObject('Microsoft Explore');
//  }
//  xml.onreadystatechange=function(){
//     if(xml.readyState==4){
//       alert(xml.responseText)
//     }
//  }
//  xml.open('POST','index_confirm.php');
//  xml.send('ok=1');
// }
// addLoad(resMusic);
