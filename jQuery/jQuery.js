$(".highlight").css("width","200px")
$("#third").css("border","10px solid orange")
$("a").css("font-size","20px")
$("div").css("background","purple")
$("div:first-of-type").css("color","pink")
$("img").attr("src","https://i.ytimg.com/vi/zx0gXM_FkgE/maxresdefault.jpg")
$("select").val()

$("button").click(function () { 
  var text = $(this).text();
  $(this).css("backgroundColor","pink");
  console.log("You clicked " + text);
});

$("img").css("width", "200px");

$("li").on("mouseenter", function() {
  $(this).css("font-weight","bold");
});

$("li").on("mouseleave", function() {
  $(this).css("font-weight","normal");
});

$("#click").on("click", function () {
  /*$(".effect").fadeOut(300, function() {
    $(this).remove();
  });*/
  $(".effect").slideToggle(500);
});

