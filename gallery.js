function upDate(previewPic){
    document.getElementById('image').style.background="url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon.jpg')";
    
    document.getElementById('image').innerHTML =previewPic.alt;
}
function upDate1(previewPic){
    
    document.getElementById('image').style.background="url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon2.JPG')";
   
    document.getElementById('image').innerHTML =previewPic.alt;
}


function upDate2(previewPic){
    
    document.getElementById('image').style.background="url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon3.jpg')";
    document.getElementById('image').innerHTML =previewPic.alt;
}








       
   
function unDo(){

    document.getElementById('image').innerHTML='Hover over an image';
    document.getElementById('image').style.background="url('')";
    document.getElementById('image').style.backgroundColor="#8e68ff";
 }