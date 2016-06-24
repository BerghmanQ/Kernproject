/*global $*/

var main = function () {
  "use strict";

    var data;
    var data2;
    var data3;
    var data4;
    var page;
    var page2;
    var page3;
    var quote;
    
    console.log(localStorage.getItem("video"));
    //  var video = localStorage.getItem('video');
    //  console.log(video);
    
    if((localStorage.getItem('video')) == "false"){
        $(".videoContainer").addClass("onzichtbaar");
    } else{
        $(".videoContainer").removeClass("onzichtbaar");
    }

   
    console.log(localStorage.getItem("video"));
    
    $.fn.extend({
    animateCss_out: function (animationName) {
        //var class = ;
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        
            $(data).toggleClass("onzichtbaar"); //onzichtbaar
        });
    }
});
    $.fn.extend({
    animateCss_in: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        // bepaalt wanneer animatie klaar is
        
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
        $(this).removeClass('animated ' + animationName);   
        });
    }
});

function changeImage() {
        
        data2.css("z-index","2"); // z-index wordt op 2 gezet
        data3.css("z-index","0"); // z-index wordt op 0 gezet
        data4.css("z-index","4"); // z-index wordt op 4 gezet

        
        data.animateCss_out('zoomOut'); //uitzoomen
        data3.animateCss_out('zoomOut'); //uitzoomen originelevlakken
        data2.animateCss_in('zoomIn');  //inzoomen
        data4.animateCss_in('zoomIn');  //inzoomen doelvlakken

        page.toggleClass("onzichtbaar"); // originele foto onzichtbaar
        page2.toggleClass("onzichtbaar"); // doelfoto zichtbaar

        console.log("Image has been changed");
}
    
    /*
    foto1 heeft standaard z-index 1
    if .foto2 has css z-index = 1 { z-index = 0};
    if .foto3 has css z-index = 1 { z-index = -1};
    if .foto4 has css z-index = 1 { z-index = -2};
    if .foto5 has css z-index = 1 { z-index = -3};
    if .foto6 has css z-index = 1 { z-index = -4};
    if .foto7 has css z-index = 1 { z-index = -5};
    if .foto8 has css z-index = 1 { z-index = -6};
    */
    
    // PAGE1 = HOMEPAGE
    $(".page1").find(".muziek").on("click", function(){
        data = $(".foto1"); // originele foto
        data3 = $(".foto8"); // homepage vlakken
        data2 = $(".foto2");// doelfoto
        data4 = $(".foto9"); // doel vlakken
        
        page = $(".page1"); // originele pagina
        page2 = $(".page2"); // doelpagina
        
        $(".triangle").css({"z-index": "999"});
        
        
        changeImage();
    
    });
    
    $(".page1").find(".drama").on("click", function(){
        data = $(".foto1");
        data3 = $(".foto8"); // homepage vlakken
        data2 = $(".foto3");// doelfoto
        data4 = $(".foto10"); // doel vlakken
        
        page = $(".page1");
        page2 = $(".page3");
        
        $(".triangle").css({"z-index": "999"});
        
        changeImage();
    
    });
    
    $(".page1").find(".dans").on("click", function(){
        data = $(".foto1");
        data3 = $(".foto8"); // homepage vlakken
        data2 = $(".foto4");// doelfoto
        data4 = $(".foto11"); // doel vlakken

        page = $(".page1");
        page2 = $(".page4");
        
        $(".triangle").css({"z-index": "999"});
        
        changeImage();
    
    });
    
    $(".page1").find(".dak").on("click", function(){
        data = $(".foto1");
        data3 = $(".foto8"); // homepage vlakken
        data2 = $(".foto12");// doelfoto
        data4 = $(".foto_onz"); // doel vlakken

        page = $(".page1");
        page2 = $(".page8");
        
        $(".triangle").css({"z-index": "999"});
        
        changeImage();
    
    });
    
    $(".page2").find(".muziek").on("click", function(){
        $('.page5').animateCss_in('zoomIn');
        data = $(".foto2");
        data2 = $(".foto5");

        page = $(".page2");
        page2 = $(".page5");
        
        data3 = $(".foto9");
        data4 = $(".foto_onz");

        $(".triangle").css({"z-index": "999"});
        
        changeImage();
    
    });
    
    $(".page3").find(".drama").on("click", function(){
        $('.page6').animateCss_in('zoomIn');
        data = $(".foto3");
        data2 = $(".foto6");

        page = $(".page3");
        page2 = $(".page6");
        
        data3 = $(".foto10");
        data4 = $(".foto_onz");
        
        $(".triangle").css({"z-index": "999"});
        
        changeImage();
    
    });
    
    $(".page4").find(".dans").on("click", function(){
        $('.page7').animateCss_in('zoomIn');
        data = $(".foto4");
        data2 = $(".foto7");
        
 
        
        page = $(".page4");
        page2 = $(".page7");
        
        
        data3 = $(".foto11");
        data4 = $(".foto_onz");
        
        $(".triangle").css({"z-index": "999"});
        
        changeImage();
    });
    
    /*$(function(){
        if($(".foto5").html("display")!= 'none') {
	        $(".foto9").addClass("onzichtbaar");
        } 
    });*/
    

    
    $(".triangle").on("click",function(){
        localStorage.setItem("video","false");
        console.log(localStorage.getItem("video"));
        
        /*if(!video){      hier zetten if(".videoContainer"===false)? zoiets aahaahhahhhhh ? wat aha was ik juist???
        $(".videoContainer").addClass("onzichtbaar");
    } else{
        $(".videoContainer").removeClass("onzichtbaar");
    }*/
        
     - location.reload();
        });
    
    
    
    $(".videoContainer").find('button').on("click",function(){
        $(".videoContainer").addClass("onzichtbaar");
    })

