console.log('it works!');

var app = (function() {
 
    var root = document.getElementById('root');
    var questionSelect = Math.floor(Math.random() * 5);
    var question;
    var answer;
    var hideArr = [];
    var hide = "_";
    var guesses = 10;
    var wrongGuesses = [];
    var win;
    var lose;
    var userkey;
    var charIndex;
    var charIndexArr = [];
    var usedkey = [];

    //elements
    var questionContainer = document.createElement('div');
    root.appendChild(questionContainer);
    questionContainer.setAttribute('class','question-container');

    var answerContainer = document.createElement('div');
    root.appendChild(answerContainer);
    answerContainer.setAttribute('class','answer-container');

    var scoreboard = document.createElement('div');
    root.prepend(scoreboard);
    scoreboard.setAttribute('class','scoreboard');

    // array of question/answer sets
    var questionAnswerObj = [
        {
            question: "What is the actors name played on Disney Channel movie - Holes?",
            answer: "shia labeouf"
        },
        {
            question: "Television show based on a hipster haven and west coast city",
            answer: "portlandia"
        },
        {
            question: "A chillwave musician known for his 80s cassette tape sound",
            answer: "neon indian"
        },
        {
            question: "A overpriced grocery chain",
            answer: "whole foods"
        },
        {
            question: "A glasses company known for it's association pop culture ",
            answer: "raybans"
        }
    ]

    //get question and answer
    //make answer an array 
    //loop through array and hide all elements
    function init(){
        //setup scoreboard
        scoreboard.innerHTML = "<p>Guesses: " + guesses + "<p>"
        
        //render question
        questionContainer.innerHTML = '<h1>' + questionAnswerObj[questionSelect].question + '</h1>';

        answer = questionAnswerObj[questionSelect].answer
        

        //render hidden answer
        for (let index = 0; index < answer.length-1; index++) {
            var element = answer[index];
            if(element === " "){
                hideArr.push(element.innerHTML = " ");  
            }
            hideArr.push(element.innerHTML = "_");
        }
        answerContainer.innerHTML = '<h3>' + hideArr + '</h3>'

        userloop(answer);
    }

    function userloop(answer){
        
        answer = answer.split("");
        document.addEventListener('keyup', function(event){
            userkey = event.key;
            
            var letterIndexArr = answer.reduce(    
                function(accumulator, currentValue, currentIndex){
                    charIndexArr = [];
                    if(userkey === currentValue){
                        usedkey.push(currentValue); 
                        charIndexArr.push(currentIndex);
                        hideArr.splice(currentIndex, charIndexArr.length, currentValue);
                    }
                    // if(usedkey.includes(currentValue)){
                    //     console.log('stop');
                    //     return;
                    // }
                },0
            );
            return answerContainer.innerHTML = '<h3>' + hideArr + '</h3>'
        });
        
    }
        
            //         const referenceArr = answerLetters;  
            //         let charIndexArr = [];
            //         let charIndex;
            //         userKey = event.key;
            //         //loop through reference array
            //         //foreach element in the array run an if conditional
            //         //if userkey is equal to the indexed element 
            //         //get that all instances of that elements index number and push it to a new array
            //         referenceArr.forEach(function(element) {
            //             element.toUpperCase();
            //             if(userKey === element){
            //                 charIndex = referenceArr.indexOf(element);
            //                 // while (charIndex != -1) {
            //                 //     charIndexArr.push(charIndex);
            //                 //     charIndex = referenceArr.indexOf(element, charIndex + 1);
            //                 // }
            //                 console.log(charIndexArr);
            //                 return charIndexArr;        
            //             }
            //         });
            //         //   console.log('characterIndexArray: ' + charIndexArr);
            //         charIndexArr.forEach(el => {
            //         updatedAnswer = hiddenAnswer.splice(el,charIndexArr.length,userKey);
            //         // console.log(updatedAnswer);
            //         });
            //     });  

        


    function updates(){
        
    }

    function render(){
        init();
    }

    render();

    // function letterSplit(word){
    //     let wordSplit = word.split("");
    //     let newLetterArr = []
    //     newLetterArr = wordSplit;
    //     return newLetterArr;
    // }

    // function removeBtn(){
    //     gameBtn.style.display = "none";
    // }

    // //UPDATE LETTER BANK
    // function updateWord(answerLetters,hiddenAnswer){
    //     document.addEventListener('keyup', function(event){
    //         const referenceArr = answerLetters;  
    //         let charIndexArr = [];
    //         let charIndex;
    //         userKey = event.key;
    //         //loop through reference array
    //         //foreach element in the array run an if conditional
    //         //if userkey is equal to the indexed element 
    //         //get that all instances of that elements index number and push it to a new array
    //         referenceArr.forEach(function(element) {
    //             element.toUpperCase();
    //             if(userKey === element){
    //                 charIndex = referenceArr.indexOf(element);
    //                 // while (charIndex != -1) {
    //                 //     charIndexArr.push(charIndex);
    //                 //     charIndex = referenceArr.indexOf(element, charIndex + 1);
    //                 // }
    //                 console.log(charIndexArr);
    //                 return charIndexArr;        
    //             }
    //         });
    //         //   console.log('characterIndexArray: ' + charIndexArr);
    //         charIndexArr.forEach(el => {
    //         updatedAnswer = hiddenAnswer.splice(el,charIndexArr.length,userKey);
    //         // console.log(updatedAnswer);
    //         });
    //     });  
    // }

    // //HIDE ANSWER
    // function createHiddenAnswer(answerLetters){
    //     let hiddenAnswer = [];

    //     answerLetters.forEach(letter => {
    //         const str = letter.toString();
    //         const hideLetter = str.replace(/[a-z]/gi,'_');
    //         hiddenAnswer.push(hideLetter);
            
    //     });

    //     updateWord(answerLetters,hiddenAnswer);
    // }


    // //RENDER QUESTION
    // function renderQuestion(){
        
    //     for(var i = 0; i < questionAnswerObj.length-1; i++){
    //         //question box
    //         const questionBox = document.createElement('div');
    //         const question = questionAnswerObj[i].question;

    //         questionBox.innerHTML = '<h3>' + question + '</h3>';
    //         app.appendChild(questionBox);
    //         break;
    //     }
    // }

    // //RENDER ANSWER
    // function renderAnswer(){
        
    //     for(var i = 0; i < questionAnswerObj.length-1; i++){
    //         //answer box
    //         const answerBox = document.createElement('div');
    //         const answerParagraph = document.createElement('p');
    //         const answer = questionAnswerObj[i].answer.toUpperCase();
    //         const letters = letterSplit(answer);

    //         answerParagraph.innerHTML = '<h3>' + createHiddenAnswer(letters) + '</h3>';
    //         app.appendChild(answerBox);
    //         answerBox.appendChild(answerParagraph);
    //         break;
    //     }
    // }



    // //start game 
    // function startGame(){
    //     gameBtn.innerHTML = 'Start Game';
    //     // startBtn.setAttribute('class','btn btn-primary');
    //     app.appendChild(gameBtn);
    //     gameBtn.addEventListener("click", function(){
    //         removeBtn();
    //         renderQuestion();
    //         renderAnswer();
    //     });
    // }

    // function render(){
    //     startGame();
    // }

    // render();

    
    
})();