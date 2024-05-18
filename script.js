console.log("Is this working?");

const breed = document.getElementById("breedSelect")

fetch("https://api.thedogapi.com/v1/images/search?limit=10")
.then((res) => {
    return res.json();
})
.then((data) => {
    console.log(data)
})
