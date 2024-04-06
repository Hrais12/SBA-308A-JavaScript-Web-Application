const accessKey='RkJ4x2e9ablz0uXpgIrrcfQXu75IQoo16awm4BMp9H0';


const imgOne = document.getElementById('imgOne')
const linkOne= document.getElementById('linkOne')

const imgTwo = document.getElementById('imgTwo')
const linkTwo = document.getElementById('linkTwo')

const imgThree = document.getElementById('imgThree')
const linkThree = document.getElementById('linkThree')







export async function getRandomPhotoOne() {
    const url = `https://api.unsplash.com/photos/random/?client_id=${accessKey}`;
      
    fetch(url)
    .then((response) => response.json())
    .then((json) => {
        
        imgOne.src = json.urls.regular;
        linkOne.href = json.links.html
        linkOne.textContent = json.alt_description;
})
}

export async function getRandomPhotoTwo() {
    const url = `https://api.unsplash.com/photos/random/?client_id=${accessKey}`;
      
    fetch(url)
    .then((response) => response.json())
    .then((json) => {
      

        imgTwo.src = json.urls.regular;
        linkTwo.href = json.links.html
        linkTwo.textContent = json.alt_description


    
})
}

export async function getRandomPhotoThree() {
    const url = `https://api.unsplash.com/photos/random/?client_id=${accessKey}`;
      
    fetch(url)
    .then((response) => response.json())
    .then((json) => {
      

        imgThree.src = json.urls.regular;
        linkThree.href = json.links.html
        linkThree.textContent = json.alt_description


    
})
}
