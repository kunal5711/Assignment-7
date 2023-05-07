var i=0;

function start(){
    var color = ["red","green","plum","blue","pink"];
    document.getElementsByTagName("body")[0].style.background = color[i++];
    if(i>color.length-1){
        i=0;
    }
}