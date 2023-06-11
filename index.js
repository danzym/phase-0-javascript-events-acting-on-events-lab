// Your code here
let dodger;
function moveDodgerLeft() {
  let currentPosition = parseInt(dodger.style.left) || 0;
  let newPosition = currentPosition - 1;
  dodger.style.left = `${newPosition}px`;
}

function moveDodgerRight() {
  let currentPosition = parseInt(dodger.style.left) || 0;
  let newPosition = currentPosition + 1;
  dodger.style.left = `${newPosition}px`;
}
