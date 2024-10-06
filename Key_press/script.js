document.addEventListener("DOMContentLoaded", () => {
    const consoleLog = document.getElementById("console-log");
    function logMessage(message) {
        consoleLog.innerText += `${message}\n`;
    }
    const input = document.querySelector("input");
    input.addEventListener("keydown" , (e) => {
        if(event.code == "KeyU"){
            logMessage(`${e.key} pressed`)
        }
        else if(event.code == "KeyD"){
            logMessage(`${e.key} pressed`)
        }
        else if(event.code == "KeyL"){
            logMessage(`${e.key} pressed`)
        }
        else if(event.code == "KeyR"){
            logMessage(`${e.key} pressed`)
        }
        else{
            logMessage(`${e.key} pressed`)
        }
    });
})