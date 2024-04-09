let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#rest");
let res=document.querySelector(".msg");
let newgame=document.querySelector("#newgame");
let messagecontainer=document.querySelector(".msg-container");
let cnt=0;
const winarray=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [2,5,8],
    [1,4,7],
    [2,4,6],    
];
let turn0=true;
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(box.innerText==="O" || box.innerText==="X"){
            alert("This box is already filled,Please choose another box");
        }
        else {
        if(turn0){
            box.innerText="O";
            box.style.color="fuchsia";
        }
        else {
            box.innerText="X";
            box.style.color="orangered";
        }
        turn0=1-turn0;
        cnt++;
        if(cnt==9)
        {
            nullbox();
            res.innerText=`The game is drawn`;
            messagecontainer.classList.remove("hide");
            reset.classList.add("hidden");
        }
    }
    checkwinner();
    }); 
});
const enbox = () => {
turn0=true;
for(let b of boxes){
    b.disabled=false;
    b.innerText="";
}
messagecontainer.classList.add("hide");
reset.classList.remove("hidden");
}
const nullbox = () => {
    for(let b of boxes){
        b.disabled=true;
    }
}
const showwinner =(evt) => {
nullbox();
res.innerText=`The player '${evt}' Wins`;
messagecontainer.classList.remove("hide");
reset.classList.add("hidden");
}
const checkwinner = () => {
    for(let x of winarray){
        let pos1=boxes[x[0]].innerText;
        let pos2=boxes[x[1]].innerText;
        let pos3=boxes[x[2]].innerText;
        if(pos1 !="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                res.innerText=res.innerText+pos1;
                showwinner(pos1);
                cnt=0;
            }
        }
    }
}
newgame.addEventListener("click",enbox);
reset.addEventListener("click",enbox);