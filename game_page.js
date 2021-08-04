player1=localStorage.getItem("player1_name");
player2=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("name1").innerHTML=player1+ " : ";
document.getElementById("name2").innerHTML=player2+ " : ";
document.getElementById("score1").innerHTML=player1_score;
document.getElementById("score2").innerHTML=player2_score;

document.getElementById("question").innerHTML="Question Turn - "+player1;
document.getElementById("answer").innerHTML="Answer Turn - "+player2;

function send() {
    number1=document.getElementById("input_number1").value;
    number2=document.getElementById("input_number2").value;
    real_answer=parsInt(number1)*parsInt(number2);

question_statement="<h3>"+ number1 + "X"+ number2 +"</h3>";
}