/*
$(".link1").on("click", function(){
    console.log('klik klik');
        data2 = $(".quote1");
    	$(".quote1").css("display","block");
    });    */
    
    $(".link1").on("mouseover", function(){
    console.log('klik klik');
        quote = $(".quote1");
    	$(quote).removeClass("onzichtbaar");
    });
    
    $(".link1").on("mouseout",function(){
        console.log('klak klak');
        quote = $(".quote1");
    	$(quote).addClass("onzichtbaar");
    });


    $(".link2").on("mouseover", function(){
        console.log('klik klik');
            quote = $(".quote2");
        	$(quote).removeClass("onzichtbaar");
        });
        
        $(".link1").on("mouseout",function(){
            console.log('klak klak');
            quote = $(".quote2");
        	$(quote).addClass("onzichtbaar");
        });
        
        $(".link2").on("mouseover", function(){
        console.log('klik klik');
            quote = $(".quote2");
        	$(quote).removeClass("onzichtbaar");
        });
        
        $(".link2").on("mouseout",function(){
            console.log('klak klak');
            quote = $(".quote2");
        	$(quote).addClass("onzichtbaar");
        });
        
        $(".link3").on("mouseover", function(){
        console.log('klik klik');
            quote = $(".quote3");
        	$(quote).removeClass("onzichtbaar");
        });
        
        $(".link3").on("mouseout",function(){
            console.log('klak klak');
            quote = $(".quote3");
        	$(quote).addClass("onzichtbaar");
        });
        
        $(".link4").on("mouseover", function(){
        console.log('klik klik');
            quote = $(".quote4");
        	$(quote).removeClass("onzichtbaar");
        });
        
        $(".link4").on("mouseout",function(){
            console.log('klak klak');
            quote = $(".quote4");
        	$(quote).addClass("onzichtbaar");
        });
        
        
        
        $(".video_dans").find('iframe').on("click",function(){
           $(this).toggleClass('videoContainer'); 
           
        });
        
        $(".video_muziek").find('iframe').on("click",function(){
           $(this).toggleClass('videoContainer'); 
           
        });
        
        $(".video_drama").find('iframe').on("click",function(){
           $(this).toggleClass('videoContainer'); 
           
        });
        
        $(".woord1").on("click", function () {
            console.log("klik klik");
             if ($(".video_muziek1").hasClass("onzichtbaar")){
        		 $(".video_muziek1").removeClass("onzichtbaar");
        		 $(".video_muziek1").addClass("zichtbaar");
                }
            else if($(".video_muziek1").hasClass("zichtbaar")){
        		 $(".video_muziek1").removeClass("zichtbaar");
        		 $(".video_muziek1").addClass("onzichtbaar");
        		}
            });
            
        $(".woord2").on("click", function () {
            console.log("klik klik");
             if ($(".video_muziek2").hasClass("onzichtbaar")){
        		 $(".video_muziek2").removeClass("onzichtbaar");
        		 $(".video_muziek2").addClass("zichtbaar");
                }
            else if($(".video_muziek2").hasClass("zichtbaar")){
        		 $(".video_muziek2").removeClass("zichtbaar");
        		 $(".video_muziek2").addClass("onzichtbaar");
        		}
            });
            
            $(".woord3").on("click", function () {
            console.log("klik klik");
             if ($(".video_drama1").hasClass("onzichtbaar")){
        		 $(".video_drama1").removeClass("onzichtbaar");
        		 $(".video_drama1").addClass("zichtbaar");
                }
            else if($(".video_drama1").hasClass("zichtbaar")){
        		 $(".video_drama1").removeClass("zichtbaar");
        		 $(".video_drama1").addClass("onzichtbaar");
        		}
            });
            
        $(".woord4").on("click", function () {
            console.log("klik klik");
             if ($(".video_drama2").hasClass("onzichtbaar")){
        		 $(".video_drama2").removeClass("onzichtbaar");
        		 $(".video_drama2").addClass("zichtbaar");
                }
            else if($(".video_drama2").hasClass("zichtbaar")){
        		 $(".video_drama2").removeClass("zichtbaar");
        		 $(".video_drama2").addClass("onzichtbaar");
        		}
            });
            
            $(".woord5").on("click", function () {
            console.log("klik klik");
             if ($(".video_dans1").hasClass("onzichtbaar")){
        		 $(".video_dans1").removeClass("onzichtbaar");
        		 $(".video_dans1").addClass("zichtbaar");
                }
            else if($(".video_dans1").hasClass("zichtbaar")){
        		 $(".video_dans1").removeClass("zichtbaar");
        		 $(".video_dans1").addClass("onzichtbaar");
        		}
            });
            
        $(".woord6").on("click", function () {
            console.log("klik klik");
             if ($(".video_dans2").hasClass("onzichtbaar")){
        		 $(".video_dans2").removeClass("onzichtbaar");
        		 $(".video_dans2").addClass("zichtbaar");
                }
            else if($(".video_dans2").hasClass("zichtbaar")){
        		 $(".video_dans2").removeClass("zichtbaar");
        		 $(".video_dans2").addClass("onzichtbaar");
        		}
            });


 localStorage.setItem("video","true");
};



$("document").ready(main);