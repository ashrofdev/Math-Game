const max = 1
const min = 10


const first = (Math.floor(Math.random() * (max - min)) + min)
const second = (Math.floor(Math.random() * (max - min)) + min)
const third = first * second * 3
const forth = second * second * 2



const head = document.querySelector('#heading')
head.textContent = `${first} + a = ${second}`


document.querySelector('#guess').addEventListener('change', function (a) {
   

    newEl = document.createElement('a')
    newEl.textContent = 'Next'
    newEl.setAttribute('href', 'level5.html')
    document.querySelector('#cont').appendChild(newEl)


    let form = a.target.value
    const randomEquation = `${second - first}`

    document.querySelector('#button').addEventListener('click', function (e) {

        
        if (form === randomEquation) {
            let p = document.querySelector('#comment')
            p.textContent = 'Correct'
        } else {
            let p = document.querySelector('#comment')
            p.textContent = `The value of a is ${randomEquation}`
        }
        
    })
    
})