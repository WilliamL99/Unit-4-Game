$( document ).ready(function(){
    

var total = 0;
var wins = 0;
var loses = 0;
var yourNumber = 0;
var matchNumber = [];
var random=Math.floor(Math.random() * 100) +1;
    console.log(random);
    $('#matchNumber').text(random);
var one = Math.floor(Math.random() * 20) +1;
var two = Math.floor(Math.random() * 20) +1;
var three = Math.floor(Math.random() * 20) +1;
var four = Math.floor(Math.random() * 20) +1;
$('#winNumber').text(wins);
$('#loseNumber').text(loses);

function winOrLose(){
if (random === yourNumber) {
    alert("You Win");
    wins++;
    $("#winNumber").text(wins);
    yourNumber = 0;
    $("#totalNumber").text(yourNumber);
    random=Math.floor(Math.random() * 100) +1;
    console.log(random);
    $('#matchNumber').text(random);
    one = Math.floor(Math.random() * 20) +1;
    two = Math.floor(Math.random() * 20) +1;
    three = Math.floor(Math.random() * 20) +1;
    four = Math.floor(Math.random() * 20) +1;
}
if (random < yourNumber){
    alert("You Lose");
    loses++;
    $("#loseNumber").text(loses);
    yourNumber = 0;
    $('#totalNumber').text(yourNumber);
    random=Math.floor(Math.random() * 100) +1;
    console.log(random);
    $('#matchNumber').text(random);
    one = Math.floor(Math.random() * 20) +1;
    two = Math.floor(Math.random() * 20) +1;
    three = Math.floor(Math.random() * 20) +1;
    four = Math.floor(Math.random() * 20) +1;
}
}
$('#num1').on('click', function() {
    yourNumber += one;
    $('#totalNumber').text(yourNumber);
    winOrLose();
})

$('#num2').on('click', function() {
    yourNumber += two;
    console.log("userTotal: " + yourNumber);
    $('#totalNumber').text(yourNumber);
    winOrLose();
})

$('#num3').on('click', function() {
    yourNumber += three;
    console.log("userTotal: " + yourNumber);
    $('#totalNumber').text(yourNumber);
    winOrLose();
})

$('#num4').on('click', function() {
    yourNumber += four;
    console.log("userTotal: " + yourNumber);
    $('#totalNumber').text(yourNumber);
    winOrLose();
})


});