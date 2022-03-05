
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