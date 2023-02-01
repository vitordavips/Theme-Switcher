let escuro = document.querySelector('#btn_escuro')
let claro = document.querySelector('#btn_claro')

let body = document.querySelector('#body')

escuro.addEventListener('click', ()=>{
    body.style.backgroundColor = "black"
})

claro.addEventListener('click', ()=>{
    body.style.backgroundColor = "white"
})

/*function muda_cor(cor){
    body.style.backgroundColor = cor
}*/



