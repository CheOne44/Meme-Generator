const form = document.getElementById("meme-form");
const memeContainer = document.getElementById("meme-container");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const topText = document.getElementById("top-text").value.trim();
    const bottomText = document.getElementById("bottom-text").value.trim();
    const imageUrl = document.getElementById("image-url").value.trim();

    if (!imageUrl || (!topText && !bottomText)) return;
    const memeDiv = document.createElement('div');
    memeDiv.classList.add('meme')

    const img = document.createElement('img')
    img.src = imageUrl
    memeDiv.appendChild(img)

    if (topText) {
        const top = document.createElement('div');
        top.classList.add('text', "top");
        top.innerText = topText
        memeDiv.appendChild(top)
    }

    if (bottomText) {
        const bottom = document.createElement('div');
        bottom.classList.add('text', "bottom");
        bottom.innerText = bottomText
        memeDiv.appendChild(bottom)
    }

    memeContainer.appendChild(memeDiv);

    memeDiv.addEventListener('click', function(){
        memeDiv.remove();
    })
    form.reset();
    
})
   


