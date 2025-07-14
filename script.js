const container = document.getElementById('container');
for (let i = 0; i < 16; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("gridDiv");
    container.appendChild(newDiv);
    console.log(newDiv);
}