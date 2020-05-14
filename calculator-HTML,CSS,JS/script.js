let screen=document.getElementById('screen')
//operators
function remove(){
    screen.value=''
}
function  add(){
    screen.value+='+'
}
function multiply(){
    screen.value+='*'
}function divide(){
    screen.value+='/'
}
function subtract(){
    screen.value+='-'
}
//numbers
function one(){
    screen.value+=1
}
function  two(){
    screen.value+=2
}
function three(){
    screen.value+=3
}
function four(){
    screen.value+=4
}
function five(){
    screen.value+=5
}
function six(){
    screen.value+=6
}
function seven(){
    screen.value+=7
}
function eight(){
    screen.value+=8
}function nine(){
    screen.value+=9
}
function zero(){
    screen.value+=0
}
function dot(){
    screen.value+='.'
}
function result(){
    let answer=eval(screen.value)
    screen.value=answer}

