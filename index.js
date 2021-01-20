function throttle (fn, delay) {
    let done = true
    return function () {
        if (!done) return 
        done = false
        setTimeout(() => {
            fn.call(this)
            done = true
        }, delay)
    }
}

function debounce (fn, delay) {
    let timer = null
    return function () {
        timer && clearTimeout(timer)
        timer = setTimeout(() => fn.call(this), delay)
    }
}

let count = 0

function point () {
    console.log(this)
    console.log('click:', ++count)
}

// btn1.addEventListener('click', throttle(point, 1000)) 
btn1.addEventListener('click', debounce(point, 1000))
// btn1.addEventListener('click', point)

