console.log("app.js");

const backLinks = document.querySelectorAll(".back-link");

backLinks.forEach((item => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        history.back();
    });
}));