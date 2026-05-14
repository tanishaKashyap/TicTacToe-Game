let boxes = document.querySelectorAll(".box");
let msg = document.querySelector("#msg");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let turnO = true;
let count = 0;
let winner = "";
let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

for(let box of boxes){
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            box.classList.add("red");
            box.classList.remove("blue");
            turnO = false;
        } else{
            box.innerText = "X";
            box.classList.add("blue");
            box.classList.remove("red");
            turnO = true;
        }
        box.disabled = true;
        count++;
        checkWinner();
    })
}

function checkWinner(){
    for(let pattern of winPatterns){
        let firstVal = boxes[pattern[0]].innerText;
        let secondVal = boxes[pattern[1]].innerText;
        let thirdVal = boxes[pattern[2]].innerText;

        if(firstVal != "" && secondVal != "" && thirdVal != ""){
            if(firstVal == secondVal && secondVal == thirdVal){
                for(box of boxes){
                    box.disabled = true;
                }
                winner = firstVal;
                showWinner(winner);
            }
            else if(count == 9 && winner == ""){
                msg.innerText = "It's a Tie";
                msgContainer.classList.remove("hide");
                msgContainer.classList.add("unhide");
            }
        }
    }
}

function showWinner(winner){
    msg.innerText = `Winner ${winner}`;
    msgContainer.classList.remove("hide");
    msgContainer.classList.add("unhide");
}

function resetGame(){
    turnO = true;
    winner = "";
    count = 0;
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    msgContainer.classList.add("hide");
    msgContainer.classList.remove("unhide");
}

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);