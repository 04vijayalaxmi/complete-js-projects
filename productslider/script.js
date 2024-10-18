const products=document.querySelectorAll(".slider .product")
let counter=0

function left(){
    counter--
    scroll()
}

function right(){
    counter++
    scroll()
}

function scroll(){
    products.forEach(function(item){
        item.style.transform=`translateX(-${counter * 1250}px)`
    })
}