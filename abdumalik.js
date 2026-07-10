function check(){

let text = document.getElementById("text").value


let length = document.getElementById("length").value
let includes = document.getElementById("includes").value
let upper = document.getElementById("upper").value
let start = document.getElementById("start").value
let end = document.getElementById("end").value


if(text.length == length){
    lcolor.style.background = "green"
}else{
    lcolor.style.background = "red";
}



if(text.includes(includes)){
    rcolor.style.background = "green"
}else{
    rcolor.style.background = "red"
}



if(text.toUpperCase() == upper){
    ucolor.style.background = "green"
}else{
    ucolor.style.background = "red"
}

if(text.startsWith(start)){
    scolor.style.background = "green"
}
else{
    scolor.style.background = "red"
}
if(text.endsWith(end) ){
    ecolor.style.background = "green"
}
else{
    ecolor.style.background = "red"
}
    

}
