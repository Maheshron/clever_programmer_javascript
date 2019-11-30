//     console.log('hello');
//     //console.log('hello');
//     //    alert('yooo');
    


//     ////  Variables

//     var b = 'smoothie';
//     console.log(b);
//     var someNumber = 45;
//     console.log(someNumber);

//  //   var age = prompt('What is your age');
//  // document.getElementById('someText').innerHTML = age;


//     // Numbers in javaScritp

//     var num1 = 10;
     
//     console.log(num1);

//     /// Functions
//     function greeting(){
//         var result = 'hello '+name;
//         console.log(result);

//     }
//     var name = prompt('What is your name');
     
//     greeting(name);

//     function sum(num1,num2){
        
//         console.log(num1 + num2)
//     }

//     sum(12,32);








//     //// while loops
//     var num = 0;
//     while(num < 100){
//         num += 1;
//         console.log(num);
//     }
//     for (let num = 0; num < 100;num++){
//         console.log(num);
//     }


// // Data types 
// let yourAge = 23;
// let yourName = "Bob";
// let name1 = {
//     first:'Jane',
//     last:'Doe'
// }
// let truth = false;
// let groceries = ['apple','banana','oranges'];
// let random;//undefined
// let nothing = null;// value null


// // Strings in Javascript (common methods)

// let fruit = 'banana';
// let morefruits = 'banana\napple';
// console.log(morefruits);
// fruit.length;
// console.log(fruit.indexOf('a'));
// console.log(fruit.slice(2,6));
// console.log(fruit.repeat('ban','123'));


// let fruits2 = ['banana','apple','orange','pineapples'];
// let fruits3 = new Array('banana','apple','orange','pineappple');
// alert(fruits2[1])



// let student = {
//     first:'Mahesh',
//     last:'Kumar',
//     age:23,
//     height:165
// }
// console.log(student.first);
// student.age = 22;
/// Your age in days
function ageInDays(){
 var birthYear = prompt('what year you were born .. Good friend?');
 var ageInDayss = (2019 - birthYear) * 365;
 var h1 = document.createElement('h1');
 var textAnswer = document.createTextNode('You are '+ ageInDayss +' days old');
 h1.setAttribute('id','ageInDayss');
 h1.appendChild(textAnswer);
 document.getElementById('flex-box-result').appendChild(h1);
 console.log(ageInDayss);
}
function reset(){
    document.getElementById('ageInDayss').remove();
}

function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
  
    image.src ="http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}


// Challenge 3 rock paper scissor
function rpsGame(yourChoice){
    
    var humanChoice,botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
   
    results = decideWinner(humanChoice,botChoice);
    console.log('computer choice ' + botChoice);
     console.log(results);
    message = finalMessage(results);
   
    rpsFrontEnd(yourChoice.id,botChoice,message);
  

}



function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return ['rock','paper','scissors'][number];
}

function decideWinner(yourChoice,computerChoice){
    var rpsDatabase = {
        'rock':{'scissors':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'paper':1,'scissors':0.5,'rock':0}
    }
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    return [yourScore,computerScore];
}

function finalMessage([yourScore,computerScore]){
    if(yourScore === 0){
        return {
            'message':'You Lost!',
            'color':'red'
        }
    }
    else if(yourScore === 0.5){
        return {
            'message':'You Tied',
            'color':'yellow'
        }
    }
    else{
        return {
            'message':'You won',
            'color':'green'
        }
    }
}

function rpsFrontEnd(hic,bic,fm){
      var imagesDatabase = {
          'rock':document.getElementById('rock').src,
          'paper':document.getElementById('paper').src,
          'scissors':document.getElementById('scissors').src
      }
      document.getElementById('rock').remove();
      document.getElementById('paper').remove();
      document.getElementById('scissors').remove();
      var humanDiv = document.createElement('div');
      var botDiv = document.createElement('div');
      var btn = document.createElement('button');

      
      var messageDiv = document.createElement('div');
      humanDiv.innerHTML = "<img src='" + imagesDatabase[hic] +"' height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>";
      messageDiv.innerHTML = "<h1 style='color: " + fm['color'] + "; font-size:56px;padding:30px;'> " + fm['message'] +"</h1>";
      botDiv.innerHTML = "<img src='" + imagesDatabase[bic] +"' height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>";


      document.getElementById('flex-box-rps-div').appendChild(humanDiv);
      document.getElementById('flex-box-rps-div').appendChild(messageDiv);
      document.getElementById('flex-box-rps-div').appendChild(botDiv);
      //document.getElementById('flex-box-rps-div').appendChild(btn);

}


//Chanllenge 4: Change the color of all the buttons.....

