
const accessKey='RkJ4x2e9ablz0uXpgIrrcfQXu75IQoo16awm4BMp9H0';

const form = document.querySelector('form')
const input = document.getElementById('search')
const saerchBtn = document.getElementById('searchBtn')

const searchResults = document.querySelector('.searchResults')

let inputData = '';

let page = 1;


export async function getPhotos() {

    inputData = input.value;
    
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}&per_page=12`;
      

    const response = await fetch(url)
    const data = await response.json()
    
    const results = data.results

    

    results.map((result)=>{
        const imageContainer = document.createElement('div')
        imageContainer.setAttribute('class','result')
        const image = document.createElement('img')
        image.src = result.urls.small
        image.alt = result.alt_description
        const imageLink = document.createElement('a')
        imageLink.href = result.links.html
        imageLink.taget = '_blank'
        imageLink.textContent = result.alt_description

        imageContainer.appendChild(image)
        imageContainer.appendChild(imageLink)
        searchResults.append(imageContainer)

    



})
}


saerchBtn.addEventListener('click', function () {
    event.preventDefault();

    // initialise page number

    if (page === 1){
        searchResults.innerHTML=''
    }
    getPhotos()

})