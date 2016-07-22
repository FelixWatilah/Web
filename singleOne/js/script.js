/**
 * Created by Watilah on 11-Jun-16.
 */
var slider=document.getElementById("slider");
var row1_imageArray=["../images/one.jpg","../images/three.jpg","../images/four.jpg","../images/five.jpg","../images/six.jpg","../images/seven.jpg"];
var row1ImageIndex=0;

function changeImage() {
    slider.setAttribute("src", row1_imageArray[row1ImageIndex]);
    row1ImageIndex++;
    if (row1ImageIndex>=row1_imageArray.length){
        row1ImageIndex=0;
    }
}

var intervalHandle=setInterval(changeImage,2500);
slider.onclick=function () {
    clearInterval(intervalHandle);
};
