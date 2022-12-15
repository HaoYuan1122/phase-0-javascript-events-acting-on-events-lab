// Your code here
// document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowLeft") {
//       moveDodgerLeft();
//     }else if(e.key === "ArrowRight"){
//         moveDodgerRight();
//     }
//   });


//   function moveDodgerLeft() {
//     const leftNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumbers, 10);

//     if (left > 0) {
//       dodger.style.left = `${left - 1}px`;
//     }
//   }

// function moveDodgerRight(){
//     const leftNumbers = dodger.style.left.replace("px","");
//     const left = parseInt(leftNumbers,10);
//     if(left<360){
//         dodger.style.left=`${left+1}px`
//     }
// }



const dodger = document.getElementById("dodger")
dodger.style.backgroundColor = 'pink'
document.addEventListener('keydown', move)
function move(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft()

    }

    else if (e.key === "ArrowRight") {

    }
}
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "")
    const left = parseInt(leftNumbers, 10)
    if (left > 0) {
        dodger.style.left = `${left - 1}px`
    }
}
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "")
    const left = parseInt(leftNumbers, 10)
    if (left < 360)
        dodger.style.left = `${left + 1}px`
}