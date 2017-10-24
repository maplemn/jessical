

	function Display(){																	//下一页按钮显示与隐藏
		
			document.getElementById("btn").style.display="block";	
		}
		function Undisplay(){
		
			document.getElementById("btn").style.display="none";
		}
		
		
		//下一页按钮的处理信息
	<?php
	       require 'includes/function.php';

            $query="SELECT *FROM videos";
            $result=database('jessical', $query);
            $total=0;
            while($last=mysql_fetch_array($result,MYSQL_ASSOC)){
                $videoname[$total]=$last['videoname'];
                $videotimes[$total]=$last['videotimes'];
                $total++;
            }
            $new_name=json_encode($videoname);
           
            echo "var songimg =".$new_name.";\n";
            echo "var total=".$total.";";
//             $num1=mt_rand(0,$total);
//             setcookie('songimg',$videoname[0]);
//             setcookie('songcount',$videotimes[0]);
         
	?>
	

	
	var songcount=new Array(52,85,102,23);
	
	
	function rand_num(count){
			
			return Math.floor(Math.random()*count);
															//随机数函数
			}
	function pho(){
		
		var numb1=rand_num(total);
		var numb2=rand_num(total);
		var numb3=rand_num(total);
		document.getElementById("img1").src="images/videoImage/"+songimg[numb1]+".png";
		document.getElementById("tag1").innerHTML="《"+songimg[numb1]+"》";
		document.getElementById("count1").innerHTML="此视频播放量："+songcount[numb1]+" 万次";
		document.getElementById("img2").src="images/videoImage/"+songimg[numb2]+".png";
		document.getElementById("tag2").innerHTML="《"+songimg[numb2]+"》";
		document.getElementById("count2").innerHTML="此视频播放量："+songcount[numb2]+" 万次";
		document.getElementById("img3").src="images/videoImage/"+songimg[numb3]+".png";
		document.getElementById("tag3").innerHTML="《"+songimg[numb3]+"》";
		document.getElementById("count3").innerHTML="此视频播放量："+songcount[numb3]+" 万次";
		
		}
	function Transfer(image){
		str1=document.getElementById(image).src;
		str1=str1.replace('images/videoImage/','videos/');
		str1=str1.replace('png','mp4');
		document.getElementById("mid_u1_l1_v1").src=str1;
		
	}
																						//视频信息标签显示与隐藏
	function vsDisplay(idcount,idtag){   
			document.getElementById(idcount).style.display="block";	
			document.getElementById(idtag).style.display="block";
	}
	function Unvsdisplay(idcount,idtag){
		document.getElementById(idcount).style.display="none";	
		document.getElementById(idtag).style.display="none";
		}
