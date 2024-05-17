fetch (" https://api.thedogapi.com/v1/breeds");
.then(response = console.log(response))
.catch(error => console.error(error))