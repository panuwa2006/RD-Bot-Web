let clocks = document.getElementsByClassName("time-server")[0]
const number2 = (digit) => {
    if(digit < 10){
        return "0"+digit
    }else{
        return digit
    }
}
setInterval(() => {
    var time = new Date()
    clocks.innerHTML = number2(time.getHours())+":"+number2(time.getMinutes())+":"+number2(time.getSeconds())
},1000)