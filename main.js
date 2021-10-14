let img= document.querySelector('img');
let button1= document.getElementById('btn1');
let button2= document.getElementById('btn2');
let button3= document.getElementById('btn3');

// function myFunc1() {
//     img.src= 'images/pic1.jpg'
// }
// function myFunc2() {
//     img.src= 'images/pic2.jpg'
// }
// function myFunc3() {
//     img.src= 'images/pic3.jpg'
// }

// button1.addEventListener('click', myFunc1);
// button2.addEventListener('click', myFunc2);
// button3.addEventListener('click', myFunc3);
 button1.addEventListener('click', ()=>{
     img.src='images/pic1.jpg'
 })

 button2.addEventListener('click', ()=>{
    img.src='images/pic2.jpg'
})
button3.addEventListener('click', ()=>{
    img.src='images/pic3.jpg'
})


