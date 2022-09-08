
let myView = document.getElementById('view');
console.log(myView)

let myButtons = Array.from(document.getElementsByClassName('button-container'));
myButtons.map(element => {
    element.addEventListener('click',(e)=>{
        console.log(e.target)
        console.log(e.target.textContent)
        /*console.log(element.innerHTML)
        console.log(element.textContent)
        console.log(element.innerText)*/
        //myView.textContent+=e.target.textContent
        switch(e.target.innerText){
            case 'C':
                myView.innerText='0';
                break
            case 'Del':
                myView.innerText=myView.innerText.slice(0,-1); 
                break 
            case '=' :
                myView.innerText=eval(myView.innerText);
                break
            default:
                myView.innerText+=e.target.innerText
        }
    } );
})

/*Test Run
let arr=[2,3,4,5,6];
console.log(arr.slice(0,3))*/
