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

var box7 = document.getElementsByClassName('gridSpace1')
var box7 = box7[0];

var box8 = document.getElementsByClassName('gridSpace2')
var box8 = box8[0];

var box9 = document.getElementsByClassName('gridSpace3')
var box9 = box9[0];

var turn = 0 //determines who's turn it is
var Row1 = 0 //the rows
var Row2 = 0
var Row3 = 0
var Column1 = 0 //the columns
var Column2 = 0
var Column3 = 0
var Diag1 = 0 //the diagonals
var Diag2 = 0
var filled = 0 //has the box been filled?
var noughtScore = 0
var crossScore = 0

//the below var tells it to check after each move whether there's been a winner or not. crosses go into positive units, noughts into negative.
var whoWon = (function () {
if (Row1 == 3 || Row2 == 3 || Row3 == 3 || Column1 ==3 ||Column2 ==3 || Column3 == 3 || Diag1 == 3 || Diag2 ==3) {
  alert("Player 1 wins!");
} else if (Row1 == -3 || Row2 == -3 || Row3 == -3 || Column1 == -3 ||Column2 == -3 || Column3 == -3 || Diag1 == -3 || Diag2 == -3)  {
  alert("Player 2 wins!")
}
  else console.log ("No winner yet!");
}
)

var drawGame = (function() {
  if (filled == 9 && Row1 < 3 && Row1 > -3 && Row2 < 3 && Row2 > -3 && Row3 < 3 && Row3 > -3 && Column1 < 3 && Column1 > -3 && Column2 < 3 && Column2 > -3 && Column3 < 3 && Column3 > -3 && Diag1 < 3 && Diag1 > -3 && Diag2 < 3 && Diag2 > -3) { 
    alert("It's a draw!");
  }
}
  )

boxesArray = [box1, box2, box3, box4, box5, box6, box7, box8, box9]; //array of all the spaces on the grid



