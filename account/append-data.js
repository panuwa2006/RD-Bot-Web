//Get login
let locationUrl = location.href
locationUrl = new URL(locationUrl)
let userID = 1
if(locationUrl.search){
    userID = locationUrl.searchParams.get("id").slice(3,locationUrl.searchParams.get("id").length-0)
}else{
    userID = 1
}
let userID_num = Number(userID)
//* get data
let first_name = "Accessing"
let last_name = "Data..."
let about = "Loading about..."
let account_id = "BOT"
let username = "Loading username..."
let profile_photo = "..."
let verified = ""
let customStyle = ""
let birthday = null
let APP_DATA = null
fetch('https://script.google.com/macros/s/AKfycbz4rRv5nFL8JrNU7vxwLLRNZjMXteORQyo-oqDnBS4_5qaEKCasZ2pZOCTVqLGIJ7pFdQ/exec')
.then(res => res.json())
.then(data => {
    APP_DATA = data
    first_name = APP_DATA.content[userID][2]
    last_name = APP_DATA.content[userID][3]
    about = APP_DATA.content[userID][9]
    account_id = APP_DATA.content[userID][8]
    username = APP_DATA.content[userID][0]
    birthday = APP_DATA.content[userID][6]
    if(APP_DATA.content[userID][10]){
        profile_photo = APP_DATA.content[userID][10]
    }else{
        profile_photo = "./System/no-profile-image.png"
    }
    verified = APP_DATA.content[userID][14]
    appendData(userID)
})
//APP_DATA = APP_DATA.content

function getdata(){}

//* EvecoCode multi colours function
const convertColours = (text) => {
    //{#colour(word)}
    var text = text.replace(/{/gi,"<b style='color:").replace(/\(/gi,"'>").replace(/\)}/gi,"</b>")
    return text
}
const invertColours = (text) => {
    //<b style='color:#code'>word</b>
    text = text.replace(/<b style='color:/gi,"{").replace(/'>/gi,"\(").replace(/<\/b>/gi,"\)}")
    return text
}
const deleteColours = (text) => {
    //word
    text = text.replace(/<b style='color:/gi,"{").replace(/'>/gi,"\(").replace(/<\/b>/gi,"\)}")
    text = text.replace(/\)}|\) }/gi,"")
    while(text.match(/{/gi)){
        var textr = text.slice(text.indexOf("{"),text.indexOf("(")+1)
        text = text.replace(textr,"")
    }
    return text
}

let verified_icon = ""
const appendData = (userID) => {
    if(verified === "verified"){
        verified_icon = "<img class='verified-icon' draggable='false' src='./System/verified.png'>"
    }
    //* colours
    first_name = convertColours(first_name)
    last_name = convertColours(last_name)
    about = convertColours(about)
    //* append
    document.getElementById('profile-1').src = profile_photo
    document.getElementById('icon').href = profile_photo
    document.getElementsByClassName("settings-dp")[0].src = profile_photo
    document.getElementById('title').innerHTML = deleteColours(first_name) + " | Safe Story"
    if(last_name === "Signed in"){
        document.getElementById('title').innerHTML = "EveloCode | Safe Story"
        document.getElementById('icon').href = "./System/icon.jpg"
    }
    document.getElementsByClassName("settings-name")[0].innerHTML = `
    <h2>${first_name+"&nbsp;"+last_name + " " + verified_icon}</h2>
    <h3>${about}</h3>
    <h4>@${username}</h4>`
    var LOVERS = document.getElementsByClassName("userdetails-list-item-a")[0]
    var UPLOADS = document.getElementsByClassName("userdetails-list-item-a")[1]
    LOVERS.innerHTML = APP_DATA.content[userID][11] + `Account ID<br>  <b onclick="navigator.clipboard.writeText('${account_id}')" style="color:yellow;">${account_id}</b><i onclick="navigator.clipboard.writeText('${account_id}'), this.style.color = '#0F0'" style="margin-left:10px; color:#55F" class="fa fa-copy"></i>`
    UPLOADS.innerHTML = APP_DATA.content[userID][13] + "3.8k<br> Users"
    //*loading page close
    var loadingContainer = document.querySelector(".loading-container")
    loadingContainer.style.display = "none"
    //* menu for not signed
    if(userID == 1){
        document.getElementsByClassName("settings-list")[0].innerHTML = `
        <div class="setting-list-item">
            <img src="./System/caution.png" alt="">
            <a>Support</a>
        </div>
        <a></a><div class="setting-list-item">
            <img src="./System/login.png">
            <a href="http://safe-album-xcodejet.great-site.net//login/index.html">Log In</a>
        </div>`
    }
    var home_button_url = window.location.href.replace("/account","")
    document.getElementById("home-button").href = home_button_url
    addDataToInputs()
}
const addProfileImg1 = (element) => {
    //element.src = 
    document.getElementById('profile-1').src = "./System/no-profile-image.png"
    document.getElementsByClassName("settings-dp")[0].src = "./System/no-profile-image.png"
}
//getdata()
addProfileImg1()

