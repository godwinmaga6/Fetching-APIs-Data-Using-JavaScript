fetch('https://picsum.photos/600/400')
.then(res => res.blob())
.then(blob => {
    let img = document.createElement('img');
    console.log(img);
    img.src = URL.createObjectURL(blob);
    document.querySelector('body').appendChild(img);
}) 