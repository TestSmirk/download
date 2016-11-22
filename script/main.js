/**
 * Created by bzby on 2016/11/22.
 */
function addText() {
   var oriText  =  "<p>this is text1</p>";
   var jQText = $("<p></p>").text("this is text2");
   var element = document.createElement("p");
   element.innerHTML= "this is text3";

   $("body").prepend(oriText,jQText,element)
}
function addAfter() {
    var text1 = "<b>I </b>";
    var text2 = $("<i>love </i>");
    var text3 = document.createElement("big").innerHTML ="JQuery";
    $("img").after(text1,text2,text3);
}
function remove() {
    $("#removed_div").empty();
}
function addClassFun() {
    $("#removed_div").toggleClass("import");
    $("#import").toggleClass("blue")
}
function topBar_a() {
    console.log(1);
    alert("1")

}
function topBar_b() {
    console.log(2);
    alert("2")

}
function topBar_c() {
    console.log(3);
    alert("3")

}