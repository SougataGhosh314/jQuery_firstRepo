$(document).ready(function(){
  $(".rslides").responsiveSlides();
});

// $(document).ready(function(){
//   var items = $("#points-of-sale li");
//   items.on("click", function(){
//     $(this).find("p").slideToggle(500);
//   });
// });

// $(document).ready(function(){
//
//   var allQuotes = $("blockquote");
//   var currentQuote = 0;
//   var quoteTimer = setInterval(changeQuote, 5000);
//
//   function changeQuote(){
//     $(allQuotes[currentQuote]).fadeOut(200, function(){
//       if (currentQuote == allQuotes.length-1) {
//         currentQuote = 0 ;
//       }else {
//         currentQuote++;
//       }
//       $(allQuotes[currentQuote]).fadeIn(200);
//     });
//   }
//
// });

// $(document).ready(function(){
//
//   $(".slide-button-up").on("click", function(e){
//     $("#lead-banner").slideToggle(1000, function(){
//       alert("Callback fired.");
//     });
//   });
//
// });

// $(document).ready(function(){
//
//   $(".slide-button-up").on("click", function(e){
//     $("#lead-banner").slideUp(1000);
//   });
//
//   $(".slide-button-down").on("click", function(e){
//     $("#lead-banner").slideDown(1000, function(){
//       alert("Callback fired.");
//     });
//   });
//
// });

// var lastScrollTop = 0;
// $(window).scroll(function(e){
//    var st = $(this).scrollTop();
//    if (st > lastScrollTop){
//        // downscroll code
//        $("#lead-banner").slideUp();
//    } else {
//       // upscroll code
//       $("#lead-banner").slideDown();
//    }
//    lastScrollTop = st;
// });

// $(document).ready(function(){
//
//   $("img[alt=map]").on("click", function(e){
//     $("section > h2").toggle(1000);
//     //cool animations
//   });
//
// });

// $(document).ready(function(){
//
//   $("section > h2").on("click", function(e){
//     $(this).toggle(1000);
//     // $(this).hide(1000).show(1000);
//     //cool animations
//   });
//
// });

// $(document).ready(function(){
//
//   $("section > h2").on("click", function(e){
//     $(this).fadeTo(200, 0.2).fadeTo(200, 0.8)
//            .fadeTo(200, 0.2).fadeTo(200, 0.8)
//            .fadeTo(200, 0.2).fadeTo(200, 0.8);
//     // $(this).fadeOut(300).fadeIn(200);
//     //we can only animate properties that have a numeric value
//   });
//
// });

// $(document).ready(function(){
//
//   $("section > h2").on("click", function(e){
//     $(this).animate({"opacity": "0.5"});
//     //we can only animate properties that have a numeric value
//   });
//
// });

// //write functions where they aaren't called
// $(document).ready(function(){
//
//   function animationComplete(){
//     alert("Animation complete!");
//   }
//
//   $("section > h2").on("click", function(e){
//     $(this).animate({"width": "500px", "height": "100px"},
//       1000, "swing", animationComplete
//     );
//     //we can only animate properties that have a numeric value
//   });
//
// });

// $(document).ready(function(){
//
//   $("section > h2").on("click", function(e){
//     $(this).animate({"width": "500px", "height": "100px"},
//       1000, "swing", function(){
//         alert("Animation complete!");
//       }
//     );
//     //we can only animate properties that have a numeric value
//   });
//
// });

// $(document).ready(function(){
//
//   $("section > h2").on("click", function(e){
//     $(this).animate({"width": "500px", "height": "100px"});
//     //we can only animate properties that have a numeric value
//   });
//
// });

// $(document).ready(function(){
//
//   $("section > h2").on("click", function(e){
//     $(this).css({"width": "500px", "height": "100px"});
//   });
//
// });

// $(document).ready(function(){
//
//   $("*").on("click", function(e){
//     console.log(e.target);
//     console.log("The type of the event is: "+e.type);
//     console.log("Co-ordinates of the event are: "+e.pageX+" and "+e.pageY);
//     e.stopPropagation();
//   });
//
// });

