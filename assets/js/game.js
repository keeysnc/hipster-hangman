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

    var usedkeyContainer = document.createElement('div');
    root.appendChild(usedkeyContainer);
    usedkeyContainer.setAttribute('class','usedkeys');
    

    var resetBtn = document.createElement('button');
    resetBtn.setAttribute('class','waves-effect waves-light btn');
    resetBtn.style.display = "none";
    resetBtn.innerHTML = "Reset";
    root.appendChild(resetBtn);

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
        scoreboard.innerHTML = "<h4>Guesses: " + '<b>' + guesses + '</b>' + "<h4>"
        
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
            if(event.keyCode >= 65 && event.keyCode <= 90){
                //if guess is zero stop game
                if( guesses <= 0){
                    return 
                }else{
                    userkey = event.key; 
                }
                
                var letterIndexArr = answer.reduce(  
                    function(accumulator, currentValue, currentIndex){
                        charIndexArr = [];
                        if(userkey === currentValue){
                            usedkey.push(currentValue); 
                            charIndexArr.push(currentIndex);
                            hideArr.splice(currentIndex, charIndexArr.length, currentValue);
                            return updates();
                        }
                    },0
                );
                
            }
            if(!answer.includes(userkey)){
                if(wrongGuesses.includes(userkey)){
                    return;
                }else{
                    wrongGuesses.push(userkey);
                    if(hideArr.includes("_")){
                        guesses--;
                    }
                    return updates();
                }  
            }
            return answerContainer.innerHTML = '<h3>' + hideArr + '</h3>'
            
        });
    }
        

    function updates(){
        if(guesses === 0){
            scoreboard.innerHTML = "<h4>Guesses: <b>Sorry you've lost</b> </h4>"
            answerContainer.innerHTML = '<h3>' + questionAnswerObj[questionSelect].answer + '</h3>'
            
            resetBtn.style.display = "block";
            resetBtn.addEventListener('click',function(){
                window.location.reload(true);
            })  
            return;
        }else if(!hideArr.includes("_") ){
                scoreboard.innerHTML = "<h4><b>You Win!</b> </h4>"
                resetBtn.style.display = "block";
                resetBtn.addEventListener('click',function(){
                window.location.reload(true);
            })
        }else{
            scoreboard.innerHTML = "<h4>Guesses: " + '<b>' + guesses + '</b>' + "<h4>"
            usedkeyContainer.innerHTML = '<h3>' + wrongGuesses + '</h3>'
        }
    }


    function render(){
        init();
    }

    render();

})();