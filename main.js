//METHODS OF GETTING DATA FROM API
//Fetch
//Async await

//LIST OF APIs WE'D USE TO PULL OUT DATA:
//"https://picsum.photos"
//"https://jsonplacehonder.typicode.com"

// (1)  Using fetch method...
// API we are fetching pictures from is "https://picsum.photos"
// This API returns a new image upon every request
fetch('https://picsum.photos/600/400') 
.then(res => res.blob()) //we take the response and get the blob, because we are requesting for an image. We can use JSON to request for text, in the Async method for getting post content whie Blob is used to get an image.
.then(blob => {
    let img = document.createElement('img');
    console.log(img);
    img.src = URL.createObjectURL(blob);
    document.querySelector('body').appendChild(img);
})

//trying to fetch data using my native mood of coding
fetch('https://picsum.photos/600/400').then((res) => res.blob().then((blob) => {
    let img = document.createElement('img');
    console.log(img);
    img.src = URL.createObjectURL(blob);
    document.querySelector('body').appendChild(img);
}))
// (2)  Using the Async  method...
// API we are fetching blog post from is "jsonplacehonder.typicode.com"
// This API returns a 100 posts upon request. Visit jsonplaceholder.typicode.com for more info
//This is a Free Fake API for testing and prototyping. Powered by JSON Server + LowDB

//NOTE: we can choose to get any amount of post ranging from one to hundred if we like. This requires a loop function 
