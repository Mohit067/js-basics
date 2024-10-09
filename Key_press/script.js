document.addEventListener("DOMContentLoaded", () => {
    const consoleLog = document.getElementById("console-log");
    function logMessage(message) {
        consoleLog.innerText += `${message}\n`;
    }
    const input = document.querySelector("input");
    input.addEventListener("keydown" , (e) => {
        if(e.code == "KeyU"){
            logMessage(`${e.key} pressed`)
        }
        else if(e.code == "KeyD"){
            logMessage(`${e.key} pressed`)
        }
        else if(e.code == "KeyL"){
            logMessage(`${e.key} pressed`)
        }
        else if(e.code == "KeyR"){
            logMessage(`${e.key} pressed`)
        }
        else{
            logMessage(`${e.key} pressed`)
        }
    });
})