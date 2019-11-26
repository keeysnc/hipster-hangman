console.log('it works!');

var app = (function() {
 
    const app = document.getElementById('app');
    const gameBtn = document.createElement('button');
    let userKey;

    //question is read
    //player enters letter
    //if letter is correct, add letter to word bank
    //if letter is incorrect, add part of image

    const questionAnswerObj = [
        {
            question: "What is the actors name played on Disney Channel movie - Holes?",
            answer: "Shia Labeouf"
        },
        {
            question: "Television show based on a hipster haven and west coast city",
            answer: "Portlandia"
        },
        {
            question: "A chillwave musician known for his 80s cassette tape sound",
            answer: "Neon Indian"
        },
        {
            question: "A overpriced grocery chain",
            answer: "Whole Foods"
        },
        {
            question: "A glasses company known for it's association pop culture ",
            answer: "RayBans"
        }
    ]


    function letterSplit(word){
        let wordSplit = word.split("");
        let newLetterArr = []
        newLetterArr = wordSplit;
        return newLetterArr;
    }

    function removeBtn(){
        gameBtn.style.display = "none";
    }

    //UPDATE LETTER BANK
    function updateWord(answerLetters,hiddenAnswer){
        document.addEventListener('keyup', function(event){
            const referenceArr = answerLetters;  
            let charIndexArr = [];
            let charIndex;
            userKey = event.key;
            //loop through reference array
            //foreach element in the array run an if conditional
            //if userkey is equal to the indexed element 
            //get that all instances of that elements index number and push it to a new array
            referenceArr.forEach(function(element) {
                element.toUpperCase();
                if(userKey === element){
                    charIndex = referenceArr.indexOf(element);
                    // while (charIndex != -1) {
                    //     charIndexArr.push(charIndex);
                    //     charIndex = referenceArr.indexOf(element, charIndex + 1);
                    // }
                    console.log(charIndexArr);
                    return charIndexArr;        
                }
            });
            //   console.log('characterIndexArray: ' + charIndexArr);
            charIndexArr.forEach(el => {
            updatedAnswer = hiddenAnswer.splice(el,charIndexArr.length,userKey);
            // console.log(updatedAnswer);
            });
        });  
    }

    //HIDE ANSWER
    function createHiddenAnswer(answerLetters){
        let hiddenAnswer = [];

        answerLetters.forEach(letter => {
            const str = letter.toString();
            const hideLetter = str.replace(/[a-z]/gi,'_');
            hiddenAnswer.push(hideLetter);
            
        });

        updateWord(answerLetters,hiddenAnswer);
    }


    //RENDER QUESTION
    function renderQuestion(){
        
        for(var i = 0; i < questionAnswerObj.length-1; i++){
            //question box
            const questionBox = document.createElement('div');
            const question = questionAnswerObj[i].question;

            questionBox.innerHTML = '<h3>' + question + '</h3>';
            app.appendChild(questionBox);
            break;
        }
    }

    //RENDER ANSWER
    function renderAnswer(){
        
        for(var i = 0; i < questionAnswerObj.length-1; i++){
            //answer box
            const answerBox = document.createElement('div');
            const answerParagraph = document.createElement('p');
            const answer = questionAnswerObj[i].answer.toUpperCase();
            const letters = letterSplit(answer);

            answerParagraph.innerHTML = '<h3>' + createHiddenAnswer(letters) + '</h3>';
            app.appendChild(answerBox);
            answerBox.appendChild(answerParagraph);
            break;
        }
    }



    //start game 
    function startGame(){
        gameBtn.innerHTML = 'Start Game';
        // startBtn.setAttribute('class','btn btn-primary');
        app.appendChild(gameBtn);
        gameBtn.addEventListener("click", function(){
            removeBtn();
            renderQuestion();
            renderAnswer();
        });
    }

    function render(){
        startGame();
    }

    render();

    
    
})();