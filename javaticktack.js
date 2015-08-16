var box1 = document.getElementsByClassName('h_line1')
var box1 = box1[0];

var box2 = document.getElementsByClassName('h_line2')
var box2 = box2[0];

var box3 = document.getElementsByClassName('h_line3')
var box3 = box3[0];

var box4 = document.getElementsByClassName('h_line4')
var box4 = box4[0];

var box5 = document.getElementsByClassName('h_line5')
var box5 = box5[0];

var box6 = document.getElementsByClassName('h_line6')
var box6 = box6[0];

var box7 = document.getElementsByClassName('h_line7')
var box7 = box7[0];

var box8 = document.getElementsByClassName('h_line8')
var box8 = box8[0];

var box9 = document.getElementsByClassName('h_line9')
var box9 = box9[0];

boxesArray = [box1, box2, box3, box4, box5, box6, box7, box8, box9]; //array of all the spaces on the grid

var turn = 1

// while (turn<10){
  boxesArray[0].addEventListener("click", function(){
    if (turn % 2 === 0){
    document.getElementsByClassName('cross1')[0].style.display="block";
  }
    else {
      document.getElementsByClassName('nought1')[0].style.display="block";
  }
      // turn = turn+1;
  })


// function showCross() {
//    document.getElementById('cross1').style.display = "block";
// };

// for ( )
// box1.addEventListener("click", function(){
//   showCross;
//   console.log ("X");
// })

// function changePlayer(){
// //changes player from X to O || O to X after each move

//  currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X';
//  document.getElementById('currentPlayer').innerHTML = currentPlayer;
// }