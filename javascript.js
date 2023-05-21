let search = document.querySelector('.search-box');
document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    cart.classList.remove('active');
    userIcon.classList.remove('active');
    navbar.classList.remove('active');
    
}
let cart = document.querySelector('.cart');
document.querySelector('#cart-icon').onclick = () => {
    cart.classList.toggle('active');
    search.classList.remove('active');
    userIcon.classList.remove('active');
     navbar.classList.remove('active');
   
}

let userIcon = document.querySelector('.user');
document.querySelector('#user-icon').onclick = () =>{
 userIcon.classList.toggle('active')
    search.classList.remove('active');
    cart.classList.remove('active');
     navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick = () =>{
  navbar.classList.remove('active');
  userIcon.classList.remove('active');
  search.classList.remove('active');
  cart.classList.remove('active');
  
}
function monHeader(){
  let btn = document.querySelector('.bx-menu');
  let headers = document.querySelector('.header')
  let links = document.querySelectorAll('.navbar a')
  btn.addEventListener('click', () =>{
  headers.classList.toggle('show-nav');
  })
  links.forEach('link', () => {
    link.addEventListener('click', () =>{
      headers.classList.remove('show-nav');
      })
  })
}
monHeader();

//  working js
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
}else{
  ready()
}
//  making function
function ready (){
let removeCartButtons = document.getElementsByClassName('cart-remove')
console.log(removeCartButtons);
for (let i = 0; i < removeCartButtons.length; i++) {
  const button = removeCartButtons[i];
  button.addEventListener('click',removeCartItem)
}

var quantityInput = document.getElementsByClassName('cart-quantity')
for (let i = 0; i < quantityInput.length; i++) {
  const input = quantityInput[i];
  input.addEventListener('change', quantityChanged)
  
}
}
function removeCartItem(event){
let buttonClicked = event.target;
buttonClicked.parentElement.remove();
updatetotal()
}

function quantityChanged(event) {
  var input = event.target;
 if (isNaN(input.value) || input.value <= 0 ){
  input.value = 1
 }
 updatetotal()
}
//  update total
function updatetotal() {
  var cartContent = document.getElementsByClassName('cart-content')[0];
  var cartBoxes = cartContent.getElementsByClassName('cart-box')
  for (let i = 0; i < cartBoxes.length; i++) {
    let cartBoxe = cartBoxes[i];
    var priceElement = cartBoxe.getElementsByClassName('cart-price')[0]
    var quantityElement = cartBoxe.getElementsByClassName('cart-quantity')[0]
    var price = parseFloat(priceElement.innerText.replace('$', ''))
    var quantity = quantityElement.value
  total = total + (price*quantity);
  document.getElementsByClassName('total-price')[0].innerText = '$' + total
  }
}
updatetotal()








let slides = document.querySelectorAll('.product-container')
let index = 0;
function next(){
  slides[index].classList.remove('active')
  index = (index + 1 ) % slides.length;
  slides[index].classList.add('active');
}


function prev(){
  slides[index].classList.remove('active')
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}