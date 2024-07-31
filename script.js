var botao1 = document.getElementById('div1')
var botao2 = document.getElementById('div2')
var botao3 = document.getElementById('div3')
var botao4 = document.getElementById('div4')
var img1 = document.getElementById('img1')
var img2 = document.getElementById('img2')
var img3 = document.getElementById('img3')
var img4 = document.getElementById('img4')
//DUVIDA1
botao1.addEventListener('click', clicar)
botao1.addEventListener('mouseout', sair)

var des = document.createElement('p')
botao1.appendChild(des)

function clicar() {
    img1.src = 'assets/images/icon-minus.svg'
    des.innerHTML = "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
}

function sair() {
    img1.src = 'assets/images/icon-plus.svg'
    des.innerHTML = ''
}

//DUVIDA2
botao2.addEventListener('click', clicar2)
botao2.addEventListener('mouseout', sair2)

var des2 = document.createElement('p')
botao2.appendChild(des2)

function clicar2() {
    img2.src = 'assets/images/icon-minus.svg'
    des2.innerHTML = "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
}

function sair2() {
    img2.src = 'assets/images/icon-plus.svg'
    des2.innerHTML = ''
}

//DUVIDA3
botao3.addEventListener('click', clicar3)
botao3.addEventListener('mouseout', sair3)

var des3 = document.createElement('p')
botao3.appendChild(des3)

function clicar3() {
    img3.src = 'assets/images/icon-minus.svg'
    des3.innerHTML = "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
}

function sair3() {
    img3.src = 'assets/images/icon-plus.svg'
    des3.innerHTML = ''
}

//DUVIDA4
botao4.addEventListener('click', clicar4)
botao4.addEventListener('mouseout', sair4)

var des4 = document.createElement('p')
botao4.appendChild(des4)

function clicar4() {
    img4.src = 'assets/images/icon-minus.svg'
    des4.innerHTML = "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
}

function sair4() {
    img4.src = 'assets/images/icon-plus.svg'
    des4.innerHTML = ''
}
