const max = 1
const min = 10


const first = (Math.floor(Math.random() * (max - min)) + min)
const second = (Math.floor(Math.random() * (max - min)) + min)
const third = first * second
const forth = first + second



const head = document.querySelector('#heading')
head.textContent = `(${forth} - ${first}) x ${second}`


document.querySelector('#guess').addEventListener('change', function (a) {
   

    newEl = document.createElement('a')
    newEl.textContent = 'Next'
    newEl.setAttribute('href', 'level2.html')
    document.querySelector('#cont').appendChild(newEl)

    let form = a.target.value
    const randomEquation = `${(forth - first) * second}`

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