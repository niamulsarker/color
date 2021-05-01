const colors = ["red","blue","green","orange","purple","aqua","yellow","violet"];

const container = document.querySelector('#container');
const heading = document.querySelector('#heading');
const selectColor = document.querySelector('#selectColor');


for (let color of colors){
   const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
    box.style.backgroundColor = color;
    box.addEventListener('click', function(){
         heading.innerText = 'Your Selected Color:';
         selectColor.style.backgroundColor = box.style.backgroundColor;
         selectColor.innerText = box.style.backgroundColor;
         selectColor.style.padding = '10px';



    } )
}
