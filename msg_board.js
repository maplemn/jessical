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
function addLoad(func){
    let oldfunc=window.onload;
    if(typeof window.onload!='function'){
        window.onload=func;
    }else{
        func();
        oldfunc();
    }
    
}
function setUsername(){
   let get_p=document.getElementById('username');
   let user_id=getCookie('login_name');
   
   if(user_id!=''){
      get_p.innerHTML=getCookie('login_name');
    }else{
        get_p.innerHTML='还未登录';
    }
      
}
addLoad(setUsername);

function getCookie(c_name){
     let cookie=document.cookie;
     if(cookie){
        var c_start=cookie.indexOf(c_name);
        if(c_start==-1) return '';
           c_start=c_start+c_name.length+1;
        var c_end=cookie.indexOf(';',c_start);
        var result;
        if(c_end==-1){
            c_end=document.cookie.length
        }
        result=cookie.substring(c_start,c_end);
       
        return result;
     }else{
         return '';
     }
}
//----------------------------------------------------------------------------
let mod=angular.module('msg_board',[]);
mod.controller('main',function($scope,$http){  
     $scope.reverse=function(arr){
               return arr.reverse();          
     }
     $http({
             method:'post',
             url:'includes/msg_board.php',
             data:{res:'comment'},
             dataType:'json',
             headers:{'Content-Type':'application/x-www-form-urlencoded'},
             transformRequest:function(obj){
                 let arr=[];
                 
                 for(let name in obj){
                     let str=name+'='+obj[name];
                     arr.push(str);
                 } 
                 return arr.join("&");   
             }
         }).then((res)=>{
                 $scope.arr=$scope.reverse(res.data);
                  console.log(res.data);
         },(err)=>{
             alert('failed')
         });
 let oDate=new Date();
 oDate=oDate.toUTCString();
 $scope.time=oDate;
 $scope.user_id=getCookie('login_name');
 $scope.text=$scope.comment;
 $scope.pro_count=0;     
 $scope.test=function(){
     let res={user_id:$scope.user_id,
              user_comment:$scope.comment,
              user_date:oDate,
              pro_count:$scope.pro_count};
     if(typeof $scope.comment=='undefined'){
         alert('Please enter comment');
     }else{
     $http({
             method:'post',
             url:'includes/msg_board.php',
             data:res,
             dataType:'json',
             headers:{'Content-Type':'application/x-www-form-urlencoded'},
             transformRequest:function(obj){
                 let arr=[];
                 
                 for(let name in obj){
                     let str=name+'='+obj[name];
                     arr.push(str);
                 } 
                 return arr.join("&");   
             }
         }).then((res)=>{
            alert('successful');    
         },(err)=>{
             alert('failed')
         });
     }
 }
 });  
 //------------------------------------------------------------------------------------------------------------------ 