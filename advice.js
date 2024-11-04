const adviceURL = "https://api.adviceslip.com/advice";

let counter = 0;
async function fetchAdvice(){
    const response = (await axios.get(adviceURL)).data.slip.advice;
    console.log(response);
    counter++;
    return response;
}

async function main(){
    let advicesClass = document.getElementsByClassName("advices")[0];
    let counterClass = document.getElementsByClassName("counter")[0];
    let btnGetAdvice = document.getElementById("getAdvice");
    let adviceParagraph = document.createElement("p");
    let counterParagraph = document.createElement("p");

    if(advicesClass){
        adviceParagraph.textContent = await fetchAdvice();
        advicesClass.appendChild(adviceParagraph);
    }
    if(counterClass){
        counterParagraph.textContent = `Advices given today : ${counter}`;
        counterClass.appendChild(counterParagraph);
    }
    if(btnGetAdvice){
        btnGetAdvice.addEventListener("click", async function(event){
            event.preventDefault();
            event.stopPropagation();

            if(advicesClass)
            {
                adviceParagraph.textContent = await fetchAdvice();
                advicesClass.appendChild(adviceParagraph);
                counterParagraph.textContent = `Advices given today : ${counter}`;
                counterClass.appendChild(counterParagraph);
            }
        })
    }


}
main();