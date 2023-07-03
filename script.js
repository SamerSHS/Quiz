 //Start Section
 let start = document.querySelector("#start");

 //guide Section
 let guide = document.querySelector("#guide");
 let exit = document.querySelector("#exit");
 let continueBtn = document.querySelector("#continue");
 
 //Quiz Section
 let quiz = document.querySelector("#quiz");
 let time = document.querySelector("#time");
 
 //question Section
 let questionNo = document.querySelector("#questionNo");
 let questionText = document.querySelector("#questionText");
 
 //Multiple Choices Of Questions
 let option1 = document.querySelector("#option1");
 let option2 = document.querySelector("#option2");
 let option3 = document.querySelector("#option3");
 let option4 = document.querySelector("#option4");
 
 //correct and next Button
 let total_correct = document.querySelector("#total_correct");
 let next_question = document.querySelector("#next_question");
 
 //Result Section
 let result = document.querySelector("#result");
 let points = document.querySelector("#points");
 let quit = document.querySelector("#quit");
 let startAgain = document.querySelector("#startAgain");
 
 //Get All 'H4' From Quiz Section (MCQS)
 let choice_que = document. querySelectorAll(".choice_que");
 
 let progressBarFull = document.querySelector("#progressBarFull")
 let img = document.querySelector('img')

 let index = 0;
 let timer = 0;
 let interval = 0;
 
 //total points
 let correct = 0;
 
 //store Answer Value
 let UserAns = undefined;
 
 //what happen when 'Start' Button Will Click
 start.addEventListener("click", () => {
     start.style.display = "none";
     guide.style.display = "block";
 });
 
 //what happen when 'Exit' Button Will Click
 exit.addEventListener("click", () => {
     start.style.display = "block";
     guide.style.display = "none";
 });
 
 
 //Creating Timer For Quiz Timer Section
 
 let countDown = () => {
     if (timer === 20) {
         clearInterval(interval);
         next_question.click();
     } else {
         timer++;
         time.innerText = timer;
     }
 }
 const getRandomElementsFromArray = (arr, numElements) => {
    const result = [];
    const tempArray = [...arr];
    for (let i = 0; i < numElements; i++) {
      const randomIndex = Math.floor(Math.random() * tempArray.length);
      result.push(tempArray[randomIndex]);
      tempArray.splice(randomIndex, 1);
    }
    return result;
  };
  
  const numElements = 10;
 const MCQS = getRandomElementsFromArray(arr, numElements)
 //setInterval(countDown,1000);
 
 let loadData = () => {
 
      
      console.log(MCQS)
     questionText.innerText = MCQS[index].question;
     option1.innerText = MCQS[index].choice1;
     option2.innerText = MCQS[index].choice2;
     option3.innerText = MCQS[index].choice3;
     option4.innerText = MCQS[index].choice4;
 
     //    timer start
     timer = 0;
 }
 
 loadData();
 
 //what happen when 'Continue' Button Will Click
 continueBtn.addEventListener("click", () => {
     quiz.style.display = "block";
     guide.style.display = "none";
 
     interval = setInterval(countDown, 1000);
     loadData();
     progressBarFull.style.width = '0%'

 
     //    remove All Active Classes When Continue Button Will Click
 
 
     total_correct.innerHTML = `${correct = 0} من ${MCQS.length} أسئلة`;
     
 });
 
 choice_que.forEach((choice, indexnum) => {
     choice.addEventListener("click", () => {
         choice.classList.add("active");
         //check answer
         console.log(indexnum)
         console.log(MCQS[index].answer )

         if (indexnum === MCQS[index].answer) {
             correct++;
         } else {
             correct += 0;
         }
         //stop Counter
         clearInterval(interval);
 
         //disable All Options When User Select An Option
         for (i = 0; i <= 3; i++) {
             choice_que[i].classList.add("disabled");
         }
     })
 });
 
 ////what happen when 'Next' Button Will Click
 next_question.addEventListener("click", () => {
     //    if index is less then MCQS.length
     if (index !== MCQS.length - 1) {
         index++;
         choice_que.forEach(removeActive => {
             removeActive.classList.remove("active");
         })
 
         //question
         loadData();
 
         //result
         total_correct.style.display = "block";
         total_correct.innerHTML = `${correct} من أصل ${MCQS.length} أسئلة`;
         progressBarFull.style.width = `${(index/MCQS.length) * 100}%`
         clearInterval(interval);
         interval = setInterval(countDown, 1000);
     } else {
         index = 0;
 
 
         //when Quiz Question Complete Display Result Section
         clearInterval(interval);
         quiz.style.display = "none";
         points.innerHTML = `حصلتَ على  ${correct}  مِن ${MCQS.length}`;
         result.style.display = "block";
         
      
         if(correct >= 8) {
         setTimeout((() => { img.style.display = "block";
        }), 1000)
         }
     
        
     }
     for (i = 0; i <= 3; i++) {
         choice_que[i].classList.remove("disabled");
     }
 })
 
 //what happen when 'Quit' Button Will Click
 quit.addEventListener("click", () => {
     start.style.display = "block";
     result.style.display = "none";
 });
 
 //Start Again When 'Start Again' Button Will Clicked
 startAgain.addEventListener("click", () => {
     guide.style.display = "block";
     result.style.display = "none";
 });
 