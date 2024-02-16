const buttons = document.querySelector("#buttons");
let btn = document.querySelectorAll(".btn");
const gifs = document.querySelector("#gifs");
let input;
const addBtn = document.querySelector("#addBtn")
let clearBtn = document.querySelector("#clearBtn")
var a = true;

addBtn.addEventListener("click", function (e) {
    e.preventDefault()
    input = document.querySelector("#addInp");
    if (input.value.trim() !== "") {
        const newButton = document.createElement("button");
        const newButtonX = document.createElement("button");
        newButton.classList.add("newButtonClass")
        newButton.classList.add("btn");

        newButtonX.id = "myau"
        newButtonX.textContent = "X"
        newButtonX.style.display = "none"

        newButton.addEventListener("mouseover", function () {
            newButtonX.style.display = "block"
        })
        newButton.addEventListener("mouseleave", function () {
            newButtonX.style.display = "none"
        })

        newButtonX.addEventListener("click", function () {
            a = false;
            buttons.removeChild(newButton)
            setTimeout(function () {
                a = true;
            }, 1)
        })

        newButton.innerHTML = input.value;
        input.value = "";
        newButton.appendChild(newButtonX)
        buttons.append(newButton);
    }
});

window.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        input = document.querySelector("#addInp");
        if (input.value.trim() !== "") {
            const newButton = document.createElement("button");
            const newButtonX = document.createElement("button");
            newButton.classList.add("newButtonClass")
            newButton.classList.add("btn");

            newButtonX.id = "myau"
            newButtonX.textContent = "X"
            newButtonX.style.display = "none"

            newButton.addEventListener("mouseover", function () {
                newButtonX.style.display = "block"
            })
            newButton.addEventListener("mouseleave", function () {
                newButtonX.style.display = "none"
            })

            newButtonX.addEventListener("click", function () {
                a = false;
                buttons.removeChild(newButton)
                setTimeout(function () {
                    a = true;
                }, 1)
            })

            newButton.innerHTML = input.value;
            input.value = "";
            newButton.appendChild(newButtonX)
            buttons.append(newButton);
        }
    }
})

function selectAllButtons() {
    btn = document.querySelectorAll(".btn");
    for (let i of btn) {
        i.onclick = function () {
            gifs.innerHTML = "";
            for (let j in i.classList) {
                if (i.classList[0] === 'newButtonClass') {
                    var array = i.textContent.split("");
                    array.pop();
                    var d = array.join("")
                    var animalName = d;
                }
                else if (i.classList[0] === "btn") {
                    var animalName = i.textContent;
                }

            }
            console.log(animalName);
            main(animalName);
        };
    }
}

function main(animalName) {
    if (a) {
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=IunDZRBqAiaiIulBudp4Elej0Y5e6ScO&q=${animalName}&limit=50&offset=25&rating=&lang=en&bundle=messaging_non_clips`, {
            method: "GET"
        }).then(
            function (response) {
                return response.json();
            }
        ).then(
            function (url) {
                for (let i in url.data) {
                    const h1 = document.createElement("p");
                    const img = document.createElement("img");
                    const gifDiv = document.createElement("div");

                    img.style.border = "2px solid black";
                    h1.innerHTML = `Rating: ${url.data[i].rating}`;
                    img.src = `https://media1.giphy.com/media/${url.data[i].id}/giphy_s.gif`;

                    img.addEventListener("click", function () {
                        if (img.src === `https://media1.giphy.com/media/${url.data[i].id}/giphy_s.gif`) {
                            img.src = `https://media1.giphy.com/media/${url.data[i].id}/giphy.gif`;
                        } else {
                            img.src = `https://media1.giphy.com/media/${url.data[i].id}/giphy_s.gif`;
                        }
                    });

                    gifDiv.append(h1, img);
                    gifs.append(gifDiv);
                }
            }
        );
    }
}

setInterval(selectAllButtons, 500);
