
let textBox = document.getElementById("textBox")
let iconBox = document.getElementById("iconBox")
let input = document.getElementById("txt")

function exit(){
     let exitConfirm = confirm("Are you sure to Exit")
    if(exitConfirm){
        window.close()
    }else{
        
    }
}
function showTextbox(){
    textBox.classList.toggle("text-box")
    iconBox.classList.toggle("d-n")
    input.focus()
}
function showIcon(){
    textBox.classList.toggle("text-box")
    iconBox.classList.toggle("d-n")
}


function setting(){
    let setting = document.getElementById("setting")
    setting.classList.toggle("setting")
}
function back(){
    let setting = document.getElementById("setting")
    setting.classList.toggle("setting")
}
// darkmode darkmode
let body = document.getElementById("body")
let Darkicon = document.getElementById("DM")
function darkMode(){
    if(Darkicon.classList=="feather-toggle-left"){
        Darkicon.classList="feather-toggle-right"
        Darkicon.style.color = "skyblue"
        Darkicon.style.fontWeight = "bolder"
        body.classList.toggle("night-mode")
    }else{
        Darkicon.classList="feather-toggle-left"
        Darkicon.style.color="black"
        body.classList.toggle("night-mode")
        Darkicon.style.fontWeight = ""
        
    }
}

let tableIcon = document.getElementById("Itb")
let audio = new Audio("../Music/lin_lin.mp3")

function play(){
    if(tableIcon.classList=="feather-play"){
       tableIcon.classList ="feather-pause";
        audio.play()
    }else{
        tableIcon.classList="feather-play"
        audio.pause()
    }
}

let icon = document.getElementById("i")
function change(){
    if(icon.classList=="feather-play-circle"){
        icon.classList="feather-pause-circle"
    }else{
        icon.classList="feather-play-circle"
    }
}