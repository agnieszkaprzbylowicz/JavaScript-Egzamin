//Zadanie 4

//Punkt 1

const Test = document.getElementsByClassName("sample_class");

function getTagsofElements(kwadrat){
    let arr1 = [];

    for(let i = 0; i< kwadrat.length; i++)
        Array.push(kwadrat[i].tagName);
    
    return arr1;
}

console.log(getTagsofElements(Test));

//Punkt 2

const Test = document.getElementById("sample_id");

function getClassesOfElement(kolo) {
    let arr2 = [];

    arra2 = kolo.className.split(" ");
    return arr2;
}
console.log(getClassesOfElement(Test));

//Punkt 3

const Test3 = document.gestElementsByClassName("sample_class_3");
const eli = arrclass[0];
const el1ul = el1.children[0];
const el1li = eliu1.children;

function getInnerTextOfElements(kolo){
    let arr3 = [];

    for(let i=0; i<kolo.length; i++)
    arr3.push(kolo[i].innerText);

    return arr3;
}
console.log(getInnerTextOfElements(el1li));


//Punkt 4

const links = document.querySelectorAll("a");
function getAddressesOfElement(nazwa){
    let arr4 = [];
    
    for(let i=0; i<nazwa.length; i++)
    arr4.push(nazwa[i].getAtribute("href"));

    arr4.forEach(nazwa => {
        if(nazwa == null)
        arr4.pop(nazwa); 
    });
    return arr4;
}
    console.log(getAddressesOfElement(links));

    //Punkt 5

    const Par = document.getElementsByClassName("sample_class_3")
    const Par1 = Par[0];
    const Par1chl = par1.children;
    
    console.log(getTagsofElements(Par1chl))




