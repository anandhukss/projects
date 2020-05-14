var pos=0;
var score=0;
var questions=[

["What is 10+4 ?",15,16,14,"C"],
["What is 7*3 ?",22,21,24,"B"],
["What is 7-3 ?",4,8,2,"A"],
["What is 7+7+2 ?",16,15,13,"A"],
["Which is the capital of India ?","Delhi","Paris",'London','A']


]

function renderQuestion() {
    document.getElementById('start-btn').style.display="none"
    var element=document.getElementById('test')
    var status=document.getElementById('status')
    status.innerHTML="Question "+(pos+1)+" of "+questions.length
    var question=questions[pos][0]
    var chA=questions[pos][1]
    var chB=questions[pos][2]
    var chC=questions[pos][3]


    element.innerHTML="<h3>"+ question +"</h3>"
    element.innerHTML+="<input name='choice' type='radio' value='A' >"+chA+"<br>"
    element.innerHTML+="<input name='choice' type='radio' value='B' >"+chB+"<br>"
    element.innerHTML+="<input name='choice' type='radio' value='C' >"+chC+"<br><br><br>"
    element.innerHTML+="<button onclick='check()'> submit</button>"


}
function check(){
    var choice=document.getElementsByName('choice')
    for(var i=0;i<choice.length;i++){
        console.log(choice[i])
        if(choice[i].checked){
            var selected=choice[i].value;
        }
    }
    if (selected==questions[pos][4]) {
        score++
    }
    pos++
    if(pos==questions.length){
        var scorepage=document.getElementById("main")
        scorepage.style.textAlign='center'
        scorepage.style.fontSize='50px'
        scorepage.style.backgroundColor='darkred'
        scorepage.style.color='white'
        scorepage.innerHTML="<h1>Your score is "+score+" out of "+questions.length+"</h1>"
    }
    else{
        renderQuestion()
    }
}



