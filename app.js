let numclicks=0
let clickpower=1

function showclicks(){
    document.getElementById("numclick").textContent="Number of clicks: " + numclicks
}

function incresclicks(){
    numclicks=(clickpower + numclicks)
    showclicks()
}

showclicks()