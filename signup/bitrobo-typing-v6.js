//* home page
setTimeout(typeWriter, 1000)
var i = 0;
var bitrobo_message1 = 'Hey👋, I am Red-Dragon.🎲;Creating a Red-Dragon accont.;Thanks for using EveloCode products.';
var speed = 50;
function typeWriter(statement) {
  statement = "create-account-name"
  if(statement === "create-account-name"){
    if (i < bitrobo_message1.length) {
      if(bitrobo_message1.charAt(i).match(/;/gi)){
        document.getElementsByClassName('bitrobo-message')[0].innerHTML += "<br>"
      }else{
        document.getElementsByClassName('bitrobo-message')[0].innerHTML += bitrobo_message1.charAt(i)
      }
      i++
      setTimeout(typeWriter, speed)
    }
  }else{i = 0}
}

//* messages bitrobo
setTimeout(typeWriter, 1000)
setTimeout(active_field, 4000)

var letter = 0;
var speed = 60;
let BIT_MESSAGE = ""
let BIT_ELEMENT = 1
let BIT_STATE = true
function bitrobo_message(message, chatelement) {
  if(BIT_STATE){BIT_MESSAGE = message; BIT_ELEMENT = chatelement; BIT_STATE = false}
  if (letter < BIT_MESSAGE.length) {
      if(BIT_MESSAGE.charAt(letter).match(/;/gi)){
        document.getElementsByClassName('bitrobo-message')[BIT_ELEMENT].innerHTML += "<br>"
      }else{
        document.getElementsByClassName('bitrobo-message')[BIT_ELEMENT].innerHTML += BIT_MESSAGE.charAt(letter)
      }
      letter++
      setTimeout(bitrobo_message, speed)
  }else{letter = 0; BIT_STATE = true; return}
}

document.getElementsByClassName("name-input-field-full")[0].style.display = "none"
document.getElementsByClassName("box-body-footer-next-btn")[0].style.display = "none"
function active_field() {
  document.getElementsByClassName("name-input-field-full")[0].style.display = "block"
  document.getElementsByClassName("box-body-footer-next-btn")[0].style.display = "flex"
  window.scrollBy(0, 1000)
}

//console.log(String.fromCharCode(55358, 56598))⚡🎲🤖


//* header buttons
let buttons = document.getElementsByClassName("button-h")
let numbers = 0
setInterval(() => {
  if(numbers == 0){
    buttons[0].classList.add("button-h-hover")
    buttons[1].classList.remove("button-h-hover")
    buttons[2].classList.remove("button-h-hover")
    numbers++
    return
  }
  if(numbers == 1){
    buttons[1].classList.add("button-h-hover")
    buttons[0].classList.remove("button-h-hover")
    buttons[2].classList.remove("button-h-hover")
    numbers++
    return
  }
  if(numbers == 2){
    buttons[2].classList.add("button-h-hover")
    buttons[1].classList.remove("button-h-hover")
    buttons[0].classList.remove("button-h-hover")
    numbers = 0
    return
  }
  
},2500)