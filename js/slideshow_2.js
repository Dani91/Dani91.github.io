var myImage=document.getElementById("myPhoto");
var imageArray=["..\\img\\Blawert_slide.png","..\\img\\Hartwig_slide.png", "..\\img\\Batucadaslide.png"];
var imageIndex=0;
function changeImage (){
myPhoto.setAttribute("src", imageArray [imageIndex]);
imageIndex++;
if (imageIndex>=imageArray.length){
imageIndex=0;
}
}

var intervalHandle = setInterval(changeImage,3000);
var mark=false;

myPhoto.onclick=function() {
if(mark){
intervalHandle = setInterval(changeImage,3000);
mark=false;
}else{
clearInterval(intervalHandle);
mark=true;
}

}