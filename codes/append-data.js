//Get login
let locationUrl = location.href
locationUrl = new URL(locationUrl)
let userID = 1
if(locationUrl.search){
    userID = locationUrl.searchParams.get("id").slice(3,locationUrl.searchParams.get("id").length-0)
}else{
    userID = 1
}
//* get data
let first_name = "Accessing"
let last_name = "Data..."
let about = "Loading about..."
let account_id = "BOT"
let username = "Loading username..."
let profile_photo = "..."
let verified = ""
let customStyle = ""
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
    if(APP_DATA.content[userID][10]){
        profile_photo = APP_DATA.content[userID][10]
    }else{
        profile_photo = "./System/no-profile-image.png"
    }
    verified = APP_DATA.content[userID][14]
    appendData(userID)
})
//APP_DATA = APP_DATA.content


function getdata(){

}
let verified_icon = ""
const appendData = (userID) => {
    if(verified === "verified"){
        verified_icon = "<img class='verified-icon' draggable='false' src='./System/verified.png'>"
    }
    //* colours
    first_name = first_name.replace(/{/gi,"<b style='color:").replace(/\(/gi,"'>").replace(/\)}/gi,"</b>")
    last_name = last_name.replace(/{/gi,"<b style='color:").replace(/\(/gi,"'>").replace(/\)}/gi,"</b>")
    about = about.replace(/{/gi,"<b style='color:").replace(/\(/gi,"'>").replace(/\)}/gi,"</b>")
    //* append
    document.getElementById('profile-1').src = profile_photo
    document.getElementById('icon').href = profile_photo
    document.getElementsByClassName("settings-dp")[0].src = profile_photo
    var location1 = window.location.href.replace("?","/settings/?").replace("/index.html","")
    var location2 = window.location.href.replace("?","/account/?").replace("/index.html","")
    document.getElementById("settings-button").href = location1
    document.getElementById("account-button").href = location2
    document.getElementById('title').innerHTML = first_name + " | Red-Dragon"
    if(last_name === "Signed in"){
        document.getElementById('title').innerHTML = "EveloCode | Red-Dragon"
        document.getElementById('icon').href = "./System/icon.jpg"
    }
    document.getElementsByClassName("settings-name")[0].innerHTML = `
    <h2>${first_name+" "+last_name + " " + verified_icon}</h2>
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
}
const addProfileImg1 = (element) => {
    //element.src = 
    document.getElementById('profile-1').src = "./System/no-profile-image.png"
    document.getElementsByClassName("settings-dp")[0].src = "./System/no-profile-image.png"
}
//getdata()
addProfileImg1()


