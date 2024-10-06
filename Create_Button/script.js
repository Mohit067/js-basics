document.addEventListener("DOMContentLoaded" , () => {
    //create a button and add to body 
    const btn = document.createElement("button");
    btn.textContent = "click me";
    btn.id = "btn-id";
    document.body.appendChild(btn);

    //use of click function
    document.getElementById("btn-id").addEventListener("click" , () => {
        const placeHolder = document.getElementById("placeId");
        placeHolder.placeholder = "btn";
    })

    //use of querrySelector
    const bttn = document.querySelector('#btn-id');
    bttn.style.backgroundColor = "blue";
    bttn.style.color = "white";

    // create h1 with color property
    const head = document.createElement("h1");
    head.textContent = "DOM Practice";
    head.style.color = "purple";
    document.body.appendChild(head);

    //creat a paragraph and fontWeight bold
    const para = document.createElement("p");
    para.textContent = "Apna College Delta Practice";
    para.style.fontWeight = 600;
    document.body.appendChild(para);

})

