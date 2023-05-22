function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

function tooltip1(e){
  var x = e.clientX;
  var y = e.clientY;
  document.getElementById("tooltip").style.left = x + "px";
  document.getElementById("tooltip").style.top = y + "px";
}

// * time
/*setInterval(() => {
  let date = new Date()
  let clock = document.getElementById("clock")
  var s_space = ""
  var m_space
  var t_format = "AM"
  var GETHOURS = date.getHours()
  if(date.getMinutes() <= 9){m_space = "0"}else{m_space = ""}
  if(date.getSeconds() <= 9){s_space = "0"}else{s_space = ""}
  if(date.getHours() >= 13){GETHOURS = GETHOURS - 12; t_format = "PM"}else{t_format = "AM"}
  if(GETHOURS <= 9){GETHOURS = `0${GETHOURS}`}
  clock.innerHTML = `${GETHOURS} : ${m_space + date.getMinutes()} : ${s_space + date.getSeconds()} &nbsp;${t_format}`
}, 1000)*/

