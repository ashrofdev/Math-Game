const max = 1
const min = 10


const first = (Math.floor(Math.random() * (max - min)) + min)
const second = (Math.floor(Math.random() * (max - min)) + min)
const third = (Math.floor(Math.random() * (max - min) + min))
const forth = second * second * 2



const head = document.querySelector('#heading')
head.textContent = `${third}a - ${first} = ${second}`


document.querySelector('#guess').addEventListener('change', function (a) {
   

    newEl = document.createElement('a')
    newEl.textContent = 'Next'
    newEl.setAttribute('href', 'level6.html')
    document.querySelector('#cont').appendChild(newEl)


    let form = a.target.value
    const randomEquation = `${(second + first) / third}`

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