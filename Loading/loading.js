window.addEventListener("load", function () {
    var loadingContainer = document.querySelector(".loading-container")
    //loadingContainer.style.backgroundColor = "#000"
    //setTimeout(hide_loading, 5000)
    //loadingContainer.style.display = "none"
})
  let loadingText = document.getElementsByClassName("loading-text")[0]
  let loadDots = 0
  setInterval(() => {
    if(loadDots == 0){
      loadingText.innerHTML = "Loading."
      loadDots = 1
      return
    }
    if(loadDots == 1){
      loadingText.innerHTML = "Loading.."
      loadDots = 2
      return
    }
    if(loadDots == 2){
      loadingText.innerHTML = "Loading..."
      loadDots = 0
      return
    }
  },700)