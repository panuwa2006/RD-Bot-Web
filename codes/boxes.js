//document.getElementsByClassName("settings-box-border")[0].style.display = "none"
//document.getElementsByClassName("settings-box-border")[1].style.display = "none"

let menuOpened = false
const menuTabOpen = () => {
    //* scroll top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if(!menuOpened)
    {
        document.getElementsByClassName("settings-box-border")[0].style.display = "flex"
        document.getElementsByClassName("settings-box-border")[1].style.display = "flex"
        document.getElementsByClassName("settings-box-border")[0].style.marginLeft = "0px"
        document.getElementsByClassName("settings-box-border")[1].style.marginLeft = "0px"
        menuOpened = true
    }else{
        //document.getElementsByClassName("settings-box-border")[0].style.display = "none"
        //document.getElementsByClassName("settings-box-border")[1].style.display = "none"
        document.getElementsByClassName("settings-box-border")[0].style.marginLeft = "-500px"
        document.getElementsByClassName("settings-box-border")[1].style.marginLeft = "-500px"
        setTimeout(menuDisplayNone, 400)
        menuOpened = false
    }
}
const menuDisplayNone = () => {
    document.getElementsByClassName("settings-box-border")[0].style.display = "none"
    document.getElementsByClassName("settings-box-border")[1].style.display = "none"
}
//search bar on off
let searchBoxActive = true
const searchBarHide = () => {
    //* scroll top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if(searchBoxActive){
        document.getElementsByClassName('search-box')[0].style.marginTop = '75px'
        document.getElementsByClassName('xcodejet-header')[0].style.marginTop = '-75px'
        document.getElementsByClassName('header-back-search')[0].style.borderBottom = '2px solid white'
        searchBoxActive = false
    }else{
        document.getElementsByClassName('search-box')[0].style.marginTop = '0px'
        document.getElementsByClassName('xcodejet-header')[0].style.marginTop = '0px'
        document.getElementsByClassName('header-back-search')[0].style.borderBottom = '0px solid white'
        searchBoxActive = true
        document.getElementsByClassName("fa fa-search")[1].style.color = "rgb(102, 102, 102)"
        document.getElementsByClassName("resultbar-out")[0].style.display = "none"
        document.getElementsByClassName("searchbar-button-out")[0].style.borderBottomRightRadius = "25px"
        document.getElementsByClassName("searchbar-button-out")[0].style.borderBottomLeftRadius = "0px"
        document.getElementsByClassName("searchbar-out")[0].style.borderBottomLeftRadius = "25px"
        document.getElementsByClassName("searchbar-out")[0].style.borderBottomRightRadius = "25px"
    }
}
//* search icon colour on valid
const inputProccess = (input_eka) => {
    if(input_eka.value.trim()) {
        document.getElementsByClassName("fa fa-search")[1].style.color = "#22f"
        document.getElementsByClassName("resultbar-out")[0].style.display = "flex"
        document.getElementsByClassName("searchbar-button-out")[0].style.borderBottomRightRadius = "0px"
        document.getElementsByClassName("searchbar-button-out")[0].style.borderBottomLeftRadius = "25px"
        document.getElementsByClassName("searchbar-out")[0].style.borderBottomLeftRadius = "0px"
        document.getElementsByClassName("searchbar-out")[0].style.borderBottomRightRadius = "0px"
        searchBar(input_eka.value)
    }else{
        document.getElementsByClassName("fa fa-search")[1].style.color = "rgb(102, 102, 102)"
        document.getElementsByClassName("resultbar-out")[0].style.display = "none"
        document.getElementsByClassName("searchbar-button-out")[0].style.borderBottomRightRadius = "25px"
        document.getElementsByClassName("searchbar-button-out")[0].style.borderBottomLeftRadius = "0px"
        document.getElementsByClassName("searchbar-out")[0].style.borderBottomLeftRadius = "25px"
        document.getElementsByClassName("searchbar-out")[0].style.borderBottomRightRadius = "25px"
        searchBar(input_eka.value)
    }
}

//* get usernames
let UN_DATA = null
let usernames = []
let usernames_length = 0
let current_username = 1
fetch('https://script.google.com/macros/s/AKfycbzz0jyknqpNnu4P1pXqW_jxeQbkcSJ8TeBnNsnnlzkazAGPOozYWBbAuUqfOrZnvx8/exec')
.then(res => res.json())
.then(data => {
    UN_DATA = data
    usernames_length = UN_DATA.content.length
    username = UN_DATA.content[1][0]

    for(let io = 0; io < UN_DATA.content.length; io++){
        if(UN_DATA.content[io+1][0]){
            usernames[io] = UN_DATA.content[io+1][0]
            current_username = io
        }
        //console.log(usernames)
    }
})

//* search bar on / off
const searchBar = (the_value) => {
    document.getElementsByClassName("resultbar-out")[0].innerHTML = ""
    let values = usernames.length
    let value_number = 0

    for(let i=0; i<values; i++){
        if(!usernames.toString().match(the_value.toLowerCase())){
            document.getElementsByClassName("resultbar-out")[0].innerHTML = `
            <div class="results">
                <a>Not maches</a>
            </div>`
        }
    }
    if(the_value.trim()){
        while(values > value_number){
            if(usernames[value_number].match(the_value.toLowerCase())){
                document.getElementsByClassName("resultbar-out")[0].innerHTML += `<div class="results" onclick="identifyUserAccount('${usernames[value_number]}')">
                <a>${usernames[value_number].replace(the_value.toLowerCase(), "<b style='color:blue;'>"+the_value.toLowerCase()+"</b>")}<img src="./System/redirect-link.png"></a>
            </div>`
            }else{}
            value_number++
        }
    }else{
    }
}