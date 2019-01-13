<script>
    
     var not_run = true;
    var not_run2 = true;
    var not_run3 = true;
      var not_run4 = true;
     var not_run5 = true;
     var not_run6 = true;
    var not_run7 = true;
    var not_run8 = true;
     var not_run9 = true;
    var not_run10 = true;
    var not_run11 = true;
    
    function showArr(){
        $(".last-page-arrow").show();
        $(".next-page-arrow").show();
    }
    
    function hideArr(){
        $(".last-page-arrow").hide();
        $(".next-page-arrow").hide();
    }
    
    hideArr();
    
    let pageList = document.getElementsByClassName("page-text-i");
    let elipsesList = document.getElementsByClassName("ep-slipse");
    let elipIndex = 0;
    
    var contentsFull = true;
    
  
    
    for(i=1;i<pageList.length;i++){
        $(pageList[i]).hide();
    }
   var pageIndex = 0;
    var ep1Index = 0;
    var currentIndex = pageIndex;
    
    $(".first-exploit-episode-text-p2").hide();
    
    $(".next-page-arrow").on("click",function(){
        
        goToNextPage(ep1Index);
       
        
    });
    
      $(".next-page-arrow2").on("click",function(){
        
        goToNextPage(ep1Index);
       
        
    });
    
    
      $(".last-page-arrow").on("click",function(){
        
        goToLastPage(ep1Index);
       
        
    });
    
    function elipseForwards(){
         $(elipsesList[elipIndex]).removeClass("ep-slipse-active");
        elipIndex++;
        $(elipsesList[elipIndex]).addClass("ep-slipse-active");
        
    }
    
    
 
    
    function loadPageSpecifics(){
           switch(currentIndex)
    {
     
    case 1:
            $(".next-page-arrow").css("color","#2E2B54");
      $(".next-page-arrow").show();
      break;
    case 2:
      $(".next-page-arrow").css("color","#2E2B54");
      break;
    case 3:
        $(".next-page-arrow").css("color","#2E2B54");
      break;
    case 4:
        $(".next-page-arrow").css("color","#2E2B54");
            if(not_run){
          not_run = false;
           $(".iframe-dest").html(" <iframe src = '/sshiframe' class = 'ssh-frame'></iframe>");
          }
      break;
    case 5:
        $(".next-page-arrow").css("color","#2E2B54");
        if(not_run2){
          not_run2 = false;
           $(".iframe-dest2").html(" <iframe src = '/b0frame' class = 'ssh-frame-s2'></iframe>");
          }
      break;
    case 6:
        $(".next-page-arrow").css("color","white");
             $(".episode-elipses-holer").hide();

      break;
    case 7:
          $(".next-page-arrow").css("color","white");
        if(not_run3){
          not_run3 = false;
           $(".iframe-dest3").html(" <iframe src = '/b1frame' class = 'ssh-frame-s3'></iframe>");
          }
      break;
    case 8:
         $(".next-page-arrow").css("color","white");
            if(not_run4){
          not_run4 = false;
           $(".iframe-dest4").html(" <iframe src = '/b2frame' class = 'ssh-frame-s3'></iframe>");
          }
      break;
    case 9:
        $(".next-page-arrow").css("color","white");
             
             if(not_run5){
          not_run5 = false;
           $(".iframe-dest5").html(" <iframe src = '/b3frame' class = 'ssh-frame-m'></iframe>");
          }
      break;
    case 10:
          
 $(".next-page-arrow").css("color","white");
             
            if(not_run6){
          not_run6 = false;
           $(".iframe-dest6").html(" <iframe src = '/b4frame' class = 'ssh-frame-m'></iframe>");
          }
      break;
    case 11:
          
 $(".next-page-arrow").css("color","white");
             
            if(not_run7){
          not_run7 = false;
           $(".iframe-dest7").html(" <iframe src = '/b5frame' class = 'ssh-frame-m'></iframe>");
          }
      break;
    case 12:
          
 $(".next-page-arrow").css("color","white");
             
            if(not_run8){
          not_run8 = false;
           $(".iframe-dest8").html(" <iframe src = '/b6frame' class = 'ssh-frame-m'></iframe>");
          }
      break;
    case 13:
          
 $(".next-page-arrow").css("color","white");
             
            if(not_run9){
          not_run9 = false;
           $(".iframe-dest9").html(" <iframe src = '/b7frame' class = 'ssh-frame-m'></iframe>");
          }
      break;
    case 14:
          
 $(".next-page-arrow").css("color","white");
             
            if(not_run10){
          not_run10 = false;
           $(".iframe-dest10").html(" <iframe src = '/b8frame' class = 'ssh-frame-m'></iframe>");
          }
      break;
    case 15:
          
 $(".next-page-arrow").css("color","white");
             
            if(not_run11){
          not_run11 = false;
           $(".iframe-dest11").html(" <iframe src = '/b9frame' class = 'ssh-frame-m'></iframe>");
          }
      break;
           
    
    default:
        $(".next-page-arrow").css("color","#2E2B54");
    }
    }
    
    function goToNextPage(){
        
        
        flickPageForwards();
        loadPageSpecifics();
        elipseForwards();
        
        if(currentIndex == (pageList.length-1)){
           $(".next-page-arrow").hide();
            
           }
        
        if(currentIndex == 1){
           $(".last-page-arrow").show();
            
           }
        
    }
    
    
    
     function goToLastPage(){
         
         $(elipsesList[elipIndex]).removeClass("ep-slipse-active");
        
         if(elipIndex>0){
          elipIndex--;
           }
        
        $(elipsesList[elipIndex]).addClass("ep-slipse-active");
        
         $(pageList[currentIndex]).hide();
        if(currentIndex>0){
           currentIndex--;
           }
        
        $(pageList[currentIndex]).show();
         
          loadPageSpecifics();
         //change to only last page:::
          $(".next-page-arrow").show();
         
    }
    
       function flickPageForwards(){
      
         $(pageList[currentIndex]).hide();
        currentIndex++;
         $(pageList[currentIndex]).show();
 
    }
    
       function goToPageX(pageNumber){
         
         $(pageList[currentIndex]).hide();
        currentIndex = pageNumber;
         $(pageList[currentIndex]).show();
         loadPageSpecifics();
    
    
    }
    
 
    
  
    
    $(".first-exploit-episode-text").hide();
      $(".ublog-overview-text").hide();
    
   
    

    
    
    $(".episode-contents-item").on("click",function(){
        
        $(".contents-active").removeClass("contents-active");
        $(".contents-active-text").removeClass("contents-active-text");
    $(this).addClass('contents-active');
        $(this).find("h4").addClass('contents-active-text');
        
        
        if($(this).attr('id') == 'bandit-cont'){
             $(".next-page-arrow").show();
             makeActiveText($(".first-exploit-episode-text"));
              pageList = document.getElementsByClassName("page-text-f");
            currentIndex = ep1Index;
            
             for(i=0;i<pageList.length;i++){
        $(pageList[i]).hide();
                 
                 
    }
            
           
            
            
            
             $(pageList[ep1Index]).show();
            showLevelNavigator();
           //$(".episode-elipses-holer").css("display","block"); 
            
        }
        
        if($(this).attr('id') == 'ublog-intro'){
            
            makeActiveText($(".ublog-intro-text"));
            $(".episode-elipses-holer").css("display","none");
             $(".lev-choose-opener").fadeOut();
            
            
        }
        
        if($(this).attr('id') == 'ublog-overview'){
           makeActiveText($(".ublog-overview-text"));
            $(".episode-elipses-holer").css("display","none");
        }
        
        
       
    });
    
    
    function changeToLevel(levelName){
        $(".next-page-arrow").show();
        $(".contents-active").removeClass("contents-active");
        $(".contents-active-text").removeClass("contents-active-text");
    $(this).addClass('contents-active');
        $(this).find("h4").addClass('contents-active-text');
        
          $(".contents-active").removeClass("contents-active");
        $(".contents-active-text").removeClass("contents-active-text");
        if(levelName == 'bandit'){
           
             makeActiveText($(".first-exploit-episode-text"));
              pageList = document.getElementsByClassName("page-text-f");
            currentIndex = ep1Index;
             for(i=0;i<pageList.length;i++){
        $(pageList[i]).hide();
                 
    }
             $(pageList[ep1Index]).show();
           //$(".episode-elipses-holer").css("display","block"); 
            
           
    $(this).addClass('contents-active');
    $(this).find("h4").addClass('contents-active-text');
        
            
        }
        
        
        
        
       
    }
    
   
      function showLevelNavigator(){
                
               
         $(".lev-choose-opener").fadeIn();
                
                
            }
    
    
    
   
    
    
    $(".bandit-buy").on("click",function(){
        changeToLevel("bandit");
    });
    
    
    $("#open-blog-sign-up").on("click",function(){
        var url = "/ublog_vuln_1_link";
 window.open(url, '_blank');
    });
    
    function makeActiveText(make_active){ 
         $(".text-active").hide();
             $(".text-active").removeClass("text-active");
        make_active.fadeIn();
        make_active.addClass("text-active");
        
    }
   

    
    /*
    The first line you need to type into your terminal is: <br><br>

ssh bandit0@bandit.labs.overthewire.org -p 2220<br>

You should recieve a prompt asking you to input the username and then password, both are bandit0.

    most of the generic ways that computers interact are covered.

cryptology
web application security.
programme flaws such as buffer overflows.

If you are pretty new to this, I reccomend you start off at Bandit.

This is probably the only level I'd say there is merit to only going through the walkthorugh and not completeing your.

Bandit covers the knowledge necessary to complete the later levels' so it's fine to whizz through just to check you are up to scratch.

try nto to fall itno bad habits. You might not realise it at the time, but if you actually work through the problems yourself and take the time to understand what you yourself are doing, then the knowledge will stick a lot better.

either find information held within the account, or find the means to exploit the application so that we can migrate to antoher user account, specifically the one that represents the next level.
    
The place that your commands are sent to The application that you are controlling, is determined by the host and port number that you have provided.
     A nice solution to this is to consider the space a 'special character' and in fact the bash shell responds quite desirably under this paradigm.
     
      If you want to learn more about the ls function, <a href = "http://https://opensource.com/article/18/10/ls-command">this</a> is a good resource
                  
             
    */
    
    
    
</script>
