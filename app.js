let numclicks=0
let clickpower=1

// let cakelink = 
let cereallink = "https://static.vecteezy.com/system/resources/previews/048/111/985/non_2x/bowl-of-cereal-free-png.png"
let ogfood= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0F6uHv-XTcCzNL3uLK_izPjUkDbeQbmHTZw&s"
function showclicks(){
    document.getElementById("numclick").textContent="Number of clicks: " + numclicks
}

function incresclicks(){
    numclicks=(clickpower + numclicks)
    showclicks()


    if (numclicks>=10000){

         document.getElementById("thegoodfood").src= cereallink
         document.getElementById("thegoodfood").style.height = "220px"
         document.getElementById("thegoodfood").style.width = "200px"
    }
    else{
          document.getElementById("thegoodfood").src= ogfood
         document.getElementById("thegoodfood").style.height = "220px"
         document.getElementById("thegoodfood").style.width = "200px"
    }
    }
}

showclicks()