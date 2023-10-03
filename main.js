const mainButton = document.querySelector('#mainButton')
const mainSpan = document.querySelector('#mainSpan')
//stage1//

//requirindo os elementos do container//
const h1 = document.querySelector('h1')
const infoContainer = document.querySelector('#infoContainer');
const infoContainer2 = document.querySelector('#infoContainer2')

//funcao de slider//
var img = 0;
var allImg = [];
var imgTimer = 5000;
//selecionando todas as imagens///////////////////////////
const asusImage = document.querySelectorAll('img')
const imageArray = Array.from(asusImage)
const firstImage = imageArray[0]
const imageTwo = imageArray[1]
const imageThree = imageArray [2]
const text = document.querySelector('p')
///////////////////////////////////////////////////////////
const mainImg = document.querySelector('#firstDisplay img')
const samsungImg = document.getElementById('samsungImg')
const mainImgContainer = document.querySelector('#mainImgContainer')

const samsungButton = document.getElementById('samsungButton')
const dellButton = document.querySelector('#dellButton')


//ouvindo o clique do botao para executar as funcoes//
samsungButton.addEventListener('click',(e)=>{
  mainImg.classList.add('hide')
  samsungImg.classList.remove('hide')
  e.stopPropagation()
})

dellButton.addEventListener('click',(e)=>{
  samsungImg.classList.add('hide')
  mainImg.classList.remove('hide')
  e.stopPropagation()
})





mainButton.addEventListener('click',(e)=>{
  mainButton.classList.add('hide')
  mainSpan.classList.add('hide')
  e.stopPropagation()


  //stage1//
  h1.classList.remove('hide')
  infoContainer.classList.remove('hide')
  infoContainer2.classList.remove('hide')
  firstImage.classList.remove('hide')
  text.classList.remove('hide')
})

console.log(mainImg)
console.log(samsungButton)
console.log(mainImgContainer)
console.log(samsungImg)
