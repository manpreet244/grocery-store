let addToCart = document.getElementsByClassName('addToCart');
let cartContainer = document.getElementsByClassName('cartContainer')[0];
let checkOut = document.getElementById('checkout');
checkOut.addEventListener('click', check);
 var totalPrice = 0;
function check() {
    let customerName = prompt('Enter your Name.');
    if (customerName) {
        cartPrices = cartContainer.getElementsByClassName('cartPrice');
        cartQuantities = cartContainer.getElementsByClassName('cartQuantity');
        cartTitles = cartContainer.getElementsByClassName('cartTitle');
        cartTotals = cartContainer.getElementsByClassName('cartTotal');
        cartTotalGSTs = cartContainer.getElementsByClassName('cartTotalGst');
        
        console.log(cartTotals[0].innerHTML)
        console.log(cartPrices[0].innerHTML)
        console.log(cartQuantities[0].innerHTML)
        cName = document.getElementById('name');
        cName.innerHTML = customerName;
      
        var totalQty = 0; var totalGST = 0; var totalPrice = 0;
        for (var i = 0; i < cartQuantities.length; i++) {
            console.log(cartQuantities[i].innerText)
            totalOfQty = cartQuantities[i].innerText;
            totalQty = totalQty + parseInt((totalOfQty));
        }
        document.getElementsByClassName('cartTotalQty')[0].innerText = new Number(totalQty).toLocaleString('en');
       
        for (var i = 0; i < cartTotals.length; i++) {
            console.log(cartTotals[i].innerText)
            totalOfCart = cartTotals[i].innerText;
            totalPrice = totalPrice + parseInt((totalOfCart));
        }
        document.getElementsByClassName('cartTotalPrice')[0].innerText = new Number(totalPrice).toLocaleString('en');
        let arrayOfTitles = [];
        for (var i = 0; i < cartTitles.length; i++) {
            console.log(cartTitles[i])
       
            arrayOfTitles.push(cartTitles[i].innerText);
            console.log(...arrayOfTitles)
            hash = [...arrayOfTitles]
        
        }
        document.getElementById('title-value').innerText = hash + ',';
       
        for (var i = 0; i < cartTotalGSTs.length; i++) {
            console.log(cartTotalGSTs[i].innerText)
            totalOfGST = cartTotalGSTs[i].innerText;
            totalGST = totalGST + parseInt((totalOfGST));
        }
        document.getElementsByClassName('cartTotalGST')[0].innerText = new Number(totalGST).toLocaleString('en');


    } else
        alert('pleaseEnter your name');
}
for (let i = 0; i <= addToCart.length; i++){
    addToCart[i].addEventListener('click',add)
}

function add(e) {
    let quantity;
    currentAddToCartBtn = e.target;
    console.log(currentAddToCartBtn)
    let parent = currentAddToCartBtn.parentElement;
    console.log(parent);
    productTitle = parent.getElementsByClassName('product-title')[0].innerText;
    price = parent.getElementsByClassName('price')[0].innerText;
    console.log(price)
    console.log(productTitle);
    // qty = parent.getElementsByClassName('quantity')[0].innerText;
    // console.log(qty)
    let input = prompt("Please Enter the quantity of products", "0");
 if (isNaN(input)){
     return false;
     } else {
        quantity = input;
    }
    parent.getElementsByClassName("quantity")[0].innerText = quantity;
    
    productBought(productTitle, price, quantity);

}
 

function productBought(productTitle, price, quantity) {
    console.log('price', price)
    console.log('quantity', quantity)
    div = document.createElement('div');
    div.classList.add('row');
  
    divContent = ` <div class="product"style=" width:100px border:1px solid gray;text-align:center;">
      <div style="display:inline; padding-right:6px;"><span style="color: gray;">Title : </span>    <span class="product-title  cartTitle">${productTitle}</span></div>
      <div style="display:inline;padding-right:6px;"><span style="color:gray;">Price : &#8377;  </span> <span class="price cartPrice">${price}</span></div>
       <div style="display:inline;padding-right:6px;"><span style="color:gray;">Qty. : </span> <span class=" cartQuantity">${quantity}</span></div>
       <div style="display:inline;padding-right:6px;"><span style="color:gray;">Total &#8377; : </span>    <span class=" cartTotal">${price * quantity}</span></div>
       <div style="display:inline;padding-right:6px;"><span style="color:gray;">Product GST : &#8377;  </span>    <span class=" cartTotalGst">${price*quantity*13}</span></div>
</div>`;
    div.innerHTML = divContent;
    cartContainer.appendChild(div)
}



//  addToCart.onclick = function() {

//     let quantity;
//     let input = prompt("Please Enter the quantity of products","0");
//  if (isNaN(input)){
//      return false;
//      } else {
//         quantity = input;
//     }
//     document.getElementById("quantity").innerHTML = quantity;

// }

