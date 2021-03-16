



 heartt=document.getElementsByClassName('like-btn');
console.log(heartt);
for (let i=0; i<heartt.length;i++){
    let likke=heartt[i];
    likke.addEventListener('click', function() {
        if( likke.style.color=='gray')
    { likke.style.color='#8B0000'}
    else
    {likke.style.color='gray'}
    })
}




 var remove_item=document.getElementsByClassName('danger')
 console.log(remove_item)
 for (var i = 0; i < remove_item.length; i++) {
     var button = remove_item[i]
     button.addEventListener('click',function(event){
         buttonClicked=event.target
         buttonClicked.parentElement.parentElement.remove() 
         updateCartTotal()
     })
    
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('shopping_card')[0]
    var cartRows = cartItemContainer.getElementsByClassName('item')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        //console.log(cartRow[i])
        var priceElement = cartRow.querySelector('.total-price')
        console.log(priceElement)
        var quantityElement = cartRow.querySelector('#quantite')
        console.log(quantityElement)

        var price = parseFloat(priceElement.innerText.replace('$', ''))
        console.log(price)
        var quantityArray=document.getElementsByClassName('quantityOfItem')

        console.log(quantityArray)//tableau de p [3] 

            let changeQuantity=quantityArray[i].innerText
            total = total + (price * changeQuantity)
            console.log(total)
        
        /*total = total + (price * quantity)
        console.log(total)*/
    }
   document.querySelector('.cart-total-price').innerText=total

}

var plus=document.getElementsByClassName('plus-btn')
console.log(plus)//tableau[1/2/3]
for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click",function(){
        plus[i].nextElementSibling.innerText++
        updateCartTotal()
    })
   
}
//     var plus=document.getElementsByClassName('plus-btn')
//     console.log(plus)//tableau[1/2/3]
//     for (var i = 0; i < plus.length; i++) {
//         var plusChanged = plus[i]
//     plusChanged.addEventListener('click',function(event){
//     var cartItemContainer = document.getElementsByClassName('shopping_card')[0]
//     var cartRows = cartItemContainer.getElementsByClassName('item')
//     for (var i = 0 ; i < cartRows.length; i++) 
//     { 
//     var cartRow = cartRows[i]
//     Input=cartRow.querySelector('#quantite')//input=cartrow[0].quantite
//     console.log(Input)
    
//     //console.log(change)
//     Input.value=parseInt(Input.value)+1
//     //console.log(Input.value)
//     updateCartTotal() 
// }
// })
//     }


    var minus=document.getElementsByClassName('minus-btn')
    var plus=document.getElementsByClassName('plus-btn')
    console.log(minus)//tableau[1/2/3]
    for (let i = 0; i < minus.length; i++) {
        minus[i].addEventListener("click",function(){
            plus[i].nextElementSibling.innerText--
            if (isNaN(plus[i].nextElementSibling.innerText) || plus[i].nextElementSibling.innerText<= 0) {
                plus[i].nextElementSibling.innerText= 0
            }
            updateCartTotal()
        })
       
    }


   
    /*for (var i = 0; i < minus.length; i++) {
        var minusChanged = minus[i]
    minusChanged.addEventListener('click',function(event){
    var cartItemContainer = document.getElementsByClassName('shopping_card')[0]
    var cartRows = cartItemContainer.getElementsByClassName('item')
    for (var i = 0 ; i < cartRows.length; i++) 
    { 
    var cartRow = cartRows[i]
    Input=cartRow.querySelector('#quantite')//input=cartrow[0].quantite
    console.log(Input)
    var change=parseInt(Input.value)-1//cartrow[0].quantite.valeur('1')
    //console.log(change)
    Input.value=parseInt(Input.value)-1
    //console.log(Input.value)
    updateCartTotal() 
}
})
    }*/



















 