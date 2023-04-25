const title = document.getElementById("title");

title.addEventListener("mouseover", () => {
    title.style.fontSize = "3rem";
});

title.addEventListener("mouseout", () => {
    title.style.fontSize = "2rem";
});