//* add current account data to update inputs
const addDataToInputs = () => {
    console.log("add data to inputs 2 > EveloCode")
    //* invert colours
    first_name = invertColours(first_name)
    last_name = invertColours(last_name)
    about = invertColours(about)
    document.getElementById("profile_photo_input").value = profile_photo
    document.getElementById("first_name_input").value = first_name
    document.getElementById("last_name_input").value = last_name
    document.getElementById("bio_input").value = about
    birthday = `${birthday}`
    birthday = birthday.substring(0,10)
    document.getElementById("birthday_input").value = birthday
}
//Save account data
//* add in database
const saveCustomStyles = (button) => {
    HIDDEN_FORM = document.getElementById('hidden-settings')

    var profile_photo_input = document.getElementById('profile_photo_input')
    var first_name_input = document.getElementById('first_name_input')
    var last_name_input = document.getElementById('last_name_input')
    var bio_input = document.getElementById('bio_input')
    var birthday_input = document.getElementById('birthday_input')
    var current_password_input = document.getElementById('current_password_input')
    var new_password_input = document.getElementById('new_password_input')
    //////
    console.log('account updated.')
    ////////  යූ.වී.ඩී. කුමුතු ප්‍රභාෂ
    if(profile_photo_input.value === profile_photo){}else{
        document.getElementById('data-cell-no').value = "K" + `${userID_num+1}`
        document.getElementById('data-cell-data').value = profile_photo_input.value.trim()
        var ACCOUNT_DATA = new FormData(HIDDEN_FORM)
        fetch('https://script.google.com/macros/s/AKfycbz4rRv5nFL8JrNU7vxwLLRNZjMXteORQyo-oqDnBS4_5qaEKCasZ2pZOCTVqLGIJ7pFdQ/exec', {
            method: "POST",
            body: ACCOUNT_DATA
        })
        .then(res => res.text())
        .then(ACCOUNT_DATA => console.log(ACCOUNT_DATA))
    }
    if(first_name_input.value === first_name){}else{
        document.getElementById('data-cell-no').value = "C" + `${userID_num+1}`
        document.getElementById('data-cell-data').value = first_name_input.value.trim()
        var ACCOUNT_DATA = new FormData(HIDDEN_FORM)
        fetch('https://script.google.com/macros/s/AKfycbz4rRv5nFL8JrNU7vxwLLRNZjMXteORQyo-oqDnBS4_5qaEKCasZ2pZOCTVqLGIJ7pFdQ/exec', {
            method: "POST",
            body: ACCOUNT_DATA
        })
        .then(res => res.text())
        .then(ACCOUNT_DATA => console.log(ACCOUNT_DATA))
    }
    if(last_name_input.value === last_name){}else{
        document.getElementById('data-cell-no').value = "D" + `${userID_num+1}`
        document.getElementById('data-cell-data').value = last_name_input.value.trim()
        var ACCOUNT_DATA = new FormData(HIDDEN_FORM)
        fetch('https://script.google.com/macros/s/AKfycbz4rRv5nFL8JrNU7vxwLLRNZjMXteORQyo-oqDnBS4_5qaEKCasZ2pZOCTVqLGIJ7pFdQ/exec', {
            method: "POST",
            body: ACCOUNT_DATA
        })
        .then(res => res.text())
        .then(ACCOUNT_DATA => console.log(ACCOUNT_DATA))
    }
    if(bio_input.value === about){}else{
        document.getElementById('data-cell-no').value = "J" + `${userID_num+1}`
        document.getElementById('data-cell-data').value = bio_input.value
        var ACCOUNT_DATA = new FormData(HIDDEN_FORM)
        fetch('https://script.google.com/macros/s/AKfycbz4rRv5nFL8JrNU7vxwLLRNZjMXteORQyo-oqDnBS4_5qaEKCasZ2pZOCTVqLGIJ7pFdQ/exec', {
            method: "POST",
            body: ACCOUNT_DATA
        })
        .then(res => res.text())
        .then(ACCOUNT_DATA => console.log(ACCOUNT_DATA))
    }
    if(birthday_input.value){
        if(birthday_input.value === birthday){}else{
            document.getElementById('data-cell-no').value = "D" + `${userID_num+1}`
            document.getElementById('data-cell-data').value = birthday_input.value
            var ACCOUNT_DATA = new FormData(HIDDEN_FORM)
            fetch('https://script.google.com/macros/s/AKfycbz4rRv5nFL8JrNU7vxwLLRNZjMXteORQyo-oqDnBS4_5qaEKCasZ2pZOCTVqLGIJ7pFdQ/exec', {
                method: "POST",
                body: ACCOUNT_DATA
            })
            .then(res => res.text())
            .then(ACCOUNT_DATA => console.log(ACCOUNT_DATA))
        }
    }
    if(current_password_input.value.trim()){
        if(new_password_input.value.trim()){
            if(new_password_input.value.length < 6){
                var new_password_lable = document.getElementById("new-password-lable")
                new_password_lable.innerHTML += " <b style='color:red'>[weak!]</b>"
            }else{
                if(!new_password_input.value.match(/1|2|3|4|5|6|7|8|9/gi)){
                    var new_password_lable = document.getElementById("new-password-lable")
                    new_password_lable.innerHTML += " <b style='color:red'>[weak!]</b>"
                }else{
                    if(!new_password_input.value.match(/!|@|#|\$|%|&|\*|\(|\)|_|~|\.|,|<|>|:|;|-|\+|=/gi)){
                        var new_password_lable = document.getElementById("new-password-lable")
                        new_password_lable.innerHTML += " <b style='color:red'>[weak!]</b>"
                    }else{
                        if(current_password_input.value === APP_DATA.content[userID_num][1]){
                            document.getElementById('data-cell-no').value = "B" + `${userID_num+1}`
                            document.getElementById('data-cell-data').value = new_password_input.value
                            var ACCOUNT_DATA = new FormData(HIDDEN_FORM)
                            fetch('https://script.google.com/macros/s/AKfycbz4rRv5nFL8JrNU7vxwLLRNZjMXteORQyo-oqDnBS4_5qaEKCasZ2pZOCTVqLGIJ7pFdQ/exec', {
                                method: "POST",
                                body: ACCOUNT_DATA
                            })
                            .then(res => res.text())
                            .then(ACCOUNT_DATA => console.log(ACCOUNT_DATA))
                        }else{
                            var current_password_lable = document.getElementById("current-password-lable")
                            current_password_lable.innerHTML += " <b style='color:red'>[wrong!]</b>"
                        }
                    }
                }
            }}
    }
    

    //* button diable
    button.style.backgroundColor = "#1F1"
    button.innerHTML = "SAVED"
    location.reload()
    //document.getElementsByClassName("box-body-footer-next-btn-create")[0].style.display = "flex"

}