window.sr = ScrollReveal({reset:false})
sr.reveal('.mainText'),{duration:12000}

const mainButton = document.querySelector('#mainButton')
const mainSpan = document.querySelector('#mainSpan')
//stage1//

//requirindo os elementos do container//
const h1 = document.querySelector('#secondSpan')
const infoContainer = document.querySelector('#infoContainer');
const infoContainer2 = document.querySelector('#infoContainer2')

//funcao de slider//
var img = 0;
var allImg = [];
var imgTimer = 5000;
//selecionando todas as imagens///////////////////////////


const mainImg = document.querySelector('#firstDisplay img')
const samsungImg = document.getElementById('samsungImg')
const mainImgContainer = document.querySelector('#mainImgContainer')




//botoes de mudanca de layout//
const samsungButton = document.getElementById('samsungButton')
const dellButton = document.querySelector('#dellButton')


//ouvindo o clique do botao para executar as funcoes//
samsungButton.addEventListener('click',(e)=>{
  mainImg.classList.add('hide')
  samsungImg.classList.remove('hide')
  document.body.style.backgroundColor = '#101010'
  e.stopPropagation()
})

dellButton.addEventListener('click',(e)=>{
  samsungImg.classList.add('hide')
  mainImg.classList.remove('hide')
  document.body.style.backgroundColor = 'white'
  e.stopPropagation()
})

console.log(mainImg)
console.log(samsungButton)
console.log(mainImgContainer)
console.log(samsungImg)
