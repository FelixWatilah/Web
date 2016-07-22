/**
 * Created by Watilah on 08-Jun-16.
 */
var slide2=document.getElementById("slide2");
var slide2Array = ["../eye.jpg", "../urba.jpg", "../stock.jpg", "../th.jpg"];
var imageIndex = 0;

function changeImage() {
    slide2.setAttribute("src", slide2Array[imageIndex]);
    imageIndex++;
    if (imageIndex >= slide2Array.length) {
        imageIndex = 0;
    }
}

var intervalHandle = setInterval(changeImage, 5000);
slide2.onclick = function () {
    clearInterval(intervalHandle);
};