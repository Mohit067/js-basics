function randomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red},${green},${blue})`;
    return color;
}
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("#btn");

    btn.addEventListener("click" ,function () {
        
        const h1 = document.querySelector("h1");
        let color = randomColor();
        h1.innerText = color;

        let div = document.querySelector("div");
        div.style.backgroundColor = color;
    })
})