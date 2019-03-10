const max = 1
const min = 10


const first = (Math.floor(Math.random() * (max - min)) + min) * 3
const second = (Math.floor(Math.random() * (max - min)) + min) * 3
const third = first * second * 3
const forth = second * second * 2



const head = document.querySelector('#heading')
head.textContent = `${first} x (${third} / ${forth}) x ${second}`


document.querySelector('#guess').addEventListener('change', function (a) {
   

    newEl = document.createElement('a')
    newEl.textContent = 'Next'
    newEl.setAttribute('href', 'level4.html')
    document.querySelector('#cont').appendChild(newEl)


    let form = a.target.value
    const randomEquation = `${first * (third / forth) * second}`

    document.querySelector('#button').addEventListener('click', function (e) {

        
        if (form === randomEquation) {
            let p = document.querySelector('p')
            p.textContent = 'You got it right'
        } else {
            let p = document.querySelector('p')
            p.textContent = `The correct answer is ${randomEquation}`
        }
        
    })
    
})