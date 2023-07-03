
let start= document.querySelector("#start");


let guide= document.querySelector("#guide");
let exit= document.querySelector("#exit");
let continueBtn= document.querySelector("#continue");


let quiz = document.querySelector("#quiz");
let time = document.querySelector("#time");

let questionNo = document.querySelector("#questionNo");
let questionText = document.querySelector("#questionText");



let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");



let total_correct = document.querySelector("#total_correct");
let next_question = document.querySelector("#next_question");


let result = document.querySelector("#result");
let point = document.querySelector("#point");
let quit = document.querySelector("#quit");
let startAgain = document.querySelector("#startAgain");


let choice_que = document.querySelectorAll(".choice_que");

let index = 0;
let timer = 0;
let interval = 0;

let correct = 0;

let userAns = undefined;



start.addEventListener("click", ()=> {
     start.style.display = "none";
     guide.style.display = "block";

});


exit.addEventListener("click", ()=> {
     start.style.display = "block";
     guide.style.display = "none";

});


let countDown = ()=> {
     if(timer === 20) {
          clearInterval(interval)
          next_question.click();
     } else  {
          timer++;
          time.innerText= timer;
     }
}


//setInterval(countDown, 1000);

let loadData = ()=>{
     questionNo.innerText = index + 1 + ". ";
     questionText.innerText = MCQS[index].question;
     option1.innerText = MCQS[index].choice1;
     option2.innerText = MCQS[index].choice2;
     option3.innerText = MCQS[index].choice3;
     option4.innerText = MCQS[index].choice4;

     timer = 0;
}

loadData();

continueBtn.addEventListener("click", ()=> {
     quiz.style.display = "block";
     guide.style.display = "none";

     interval= setInterval(countDown,1000);
     loadData(); 

 
          total_correct.innerHtml= `${correct= 0} out of ${MCQS.lenght} Qestions`;


});

choice_que.forEach( (choices,choiceNo) => {
    
     choices.addEventListener("click", () => {
          choices.classList.add("active");
           
          if (choiceNo === MCQS[index]  .answer)
          {
               correct ++;
                         }
          else {
               correct += 0;
          } 

          clearInterval(interval);

          for ( i = 0 ; i <= 3 ; i++    ) {
               choice_que[i].classList.add("disabled");
          }

     })


})

next_question.addEventListener("click", () => {
     
     if (index !== MCQS.length -1) {
          index++
          choice_que.forEach(removeActive => {
          removeActive.classList.remove("active");
     })


     loadData();

     total_correct.style.display = "block";
     total_correct.innerHtml =  `${correct} out of ${MCQS.lenght} Qestions`;
     clearInterval(interval);
     interval = setInterval (countDown, 1000);
     }

     else 
      {

     index = 0;

     clearInterval(interval);
     quiz.style.display = "none";
     point.innerHTML =  `You Got ${correct} out of ${MCQS.lenght} `;
     result.style.display = "block";
}

for(i=0 ; i <= 3 ; i++ ) {
     choice_que[i].classList.add("disabled");
}
})


quit.addEventListener("click", () => {
     start.style.display = "block";
     result.style.display = "none";
 });
 
 //Start Again When 'Start Again' Button Will Clicked
 startAgain.addEventListener("click", () => {
     guide.style.display = "block";
     result.style.display = "none";
 });
 

