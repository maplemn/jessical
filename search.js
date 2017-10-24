// JavaScript Document

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
													//clean searchbox value
function clean(){
		var sea=document.getElementById("search");
			sea.onclick=function(){
				if(sea.value=='Searching Words'){
					sea.value='';
					}
				};
	}
addLoad(clean);

function tran(){
	var value=$("#respone").html();
	document.getElementById("mid_u1_l1_v1").src='videos/'+value+'.mp4';
}
$(document).ready(function(){
	  $("input").keyup(function(){
	   var cont = $("input").serialize();
	   $.post({
	    url:'search_back.php',
	   	dataType:'json',
	    data:cont,
		async:true,
	    cache:false,
		complete:function(){
			console.log("OK");
			},
	    success:function(data){

	     if(data["back"]){
	    	 txt=data["back"];
			 $("#respone").html(txt);
	     }else{
	       var get_res=document.getElementById("respone");
	       for (var x in data){
			         //create link tags and add attribute
			   var create_a=document.createElement("a")
				create_a.setAttribute("class","res_link");
				create_a.textContent=data[x];
				get_res.appendChild(create_a);
	            }
		   var get_chi=get_res.childNodes;
		   	   get_res.removeChild(get_chi[0]);
			var get_a=document.getElementsByTagName("a");
			if(get_a.length){
			for(var i=0;i<get_a.length;i++){
				(function(i){
					get_a[i].onclick=function(){
						createCookie('search',get_a[i].textContent,1);
						 window.location.assign("http://localhost/test1/index_jump.php");
						};
					})(i);
				}
			   }
		    }
	    }

	   });
	});
});

function searchClick(){

	}
addLoad(searchClick);

function createCookie(c_name,value,minutes){
		var oDate=new Date();
		oDate.setMinutes(oDate.getMinutes()+minutes);
		document.cookie=c_name+'='+escape(value)+((minutes==null)? '':';expires='+oDate.toGMTString());

	}
/*var arr=[2,"name","age",["lisa",35]]

	arr_new=JSON.stringify(arr,null,4);
	arr_new=JSON.parse(arr_new,function(key,v){
		if(key=="releaseDate"){
			return new Date(v);
			}else{
				return v;
				}
		})
	console.log(arr_new);*/
