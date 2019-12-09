const buttons = document.getElementsByTagName('button');
const container = document.getElementById('container');

for(let i =0; i<button.length;i++) {
    button[i].addEventListerer("click",function changrText(){
        container.innerText = button[i].dataset.text;
    });
}