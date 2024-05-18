/// console.log("Is this working?");

const breed = document.getElementById("breedSelect")

fetch("https://api.thedogapi.com/v1/images/search?limit=10")
.then((res) => {
    return res.json();
})
.then((data) => {
    console.log(data)
});

async function initialLoad() {
    try {
      const response = await fetch('https://api.thedogapi.com/v1/breeds');
      const breedData = await response.json();
  
      const breedSelect = document.getElementById('breedSelect');

breed.forEach(breed => {
    const option = document.createElement('option');
    option.value = breed.id;
    option.textContent = breed.name;
    dropdown.appendChild(option);
});
}
    }