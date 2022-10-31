var btn = document.querySelector(".btn")
var S = document.querySelector(".S")
var CS = document.querySelector(".container-S")
var L = document.querySelector(".lenguaje1")

function yes() {
    btn.innerText = "YES"
    S.classList.add('S-1')
    S.classList.remove('S')
    CS.classList.add('container-S-1')
    CS.classList.remove('container-S')
}

function start() {
    btn.innerText = "START"
    S.classList.add('S')
    S.classList.remove('S-1')
    CS.classList.add('container-S')
    CS.classList.remove('container-S-1')
}

function h1() {
    window.location.replace("index.html")
}