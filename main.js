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
///////////////////////////////////////////////////////////
const text = document.querySelector('p')


//ouvindo o clique do botao para executar as funcoes//
mainButton.addEventListener('click',()=>{
  mainButton.classList.add('hide')
  mainSpan.classList.add('hide')


  //stage1//



  h1.classList.remove('hide')
  infoContainer.classList.remove('hide')
  infoContainer2.classList.remove('hide')
  firstImage.classList.remove('hide')
  text.classList.remove('hide')
})
