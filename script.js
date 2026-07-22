const screens = {
    welcome: document.getElementById("welcome"),
    question: document.getElementById("questionScreen"),
    video: document.getElementById("videoScreen"),
    final: document.getElementById("finalScreen")
};

const startBtn = document.getElementById("startBtn");

const progressBar = document.getElementById("progressBar");

const questionTitle = document.getElementById("question");

const answers = document.getElementById("answers");

const video = document.getElementById("loveVideo");


const questions = [

{
    question: "Do you love me? ❤️",

    answers: [
        "Yes ❤️",
        "No 🙈"
    ]
},

{
    question: "Who is your favorite person?",

    answers: [
        "Qeti ❤️",
        "Someone else 🤔"
    ]
},

{
    question: "Do you miss me?",

    answers: [
        "Every day ❤️",
        "Sometimes 🙂"
    ]
},

{
    question: "Are you happy with me?",

    answers: [
        "Always ❤️",
        "Of course ❤️"
    ]
},

{
    question: "Ready for your surprise?",

    answers: [
        "Yes ❤️"
    ]
}

];

let currentQuestion = 0;


startBtn.addEventListener("click", () => {

    screens.welcome.classList.remove("active");

    screens.question.classList.add("active");

    showQuestion();

});


function showQuestion(){

    const q = questions[currentQuestion];

    questionTitle.textContent = q.question;

    answers.innerHTML = "";

    progressBar.style.width =
        ((currentQuestion) / questions.length) * 100 + "%";


    q.answers.forEach((answer,index)=>{

        const btn = document.createElement("button");

        btn.className="answer-btn";

        btn.innerText=answer;

        if(answer.toLowerCase().includes("no") || answer.toLowerCase().includes("someone")){

            btn.addEventListener("mouseover",()=>{

                btn.style.position="absolute";

                btn.style.left=Math.random()*70+"%";

                btn.style.top=Math.random()*70+"%";

            });

        }

        btn.addEventListener("click",()=>{

            nextQuestion();

        });

        answers.appendChild(btn);

    });

}


function nextQuestion(){

    currentQuestion++;

    if(currentQuestion>=questions.length){

        progressBar.style.width="100%";

        screens.question.classList.remove("active");

        screens.video.classList.add("active");

        return;

    }

    showQuestion();

}


video.addEventListener("ended",()=>{

    screens.video.classList.remove("active");

    screens.final.classList.add("active");

});

