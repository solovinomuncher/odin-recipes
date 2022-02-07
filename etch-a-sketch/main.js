
let main = document.querySelector('main')

function add16x16Grid(cells,max) {
    if (cells === max) {
        return
    }

    let newDiv = document.createElement('div')
    newDiv.classList.add('box')

    main.append(newDiv)
    add16x16Grid(cells + 1,max)
}

add16x16Grid(0,256)

function eventHandler1() {
    let allDiv = document.querySelectorAll('div')

    for (let i = 0; i < allDiv.length; i++) {
        allDiv[i].addEventListener('mouseover', function() {
            allDiv[i].style.backgroundColor = "red"
        })
    }
}

window.addEventListener('load', eventHandler1)

let resetBtn = document.querySelector('.resetBtn')

resetBtn.addEventListener('click', eventHandler2)

function eventHandler2() {
    location.reload()
}

let gridBtn = document.querySelector('.gridBtn')

gridBtn.addEventListener('click', eventHandler3)

// let main = document.querySelector('main')

// ERROR: doesn't create new grid after prompt. 
// issue is with function that creates grid.
function eventHandler3() {
    let newSize = prompt('new grid size:')

    if (newSize > 100) {
        return
    }

    while (main.firstChild) {
        main.removeChild(main.firstChild)
    }

    console.log('hi')

    // add16x16Grid(0,newSize)
}

// new grid?