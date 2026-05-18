let numclicks=0
let clickpower=1

// let cakelink = 
let cereallink = "https://static.vecteezy.com/system/resources/previews/048/111/985/non_2x/bowl-of-cereal-free-png.png"
let ogfood= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0F6uHv-XTcCzNL3uLK_izPjUkDbeQbmHTZw&s"
let foodthree= "https://img.freepik.com/free-photo/victoria-sponge-cake-isolated-white-background-traditional-london-dessert-ai-generative_123827-24996.jpg?semt=ais_hybrid&w=740&q=80"
let foodfour= "https://www.shutterstock.com/image-photo/pieces-fresh-brownie-on-white-260nw-1414338860.jpg"
function showclicks(){
    document.getElementById("numclick").textContent="Number of clicks: " + numclicks
}

function incresclicks(){
    numclicks=(clickpower + numclicks)
    showclicks()

    if (numclicks>=150){
         document.getElementById("thegoodfood").src= foodfour
         document.getElementById("thegoodfood").style.height = "220px"
         document.getElementById("thegoodfood").style.width = "200px"
         clickpower=10+clickpower
    } else if (numclicks>=60){
         document.getElementById("thegoodfood").src= foodthree
         document.getElementById("thegoodfood").style.height = "220px"
         document.getElementById("thegoodfood").style.width = "200px"
        clickpower=clickpower+8
    } else if (numclicks>=30){
         document.getElementById("thegoodfood").src= cereallink
         document.getElementById("thegoodfood").style.height = "220px"
         document.getElementById("thegoodfood").style.width = "200px"
        clickpower= clickpower+1
    } else{
          document.getElementById("thegoodfood").src= ogfood
         document.getElementById("thegoodfood").style.height = "220px"
         document.getElementById("thegoodfood").style.width = "200px"
    }
}


showclicks()