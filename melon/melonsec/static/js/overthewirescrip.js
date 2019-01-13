

let currentIndex = 0;
let pageList = document.getElementsByClassName("page-text-i");

hideInactivePages();


$(".next-page-arrow").on("click",goToNextPage);
$(".last-page-arrow").on("click",goToLastPage);

$(".first-exploit-episode-text-p2").hide();
$(".first-exploit-episode-text").hide();
$(".ublog-overview-text").hide();
$(".next-page-arrow").hide();
$(".last-page-arrow").hide();



function goToNextPage(){

      flickPageForwards();
      loadPageSpecifics();


      if(currentIndex == (pageList.length-1)){
         $(".next-page-arrow").hide();

         }

      if(currentIndex == 1){
         $(".last-page-arrow").show();

         }

  }

  function goToLastPage(){
flickPageBackwards();
loadPageSpecifics();
         //change to only last page:::
          $(".next-page-arrow").show();

    }

    function flickPageForwards(){

           $(pageList[currentIndex]).hide();
          currentIndex++;
           $(pageList[currentIndex]).show();

      }

      function flickPageBackwards(){

             $(pageList[currentIndex]).hide();
             if(currentIndex>0){
                currentIndex--;
                }
             $(pageList[currentIndex]).show();

        }

         function goToPageX(pageNumber){

           $(pageList[currentIndex]).hide();
          currentIndex = pageNumber;
           $(pageList[currentIndex]).show();
           loadPageSpecifics();


      }



   $(".episode-contents-item").on("click",function(){
      dressActiveContents(this);


       if($(this).attr('id') == 'bandit-cont'){
            $(".next-page-arrow").show();
            makeActiveText($(".first-exploit-episode-text"));
            pageList = document.getElementsByClassName("page-text-f");
            currentIndex = 0;

      hideInactivePages();

            $(pageList[currentIndex]).show();
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
       if(levelName == 'bandit'){
         showLevelNavigator();
            currentIndex = 0;
            pageList = document.getElementsByClassName("page-text-f");
            dressActiveContents($("#bandit-cont"));
            makeActiveText($(".first-exploit-episode-text"));
            hideInactivePages();



          //$(".episode-elipses-holer").css("display","block");


          





       }

   }

function dressActiveContents(contents_item){
  $(".contents-active").removeClass("contents-active");
  $(".contents-active-text").removeClass("contents-active-text");
$(contents_item).addClass('contents-active');
  $(contents_item).find("h4").addClass('contents-active-text');

}
$(".bandit-buy").on("click",function(){
      changeToLevel("bandit");
  });

  function showLevelNavigator(){


      $(".lev-choose-opener").fadeIn();


         }


function hideInactivePages(){
  for(i=1;i<pageList.length;i++){
$(pageList[i]).hide();

}

}

function makeActiveText(make_active){
        $(".text-active").hide();
            $(".text-active").removeClass("text-active");
       make_active.fadeIn();
       make_active.addClass("text-active");

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

           $(".iframe-dest").html(" <iframe src = '/sshiframe' class = 'ssh-frame'></iframe>");

      break;
    case 5:
        $(".next-page-arrow").css("color","#2E2B54");

           $(".iframe-dest2").html(" <iframe src = '/b0frame' class = 'ssh-frame-s2'></iframe>");

      break;
    case 6:
        $(".next-page-arrow").css("color","white");
             $(".episode-elipses-holer").hide();

      break;
    case 7:
        $(".next-page-arrow").css("color","#2E2B54");

           $(".iframe-dest3").html(" <iframe src = '/b1frame' class = 'ssh-frame-s3'></iframe>");

      break;
    case 8:
  $(".next-page-arrow").css("color","#2E2B54");

           $(".iframe-dest4").html(" <iframe src = '/b2frame' class = 'ssh-frame-s3'></iframe>");

      break;
    case 9:
$(".next-page-arrow").css("color","#2E2B54");


           $(".iframe-dest5").html(" <iframe src = '/b3frame' class = 'ssh-frame-m'></iframe>");

      break;
    case 10:

 $(".next-page-arrow").css("color","#2E2B54");


           $(".iframe-dest6").html(" <iframe src = '/b4frame' class = 'ssh-frame-m'></iframe>");

      break;
    case 11:

$(".next-page-arrow").css("color","#2E2B54");


           $(".iframe-dest7").html(" <iframe src = '/b5frame' class = 'ssh-frame-m'></iframe>");

      break;
    case 12:

$(".next-page-arrow").css("color","#2E2B54");


           $(".iframe-dest8").html(" <iframe src = '/b6frame' class = 'ssh-frame-m'></iframe>");

      break;
    case 13:

$(".next-page-arrow").css("color","#2E2B54");


           $(".iframe-dest9").html(" <iframe src = '/b7frame' class = 'ssh-frame-m'></iframe>");

      break;
    case 14:

 $(".next-page-arrow").css("color","#2E2B54");


           $(".iframe-dest10").html(" <iframe src = '/b8frame' class = 'ssh-frame-m'></iframe>");

      break;
    case 15:

$(".next-page-arrow").css("color","#2E2B54");


           $(".iframe-dest11").html(" <iframe src = '/b9frame' class = 'ssh-frame-m'></iframe>");

      break;


    default:
        $(".next-page-arrow").css("color","#2E2B54");
    }
    }
