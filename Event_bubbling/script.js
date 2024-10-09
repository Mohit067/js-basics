document.addEventListener("DOMContentLoaded", ()=> {
    const div = document.querySelector("div");
    const ul = document.querySelector("ul");
    const lis = document.querySelectorAll("li");

    const consoleLog = document.getElementById("logMessage");
    function logMessage(message){
        consoleLog.innerText += `${message} \n`
    }

    div.addEventListener("click", () => {
        logMessage(`div clicked`);
    })

    ul.addEventListener("click", (event) => {
        logMessage(`ul clicked`);
        event.stopPropagation();
    })

    for(li of lis){
        li.addEventListener("click", () => {
            logMessage(`li clicked`);
            event.stopPropagation();
        })
    }
})