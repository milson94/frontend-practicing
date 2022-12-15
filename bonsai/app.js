let questions = document.querySelectorAll('.faq .question h1'); 
let answer = document.querySelectorAll('.faq .question p'); 

let toggler = document.querySelector('.pricing .toggler'); 
let ball = document.querySelector('.pricing .toggler .ball'); 
let month = document.querySelector('.pricing .mothly-row'); 
let year = document.querySelector('.pricing .yearly-row'); 

let yText = document.querySelector('.pricing .heading1 .y'); 
let mText = document.querySelector('.pricing .heading1 .m'); 

toggler.onclick = () =>{
    console.log('clicked')
    ball.classList.toggle('active'); 
    toggler.classList.toggle('activeToggler'); 
    month.classList.toggle('innactive');
    year.classList.toggle('activeYear'); 
    yText.classList.toggle('active')
    mText.classList.toggle('innactive')
}

// let question = document.querySelector('#question1'); 
// let answer = document.querySelector('#answer1'); 


// questions.forEach(qst => {
//     qst.onclick = () =>{
//         answer.forEach(ans => {
//             ans.classList.toggle('active'); 
//         }); 
//     } 
// });

for (let i =0; i < questions.length; i++){
    questions[i].addEventListener('click', ()=>{
        answer[i].classList.toggle('active'); 
    })
}