let smallBlock = document.querySelector(".block")
let divTop = 0
let divLeft = 0


function movinBottom () {
    divTop += 10
    if(divTop >= 430) {
        alert ("Дальше нельзя")
    }
    else{
        smallBlock.style.top = divTop + "px" 
    }

}

function showTop () {
    divTop -= 10
    if(divTop <= 0){
        alert ("Дальше нельзя")
    }
    else{
        smallBlock.style.top = divTop + "px" 
    }
}

function showRight () {
    divLeft += 10
    if(divLeft >= 700){
        alert ("Дальше нельзя")
    }
    else{
        smallBlock.style.left = divLeft + "px" 
    }

}

function showLeft () {
    divLeft -= 10
    if(divLeft <= 0){
        alert ("Дальше нельзя")
    }
    else{
        smallBlock.style.left = divLeft + "px" 
    }
    
}