var all_buttons = document.getElementsByTagName('button');
//console.log(all_buttons);
var copyAllButtons = [];
for(let i = 0;i < all_buttons.length;i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(buttonThingy){
    if(buttonThingy.value === 'red'){
        buttonsRed();
    }
    else if(buttonThingy.value === 'green'){
        buttonsGreen();
    }
    else if(buttonThingy.value === 'reset'){
        buttonColorReset();
    }
    else if(buttonThingy.value === 'random'){
        randomColors();
    }
}
function buttonsRed(){
    for(let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');

    }
}


function buttonsGreen(){
    for(let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');

    }
}


function buttonColorReset(){
    for(let i = 0;i < all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors(){
    var choices = ['btn-primary','btn-danger','btn-success','btn-warning'];
    
    for(var i = 0;i < all_buttons.length;i++){
        var rn = Math.floor(Math.random() * 4);
         all_buttons[i].classList.remove(all_buttons[i].classList[1]);
         all_buttons[i].classList.add(choices[rn]);
    }
}


// Challenge 5: Blackjack

let blackjackGame = {
    'you': {'scoreSpan':'#your-blackjack-result','div':'#your-box','score':0 },
    'dealer': {'scoreSpan':'#dealer-blackjack-result','div':'#dealer-box','score':0 },
    'cards':['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
    'cardsMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'J':10,'Q':10,'A':[1,11]},
    'wins':0,
    'losses':0,
    'draws':0,
    'isStand':false,
    'turnsOver':false

}

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];
const hitSound = new Audio('sounds/swish.m4a');
const winSound = new Audio('sounds/cash.mp3');
const lossSound = new Audio('sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackHit); 
document.querySelector('#blackjack-stand-button').addEventListener('click',dealerLogic);

document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackDeal);




function blackjackHit(){
    //alert('ouchh you just have clicked me');
 
   if(blackjackGame['isStand'] === false){

   
    
    let card = randomCard();
    showCard(card,YOU);
    updateScore(card,YOU);
    showScore(YOU);

   } 
    
}
function randomCard(){
    let randomIndex = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomIndex];
}

function showCard(card,activePlayer){
    if(activePlayer['score'] <= 21){
    let cardImage = document.createElement('img');
         cardImage.src = `images/${card}.png`;
         document.querySelector(activePlayer['div']).appendChild(cardImage);
         hitSound.play();
    }
}
function blackjackDeal(){
    //showResult(computeWinner());
    if(blackjackGame['turnsOver'] === true){
        blackjackGame['isStand'] = false;
        let winner = computeWinner();
        showResult(winner);
        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

        for(var i = 0;i < yourImages.length;i++){

        
        yourImages[i].remove();
        }
        for(var i = 0;i < dealerImages.length;i++){

        
            dealerImages[i].remove();
            }
            YOU['score'] = 0;
            DEALER['score'] = 0;
            document.querySelector('#your-blackjack-result').textContent = 0;
            document.querySelector('#your-blackjack-result').style.color = '#fff';
            document.querySelector('#dealer-blackjack-result').textContent = 0;
            blackjackGame['turnsOver'] = true;
    }

}
function updateScore(card,activePlayer){
    //
    if(card === 'A'){
    if(activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21){
        activePlayer['score'] += blackjackGame['cardsMap'][card][1];
    }
    else{
        activePlayer['score'] += blackjackGame['cardsMap'][card][0];
            
    }
}
else {
     activePlayer['score']  += blackjackGame['cardsMap'][card];
}
}


function showScore(activePlayer){
    if(activePlayer['score'] > 21){
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';

    }
    else{

    
    document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
  }

  function sleep(ms){
      return new Promise(resolve => setTimeout(resolve,ms));
  }
async  function dealerLogic(){
      blackjackGame['isStand'] = true;

      while(DEALER['score'] < 16 && blackjackGame['isStand'] === true){
            let card = randomCard();
            showCard(card,DEALER);
            updateScore(card,DEALER);
            showScore(DEALER);
      await sleep(1000);

      }
      
          blackjackGame['turnsOver'] = true;
          let winner = computeWinner();
          showResult(winner);
      
  }

  function computeWinner(){
      if(YOU['score'] <= 21){
          if(YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)){
              blackjackGame['wins']++;
               console.log('You Won!');
               Winner = YOU;
          }
          else if(YOU['score'] < DEALER['score']){
              console.log('you lost');
              blackjackGame['losses']++;
              
              Winner = DEALER;

          }
          else if(YOU['score'] === DEALER['score']){
            blackjackGame['draws']++;
              
            console.log('You Drew!');
          }
      }
      else if(YOU['score'] >21 &&  DEALER['score'] <=21){
        blackjackGame['losses']++;
          
        winner = DEALER;
      }
      else if(YOU['score'] > 21 && DEALER['score'] > 21){
        blackjackGame['draws']++;
          
        console.log('You Drew!');
      }
      return Winner;
  }

  function showResult(winner){
       let message,messageColor;
       if(blackjackGame['turnsOver'] === true){
        if(winner === YOU){
            document.querySelector('#wins').textContent = blackjackGame['wins'];
            message = 'YOU Won';
            messageColor = 'green';
            winSound.play();
        }
        else if(winner === DEALER){
            document.querySelector('#losses').textContent = blackjackGame['losses'];

            message = 'You Lost';
            messageColor = 'red';
            lossSound.play();
        }
        else{
            message = 'Draw';
            document.querySelector('#draw').textContent = blackjackGame['draw'];

            messageColor= 'black';
        }
        document.querySelector('#blackjact-result').textContent = message;
        document.querySelector('#blackjact-result').style.color = messageColor;
    }
  }



  //Challenge 6: AJAX & API's with JAVASCRIPT
function ajax(){
  const url = 'https://randomuser.me/api/?results=10';
  fetch(url).then(resp => resp.json()).then(data =>{
      let authors = data.results;
      for(var i = 0;i < authors.length;i++){
          let div = document.createElement('div');
          let image = document.createElement('img');
          let p = document.createElement('p');
          p.appendChild(document.createTextNode(`${title(authors[i].name.first)} ${title(authors[i].name.last)}`));
          image.src = authors[i].picture.large;
          div.appendChild(image);
          div.appendChild(p);
          document.querySelector('.container-6 .flex-ajax-row-1').appendChild(div);
      }
  });
}