let boxes = document.querySelectorAll(".box");
let resetGamebtn = document.querySelector(".reset");
let turnplayer = true;
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let msgContainerh = document.querySelector(".hide")
let newBtn = document.querySelector(".newbtn");

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];


const checkWinner = () => {
    for(let pattern of winPatterns){
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;

        if(posval1 !="" && posval2 !="" && posval3 !=""){
            if(posval1 === posval2 && posval2=== posval3){
                showWinner(posval1);
                disabledBoxes();
            };
        };
    };
    
};
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turnplayer){
            box.innerText = "o"
            turnplayer = false;
            box.style.color = "#0066F6";
        }else{
            box.innerText = "x";
            turnplayer = true;
            box.style.color = "#ED0008";

        }
        box.disabled = true;
        checkWinner();
    })
});

const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enabledBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        // msgContainer.classList.add("hide")
        msgContainerh.style.display = "none";
    }
}
const resetGame = () => {
    turnplayer = true;
    enabledBoxes();
    
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations The winner is : ${winner}`;
    // msgContainer.classList.remove("hide");
    msgContainer.style.display = "block";

}


newBtn.addEventListener("click", resetGame);
resetGamebtn.addEventListener("click", resetGame);


