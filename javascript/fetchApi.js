const API = 'https://api.nasa.gov/planetary/apod?api_key=Uv3XqajXU5W9DgBGBEP1UMx4s4p79eomrqpmhufF'
const container = document.getElementById('container-data')

container.innerHTML = '<div class="lds-facebook"><div></div><div></div><div></div></div>'

const loadData = data => {
    return(
        `
        <div class="container__div-img">
            <img class="container__img-fb" src="./images/nasa-logo.png" alt="Nasa">
            <div class="container__info">
                <p><a href="https://api.nasa.gov/" target="_blank">NASA</a> compartio un enlace.</p>
                <span>${data.date}</span>
            </div>
        </div>
        <h4>${data.title}</h4>
        <img class="container__img-public" src=${data.hdurl} alt="img">
        `
    )
}

const getData = async api => {
    try {
        debugger
        const response = await fetch(api)
        const data = await response.json()
        container.innerHTML = loadData(data)
        return data
    } catch (err) {
        console.log(err)
    }
        
} 

getData(API)



