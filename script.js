/// console.log("Is this working?");

const breed = document.getElementById("breedSelect")

fetch("https://api.thecatapi.com/v1/images/search?limit=10")
.then((res) => {
    return res.json();
})
.then((data) => {
    console.log(data)
});