// for (i = 0, arrayLength = boxesArray.length; i < arrayLength; i++){
  boxesArray[0].addEventListener("click", function(){
    if (turn % 2 === 0){
    document.getElementsByClassName('cross1')[0].style.display="block";
    turn = turn + 1;
    Row1 = Row1 + 1;
    Column1 = Column1 + 1;
    Diag1 = Diag1 + 1;
    filled = filled + 1
    whoWon();
    drawGame();
  }
    else {
      document.getElementsByClassName('nought1')[0].style.display="block";
      turn = turn + 1;
      Row1 = Row1 - 1;
      Column1 = Column1 - 1;
      Diag1 = Diag1 - 1;
      filled = filled + 1
      whoWon();
      drawGame();
  }
  })

  boxesArray[1].addEventListener("click", function(){
    if (turn % 2 === 0){
    document.getElementsByClassName('cross2')[0].style.display="block";
    turn = turn + 1;
    Row1 = Row1 + 1;
    Column2 = Column2 + 1;
    filled = filled + 1
    whoWon();
    drawGame();
  }
    else {
      document.getElementsByClassName('nought2')[0].style.display="block";
      turn = turn + 1;
      Row1 = Row1 - 1;
      Column2 = Column2 - 1;
      filled = filled + 1
      whoWon();
      drawGame();

  }

  })

  boxesArray[2].addEventListener("click", function(){
    if (turn % 2 === 0){
    document.getElementsByClassName('cross3')[0].style.display="block";
    turn = turn + 1;
    Row1 = Row1 + 1;
    Column3 = Column3 + 1;
    Diag2 = Diag2 + 1;
    filled = filled + 1
    whoWon();
    drawGame();
  }
    else {
      document.getElementsByClassName('nought3')[0].style.display="block";
      turn = turn + 1;
      Row1 = Row1 - 1;
      Column3 = Column3 - 1;
      Diag2 = Diag2 - 1;
      filled = filled + 1
      whoWon();
      drawGame();
  }
  })

    boxesArray[3].addEventListener("click", function(){
    if (turn % 2 === 0){
    document.getElementsByClassName('cross4')[0].style.display="block";
    turn = turn + 1;
    Row2 = Row2 + 1;
    Column1 = Column1 + 1;
    filled = filled + 1
    whoWon();
    drawGame();
  }
    else {
      document.getElementsByClassName('nought4')[0].style.display="block";
      turn = turn + 1;
      Row2 = Row2 - 1;
      Column1 = Column1 - 1;
      filled = filled + 1
      whoWon();
      drawGame();
  }
})
    boxesArray[4].addEventListener("click", function(){
    if (turn % 2 === 0){
    document.getElementsByClassName('cross5')[0].style.display="block";
    turn = turn + 1;
    Row2 = Row2 + 1;
    Column2 = Column2 + 1;
    Diag1 = Diag1 + 1;
    Diag2 = Diag2 +1;
    filled = filled + 1
    whoWon();
    drawGame();
  }
    else {
      document.getElementsByClassName('nought5')[0].style.display="block";
      turn = turn + 1;
      Row2 = Row2 - 1;
    Column2 = Column2 - 1;
    Diag1 = Diag1 - 1;
    Diag2 = Diag2 - 1;
    filled = filled + 1
    whoWon();
    drawGame();
  }
  })
    boxesArray[5].addEventListener("click", function(){
    if (turn % 2 === 0){
    document.getElementsByClassName('cross6')[0].style.display="block";
    turn = turn + 1;
    Row2 = Row2 + 1;
    Column3 = Column3 + 1;
    filled = filled + 1
    whoWon();
    drawGame();
  }
    else {
      document.getElementsByClassName('nought6')[0].style.display="block";
      turn = turn + 1;
      Row2 = Row2 - 1;
      Column3 = Column3 - 1;
      filled = filled + 1
      whoWon();
      drawGame(); 
  }
  })
    boxesArray[6].addEventListener("click", function(){
    if (turn % 2 === 0){
    document.getElementsByClassName('cross7')[0].style.display="block";
    turn = turn + 1;
    Row3 = Row3 + 1;
    Column1 = Column1 + 1;
    Diag2 = Diag2 + 1;
    filled = filled + 1
    whoWon();
    drawGame();
  }
    else {
      document.getElementsByClassName('nought7')[0].style.display="block";
      turn = turn + 1;
      Row3 = Row3 - 1;
      Column1 = Column1 - 1;
      Diag2 = Diag2 - 1;
      filled = filled + 1
      whoWon();
      drawGame();
  }
  })
    boxesArray[7].addEventListener("click", function(){
    if (turn % 2 === 0){
    document.getElementsByClassName('cross8')[0].style.display="block";
    turn = turn + 1;
    Row3 = Row3 + 1;
    Column2 = Column2 + 1;
    filled = filled + 1
    whoWon();
    drawGame();
  }
    else {
      document.getElementsByClassName('nought8')[0].style.display="block";
      turn = turn + 1;
      Row3 = Row3 - 1;
      Column2 = Column2 - 1;
      filled = filled + 1
      whoWon();
      drawGame();
  }
  })
    boxesArray[8].addEventListener("click", function(){
    if (turn % 2 === 0){
    document.getElementsByClassName('cross9')[0].style.display="block";
    turn = turn + 1;
    Row3 = Row3 + 1;
    Column3 = Column3 + 1;
    Diag1 = Diag1 + 1;
    filled = filled + 1
    whoWon();
    drawGame();
  }
    else {
      document.getElementsByClassName('nought9')[0].style.display="block";
      turn = turn + 1;
      Row3 = Row3 - 1;
      Column3 = Column3 - 1;
      Diag1 = Diag1 - 1;
      filled = filled + 1
      whoWon();
      drawGame();
  }
  })



// if (box1Score === "x" && box2Score === "x" && box3Score === "x") {
//   alert:"Player 1 wins";
// }

//need 

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