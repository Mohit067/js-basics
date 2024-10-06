document.addEventListener("DOMContentLoaded", () => {
    //load
    const load = document.createElement("h1");
    const divv = document.createElement("div");
    divv.id = "load";
    load.innerText = "Domcontent successfully loaded";
    divv.appendChild(load);
    document.body.appendChild(divv);

    const bttn = document.createElement("button");
    bttn.innerText = "Reload";
    bttn.addEventListener("click", () => {
        load.textContent = "Content reloaded!";
        setTimeout(() => {
            window.location.reload(true);
        }, 200);
    })
    document.body.appendChild(bttn);


    //mouseout
    const btn = document.getElementById("btn");
    btn.addEventListener("mouseout", () => {
        btn.innerText = "mouseOut";
    })
    

    //keypress
    const consoleLog = document.getElementById("console-log");
    function logMessage(message) {
        consoleLog.innerText += `${message}\n`;
    }
    
    let input = document.querySelector("#input");
    input.addEventListener("keypress", (e) => {
        logMessage(`${e.key} pressed`)
    })

    //scroll
    let text = document.getElementById("text");
    text.addEventListener("scroll", () => {
        let div = document.createElement("div");
        div.innerText = "scroll is running";
        document.body.appendChild(div);
    });
    
})