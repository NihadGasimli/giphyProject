const buttons = document.querySelector("#buttons");
const btn = document.querySelectorAll(".btn");

var input;

document.querySelector("#addBtn").addEventListener("click", function () {
    input = document.querySelector("#addInp")
    if (input.value.trim() !== "") {
        var x = document.createElement("button")
        x.classList.add("btn")
        x.innerHTML = input.value
        buttons.append(x)
    }
})

for (let i of btn) {
    i.onclick = function () {
        var animalName = i.innerHTML
        console.log(animalName)
    }
}

// function api() {
//     var url = fetch("https://api.giphy.com/v1/gifs/search?api_key=IunDZRBqAiaiIulBudp4Elej0Y5e6ScO&q=cat&limit=50&offset=25&rating=g&lang=en&bundle=messaging_non_clips", {
//         method: "GET"
//     }).then(
//         function (url) {
//             return url.json()
//         }
//     ).then(
//         function () {

//         }
//     );
// }