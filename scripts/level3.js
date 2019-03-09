const max = 1
const min = 10


const first = (Math.floor(Math.random() * (max - min)) + min)
const second = (Math.floor(Math.random() * (max - min)) + max)
const third = first * second
const forth = second * second



const head = document.querySelector('#heading')
head.textContent = `${first} x (4 / 2) x ${second}`


document.querySelector('#guess').addEventListener('change', function (a) {
   

    newEl = document.createElement('a')
    newEl.textContent = 'Next'
    newEl.setAttribute('href', 'level3.html')
    document.querySelector('#cont').appendChild(newEl)


    let form = a.target.value
    const randomEquation = first * (4 / 2) * second

    document.querySelector('#button').addEventListener('click', function (e) {

        
            let p = document.querySelector('p')
            p.textContent = `The correct answer is ${randomEquation}`
        
    })
    
})