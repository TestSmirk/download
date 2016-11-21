$(document).ready(function(){
    $("#btn1").click(function(){
        console.log(1);
        $("p").append(" <b>Appended text</b>.");
    });

    $("#btn2").click(function(){
        console.log(2);
        for (var i=0;i < 10;i++) {
            console.log(i);
            $("ul").append("<li>Appended item</li>")
        }
    });
    $("#btn3").click(function () {
        console.log(3);
        $("p").css({"color":"red","background-color":"blue"})
    });
    $("#btn4").click(function () {
        console.log(4);
        $("p").css({"font-size":"+1"})
    });
    $("#btn5").click(function () {
        console.log(5);
        $("div").slideDown("slow");
    });
    $("#btn6").click(function () {
        console.log(6);
        $("div").slideUp("7777",slideUp());
    });
    $("#btn7").click(function () {
        console.log(7);
        $("div").toggle("slow");
    });
    $("#btn8").click(function () {
        console.log(8);
        $("div").animate({left:"200px"});
    });
    $("#btn9").click(function () {
        console.log(9);
        $("div").not(".button").animate({left:"+=200px",with :"toggle",height:"100px",opacity:"0.2"})
    });
    $("#btn10").click(function () {
        console.log(10);
        console.log($("#btn10").val());
    });
    $("#btn11").click(function () {
        console.log(11);
        console.log($("#a").attr("href"));
    });
});

function slideUp() {
    console.log("done");

}