// $(document).on("ready", function(){
//   // code goes here: bindings, etc
//   //waits elements to load
// });
//
// $(window).on("load", function(){
//   // code goes here: bindings, etc
//   // waits whole web page to load
// });

// $("#lead-banner").dblclick(function(){
//   alert("You double-clicked me!");
//   $("#lead-banner").off("dblclick");
// });

// $("#lead-banner").dblclick(function(){
//   alert("You double-clicked me!");
// });

// $("#lead-banner").click(function(){
//   alert("You clicked me!");
// });

// var myList = $("#points-of-sale li");
// myList.on("click", function(){
//   $(this).css({"background": "yellow"});
//   myList.off("click");
// });

// var button = $("#lead-banner a");
// button[0].onclick = function(){
//     $("#points-of-sale").toggleClass("open");
//     return false;
// };

//$("header > div").addClass("wrapper");

//$("header .wrapper").removeClass("wrapper");

// $("#social-nav").css({
//   "top": "-400px",
//   "left": "150px",
//   "opacity": "0.5",
//   "border": "5px solid red"
// });

// var myObj = {
//   "height": "40",
//   "speed": "100"
// };

// $("#social-nav").css("top", "-200px");

// $("#social-nav").css("top", "-200px").css("left", "100px");

// $("#social-nav").css("top", "-200px");

// console.log($("#social-nav").css("top"));

// console.log($("#contact img").attr("alt"));

// $("#contact img").removeAttr("alt");
// $("#contact img").attr("alt", "location");

// $(".button").remove();
// $("#contact img").remove();

// $(".button").empty();
// $("#points-of-sale").empty();

// var wrapper = "<div class='wrapper'>";
// var button = $(".button");
// var wrapped = true;
// button[0].onclick = function(){
//   if (wrapped) {
//     $("section").unwrap();
//     wrapped = false;
//     button.text("Wrap");
//   } else {
//     $("section").wrapAll(wrapper);
//     wrapped = true;
//     button.text("Unwrap");
//   }
// };

// $("section").wrapall("<div>");
// $("section").unwrap();
// $("section").wrap("<div>");

//var tweet = "<div style='margin: 20px 0; padding: 10px; background: #eee'>The iconic duel of Stannis and Arthur</div>";

// $("#tweets div p").text(tweet);
// $("#tweets div").html(tweet);
// $("#tweets p").after(tweet);
// $("#tweets p").before(tweet);
// $("#tweets div").prepend(tweet);
// $("#tweets div").append(tweet);


// $("#contact-methods").css({border: "5px solid red"})
// .next().css({border: "5px solid green"})
// .closest("section").css({border: "5px solid blue"});

// $("#social-nav").closest(".wrapper").css({border: "5px solid indigo"});

// $("#contact").find(".twitter").css({border: "5px solid skyblue"});

// $("#social-nav").children().css({border: "5px solid green"});

// $(".banner-title").parents().css({border: "5px solid indigo"});

// $("#social-nav").prev().css({border: "5px solid red"});

/*
$("#contact-methods").next().css({border: "5px solid indigo"});
*/
/*
$("img[alt=quote]").css({border: "5px solid indigo"});*/

/*
$("img[alt]").css({border: "5px solid pink"});*/

/*
$("#social-nav li:gt(2)").css({border: "5px solid green"});*/

/*
$("#social-nav li:lt(3)").css({border: "5px solid green"});*/

/*
$("section:not('#contact')").css({border: "5px solid green"});*/

/*
$("header nav li:even").css({border: "5px solid green"});
$("header nav li:odd").css({border: "5px solid red"});*/

/*
$("#contact ul:first-child").css({border: "5px solid red"});
$("#contact ul:last-child").css({border: "5px solid red"});*/

/*
$("header nav li:first").css({border: "5px solid red"});
$("header nav li:last").css({border: "5px solid red"});*/

/*
$("h3").css({border: "3px solid green"});
$(".wrapper").css({border: "3px solid red"});
$("#clients").css({border: "3px solid yellow"});*/
