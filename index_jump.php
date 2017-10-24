
<?php
    define("IN_TG",1);
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" ng-app='show_more'>
<head>
   <meta name="viewport" content="width=device-width,user-scalable=no">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link rel="stylesheet" type="text/css" href="css/jassical.css"  />
	<title>video_show</title>
<script lang="javascript" src="javascript/Base.js"></script>
<script type="text/javascript" src="javascript/jquery.js"></script>
<script type="text/javascript" lang="javascript" src="javascript/angular.js"></script>


</head>

<body>
 <?php
   $root_dir=dirname(__FILE__);
   define("ROOT_DIR", $root_dir);
   require ROOT_DIR.'/includes/header.icn.php';
?>
    <div id="middle">
  		<ul id="mid_u1">
        	<li id="mid_u1_l1">
          <video id="mid_u1_l1_v1"  src="videos/hello.mp4"  controls >
                <img src="" alt="">
          </video>
             <img  id="video_pause" />
            </li>
            <li id="mid_u1_l2" onmouseover="Display()" onmouseout="Undisplay()">
            <div class="videoSouce1" onmouseover="vsDisplay('count1','tag1')" onmouseout="Unvsdisplay('count1','tag1')" onclick="Transfer('img1')">
            	<img  id="img1" class="videoimg" src="images/videoImage/jessical.png"/>
                <p id="count1" class="stdcount"></p>
                <p id="tag1" class="stdtag"></p>
            </div>
            <div class="videoSouce2" onmouseover="vsDisplay('count2','tag2')" onmouseout="Unvsdisplay('count2','tag2')" onclick="Transfer('img2')">
            	<img  id="img2" class="videoimg" src="images/videoImage/hello.png" />
                <p id="count2" class="stdcount"></p>
                <p id="tag2" class="stdtag"></p>
            </div>
            <div class="videoSouce3" onmouseover="vsDisplay('count3','tag3')" onmouseout="Unvsdisplay('count3','tag3')" onclick="Transfer('img3')">
            	<img  id="img3" class="videoimg" src="images/videoImage/Bad At Love.png" />
                <p id="count3" class="stdcount"></p>
                <p id="tag3" class="stdtag"></p>
            </div>
            <div class="videoSouce" onmouseover="vsDisplay('count1','tag1')" onmouseout="Unvsdisplay('count1','tag1')" onclick="Transfer('img1')">
            	<img  id="img1" class="videoimg" src="images/videoImage/jessical.png"/>   
            </div>
            <div class="videoSouce" onmouseover="vsDisplay('count2','tag2')" onmouseout="Unvsdisplay('count2','tag2')" onclick="Transfer('img2')">
            	<img  id="img2" class="videoimg" src="images/videoImage/hello.png" /> 
            </div>
            <div class="videoSouce" onmouseover="vsDisplay('count3','tag3')" onmouseout="Unvsdisplay('count3','tag3')" onclick="Transfer('img3')">
                <img  id="img3" class="videoimg" src="images/videoImage/Bad At Love.png" />
            </div>
    			 <button id="btn" type="button" ></button>
            </li>
        </ul>
     </div>
     <?php
     require ROOT_DIR.'/includes/footer.inc.php';
     ?>
<div id="photo">


</div>
<div id="screen">
</div>
	<div id="show_img">
     <h2 id="show_img_h2">
     show image box
     <button id="show_close">×</button>
     </h2>
     <img id="show_img_img" />
</div><script type="text/javascript" src="javascript/main.js">
</script>
</body>

</html>
