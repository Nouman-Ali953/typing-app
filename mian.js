const textarea = document.querySelector("textarea");
const btn = document.querySelector('button');
const msg = document.querySelector(".msg");
const typeWords = document.getElementById("typeWords");
const reset = document.getElementById("reset");

let startTime,endTime;

textarea.addEventListener('click',()=>{
    textarea.classList.toggle("text-shadow");
})




const setOfWords = [
    "Hello my name is Nouman Ali",
    "A quick brown fox jumps over the lazy dog",
    "Let's start the journey, because a journey of thousands miles starts with a single step. So, If you have the courage then put your first step towards your goal"
]

const playGame = () =>{
    let randomtext =Math.floor( Math.random()*setOfWords.length);
    msg.innerText = setOfWords[randomtext];
    let date = new Date();
    startTime = date.getTime();

}
const endPlay = ()=>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime-startTime)/1000);
    console.log(totalTime);

    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);

    let speed = Math.floor((wordCount / totalTime)*60);

    let finalMsg = `You typed total at ${speed} words per minute `;
    finalMsg += compareWords(msg.innerText,totalStr);
    msg.innerText = finalMsg;


}
const compareWords = (str1,str2)=>{
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let count = 0;


    words1.forEach((item,index)=>{
        if(item == words2[index]){
            count++;
        }
    })

    let errorWords = (words1.length - count );

    return (count + " correct out of "+ words1.length + " words and the total numbers of errors are " + errorWords);

}
const wordCounter = (str)=>{
    let response = str.split(" ").length;
    console.log(response);
    return response;

}


// this is the main function from which all the events will triggers

btn.addEventListener('click',()=>{

    if(btn.innerText == "START"){
    btn.innerText="DONE";
    playGame();

    }else if(btn.innerText=="DONE"){
        btn.innerText="START";
        endPlay();
    }

  
})

reset.addEventListener('click',()=>{
    typeWords.innerText=" ";
    msg.innerText=" ";
    btn.innerText="START";
})






