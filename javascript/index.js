const button = document.getElementById('button')
const button1 = document.getElementById('button1')
const react = document.getElementById('react')
const btn = document.getElementById('btn')
const like = document.getElementById('like')
const love = document.getElementById('love')
const enjoy = document.getElementById('enjoy')
const astonishes = document.getElementById('astonishes')
const saddens = document.getElementById('saddens')
const lenrages = document.getElementById('enrages')
const buttons = document.getElementById('buttons')


let hideShow = react.style.display = 'none'

button.onclick = () => {

    (react.style.display === 'none' && hideShow)
        ? react.style.display = 'block' 
        : react.style.display = 'none' 
            
    button.innerHTML = '<img class="img" src="./images/megusta.png" width="30px" alt=""> <span class="text">Me gusta</span>'
    button.style.color = 'black'
}

const time = e => {
    const timeOut = setTimeout(() => {
        react.style.display = 'none' 

        e.classList.remove('isAnimation1', 'isImage')
        e.classList.remove('isAnimation2', 'isImage')
        e.classList.remove('isAnimation3', 'isImage')
        e.classList.remove('isAnimation4', 'isImage')
        e.classList.remove('isAnimation5', 'isImage')
        e.classList.remove('isAnimation6', 'isImage')
    }, 600)
    return timeOut
}

const click = e =>{
    // e.classList.add('isAnimation')
    switch (e) {
        case like:
            e.classList.add('isAnimation1', 'isImage')
            break;
        case love:
            e.classList.add('isAnimation2', 'isImage')
            break
        case enjoy:
            e.classList.add('isAnimation3', 'isImage')
            break;
        case astonishes:
            e.classList.add('isAnimation4', 'isImage')
            break
        case saddens:
            e.classList.add('isAnimation5', 'isImage')
            break;
        case lenrages:
            e.classList.add('isAnimation6', 'isImage')
            break
        default:
            break;
    }
}


like.addEventListener ('click', () => {
    setTimeout(() => {
        button.innerHTML = '<img src="./images/like.png" width="35px" alt="like"> <span>Me gusta</span>'
    }, 600)
    button.innerHTML = '<span>Me gusta</span>'
    button.style.color = 'blue'
    click(like)
    time(like)
})
love.addEventListener('click', () => {
    setTimeout(() =>{
        button.innerHTML = '<img  src="./images/love.png" width="35px" alt="love"> <span>Me encanta</span>'
    }, 600)
    button.innerHTML = '<span>Me encanta</span>'
    button.style.color = 'red'
    click(love)
    time(love)
})
enjoy.addEventListener('click', () => {
    setTimeout(() => {
        button.innerHTML = '<img src="./images/enjoy.png" width="35px" alt="enjoy"> <span>Me divierte</span>'
    }, 600)
    button.innerHTML = ' <span>Me divierte</span>'
    button.style.color = 'rgb(247, 247, 3)'
    click(enjoy)
    time(enjoy)
})
astonishes.addEventListener('click', () => {
    setTimeout(() => {
        button.innerHTML = '<img  src="./images/astonishes.png" width="35px" alt="astonishes"> <span>Me asombra</span>'
    }, 600)
    button.innerHTML = '<span>Me asombra</span>'
    button.style.color = 'rgb(247, 247, 3)'
    click(astonishes)
    time(astonishes)
})
saddens.addEventListener('click', () => {
    setTimeout(() => {
        button.innerHTML = '<img src="./images/saddens.png" width="35px" alt="saddens"> <span>Me entristece</span>'
    }, 600)
    button.innerHTML = '<span>Me entristece</span>'
    button.style.color = 'rgb(247, 247, 3)'
    click(saddens)
    time(saddens)
})
lenrages.addEventListener('click', () => {
    setTimeout(() => {
        button.innerHTML = '<img src="./images/enrages.png" width="35px" alt="enrages"> <span>Me enfurece</span>'
    }, 600)
    button.innerHTML = '<span>Me enfurece</span>'
    button.style.color = 'orange'
    click(lenrages)
    time(lenrages)
})

