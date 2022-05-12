document.getElementById("cont").innerHTML="Contact me";
document.getElementById("cf").innerHTML="Contact Form";


var sub=document.getElementById("sd");
sub.onclick=function validate(){
    var n=document.getElementById("un");
    var m=document.getElementById("email");
    var p=document.getElementById("messa");
    if(n.value==''||m.value==''||p.value==''){
        alert("Fields can't be empty");
    }
    var str=n.value.slice(0,1);
    if(str=='_'||str=='$'||str=='%'||str=='#'||str=='@'||str=='-'){
        alert("name is not valid");
    }
    var str1=m.value.slice(0,1);
    if(str1=='_'||str1=='$'||str1=='%'||str1=='#'||str1=='@'||str1=='-'){
        alert("Email or phone No is not valid");
    }
}